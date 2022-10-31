import { Button, Modal, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

import { Contact, InputContact } from "../../../type/Contact";

import * as S from "./styles";

type EditContactModalProps = {
  onEditContact: (id: string, contact: InputContact) => void;
  contact: Contact;
  open: boolean;
  closeModal: () => void;
};

const EditContactModal = ({
  onEditContact,
  closeModal,
  open,
  contact,
}: EditContactModalProps) => {
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);

  const handleEditContact = () => {
    onEditContact(contact.id, {
      firstName,
      lastName,
      phoneNumber,
    });
  };
  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="edit-contact-modal"
    >
      <S.ModalBox>
        <Typography variant="h5">Edit Contact</Typography>
        <TextField
          id="edit-contact-firstName"
          label="First name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          id="edit-contact-lastName"
          label="Last name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          id="edit-contact-phoneNumber"
          label="Phone Number"
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <S.ButtonsContainer>
          <Button
            onClick={handleEditContact}
            variant="contained"
            color="primary"
          >
            Edit contact
          </Button>
          <Button onClick={closeModal} variant="contained" color="secondary">
            Close
          </Button>
        </S.ButtonsContainer>
      </S.ModalBox>
    </Modal>
  );
};

export default EditContactModal;
