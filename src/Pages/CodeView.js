import React, { useState } from 'react';
import {
  Autocomplete,
  TextField,
  Button,
  useTheme,
} from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const tableNames = ['Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5'];
// const viewNames = ['View 1', 'View 2', 'View 3', 'View 4', 'View 5'];
// const procedureNames = [
//   'Store Procedure 1',
//   'Store Procedure 2',
//   'Store Procedure 3',
//   'Store Procedure 4',
//   'Store Procedure 5',
// ];

const CodeView = () => {
  const theme = useTheme();
  const [selectedTables, setSelectedTables] = useState([]);
  // const [selectedViews, setSelectedViews] = useState([]);
  // const [selectedProcedures, setSelectedProcedures] = useState([]);

  const handleUpdate = () => {
    toast.success('Update Successful', {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  const dropdownContainerStyle = {
    flexBasis: '30%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '10px',
  };

  const boxStyle = {
    backgroundColor: '#f5f5f5',
    width: '65%',
    height: '80%',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    overflowY: 'auto',
    marginLeft: '20px',
  };

  const codeBoxStyle = {
    width: '100%',
    height: '100%',
    fontFamily: 'monospace',
    fontSize: '16px',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    border: 'none',
    backgroundColor: '#f5f5f5',
    color: '#333',
    padding: '10px',
    boxSizing: 'border-box',
  };

  const buttonContainerStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    gap: '10px',
    zIndex: 1000,
  };

  const buttonStyle = {
    padding: '12px 30px',
    fontSize: '16px',
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <ToastContainer />
      <div style={containerStyle}>
        {/* Dropdown Section */}
        <div style={dropdownContainerStyle}>
          <Autocomplete
            // multiple
            options={tableNames}
            value={selectedTables}
            onChange={(event, newValue) => setSelectedTables(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Search Objects" variant="outlined" />
            )}
          />
          {/* <Autocomplete
            multiple
            options={viewNames}
            value={selectedViews}
            onChange={(event, newValue) => setSelectedViews(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Search Views" variant="outlined" />
            )}
          />
          <Autocomplete
            multiple
            options={procedureNames}
            value={selectedProcedures}
            onChange={(event, newValue) => setSelectedProcedures(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="Search Procedures" variant="outlined" />
            )}
          /> */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log('Preview')}
            style={{ marginTop: '20px' }}
          >
            PREVIEW
          </Button>
        </div>

        {/* Code View Section */}
        <div style={boxStyle}>
          <pre style={codeBoxStyle}>
            {`CREATE TABLE [dbo].[Table] (
  [CustomerKey] int NOT NULL,
  [GeographyKey] int NULL,
  [CustomerAlternateKey] nvarchar(15) NOT NULL,
  [Title] nvarchar(8) NULL,
  [FirstName] nvarchar(50) NULL,
  [MiddleName] nvarchar(50) NULL,
  [LastName] nvarchar(50) NULL,
  [NameStyle] bit NULL,
  [BirthDate] date NULL,
  CONSTRAINT [PK_DimCustomer] PRIMARY KEY ([CustomerKey])
);`}
          </pre>
        </div>
      </div>

      {/* Buttons */}
      <div style={buttonContainerStyle}>
        <a href="./MigrationPage" style={buttonStyle}>
          BACK
        </a>
        <a
          href="./AuthenticationPage"
          style={buttonStyle}
        >
          CONFIRM
        </a>
        <Button
          style={buttonStyle}
          onClick={handleUpdate}
        >
          UPDATE
        </Button>
      </div>
    </>
  );
};

export default CodeView;
