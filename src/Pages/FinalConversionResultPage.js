import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import Header_with_Button from '../Components/Header_with_Button';
import ConversionResultComponent from '../Components/Conversion/ConversionResultComponent';
import CodeComparisonComponent from '../Components/Conversion/CodeComparisonComponent'
 
const FinalPage = () => {
  const [activeTab, setActiveTab] = React.useState(0);
 
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
 
  return (
<div>
      {/* Header */}
{/* <Header_with_Button /> */}
 
      {/* Tabs */}
<Box sx={{ borderBottom: 1, borderColor: 'divider', p: 2 }}>
<Tabs value={activeTab} onChange={handleTabChange} textColor="primary" indicatorColor="primary" centered>
<Tab label="Conversion Result" />
<Tab label="Code Comparison" />
</Tabs>
</Box>
 
      {/* Tab Content */}
      {activeTab === 0 && <ConversionResultComponent />}
      {activeTab === 1 && <CodeComparisonComponent />}
</div>
  );
};
 
export default FinalPage;