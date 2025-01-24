import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './HeaderNew.css';
import logo from './Images/Altria-logo.png';
import { Box, Menu, MenuItem, Typography, Avatar, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const demoSession = {
    user: {
      name: 'Username',
      role: 'Administrator',
      email: 'bharatkashyap@outlook.com',
    },
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    alert('Signed out successfully');
    handleMenuClose();
    navigate("/LoginPage"); // Navigate to the login page
  };

  return (
    <div className="header">
      {/* Logo Section */}
      <div className="logo-section">
        <img src={logo} alt="Altria Logo" className="landing-logo" />
        <div className="divider"></div>
        <span className="text">SNOW BRIDGE</span>
      </div>

      {/* Account Section */}
      <div className="account-section">
        <IconButton onClick={handleMenuOpen} sx={{ color: '##B2BEB5' }}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ mt: 1 }}
        >
          <Box sx={{ padding: '10px 40px' }}>
            <Avatar sx={{ width: 50, height: 50, mb: 1, bgcolor: '#007BFF' }}>
              {demoSession.user.name.charAt(0)}
            </Avatar>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {demoSession.user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {demoSession.user.role}
            </Typography>
          </Box>
          <MenuItem onClick={handleSignOut} className="logout-option">
            Sign Out
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
