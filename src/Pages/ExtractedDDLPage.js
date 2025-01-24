import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ExtractedDDLPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Extracted DDL" {...a11yProps(0)} />
          <Tab label="Completed Conversions" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        
        {/* Content for Extracted DDL */}
        <Typography>Here is the Extracted DDL content.</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Content for Completed Conversions */}
        <Typography>Here is the Completed Conversions content.</Typography>
      </TabPanel>
    </Box>
  );
};

export default ExtractedDDLPage;
