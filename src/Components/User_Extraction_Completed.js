import React, { useState } from 'react';
import { Button, Box, List, ListItem, ListItemText, Checkbox, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

function User_Extraction_Completed() {
  const [activeButton, setActiveButton] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(activeButton === button ? null : button);
    setSelectedItem(null); // Reset selected item when switching categories
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderList = () => {
    if (activeButton === 'Tables') {
      return Array.from({ length: 10 }, (_, i) => `Table ${i + 1}`);
    } else if (activeButton === 'Views') {
      return Array.from({ length: 10 }, (_, i) => `View ${i + 1}`);
    } else if (activeButton === 'Stored Procedures') {
      return Array.from({ length: 10 }, (_, i) => `Stored Procedure ${i + 1}`);
    }
    return [];
  };

  return (
    <Box mt={2} ml={2} position="static">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box display="flex">
          {['Tables', 'Views', 'Stored Procedures'].map((button) => (
            <Button
              key={button}
              variant={activeButton === button ? 'contained' : 'outlined'}
              color="primary"
              sx={{ fontWeight: 'bold', mx: 1 }}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </Button>
          ))}
        </Box>
        <Button variant="contained" color="secondary" sx={{ fontWeight: 'bold', mr: 2 }} href="/ExtractedCodeViewPage">
          PREVIEW
        </Button>
      </Box>
      {activeButton && (
        <>
          <Autocomplete
            disablePortal
            options={renderList()}
            sx={{ width: 300, mb: 2 }}
            renderInput={(params) => <TextField {...params} label={`Select ${activeButton}`} />}
            onChange={(event, value) => setSelectedItem(value)}
          />
          {/* <List>
            {renderList().map((item) => (
              <ListItem
                key={item}
                button
                selected={selectedItem === item}
                onClick={() => handleItemClick(item)}
              >
                <Checkbox
                  checked={selectedItem === item}
                  onChange={() => handleItemClick(item)}
                />
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List> */}
        </>
      )}
    </Box>
  );
}

export default User_Extraction_Completed;
