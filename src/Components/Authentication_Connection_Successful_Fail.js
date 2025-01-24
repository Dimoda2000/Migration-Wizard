import React, { useEffect, useState } from "react";
import { Box, LinearProgress } from "@mui/material";

const AuthenticationConnectionSuccessfulFail = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer); // Stop the timer
          onComplete(); // Trigger animation complete handler
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer); // Cleanup on component unmount
    };
  }, [onComplete]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Increased blur effect
        backdropFilter: "blur(15px)", // Stronger blur
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2, // Ensure it appears above all content
      }}
    >
      <Box
        sx={{
          width: "50%", // Set width for the progress bar
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent background for bar container
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Slight shadow for a modern look
        }}
      >
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Box>
  );
};

export default AuthenticationConnectionSuccessfulFail;
