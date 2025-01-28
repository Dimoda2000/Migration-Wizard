import React, { useState } from 'react';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';

const StoredProceduresTab = ({ schemas }) => {
  return (
    <Box>
      {schemas.map((schema) => (
        <SchemaWithCheckbox key={schema.name} schema={schema} />
      ))}
    </Box>
  );
};

const SchemaWithCheckbox = ({ schema }) => {
  const [checked, setChecked] = useState(Array(schema.items.length).fill(false));

  const handleParentChange = (event) => {
    const newState = Array(checked.length).fill(event.target.checked);
    setChecked(newState);
  };

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
              checked={checked.every((value) => value)}
              indeterminate={checked.some((value) => value) && !checked.every((value) => value)}
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
            control={<Checkbox checked={checked[index]} onChange={handleChildChange(index)} />}
            label={item.name}
          />
        ))}
      </Box>
    </Box>
  );
};

export default StoredProceduresTab;
