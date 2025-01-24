import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Update2_Successful_Fail = () => {
  const [open, setOpen] = useState(true); // Set the dialog to open initially

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  return (
   
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CheckCircleOutlineIcon color="success" />
          
          Update Successful
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ textAlign: "center" }}>
          <Typography variant="body1">Your update was processed successfully.</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button  variant="contained" color="primary" href = "./CodeView">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Update2_Successful_Fail;
