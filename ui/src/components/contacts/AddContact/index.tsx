import { Box, Button, Modal, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { InputContact } from "../../../type/Contact";

import * as S from "./styles";

type AddContactProps = {
  onAddContact: (contact: InputContact) => void;
};

const AddContact = ({ onAddContact }: AddContactProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const closeModal = () => setOpenModal(false);
  const handleAddContact = () => {
    setOpenModal(false);
    onAddContact({
      firstName,
      lastName,
      phoneNumber,
    });
  };
  return (
    <S.Root>
      <Typography variant="h5">Contact</Typography>
      <Button
        onClick={() => setOpenModal(true)}
        variant="contained"
        color="primary"
      >
        + Add Contact
      </Button>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="add-contact-modal"
      >
        <S.ModalBox>
          <Typography variant="h5">Add Contact</Typography>
          <TextField
            id="add-contact-firstName"
            label="First name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="add-contact-lastName"
            label="Last name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="add-contact-phoneNumber"
            label="Phone Number"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <S.ButtonsContainer>
            <Button
              onClick={handleAddContact}
              variant="contained"
              color="primary"
            >
              Create contact
            </Button>
            <Button onClick={closeModal} variant="contained" color="secondary">
              Close
            </Button>
          </S.ButtonsContainer>
        </S.ModalBox>
      </Modal>
    </S.Root>
  );
};

export default AddContact;
