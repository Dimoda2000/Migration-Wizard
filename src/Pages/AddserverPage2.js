import React, { useState } from 'react';
import MainTab from '../Components/MainTab'; // Ensure the correct path
import { Button, Autocomplete, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify'; // Correct toastify imports
import 'react-toastify/dist/ReactToastify.css'; // Correct toastify CSS import
import UserAccountTab from '../Components/UserAccountTab'

const AddserverPage2 = () => {
  const [selectedServer, setSelectedServer] = useState(null);
  const [selectedDatabase, setSelectedDatabase] = useState(null);
  const [selectedSchemaType, setSelectedSchemaType] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [newServerDetails, setNewServerDetails] = useState({
    serverName: '',
    userName: '',
    password: '',
    serverNickName: ''
  });
  const [serversData, setServersData] = useState({
    // Initial server data
    Server1: ['DB1', 'DB2'],
    Server2: ['DB3', 'DB4'],
  });

  const availableDatabases = selectedServer ? serversData[selectedServer] : [];

  const handleAddServerClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCreateServer = () => {
    const { serverName, userName, password, serverNickName } = newServerDetails;

    if (!serverName || !userName || !password || !serverNickName) {
      toast.error('Server adding failed');
    } else {
      // Update the state to include the new server
      setServersData((prevServersData) => ({
        ...prevServersData,
        [serverName]: [] // Adding the new server with an empty database list
      }));

      toast.success('Server added successfully');
      setOpenDialog(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewServerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleConnect = () => {
    toast.info('Connect functionality is not yet implemented.'); // Placeholder action
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <MainTab />

      {/* ADD NEW SERVER Button */}
      <Button
        variant="contained"
        style={{
          position: 'absolute',
          top: '80px', // Adjust the position to be just below the MainTab
          right: '20px', // Move to the right side
          backgroundColor: '#1976d2', // Blue color
          color: 'white',
          padding: '10px 20px',
        }}
        onClick={handleAddServerClick}
      >
        ADD NEW SERVER
      </Button>

      {/* Server Selector */}
      <Autocomplete
        options={Object.keys(serversData)} // Dynamic list of servers
        value={selectedServer}
        onChange={(event, newValue) => {
          setSelectedServer(newValue);
          setSelectedDatabase(null);
          setSelectedSchemaType(null);
          setSelectedItems([]);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Select Server" variant="outlined" />
        )}
        sx={{ mb: 3, maxWidth: 800 }}
      />

      {/* Database Selector */}
      {selectedServer && (
        <Autocomplete
          options={availableDatabases}
          value={selectedDatabase}
          onChange={(event, newValue) => {
            setSelectedDatabase(newValue);
            setSelectedSchemaType(null);
            setSelectedItems([]);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select Database" variant="outlined" />
          )}
          sx={{ mb: 3, maxWidth: 800 }}
        />
      )}

      {/* BACK and CONNECT Buttons */}
      <div style={{
        position: 'absolute',
        right: '20px',
        bottom: '20%',
        display: 'flex',
        gap: '10px',
      }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: '#1976d2', // Blue color
            color: 'white',
            padding: '10px 20px',
          }}
           href = "/ProjectViewPage"
        >
          BACK
        </Button>

        <Button
          variant="contained"
          style={{
            backgroundColor: '#4caf50', // Green color
            color: 'white',
            padding: '10px 20px',
          }}
          onClick={handleConnect}
          href = "/Table_Dashboard"
        >
          CONNECT
        </Button>
      </div>

      {/* Dialog for Adding New Server */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add New Server</DialogTitle>
        <DialogContent>
          <TextField
            label="Server Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="serverName"
            value={newServerDetails.serverName}
            onChange={handleChange}
          />
          <TextField
            label="User Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="userName"
            value={newServerDetails.userName}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            name="password"
            type="password"
            value={newServerDetails.password}
            onChange={handleChange}
          />
          <TextField
            label="Server Nick Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="serverNickName"
            value={newServerDetails.serverNickName}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" href = "/AddserverPage2">
            BACK
          </Button>
          <Button onClick={handleCreateServer} color="primary">
            CREATE
          </Button>
        </DialogActions>
      </Dialog>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default AddserverPage2;
