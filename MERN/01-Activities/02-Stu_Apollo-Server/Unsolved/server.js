const express = require('express');
// TODO: Add a comment describing the functionality of this expression
// requiring the necessary appollo server class to create and instance of an ApolloServer for using graphql
const { ApolloServer } = require('apollo-server-express');

// TODO: Add a comment describing the functionality of this expression
// Requiring the typedefs and resolvers for use when starting the apollo server
// So that ApolloServer knows how to build our API for GraphQL
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: Add a comment describing the functionality of this async function
// This sets up the apollo to use our graphql typedefs and resolvers
// Integrates it with our express server.
// Also starts the express server.
const startApolloServer = async (typeDefs, resolvers) => {
await server.start();
server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
})
};

// TODO: Add a comment describing this functionality
// calls the startApolloServer function with the necessary params
startApolloServer(typeDefs, resolvers);
