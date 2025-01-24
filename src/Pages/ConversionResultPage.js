import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Tabs, Tab } from '@mui/material';
import Header_with_Button from "../Components/Header_with_Button";
 
const DDLViewPage = () => {
  const [activeTab, setActiveTab] = useState(0);
 
  // Sample DDL code
  const ddlCode = `CREATE TABLE [dbo].[DimCustomer] (
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
 
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
 
  return (
<div>
      {/* Header Component */}
{/* <Header_with_Button /> */}
 
      {/* Page Content */}
<Box sx={{ p: 3 }}>
        {/* Tabs for navigation */}
<Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{ marginBottom: 3 }}
          textColor="primary"
          indicatorColor="primary"
>
<Tab label="Extracted DDL View" />
<Tab label="Completed Conversion View" />
</Tabs>
 
        {/* Tab Content */}
        {activeTab === 0 && (
<Box>
<Typography variant="h5" gutterBottom>
              Extracted DDL View
</Typography>
<Paper
              elevation={3}
              sx={{
                p: 2,
                backgroundColor: '#f5f5f5',
                borderRadius: '10px',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
                fontFamily: 'monospace',
              }}
>
              {ddlCode}
</Paper>
<Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
<Button
                variant="contained"
                color="primary"
                href = "/ExtractionConversion"
                // onClick={() => alert('Back clicked!')} // Replace with your back navigation logic
>
                Back
</Button>
</Box>
</Box>
        )}
 
        {activeTab === 1 && (
<Box>
<Typography variant="h5" gutterBottom>
              Completed Conversion View
</Typography>
<Paper
              elevation={3}
              sx={{
                p: 2,
                backgroundColor: '#f5f5f5',
                borderRadius: '10px',
                textAlign: 'center',
              }}
>
<Typography>
                The conversion process is complete. No further action required.
</Typography>
</Paper>
<Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
<Button
                variant="contained"
                color="primary"
                href = "/ExtractionConversion"
                // onClick={() => alert('Back clicked!')} // Replace with your back navigation logic
>
                Back
</Button>
</Box>
</Box>
        )}
</Box>
</div>
  );
};
 
export default DDLViewPage;