import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function SelectableCollapsibleList({ title, items, links }) {
  const [open, setOpen] = React.useState(false);

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
    // Simulate an API call to fetch dynamic data
    const fetchData = async () => {
      const response = {
        tables: ['Dynamic Table 1', 'Dynamic Table 2', 'Dynamic Table 3'],
        views: ['Dynamic View 1', 'Dynamic View 2', 'Dynamic View 3'],
        storedProcedures: ['Dynamic SP 1', 'Dynamic SP 2', 'Dynamic SP 3'],
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
          links={data.tables.map(() => '/ConversionResultPage')} // Adjust links as needed
        />
        <SelectableCollapsibleList
          title="Views"
          items={data.views}
          links={data.views.map(() => '/ConversionResultPage')} // Adjust links as needed
        />
        <SelectableCollapsibleList
          title="Stored Procedures"
          items={data.storedProcedures}
          links={data.storedProcedures.map(() => '/ConversionResultPage')} // Adjust links as needed
        />
      </List>

      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <Button variant="contained" color="secondary" href="/DashboardPage">
          BACK
        </Button>
      </Box>
    </Box>
  );
}
