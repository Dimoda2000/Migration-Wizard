import React, { useState } from 'react';
import { Tabs, Tab, Box, Select, MenuItem, Button } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

const DashboardTabPanel = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      padding: '0 10px',
      position: 'relative',
      marginTop: '0px',
    },
    chartContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    backButton: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '150px',
    },
    selectContainer: {
      position: 'fixed',
      top: '80px',
      right: '40px',
      zIndex: 1000,
    },
    tabPanel: {
      padding: '20px',
      backgroundColor: '#f5f5f5',
      height: '100vh',
    },
  };

  return (
    <Box>
      {/* Tabs for navigation */}
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Admin Dashboard" />
        <Tab label="Another Tab" />
        <Tab label="More Features" />
      </Tabs>

      {/* Tab Panels */}
      <div style={styles.tabPanel}>
        {selectedTab === 0 && (
          <div>
            {/* Admin Dashboard Content */}
            <div style={styles.selectContainer}>
              <Select defaultValue="Tables">
                <MenuItem value="Tables">Tables</MenuItem>
                <MenuItem value="Views">Views</MenuItem>
                <MenuItem value="StoreProcedures">Store Procedures</MenuItem>
              </Select>
            </div>
            <div style={styles.container}>
              <div style={styles.chartContainer}>
                <BarChart
                  xAxis={[
                    { scaleType: 'band', data: ['group A', 'group B', 'group C'] },
                  ]}
                  series={[
                    { data: [4, 3, 5] },
                    { data: [1, 6, 3] },
                    { data: [2, 5, 6] },
                  ]}
                  width={600}
                  height={400}
                />
              </div>
              <div style={styles.chartContainer}>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                      ],
                    },
                  ]}
                  width={500}
                  height={300}
                />
              </div>
            </div>
            <Button
              variant="contained"
              color="primary"
              style={styles.backButton}
              href="ProjectViewPage"
            >
              Back
            </Button>
          </div>
        )}
        {selectedTab === 1 && (
          <div>
            <h2>Another Tab</h2>
            <p>Content for the second tab goes here.</p>
          </div>
        )}
        {selectedTab === 2 && (
          <div>
            <h2>More Features</h2>
            <p>Content for the third tab goes here.</p>
          </div>
        )}
      </div>
    </Box>
  );
};

export default DashboardTabPanel;
