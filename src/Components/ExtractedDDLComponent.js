import React from "react";
import { Box, Typography, Tabs, Tab, Button } from "@mui/material";
import { TreeView, TreeItem } from "@mui/lab";
//import { TreeView, TreeItem } from "@mui/x-tree-view"; // Ensure you're using @mui/x-tree-view
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Header from "./Header";

const ExtractedDDLPage = ({ onBack }) => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Header Section */}
      {/* <Header /> */}

      {/* Tabs Section */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        sx={{ marginBottom: "20px", borderBottom: "1px solid #ddd" }}
      >
        <Tab label="Extracted DDL" />
        <Tab label="Completed Conversion" />
      </Tabs>

      {/* Content Section */}
      <Box
        sx={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {tabValue === 0 && (
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
              Project &gt; Tables
            </Typography>
            <TreeView defaultExpandAll>
              {/* Each TreeItem has a unique `id` and `nodeId` */}
              <TreeItem nodeId="1" id="1" label="Table 1" />
              <TreeItem nodeId="2" id="2" label="Table 2" />
              <TreeItem nodeId="3" id="3" label="Table 3" />
              <TreeItem nodeId="4" id="4" label="Table 4" />
              <TreeItem nodeId="5" id="5" label="Table 5" />
              <TreeItem nodeId="6" id="6" label="Table 6" />
              <TreeItem nodeId="7" id="7" label="Views">
                <TreeItem nodeId="7-1" id="7-1" label="View 1" />
                <TreeItem nodeId="7-2" id="7-2" label="View 2" />
              </TreeItem>
              <TreeItem nodeId="8" id="8" label="Stored Procedures">
                <TreeItem nodeId="8-1" id="8-1" label="Procedure 1" />
                <TreeItem nodeId="8-2" id="8-2" label="Procedure 2" />
              </TreeItem>
            </TreeView>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography>Add more DDL</Typography>
              <AddCircleOutlineIcon color="primary" sx={{ marginLeft: "8px", cursor: "pointer" }} />
            </Box>
          </Box>
        )}
        {tabValue === 1 && (
          <Typography variant="h6">Completed Conversion Section</Typography>
        )}
      </Box>

      {/* Back Button */}
      <Box sx={{ textAlign: "right", marginTop: "20px" }}>
        <Button variant="contained" color="secondary" onClick={onBack}>
          BACK
        </Button>
      </Box>
    </Box>
  );
};

export default ExtractedDDLPage;
