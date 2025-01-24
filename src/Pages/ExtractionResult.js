import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import HeaderWithButton from '../Components/Header_with_Button';
import { TextField, Button, Typography, Tabs, Tab, Box } from '@mui/material';
import User_Extraction_Completed from '../Components/User_Extraction_Completed';
import User_Extraction_Fail from '../Components/User_Extraction_Fail';

function ExtractionResult() {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate(); // Initialize navigate

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const styles = {
    buttonContainer: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      gap: '10px',
    },
    button: {
      padding: '10px 30px',
      borderRadius: '5px',
      fontSize: '14px',
      cursor: 'pointer',
      width: '150px',
      fontWeight: 'bold',
    },
    backButton: {
      backgroundColor: 'white',
      border: '2px solid blue',
      color: 'blue',
    },
    startButton: {
      backgroundColor: 'blue',
      border: 'none',
      color: 'white',
    },
    previewButton: {
      backgroundColor: 'blue',
      color: 'white',
      fontWeight: 'bold',
      padding: '10px 30px',
      borderRadius: '5px',
      height: '40px',
    },
    textFieldContainer: {
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      display: 'flex',
      flexDirection: 'column',
    },
    topic: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '5px',
      textAlign: 'left',
      marginLeft: '0',
    },
    textFieldWrapper: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
    },
    textField: {
      width: '400px',
      backgroundColor: '#f5f5f5',
      borderRadius: '5px',
    },
    tabsContainer: {
      margin: '20px 0',
      borderBottom: '1px solid #ccc',
    },
    tabPanel: {
      padding: '10px 0',
    },
    componentContainer: {
      margin: '20px 0',
    },
  };

  return (
    <>
      {/* <HeaderWithButton /> */}
      <Box style={styles.tabsContainer}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="Extraction Tabs"
        >
          <Tab label="Extraction Completed" />
          <Tab label="Extraction Failed" />
        </Tabs>
      </Box>
      <Box style={styles.componentContainer}>
        {selectedTab === 0 && (
          <div>
            <Typography variant="h6"></Typography>
            <User_Extraction_Completed />
          </div>
        )}
        {selectedTab === 1 && (
          <div>
            <Typography variant="h6"></Typography>
            <User_Extraction_Fail />
          </div>
        )}
      </Box>
      <div style={styles.textFieldContainer}>
        <Box
          sx={{
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#ffffff',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography style={styles.topic}>Add Files :</Typography>
          <div style={styles.textFieldWrapper}>
            <TextField
              variant="outlined"
              size="small"
              style={styles.textField}
            />
            <Button style={styles.previewButton}>UPLOAD</Button>
          </div>
        </Box>
      </div>
      <div style={styles.buttonContainer}>
        <button
          style={{ ...styles.button, ...styles.backButton }}
          onClick={() => navigate('/ExtractionProgressPage')} // Navigate to ExtractionProgressPage
        >
          BACK
        </button>
        <button
          style={{ ...styles.button, ...styles.startButton }}
          onClick={() => navigate('/ConversionPage')} // Navigate to ConversionPage
        >
          START
        </button>
      </div>
    </>
  );
}

export default ExtractionResult;
