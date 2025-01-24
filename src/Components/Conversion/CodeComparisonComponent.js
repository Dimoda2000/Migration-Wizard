// import React from 'react';
// import { Box, Typography, Paper, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
 
// const CodeComparison = () => {
//   return (
// <Box sx={{ p: 3 }}>
// <Typography variant="h5" gutterBottom>
//         Code Comparison
// </Typography>
// <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
// <FormControl fullWidth>
// <InputLabel>File Type</InputLabel>
// <Select defaultValue="Tables">
// <MenuItem value="Tables">Tables</MenuItem>
// <MenuItem value="Views">Views</MenuItem>
// <MenuItem value="Store Procedures">Store Procedures</MenuItem>
// </Select>
// </FormControl>
// </Box>
 
//       <Box sx={{ display: 'flex', gap: 2 }}>
//         {/* Code Comparison Panels */}
// <Paper
//           elevation={3}
//           sx={{
//             flex: 1,
//             p: 2,
//             minHeight: '300px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             textAlign: 'center',
//           }}
// >
// <Typography>Left Panel Content</Typography>
// </Paper>
// <Paper
//           elevation={3}
//           sx={{
//             flex: 1,
//             p: 2,
//             minHeight: '300px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             textAlign: 'center',
//           }}
// >
// <Typography>Right Panel Content</Typography>
// </Paper>
// </Box>
 
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
// <Button variant="contained" color="primary">
//           Retry Conversion
// </Button>
// <Button variant="outlined" color="primary">
//           View Logs
// </Button>
// <Button variant="outlined" color="primary">
//           View Reports
// </Button>
// <Button variant="contained" color="primary">
//           View Output
// </Button>
// </Box>
// </Box>
//   );
// };
 
// export default CodeComparison;



import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const CodeComparison = () => {
  const [fileType, setFileType] = useState("");
  const [selectedObject, setSelectedObject] = useState("");
  const [objectList, setObjectList] = useState([]);

  const fileTypeOptions = {
    Tables: ["Department", "Employee", "Address", "ErrorLog", "ContactType", "EmployeePayHistory", "WorkOrder", "Customer"],
    Views: ["View1", "View2", "View3"],
    "Stored Procedures": ["Proc1", "Proc2", "Proc3"],
  };

  const handleFileTypeChange = (event) => {
    const selectedFileType = event.target.value;
    setFileType(selectedFileType);
    setObjectList(fileTypeOptions[selectedFileType] || []);
    setSelectedObject("");
  };

  const handleObjectChange = (event) => {
    setSelectedObject(event.target.value);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Code Comparison
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>File Type</InputLabel>
        <Select value={fileType} onChange={handleFileTypeChange}>
          {Object.keys(fileTypeOptions).map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {fileType && (
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select Object</InputLabel>
          <Select value={selectedObject} onChange={handleObjectChange}>
            {objectList.map((object) => (
              <MenuItem key={object} value={object}>
                {object}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {selectedObject && (
        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Box
            sx={{
              flex: 1,
              p: 2,
              border: "1px solid #ccc",
              borderRadius: 1,
              backgroundColor: "#f9f9f9",
              overflow: "auto",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {/* Before Conversion */}
            </Typography>
            <pre>{`-- Sample code for ${selectedObject} `}</pre>
          </Box>

          <Box
            sx={{
              flex: 1,
              p: 2,
              border: "1px solid #ccc",
              borderRadius: 1,
              backgroundColor: "#f9f9f9",
              overflow: "auto",
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              {/* After Conversion */}
            </Typography>
            <pre>{`-- Sample code for ${selectedObject} `}</pre>
          </Box>
        </Box>
      )}

      {/* Bottom-right buttons */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 35 }}>
        <Button variant="contained" color="primary" href = "/ConversionPage">
          Retry Conversion
        </Button>
        <Button variant="outlined" color="primary">
          View Logs
        </Button>
        <Button variant="outlined" color="primary">
          View Reports
        </Button>
        <Button variant="contained" color="primary">
          View Output
        </Button>
      </Box>
    </Box>
  );
};

export default CodeComparison;
