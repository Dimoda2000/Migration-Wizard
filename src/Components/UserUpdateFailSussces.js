import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const UserUpdateFailSuccess = ({ message, isSuccess, onClose }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        width: 300,
        textAlign: 'center',
      }}
    >
      {isSuccess ? (
        <CheckCircleIcon sx={{ color: 'green', fontSize: 50 }} />
      ) : (
        <CancelIcon sx={{ color: 'red', fontSize: 50 }} />
      )}
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {message}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onClose}
        sx={{ marginTop: 2 }}
      >
        OKAY
      </Button>
    </Box>
  );
};

export default UserUpdateFailSuccess;
