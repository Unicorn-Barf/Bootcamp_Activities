const { gql } = require('apollo-server-express');

// using the gql function to define our type defs for graphQL
// These define how graphQL will accept data from queries

// We are defining the Class type to let graphql know
// what fields we can query for, when getting Class

// For the type Query, we are letting GraphQL know what queries are available for us
// to use when asking for data
const typeDefs = gql`
  # TODO: Add a comment describing the functionality of this statement
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
