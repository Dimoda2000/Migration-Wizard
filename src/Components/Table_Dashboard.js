import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FolderIcon from "@mui/icons-material/Folder";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Typography from "@mui/material/Typography"; // Import Typography
import ProjectTable from "./ProjectTable"; // Import the new component

export default function Table_Dashboard({ projectName, onBack }) {
  const [view, setView] = useState("main"); // Manage view state

  const commonButtonStyle = {
    width: "250px",
    height: "50px",
    textTransform: "none",
    justifyContent: "flex-start",
    paddingLeft: "10px",
    border: "1px solid blue",
    color: "blue",
    fontSize: "16px",
  };

  if (view === "table") {
    return <ProjectTable onBack={() => setView("main")} projectName={projectName} />;
  }

  return (
    <Box>
      {/* Navigation Path */}
      <Box mb={2}>
        <Typography
          variant="subtitle1"
          style={{
            color: "black",
            fontWeight: "bold", // Make the text bold
            fontSize: "0.975rem", // Smaller font size
            marginTop: "-5px", // Moves it up by 5px
            textAlign: "left", // Ensures it's fully aligned left
          }}
        >
          Home &gt; {projectName}
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={2}
        mt={2}
        ml={2}
      >
        <Button
          variant="outlined"
          startIcon={<FolderIcon />}
          style={commonButtonStyle}
          href = "ProjectTablePage"
        >
          Table
        </Button>
        <Button
          variant="outlined"
          startIcon={<DashboardIcon />}
          style={commonButtonStyle}
          href = "AdminDashboard"
          // onClick={() => alert(`Navigating to ${projectName} Dashboard View`)}
        >
          Dashboard
        </Button>
      </Box>

      <Box
        display="flex"
        justifyContent="flex-end"
        position="fixed"
        bottom={20}
        right={20}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "blue",
            color: "white",
            width: "200px",
            height: "50px",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "16px",
          }}
          onClick={onBack}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
}
