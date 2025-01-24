import * as React from "react";
import PropTypes from "prop-types";
import { Box, Tabs, Tab } from "@mui/material";
import Tab1 from "../Components/tab1";
import Tab2 from "../Components/tab2";

// TabPanel component for rendering tab content
export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Accessibility props for tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ExtractedDDLPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* Full-width line with tabs aligned to the left */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "100%",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="top-left tabs example"
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "flex-start",
            },
          }}
        >
          <Tab label="Extracted DDL" {...a11yProps(0)} />
          <Tab label="Completed Conversion" {...a11yProps(1)} />
        </Tabs>
      </Box>

      {/* Tab content */}
      <TabPanel value={value} index={0}>
        <Tab1 />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Tab2 />
      </TabPanel>
    </Box>
  );
}
