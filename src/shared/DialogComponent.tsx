import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import React from 'react';

export default function DialogComponent({
  isOpen,
  handleClose,
  title,
  body,
}: {
  isOpen: boolean;
  handleClose: Function;
  title?: string;
  body?: string;
}) {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => handleClose()}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{body}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => handleClose()} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
