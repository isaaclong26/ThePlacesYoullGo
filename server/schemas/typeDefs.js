const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type City {
    cityId: String
    city: String!
    country: String
    population: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveCity(city: [String], country: String, population: String): User
  }
`;



module.exports = typeDefs;