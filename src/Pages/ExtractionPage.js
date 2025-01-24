import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Header_with_Button from '../Components/Header_with_Button';

const ProgressPage = ({ onNext }) => {
  const steps = [
    "Validating Scope",
    "Loading Source Code",
    "Analyzing Source Code",
    "Writing Result",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [failedFiles, setFailedFiles] = useState("");

  useEffect(() => {
    if (activeStep < steps.length) {
      const timer = setTimeout(() => {
        setActiveStep((prevStep) => prevStep + 1);
      }, 1000); // Adjust delay as needed
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [activeStep, steps.length]);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      {/* <Header_with_Button /> */}

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
          backgroundColor: "#f8f9fa",
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: 4 }}
        >
          Extraction in progress
        </Typography>

        {/* Steps */}
        <List sx={{ width: "100%", maxWidth: 500 }}>
          {steps.map((step, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "2px solid #ccc",
                borderRadius: 2,
                marginBottom: 2,
                padding: 2,
                backgroundColor: "#fff",
              }}
            >
              <ListItemText
                primary={step}
                primaryTypographyProps={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              />
              <ListItemIcon>
                {index < activeStep ? (
                  <CheckCircleIcon sx={{ color: "#4CAF50" }} />
                ) : (
                  <CircleOutlinedIcon sx={{ color: "#ccc" }} />
                )}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>

        {/* Failed Files Input */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            marginTop: 4,
          }}
        >
          <Typography>How many failed files detected:</Typography>
          <TextField
            size="small"
            value={failedFiles}
            onChange={(e) => setFailedFiles(e.target.value)}
            sx={{ width: "100px" }}
          />
          <Button variant="contained" color="primary">
            View
          </Button>
        </Box>

        {/* Navigation Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: 500,
            marginTop: 4,
          }}
        >
          <Button variant="contained" color="primary">
            Back
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={onNext} // Handle navigation to the next page
            disabled={activeStep < steps.length} // Disable until all steps are completed
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressPage;
