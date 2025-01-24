import React from "react";
import { Box, Button, Typography } from "@mui/material";

const ExtractedDDLView = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Extracted DDL View
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
        {`CREATE TABLE [dbo].[DimCustomer] (
    [CustomerKey] int NOT NULL,
    [GeographyKey] int NULL,
    [CustomerAlternateKey] nvarchar(15) NOT NULL,
    [Title] nvarchar(8) NULL,
    [FirstName] nvarchar(50) NULL,
    [MiddleName] nvarchar(50) NULL,
    [LastName] nvarchar(50) NULL,
    [NameStyle] bit NULL,
    [BirthDate] date NULL,
    CONSTRAINT [PK_DimCustomer] PRIMARY KEY ([CustomerKey])
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

export default ExtractedDDLView;
