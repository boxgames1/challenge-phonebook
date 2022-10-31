import { gql } from "@apollo/client";

export const GET_CONTACTS_BY_LAST_NAME = gql`
  query GetContact($lastName: String) {
    getContactsByLastName(lastName: $lastName) {
      firstName
      id
      lastName
      phoneNumber
    }
  }
`;
