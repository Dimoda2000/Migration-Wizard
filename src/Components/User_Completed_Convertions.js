import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const User_Completed_Convertions = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {/* Main Content */}
            <Box sx={{ padding: 2 }}>
                {/* Topic */}
                <Typography variant="h4" gutterBottom>
                    PROJECT
                </Typography>

                {/* Tree View */}
                <TreeView
                    defaultCollapseIcon={<ArrowDropDownIcon />}
                    defaultExpandIcon={<ArrowRightIcon />}
                    sx={{ maxWidth: 400, marginTop: 2 }}
                >
                    {/* Main Option: Table */}
                    <TreeItem nodeId="1" label="Table">
                        <TreeItem nodeId="2" label="Table 1" />
                        <TreeItem nodeId="3" label="Table 2" />
                        <TreeItem nodeId="4" label="Table 3" />
                        <TreeItem nodeId="5" label="Table 4" />
                    </TreeItem>

                    {/* Main Option: View */}
                    <TreeItem nodeId="6" label="View">
                        <TreeItem nodeId="7" label="Table 1" />
                        <TreeItem nodeId="8" label="Table 2" />
                        <TreeItem nodeId="9" label="Table 3" />
                        <TreeItem nodeId="10" label="Table 4" />
                    </TreeItem>

                    {/* Main Option: Stored Procedures */}
                    <TreeItem nodeId="11" label="Stored Procedures">
                        <TreeItem nodeId="12" label="Table 1" />
                        <TreeItem nodeId="13" label="Table 2" />
                        <TreeItem nodeId="14" label="Table 3" />
                        <TreeItem nodeId="15" label="Table 4" />
                    </TreeItem>
                </TreeView>
            </Box>

            {/* BACK Button */}
            <Box sx={{ padding: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="contained" color="primary">
                    BACK
                </Button>
            </Box>
        </Box>
    );
};

export default User_Completed_Convertions;
