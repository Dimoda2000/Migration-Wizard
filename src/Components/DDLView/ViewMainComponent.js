import React, { useState } from "react";
import { Box, Button, Typography, Tabs, Tab, Paper } from "@mui/material";
import Header from "../Header"; // Assuming your header is already built
import ExtractedDDLView from "./ExtractedDDLViewComponent";
import CompletedConversionView from "./CompletedConversionViewComponent";

const SnowBridge = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ bgcolor: "#f4f4f9", minHeight: "100vh" }}>
      {/* Reusing your header */}
      {/* <Header /> */}

      {/* Page Content */}
      <Box sx={{ p: 2, maxWidth: "1000px", margin: "0 auto" }}>
        <Paper elevation={3} sx={{ mb: 2, p: 2, borderRadius: 2 }}>
          {/* Tabs for switching between views */}
          <Tabs value={activeTab} onChange={handleChange} textColor="primary" indicatorColor="primary">
            <Tab label="Extracted DDL View" />
            <Tab label="Completed Conversion View" />
          </Tabs>
        </Paper>

        {/* View Content */}
        <Box
          component={Paper}
          elevation={3}
          sx={{ p: 3, borderRadius: 2, minHeight: "300px", bgcolor: "white" }}
        >
          {activeTab === 0 ? <ExtractedDDLView /> : <CompletedConversionView />}
        </Box>
      </Box>
    </Box>
  );
};

export default SnowBridge;
