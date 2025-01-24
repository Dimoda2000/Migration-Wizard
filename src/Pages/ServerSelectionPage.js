import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  ListItemText,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

// JSON Variable for Servers, Databases, and Objects
const serversData = {
  "148-DIMODAS\\SQLEXPRESS": {
    databases: {
      AdventureWorks2022: {
        tables: ["Table1", "Table2", "Table3"],
        views: ["View1", "View2"],
        storedProcedures: ["SP1", "SP2"],
      },
    },
  },
  "SLT-DW-STG-AP-SOUTHEAST-ANALYTICS03": {
    databases: {
      WideWorldImporters: {
        tables: ["Department", "Employee", "Person", "Address"],
        views: ["View1", "View2"],
        storedProcedures: ["Procedure1", "Procedure2"],
      },
    },
  },
};

const MetadataMigrationWizard = () => {
  const [selectedServer, setSelectedServer] = useState(null);
  const [selectedDatabase, setSelectedDatabase] = useState(null);
  const [selectedSchemaType, setSelectedSchemaType] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const availableDatabases = selectedServer
    ? serversData[selectedServer]?.databases || {}
    : {};
  const availableItems =
    selectedDatabase && selectedSchemaType
      ? availableDatabases[selectedDatabase][selectedSchemaType]
      : [];

  return (
    <div>
      <Box sx={{ p: 3 }}>
        {/* Title */}
        <Typography variant="h5" gutterBottom>
          Metadata Migration Wizard
        </Typography>

        {/* Server Selector */}
        <Autocomplete
          options={Object.keys(serversData)}
          value={selectedServer}
          onChange={(event, newValue) => {
            setSelectedServer(newValue);
            setSelectedDatabase(null);
            setSelectedSchemaType(null);
            setSelectedItems([]);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select Server" variant="outlined" />
          )}
          sx={{ mb: 3, maxWidth: 800 }}
        />

        {/* Database Selector */}
        {selectedServer && (
          <Autocomplete
            options={Object.keys(availableDatabases)}
            value={selectedDatabase}
            onChange={(event, newValue) => {
              setSelectedDatabase(newValue);
              setSelectedSchemaType(null);
              setSelectedItems([]);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Select Database" variant="outlined" />
            )}
            sx={{ mb: 3, maxWidth: 800 }}
          />
        )}

        {/* Schema Type Selector */}
        {selectedDatabase && (
          <Autocomplete
            options={["tables", "views", "storedProcedures"]}
            value={selectedSchemaType}
            onChange={(event, newValue) => {
              setSelectedSchemaType(newValue);
              setSelectedItems([]);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Object Type"
                variant="outlined"
              />
            )}
            sx={{ mb: 3, maxWidth: 800 }}
          />
        )}

        {/* Items List with Checkboxes */}
        {availableItems.length > 0 && (
          <Autocomplete
            multiple
            options={availableItems}
            disableCloseOnSelect
            value={selectedItems}
            onChange={(event, newValue) => setSelectedItems(newValue)}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  checked={selected}
                  sx={{ padding: "4px" }}
                />
                <ListItemText primary={option} />
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label={`Select ${
                  selectedSchemaType === "tables"
                    ? "Tables"
                    : selectedSchemaType === "views"
                    ? "Views"
                    : "Stored Procedures"
                }`}
                variant="outlined"
              />
            )}
            sx={{ mb: 3, maxWidth: 800 }}
          />
        )}

        {/* Footer Buttons */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            display: "flex",
            gap: 3,
          }}
        >
          <Button
            variant="outlined"
            sx={{ width: 140, height: 50 }}
            href="/ExtractionConversion"
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            disabled={!selectedItems.length}
            sx={{ width: 160, height: 50 }}
            href="/ExtractionProgressPage"
          >
            Extract DDLs
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default MetadataMigrationWizard;
