import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import HeaderWithButton from '../Components/Header_with_Button';
import UserUpdateFailSuccess from '../Components/UserUpdateFailSussces'; // Import the new component

const UpdateUserDetails = () => {
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    role: '',
    password: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true); // true for success, false for failure

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleUpdateClick = () => {
    // Randomize success or failure
    const success = Math.random() > 0.5;
    setIsSuccess(success);
    setPopupMessage(success ? 'User update successful!' : 'User update failed!');
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Full viewport height
          backgroundColor: '#f5f5f5',
        }}
      >
        <Box
          sx={{
            padding: 2,
            maxWidth: 800, // Increased width of the form
            backgroundColor: 'white',
            borderRadius: 2,
            boxShadow: 3,
            position: 'relative', // Positioning context for buttons
          }}
        >
          <Typography variant="h5" gutterBottom>
            Update User Details
          </Typography>
          <TextField
            label="Username"
            name="username"
            value={userDetails.username}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={userDetails.email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Role"
            name="role"
            value={userDetails.role}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={userDetails.password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />

          {/* Buttons inside the form */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 2,
              marginTop: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: '100px', // Fixed width to match both buttons
                backgroundColor: 'blue',
                color: 'white',
              }}
              href="./ProjectViewPage"
            >
              BACK
            </Button>
            <Button
              variant="contained"
              sx={{
                width: '100px', // Fixed width to match both buttons
                backgroundColor: 'white',
                color: 'blue',
                border: '1px solid blue',
              }}
              onClick={handleUpdateClick}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Show pop-up on update */}
      {showPopup && (
        <UserUpdateFailSuccess
          message={popupMessage}
          isSuccess={isSuccess}
          onClose={handleClosePopup}
          href = "./ProjectViewPage" // Add link to OKAY button
        />
      )}
    </>
  );
};

export default UpdateUserDetails;
