import React, { useState } from 'react';
import { Tabs, Tab, Box, Button } from '@mui/material';
import TablesTab from '../Components/Migration/TablesTab';
import ViewsTab from '../Components/Migration/ViewsTab';
import StoredProceduresTab from '../Components/Migration/StoredProceduresTab';

const TabsPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Mock schemas data
  const schemasData = [
    {
      name: 'Schema 1',
      selected: true,
      items: [
        { name: 'Table 1', selected: true },
        { name: 'Table 2', selected: false },
        { name: 'Table 3', selected: true },
      ],
    },
    {
      name: 'Schema 2',
      selected: true,
      items: [
        { name: 'Table 1', selected: true },
        { name: 'Table 2', selected: true },
        { name: 'Table 3', selected: false },
      ],
    },
  ];

  const schemas1Data = [
    {
      name: 'Schema 1',
      selected: true,
      items: [
        { name: 'View 1', selected: true },
        { name: 'View 2', selected: false },
        { name: 'View 3', selected: true },
      ],
    },
    {
      name: 'Schema 2',
      selected: true,
      items: [
        { name: 'View 1', selected: true },
        { name: 'View 2', selected: true },
        { name: 'View 3', selected: false },
      ],
    },
  ];

  const schemas2Data = [
    {
      name: 'Schema 1',
      selected: true,
      items: [
        { name: 'Stored Procedure 1', selected: true },
        { name: 'Stored Procedure 2', selected: false },
        { name: 'Stored Procedure 3', selected: true },
      ],
    },
    {
      name: 'Schema 2',
      selected: true,
      items: [
        { name: 'Stored Procedure 1', selected: true },
        { name: 'Stored Procedure 2', selected: true },
        { name: 'Stored Procedure 3', selected: false },
      ],
    },
  ];

  return (
    <Box sx={{ width: '100%', height: '100vh', position: 'relative', padding: 2 }}>
      {/* Tabs Section */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="fullWidth"
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{ marginBottom: 3 }}
      >
        <Tab label="Tables" />
        <Tab label="Views" />
        <Tab label="Stored Procedures" />
      </Tabs>

      {/* Tab Content */}
      <Box>
        {activeTab === 0 && <TablesTab schemas={schemasData} />}
        {activeTab === 1 && <ViewsTab schemas={schemas1Data} />}
        {activeTab === 2 && <StoredProceduresTab schemas={schemas2Data} />}
      </Box>

      {/* Bottom Buttons */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          display: 'flex',
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={() => console.log('Back clicked')}
          href = '/AddserverPage2'
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log('Migrate clicked')}
          href = '/CodeView'
        >
          Migrate
        </Button>
      </Box>
    </Box>
  );
};

export default TabsPage;
