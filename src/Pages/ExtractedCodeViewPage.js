import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import Header_with_Button from "../Components/Header_with_Button";

const CodeViewPage = () => {
  const extractedCode = `CREATE TABLE [dbo].[DimCustomer] (
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
  );`;

  return (
    <div>
      {/* Header Component */}
      {/* <Header_with_Button /> */}

      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 3,
          textAlign: 'center',
          mt: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Extracted Code View
        </Typography>

        {/* Extracted Code Display */}
        <Paper
          elevation={3}
          sx={{
            width: '90%',
            maxWidth: '800px',
            p: 2,
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
            overflowX: 'auto',
            whiteSpace: 'pre-wrap', // To wrap the text within the container
            textAlign: 'left', // Align the text to the left
          }}
        >
          <Typography
            variant="body1"
            component="pre"
            sx={{
              fontFamily: 'monospace',
              fontSize: '16px',
              lineHeight: '1.5',
              m: 0,
            }}
          >
            {extractedCode}
          </Typography>
        </Paper>

        {/* Input Section */}
        <Box
          sx={{
            width: '90%',
            maxWidth: '800px',
            mt: 3,
            position: 'relative', // For button positioning
          }}
        >
          <TextField 
            fullWidth
            placeholder="Enter your improvements for the code here..."
            multiline
            minRows={3} // Minimum number of rows
            maxRows={10} // Maximum number of rows before scrolling
            variant="outlined"
            sx={{
              backgroundColor: '#fff',
              borderRadius: '10px',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mt: 2,
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: 'none' }}
              href = "/ExtractionResult"
              // onClick={() => alert('Improvements submitted!')} // Replace with actual submission logic
            >
              Input
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: 'none' }}
              href = "/ExtractionResult"
              // onClick={() => alert('Back clicked!')} // Replace with back navigation logic
            >
              Back
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CodeViewPage;



