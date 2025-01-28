import React from "react";
import Header from "./Header"; // Import Header component
import Project_Tab from "./Project_Tab";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UserAccountTab from "./UserAccountTab";
import Project_create_Sussesful from "./Project_create_Sussecful";
import HeaderWithButton from "./Header_with_Button";
import DashboardTab from "./DashboardTab";

// Rename ProjectView to TabPanel for clarity
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Render the Header component */}
      {/* <HeaderWithButton /> */}

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="PROJECT" {...a11yProps(0)} />
          <Tab label="USERS" {...a11yProps(1)} />
          <Tab label="Dashboard" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Project_Tab />
        {/* <Project_create_Sussesful/> */}
      </TabPanel>

      <TabPanel value={value} index={1}>
        <UserAccountTab />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <DashboardTab />
      </TabPanel>
    </Box>
  );
}
