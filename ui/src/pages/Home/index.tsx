import { useMutation, useQuery } from "@apollo/client";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@mui/material";
import React, { useState } from "react";
import AddContact from "../../components/contacts/AddContact";
import ContactList from "../../components/contacts/ContactList";
import DeleteContactDialog from "../../components/contacts/DeleteContactDialog";
import EditContactModal from "../../components/contacts/EditContactModal";
import Search from "../../components/contacts/Search";
import QueryResult from "../../components/shared/QueryResult";
import {
  CREATE_CONTACT_MUTATION,
  DELETE_CONTACT_MUTATION,
  UPDATE_CONTACT_MUTATION,
} from "../../infrastructure/mutations";
import { GET_CONTACTS_BY_LAST_NAME } from "../../infrastructure/queries";
import { usePhoneBookContext } from "../../state/Context";
import { Contact, InputContact } from "../../type/Contact";
import * as S from "./styles";

const Home = () => {
  const { searchQuery, setSearchQuery } = usePhoneBookContext();
  const [showCreateToast, setShowCreateToast] = useState(false);
  const [snackbarAction, setSnackbarAction] = useState<
    "created" | "deleted" | "updated"
  >();
  const [selectedContactIdToDelete, setSelectedContactIdToDelete] =
    useState<string>();
  const [selectedContactToEdit, setSelectedContactIdToEdit] =
    useState<Contact>();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);

  const {
    data: contactsData,
    loading: contactsLoading,
    error: contactsError,
    refetch: refetchContacts,
  } = useQuery(GET_CONTACTS_BY_LAST_NAME, {
    variables: { lastName: searchQuery },
  });

  const [
    createContact,
    { loading: createdContactLoading, error: createdContactError },
  ] = useMutation(CREATE_CONTACT_MUTATION);

  const [
    deleteContact,
    { loading: deletedContactLoading, error: deletedContactError },
  ] = useMutation(DELETE_CONTACT_MUTATION);

  const [
    editContact,
    { loading: editContactLoading, error: editContactError },
  ] = useMutation(UPDATE_CONTACT_MUTATION);

  const handleDeleteContact = (id: string) => {
    setSelectedContactIdToDelete(id);
    setShowDeleteDialog(true);
  };
  const handleCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
  };
  const handleCloseEditDialog = () => {
    setShowEditDialog(false);
  };
  const handleEditContact = (contact: Contact) => {
    setSelectedContactIdToEdit(contact);
    setShowEditDialog(true);
  };
  /* GRAPHQL HANDLERS */
  const handleAddContact = async (contact: InputContact) => {
    try {
      setShowCreateToast(false);
      await createContact({
        variables: {
          contact,
        },
      });
      setSnackbarAction("created");
      setShowCreateToast(true);
      await refetchContacts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmDeleteContactDialog = async () => {
    try {
      handleCloseDeleteDialog();
      setShowCreateToast(false);
      await deleteContact({
        variables: {
          id: selectedContactIdToDelete,
        },
      });
      setSnackbarAction("deleted");
      setShowCreateToast(true);
      await refetchContacts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitEditContact = async (id: string, contact: InputContact) => {
    try {
      handleCloseEditDialog();
      setShowCreateToast(false);
      await editContact({
        variables: {
          contact,
          id,
        },
      });
      setSnackbarAction("updated");
      setShowCreateToast(true);
      await refetchContacts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <QueryResult
      data={contactsData}
      error={
        createdContactError ||
        contactsError ||
        deletedContactError ||
        editContactError
      }
      loading={
        createdContactLoading ||
        contactsLoading ||
        deletedContactLoading ||
        editContactLoading
      }
    >
      <S.Root>
        <AddContact onAddContact={handleAddContact} />
        <Search
          label="Search by last name"
          onSearch={setSearchQuery}
          searchQuery={searchQuery}
        />
        {contactsData?.getContactsByLastName.length > 0 && (
          <ContactList
            contacts={contactsData?.getContactsByLastName}
            onDeleteContact={handleDeleteContact}
            onEditContact={handleEditContact}
          />
        )}
      </S.Root>
      {selectedContactToEdit && (
        <EditContactModal
          open={showEditDialog}
          closeModal={handleCloseEditDialog}
          onEditContact={handleSubmitEditContact}
          contact={selectedContactToEdit}
        />
      )}
      <Snackbar
        open={showCreateToast}
        autoHideDuration={6000}
        onClose={() => setShowCreateToast(false)}
      >
        <Alert
          onClose={() => setShowCreateToast(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {`Contact ${snackbarAction} correctly!`}
        </Alert>
      </Snackbar>
      <DeleteContactDialog
        onClose={handleCloseDeleteDialog}
        onSubmit={handleConfirmDeleteContactDialog}
        open={showDeleteDialog}
      />
    </QueryResult>
  );
};

export default Home;
