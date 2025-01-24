import React from 'react';
import { Box, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ExtractedDDL = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Project &gt; Tables
      </Typography>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        defaultExpandAll
      >
        {/* Main folder */}
        <TreeItem nodeId="1" label="Tables">
          <TreeItem nodeId="2" label="Table 1" />
          <TreeItem nodeId="3" label="Table 2" />
          <TreeItem nodeId="4" label="Table 3" />
          <TreeItem nodeId="5" label="Table 4" />
          <TreeItem nodeId="6" label="Table 5" />
          <TreeItem nodeId="7" label="Table 6" />
        </TreeItem>
        <TreeItem nodeId="8" label="Views">
          <TreeItem nodeId="9" label="View 1" />
          <TreeItem nodeId="10" label="View 2" />
        </TreeItem>
        <TreeItem nodeId="11" label="Stored Procedures">
          <TreeItem nodeId="12" label="Procedure 1" />
          <TreeItem nodeId="13" label="Procedure 2" />
        </TreeItem>
      </TreeView>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <Typography>Add more DDL</Typography>
        <AddCircleOutlineIcon color="primary" sx={{ marginLeft: '8px', cursor: 'pointer' }} />
      </Box>
    </Box>
  );
};

export default ExtractedDDL;
