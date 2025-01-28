import React, { useState } from 'react';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';

const TablesTab = ({ schemas }) => {
  return (
    <Box>
      {schemas.map((schema) => (
        <SchemaWithCheckbox key={schema.name} schema={schema} />
      ))}
    </Box>
  );
};

const SchemaWithCheckbox = ({ schema }) => {
  // Initialize all checkboxes to unchecked (false)
  const [checked, setChecked] = useState(
    Array(schema.items.length).fill(false) // Create an array of `false` values
  );

  // Handle parent checkbox change
  const handleParentChange = (event) => {
    const newState = Array(checked.length).fill(event.target.checked);
    setChecked(newState);
  };

  // Handle individual child checkbox change
  const handleChildChange = (index) => (event) => {
    const newState = [...checked];
    newState[index] = event.target.checked;
    setChecked(newState);
  };

  return (
    <Box sx={{ marginBottom: 3 }}>
      {/* Parent Checkbox */}
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.every((value) => value)} // Parent is checked if all children are checked
              indeterminate={checked.some((value) => value) && !checked.every((value) => value)} // Indeterminate if some children are checked
              onChange={handleParentChange}
            />
          }
          label={schema.name}
        />
      </Typography>

      {/* Child Checkboxes */}
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        {schema.items.map((item, index) => (
          <FormControlLabel
            key={item.name}
            control={
              <Checkbox
                checked={checked[index]} // Controlled state for each child checkbox
                onChange={handleChildChange(index)}
              />
            }
            label={item.name}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TablesTab;
