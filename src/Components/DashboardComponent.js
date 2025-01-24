import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import Header from "./Header";


const Dashboard = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <Header/>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Altria <span style={{ color: "#777" }}>SNOW BRIDGE</span>
        </Typography> *
        <Box>
          <Button variant="text" color="primary" sx={{ marginRight: "10px" }}>
            Logout
          </Button>
          <Button variant="contained" color="primary">
            User
          </Button>
        </Box>
      </Box> 

      {/* Main Content */}
      <Box sx={{ padding: "20px", minHeight: "calc(100vh - 70px)" }}>
        {/* Recent Projects */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
          Recent Projects
        </Typography>
        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              <FolderIcon sx={{ color: "#fbc02d", marginRight: "10px" }} />
              <Typography>Watawala</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              <FolderIcon sx={{ color: "#fbc02d", marginRight: "10px" }} />
              <Typography>SLT</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              <FolderIcon sx={{ color: "#fbc02d", marginRight: "10px" }} />
              <Typography>HUTCH</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              <FolderIcon sx={{ color: "#fbc02d", marginRight: "10px" }} />
              <Typography>LB</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* New Projects */}
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
          New Projects
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                cursor: "pointer",
              }}
            >
              <FolderIcon sx={{ color: "#fbc02d", marginRight: "10px" }} />
              <Typography>Dialog</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#0a74da",
          height: "50px",
          marginTop: "5px",
        }}
      />
    </div>
  );
};

export default Dashboard;
