import { gql } from 'apollo-server'

export const query = gql`
  type Query {
    getContacts: [Contact]
    getContactsByLastName(lastName: String!): [Contact]
  }
`
