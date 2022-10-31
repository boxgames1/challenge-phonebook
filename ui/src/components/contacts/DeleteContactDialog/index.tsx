import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

type DeleteContactDialogProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const DeleteContactDialog = ({
  open,
  onClose,
  onSubmit,
}: DeleteContactDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-delete-contact"
    >
      <DialogTitle id="alert-dialog-delete-contact">
        Are you sure you want to delete this contact?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          This action cannot be undone. All data will be permanently deleted.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSubmit} autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteContactDialog;
