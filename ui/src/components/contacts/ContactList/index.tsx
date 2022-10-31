import { Contact } from "../../../type/Contact";
import ContactItem from "../ContactItem";

import * as S from "./styles";

type ContactListProps = {
  contacts: Contact[];
  onDeleteContact: (id: string) => void;
  onEditContact: (contact: Contact) => void;
};

const ContactList = ({
  contacts,
  onDeleteContact,
  onEditContact,
}: ContactListProps) => {
  return (
    <S.Root>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
          onEditContact={onEditContact}
        />
      ))}
    </S.Root>
  );
};

export default ContactList;
