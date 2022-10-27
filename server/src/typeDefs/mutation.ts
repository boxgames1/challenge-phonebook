import { gql } from 'apollo-server'

export const mutation = gql`
  input ContactInput {
    firstName: String!
    lastName: String!
    phoneNumber: String!
  }

  type Mutation {
    createContact(contact: ContactInput): Contact!
    updateContact(id: ID!, contact: ContactInput): Contact!
    deleteContact(id: ID!): Boolean!
  }
`
