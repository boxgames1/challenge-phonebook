import { gql } from "@apollo/client";

export const CREATE_CONTACT_MUTATION = gql`
  mutation ($contact: ContactInput) {
    createContact(contact: $contact) {
      id
    }
  }
`;

export const DELETE_CONTACT_MUTATION = gql`
  mutation ($id: ID!) {
    deleteContact(id: $id)
  }
`;

export const UPDATE_CONTACT_MUTATION = gql`
  mutation ($id: ID!, $contact: ContactInput) {
    updateContact(id: $id, contact: $contact) {
      id
    }
  }
`;
