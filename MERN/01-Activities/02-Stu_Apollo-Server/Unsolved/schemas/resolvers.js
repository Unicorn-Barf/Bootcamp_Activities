const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// To define graphQL queries/mutations resolvers object
// What to use when getting data from the server, like controllers
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // Find and return all documents from the Class collection
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
