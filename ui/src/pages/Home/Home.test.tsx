import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import { PhoneBookContextProvider } from "../../state/Context";
import HomePage from ".";
import graphQLMocks from "./__mocks__/graphqlMocks";

const renderPage = () =>
  render(
    <PhoneBookContextProvider>
      <MockedProvider mocks={graphQLMocks} addTypename={false}>
        <HomePage />
      </MockedProvider>
    </PhoneBookContextProvider>
  );

/* Test helpers */
const getLoading = () => screen.getByText(/Loading.../i);
const getSearchInput = () =>
  screen.getByTestId("search-input").querySelector("input");
const getContacts = () => screen.getAllByRole("row", { name: "contact-item" });

describe("Home page tests", () => {
  beforeEach(async () => {
    renderPage();
    await waitForElementToBeRemoved(getLoading());
  });
  it("should show 4 contacts", () => {
    expect(getContacts()).toHaveLength(4);
  });
  it("should show Eric Elliot contact after search Elliot", async () => {
    fireEvent.change(getSearchInput() as HTMLInputElement, {
      target: { value: "Elliot" },
    });
    fireEvent.click(screen.getByTestId("search-icon"));
    await waitForElementToBeRemoved(getLoading());
    expect(getContacts()).toHaveLength(1);
    expect(screen.getByText(/Eric Elliot/i)).toBeInTheDocument();
    expect(screen.getByText(/222-111-444/)).toBeInTheDocument();
  });
  it("should add contact successfully", async () => {
    fireEvent.click(screen.getByText(/Add Contact/i));
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getAllByLabelText(/Last Name/i)[1], {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "555-555-5555" },
    });
    fireEvent.click(screen.getByText(/Create contact/i));
    await waitFor(() => {
      expect(
        screen.getByText(/Contact created correctly!/i)
      ).toBeInTheDocument();
    });
  });
  it("should update contact successfully", async () => {
    fireEvent.click(getContacts()[0]);
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getAllByLabelText(/Last Name/i)[1], {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "555-555-5555" },
    });
    fireEvent.click(screen.getAllByText(/Edit contact/i)[1]);
    await waitFor(() => {
      expect(
        screen.getByText(/Contact updated correctly!/i)
      ).toBeInTheDocument();
    });
  });
});

export {};
