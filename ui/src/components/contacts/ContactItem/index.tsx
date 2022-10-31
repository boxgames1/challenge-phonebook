import { Contact } from "../../../type/Contact";
import DeleteIcon from "@material-ui/icons/Delete";
import * as S from "./styles";
import { Button, Typography } from "@material-ui/core";

type ContactItemProps = {
  contact: Contact;
  onDeleteContact: (id: string) => void;
  onEditContact: (contact: Contact) => void;
};

const ContactItem = ({
  contact,
  onDeleteContact,
  onEditContact,
}: ContactItemProps) => {
  return (
    <S.Root
      onClick={() => onEditContact(contact)}
      role="row"
      aria-label="contact-item"
    >
      <S.InfoContainer>
        <Typography variant="body1">
          {contact.firstName} {contact.lastName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          📞 {contact.phoneNumber}
        </Typography>
      </S.InfoContainer>
      <S.ActionsContainer>
        <Button
          aria-label="delete-contact"
          variant="contained"
          endIcon={<DeleteIcon />}
          onClick={(event) => {
            event.stopPropagation();
            onDeleteContact(contact.id);
          }}
        >
          Delete
        </Button>
      </S.ActionsContainer>
    </S.Root>
  );
};

export default ContactItem;
