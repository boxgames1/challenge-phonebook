import { gql } from 'apollo-server'

export const contact = gql`
  type Contact {
    firstName: String
    lastName: String
    phoneNumber: String
    id: ID
  }
`
