import React from 'react';
import HeaderWithButton from '../Components/Header_with_Button';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Button, Select, MenuItem } from '@mui/material';

const AdminDashboard = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5', // Light gray background
      color: '#333', // Text color
      fontFamily: 'Arial, sans-serif',
      padding: '0 10px', // Add padding for spacing
      position: 'relative',
      marginTop: '0px', // Added margin to offset the select at the top
    },
    chartContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    backButton: {
      position: 'fixed', // Fixed position at the bottom
      bottom: '20px',
      right: '20px',
      width: '150px', // Increased width
    },
    selectContainer: {
      position: 'fixed', // Fixed position at the top right
      top: '80px',
      right: '40px', // Adjusted to the right of the page
      zIndex: 1000, // Ensure it stays on top
    },
  };

  return (
    <>
      {/* <HeaderWithButton /> */}
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
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={600} // Increased size
            height={400} // Increased size
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
            width={500} // Increased size
            height={300} // Increased size
          />
        </div>
      </div>
      <Button variant="contained" color="primary" style={styles.backButton} href="ProjectViewPage">
        Back
      </Button>
    </>
  );
};

export default AdminDashboard;
