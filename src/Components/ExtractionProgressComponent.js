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

const Progress = ({ onNext }) => {
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
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "1fr auto",
        gridTemplateColumns: "1fr",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
        padding: 4,
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Extraction in Progress
        </Typography>

        {/* Step List */}
        <List sx={{ width: "100%", maxWidth: 500, margin: "0 auto" }}>
          {steps.map((step, index) => (
            <ListItem
              key={index}
              sx={{
                border: "1px solid #d1d1d1",
                borderRadius: 2,
                marginBottom: 2,
                padding: 2,
              }}
            >
              <ListItemText
                primary={step}
                primaryTypographyProps={{ fontSize: 16 }}
              />
              <ListItemIcon>
                {index < activeStep ? (
                  <CheckCircleIcon color="success" />
                ) : (
                  <CircleOutlinedIcon color="disabled" />
                )}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* Failed Files Input */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography>Failed Files Detected:</Typography>
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
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            href="/ServerSelectionPage"
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="success"
            href="/ExtractionResult"
            disabled={activeStep < steps.length} // Disable until all steps are complete
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Progress;
