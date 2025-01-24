import React from 'react';
import { Box, Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';


const CompletedConversion = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Project &gt; Tables
      </Typography>
      <TreeView defaultExpandAll>
        <TreeItem nodeId="1" id="1" label={<Box sx={{ display: 'flex', alignItems: 'center' }}><FolderIcon sx={{ marginRight: '8px' }} />Watawala</Box>} />
        <TreeItem nodeId="2" id="2" label="Table1" />
        <TreeItem nodeId="3" id="3" label="Table2" />
        <TreeItem nodeId="4" id="4" label="Table3" />
        <TreeItem nodeId="5" id="5" label="Table4" />
        <TreeItem nodeId="6" id="6" label="Table5" />
        <TreeItem nodeId="7" id="7" label="Table6" />
        <TreeItem nodeId="8" id="8" label="Views" />
        <TreeItem nodeId="9" id="9" label="Stored Procedures" />
      </TreeView>
    </Box>
  );
};

export default CompletedConversion;
