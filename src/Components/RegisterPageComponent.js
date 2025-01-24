import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./Images/image2.png";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    // Simulate registration logic
    const success = Math.random() > 0.5; // Random success/failure for demonstration

    if (success) {
      // Navigate to login page if successful
      navigate("/LoginPage");
    } else {
      // Show toast notification for failure
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          display: "flex",
          height: "calc(100vh - 70px)", // Adjust height excluding header
          padding: "0 50px",
        }}
      >
        {/* Left Side - Image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={img}
            alt="Altria Logo"
            style={{ maxWidth: "100%", height: "auto", maxHeight: "80%" }}
          />
        </div>

        {/* Right Side - Registration Form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              fontFamily: "Arial, sans-serif",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              User Registration
            </Typography>

            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                width: "100%",
              }}
            >
              <TextField
                label="Enter your username"
                name="username"
                variant="outlined"
                fullWidth
                required
                value={formData.username}
                onChange={handleInputChange}
              />
              <TextField
                label="Enter your email"
                name="email"
                variant="outlined"
                fullWidth
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                label="Enter your password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <TextField
                label="Confirm your password"
                name="confirmPassword"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                mt: 3,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginRight: "10px" }}
                onClick={handleRegister}
              >
                SIGN UP
              </Button>
              <Button
                variant="outlined"
                fullWidth
                color="secondary"
                href="/LoginPage"
              >
                BACK
              </Button>
            </Box>
          </Box>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default RegisterPage;
