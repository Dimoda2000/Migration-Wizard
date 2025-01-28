import React, { useState } from 'react';
import { Checkbox, FormControlLabel, Box } from '@mui/material';

const SchemaWithCheckbox = ({ schema }) => {
  const [checked, setChecked] = useState(
    schema.items.map((item) => item.selected)
  );

  const handleParentChange = (event) => {
    const newChecked = Array(checked.length).fill(event.target.checked);
    setChecked(newChecked);
  };

  const handleChildChange = (index) => (event) => {
    const newChecked = [...checked];
    newChecked[index] = event.target.checked;
    setChecked(newChecked);
  };

  const isIndeterminate =
    checked.some((isChecked) => isChecked) &&
    !checked.every((isChecked) => isChecked);

  return (
    <Box sx={{ mb: 3 }}>
      <FormControlLabel
        control={
          <Checkbox
            indeterminate={isIndeterminate}
            checked={checked.every((isChecked) => isChecked)}
            onChange={handleParentChange}
          />
        }
        label={schema.name}
      />
      <Box sx={{ pl: 4 }}>
        {schema.items.map((item, index) => (
          <FormControlLabel
            key={item.name}
            control={
              <Checkbox
                checked={checked[index]}
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

export default SchemaWithCheckbox;
