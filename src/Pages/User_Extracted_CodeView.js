import React from 'react';
import HeaderWithButton from '../Components/Header_with_Button';
import Button from '@mui/material/Button';

function User_Extracted_CodeView() {
  return (
    <>
      {/* <HeaderWithButton /> */}
      <div style={{ padding: '20px' }}>
        {/* Topic */}
        <h2 style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '20px' }}>Extracted Code View</h2>

        {/* Code Preview Box */}
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            minHeight: '300px',
            fontFamily: 'monospace',
            fontSize: '16px',
            overflow: 'auto',
            width: '95%',
          }}
        >
          {/* Sample Code Content */}
          <pre>
{`CREATE TABLE [dbo].[DimCustomer] (
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

        {/* Back Button */}
        <div style={{ textAlign: 'right', marginTop: '20px', position: 'static' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.history.back()}
            style={{ textTransform: 'none' }}
          >
            BACK
          </Button>
        </div>
      </div>
    </>
  );
}

export default User_Extracted_CodeView;
