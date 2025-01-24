import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Button, CircularProgress, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import Header from './Header'
 
const ProgressComponent = () => {
  const [completedSteps, setCompletedSteps] = useState([]);
 
  // Define the steps for the progress
  const steps = [
    { id: 1, label: 'Validating Scope' },
    { id: 2, label: 'Loading Source Code' },
    { id: 3, label: 'Conversion Source Code' },
    { id: 4, label: 'Writing Result' },
  ];
 
  useEffect(() => {
    // Simulate progress completion with a delay between steps
    const timer = steps.reduce((acc, step, index) => {
      return acc.then(() => 
        new Promise((resolve) => {
          setTimeout(() => {
            setCompletedSteps((prev) => [...prev, step.id]);
            resolve();
          }, 1000); // Delay for each step (1 second)
        })
      );
    }, Promise.resolve());
  }, []);
 
  return (
    <><Header/>
<Box sx={{ p: 3, textAlign: 'center' }}>
<Typography variant="h4" gutterBottom>
        Conversion in Progress
</Typography>
 
      <Box sx={{ mt: 3 }}>
        {steps.map((step) => (
<Paper
            key={step.id}
            elevation={3}
            sx={{
              p: 2,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              bgcolor: completedSteps.includes(step.id) ? 'success.light' : 'background.paper',
            }}
>
<Typography>{step.label}</Typography>
            {completedSteps.includes(step.id) ? (
<CheckCircleIcon color="success" />
            ) : (
<CircularProgress size={24} />
            )}
</Paper>
        ))}
</Box>
 
      <Box sx={{ mt: 3 }}>
<Button
          variant="contained"
          color="primary"
          onClick={() => alert('Next clicked!')}
>
          Next
</Button>
</Box>
</Box>
</>
  );
};
 
export default ProgressComponent;