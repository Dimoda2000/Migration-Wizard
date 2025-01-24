import React from 'react';
import { Box, Typography, Paper, Button, Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 
const ConversionResult = () => {
  return (
<Box sx={{ p: 3 }}>
<Typography variant="h5" gutterBottom>
        Conversion Result
</Typography>
<Paper elevation={3} sx={{ p: 2, mb: 2 }}>
<Typography variant="subtitle1" gutterBottom>
          Execution Date
</Typography>
<TextField
          fullWidth
          variant="outlined"
          defaultValue="18/09/2024, 09:47:00"
          InputProps={{ readOnly: true }}
        />
</Paper>
 
      {/* Accordion Sections */}
      {['Code Completeness', 'Excluded Scope Summary', 'Assessed Conversion Scope Summary', 'Excluded Scope Breakdown'].map(
        (section) => (
<Accordion key={section}>
<AccordionSummary expandIcon={<ExpandMoreIcon />}>
<Typography>{section}</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>Details for {section}...</Typography>
</AccordionDetails>
</Accordion>
        )
      )}
 
 <Box
  sx={{
    display: 'flex',
    justifyContent: 'flex-end', // Aligns items to the right
    mt: 3,
  }}
>
  <Button variant="contained" color="primary" sx={{ mr: 1 }} href = "/ConversionPage">
    Retry Conversion
  </Button>
  <Button variant="outlined" color="primary" sx={{ mr: 1 }}>
    View Logs
  </Button>
  <Button variant="outlined" color="primary" sx={{ mr: 1 }}>
    View Reports
  </Button>
  <Button variant="contained" color="primary">
    View Output
  </Button>
</Box>


</Box>
  );
};
 
export default ConversionResult;