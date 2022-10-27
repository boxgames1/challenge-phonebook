import { createContext, ReactNode, useState } from "react";
import { Contact } from "./type/Contact";

export interface PhoneBookContextData {
  contacts: Contact[];
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  setContacts: (contacts: Contact[]) => void;
}

export const postsContextDefaultValue: PhoneBookContextData = {
  contacts: [],
  searchQuery: "",
  setSearchQuery: () => {},
  setContacts: () => {},
};

export const PhoneBookContext = createContext<PhoneBookContextData>(
  postsContextDefaultValue
);

type PhoneBookContextProviderProps = {
  children: ReactNode;
};

export const PhoneBookContextProvider = ({
  children,
}: PhoneBookContextProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <PhoneBookContext.Provider
      value={{
        contacts,
        searchQuery,
        setSearchQuery,
        setContacts,
      }}
    >
      {children}
    </PhoneBookContext.Provider>
  );
};
