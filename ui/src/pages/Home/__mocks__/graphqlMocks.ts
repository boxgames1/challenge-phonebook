import { GET_CONTACTS_BY_LAST_NAME } from "../../../infrastructure/queries";
import {
  CREATE_CONTACT_MUTATION,
  DELETE_CONTACT_MUTATION,
  UPDATE_CONTACT_MUTATION,
} from "../../../infrastructure/mutations";

import elliotSearchResults from "./elliotSearchResults.json";
import noSearchResults from "./noSearchResults.json";

const graphQLMocks = [
  {
    request: {
      query: GET_CONTACTS_BY_LAST_NAME,
      variables: {
        lastName: "",
      },
    },
    result: {
      data: noSearchResults,
    },
  },
  {
    request: {
      query: GET_CONTACTS_BY_LAST_NAME,
      variables: {
        lastName: "Elliot",
      },
    },
    result: {
      data: elliotSearchResults,
    },
  },
  {
    request: {
      query: CREATE_CONTACT_MUTATION,
      variables: {
        contact: {
          firstName: "John",
          lastName: "Doe",
          phoneNumber: "555-555-5555",
        },
      },
    },
    result: {
      data: {
        id: "new-contact-id",
      },
    },
  },
  {
    request: {
      query: DELETE_CONTACT_MUTATION,
      variables: {
        id: "cl9r4gc5c00003ozacpx9ii4a",
      },
    },
  },
  {
    request: {
      query: UPDATE_CONTACT_MUTATION,
      variables: {
        id: "cl9r4gc5c00003ozacpx9ii4a",
        contact: {
          firstName: "John",
          lastName: "Doe",
          phoneNumber: "555-555-5555",
        },
      },
    },
    result: {
      data: {
        id: "cl9r4gc5c00003ozacpx9ii4a",
      },
    },
  },
];

export default graphQLMocks;
