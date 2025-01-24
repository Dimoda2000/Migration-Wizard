import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function SelectableCollapsibleList({ title, items, links }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick} sx={{ paddingLeft: 2 }}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item, index) => (
            <ListItem button key={index} sx={{ paddingLeft: 4 }}>
              <a href={links[index] || '#'} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item} />
              </a>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}

export default function Tab1() {
  const [data, setData] = useState({
    tables: [],
    views: [],
    storedProcedures: [],
  });

  useEffect(() => {
    // Simulated fetch call to get data dynamically
    const fetchData = async () => {
      // Replace with your API call or dynamic data source
      const response = {
        tables: ['Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5', 'Table 6'],
        views: ['View 1', 'View 2', 'View 3', 'View 4', 'View 5', 'View 6'],
        storedProcedures: ['SP 1', 'SP 2', 'SP 3', 'SP 4', 'SP 5', 'SP 6'],
      };
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <Box padding={3} border={1} borderColor="grey.300" borderRadius={2}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Extracted DDL
      </Typography>
      <List>
        <SelectableCollapsibleList
          title="Tables"
          items={data.tables}
          links={data.tables.map(() => '/ConversionResultPage')} // Example links
        />
        <SelectableCollapsibleList
          title="Views"
          items={data.views}
          links={data.views.map(() => '/ConversionResultPage')} // Example links
        />
        <SelectableCollapsibleList
          title="Stored Procedures"
          items={data.storedProcedures}
          links={data.storedProcedures.map(() => '/ConversionResultPage')} // Example links
        />
      </List>

      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <Button variant="contained" color="primary" sx={{ marginRight: 2 }} href="/ServerSelectionPage">
          Add more DDL
        </Button>
        <Button variant="contained" color="secondary" href="/DashboardPage">
          BACK
        </Button>
      </Box>
    </Box>
  );
}
