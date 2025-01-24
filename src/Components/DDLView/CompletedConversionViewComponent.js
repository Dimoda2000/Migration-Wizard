import React from "react";
import { Box, Button, Typography } from "@mui/material";

const CompletedConversionView = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Completed Conversion View
      </Typography>
      <Box
        component="pre"
        sx={{
          p: 2,
          bgcolor: "#f4f4f9",
          borderRadius: 1,
          fontSize: "14px",
          whiteSpace: "pre-wrap",
          overflow: "auto",
        }}
      >
        {`CREATE TABLE DimCustomer (
    CustomerKey INT NOT NULL,
    GeographyKey INT,
    CustomerAlternateKey NVARCHAR(15) NOT NULL,
    Title NVARCHAR(8),
    FirstName NVARCHAR(50),
    MiddleName NVARCHAR(50),
    LastName NVARCHAR(50),
    NameStyle BIT,
    BirthDate DATE,
    CONSTRAINT PK_DimCustomer PRIMARY KEY (CustomerKey)
);`}
      </Box>
      {/* <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => alert("Back button functionality not implemented")}
      >
        Back
      </Button> */}
      {/* Add alignment for the Back button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
        }}
      >
        <Button variant="contained" color="primary">
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default CompletedConversionView;
