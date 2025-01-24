import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
 
const AuthenticationPage = () => {
  const [formData, setFormData] = useState({
    accountName: "",
    userName: "",
    password: "",
    warehouse: "",
    database: "",
    schema: "",
    role: "",
  });
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleConnect = () => {
    const isFormComplete = Object.values(formData).every((field) => field.trim() !== "");
 
    if (!isFormComplete) {
      toast.error("Connection failed: Please fill all fields.");
      return;
    }
 
    setIsConnecting(true);
 
    // Simulate a delay for migration process
    setTimeout(() => {
      setIsConnecting(false);
      toast.success("Migration completed successfully!");
      // Navigate to AdminDashboard after the animation
      setTimeout(() => {
        navigate("/AdminDashboard");
      }, 500); // Additional delay to ensure notification is visible
    }, 3000); // Example delay of 3 seconds
  };
 
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };
 
  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "200vh",
          backdropFilter: "blur(10px)",
          zIndex: 0,
        }}
      >
        {/* The form */}
        <Box
          component={Paper}
          elevation={3}
          sx={{
            width: "50%",
            margin: "50px auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            position: "relative",
            zIndex: 3,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ marginBottom: "20px" }}
          >
            <span style={{ fontWeight: "bold", color: "blue" }}>Snowflake</span>{" "}
            <span style={{ fontWeight: "bold", color: "black" }}>
              Authentication
            </span>
          </Typography>
          <TextField
            name="accountName"
            label="Account Name"
            variant="outlined"
            fullWidth
            value={formData.accountName}
            onChange={handleChange}
          />
          <TextField
            name="userName"
            label="User Name"
            variant="outlined"
            fullWidth
            value={formData.userName}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            name="warehouse"
            label="Warehouse"
            variant="outlined"
            fullWidth
            value={formData.warehouse}
            onChange={handleChange}
          />
          <TextField
            name="database"
            label="Database"
            variant="outlined"
            fullWidth
            value={formData.database}
            onChange={handleChange}
          />
          <TextField
            name="schema"
            label="Schema"
            variant="outlined"
            fullWidth
            value={formData.schema}
            onChange={handleChange}
          />
          <TextField
            name="role"
            label="Role"
            variant="outlined"
            fullWidth
            value={formData.role}
            onChange={handleChange}
          />
        </Box>
      </Box>
 
      {/* Buttons */}
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          gap: 2,
          zIndex: 3,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "120px" }}
          onClick={handleBack}
        >
          BACK
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "150px" }}
          onClick={handleConnect}
        >
          CONNECT
        </Button>
      </Box>
 
      {/* Progress animation */}
      {isConnecting && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 4,
          }}
        >
          <CircularProgress size={80} />
          <Typography sx={{ marginTop: "20px" }} variant="h6">
            Migration in progress
          </Typography>
        </Box>
      )}
    </>
  );
};
 
export default AuthenticationPage;