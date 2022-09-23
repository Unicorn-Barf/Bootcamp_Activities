const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // TODO: Add comments to each line of code below to describe the functionality below
    addUser: async (parent, args) => {
      // First we creaste a new user
      const user = await User.create(args);
      // We use our signToken function to create a token for the new user
      // This uses Jason Web Token to create an encoded token
      const token = signToken(user);
      // Returns the token and the new User to the the front end
      return { token, user };
    },
    // TODO: Add comments to each line of code below to describe the functionality below
    // Login mutation
    login: async (parent, { email, password }) => {
      // Finding a user by email
      const user = await User.findOne({ email });
      // Checks to see if user exists, throws error if not (apollo server auth err)
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      // Uses the user instance method to check password with bcrypt
      const correctPw = await user.isCorrectPassword(password);
      // Throws error if pass is not correct
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // Creates a token with this user to log them in
      const token = signToken(user);
      // Returns the token and the user to the front end
      return { token, user };
    },
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
