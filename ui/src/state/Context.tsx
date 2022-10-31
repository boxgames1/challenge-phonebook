import { createContext, ReactNode, useContext, useState } from "react";

export interface PhoneBookContextData {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

export const postsContextDefaultValue: PhoneBookContextData = {
  searchQuery: "",
  setSearchQuery: () => {},
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
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <PhoneBookContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PhoneBookContext.Provider>
  );
};

export const usePhoneBookContext = () => {
  const context = useContext(PhoneBookContext);
  if (context === undefined) {
    throw new Error(
      "usePhoneBookContext must be used within a PhoneBookContextProvider"
    );
  }
  return context;
};
