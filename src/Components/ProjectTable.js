import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Project_Tab from "./Project_Tab";
import UserAccountTab from "./UserAccountTab";

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

export default function ProjectTable({ onBack, projectName }) {
  const [selectedTables, setSelectedTables] = useState([]);
  const [value, setValue] = useState(0);

  const tables = [
    "Table1",
    "Table2",
    "Table3",
    "Table4",
    "Table5",
    "Table6",
    "Table7",
    "Table8",
  ];

  const handleTableSelection = (table) => {
    setSelectedTables((prevSelected) =>
      prevSelected.includes(table)
        ? prevSelected.filter((t) => t !== table)
        : [...prevSelected, table]
    );
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="PROJECT" {...a11yProps(0)} />
          <Tab label="USERS" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {/* Original Table Selection Functionality */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          height="100vh"
          p={2}
        >
          <Box mb={2}>
            <Typography
              variant="subtitle1"
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "0.975rem",
                marginTop: "-5px",
                textAlign: "left",
              }}
            >
              Home &gt; {projectName} &gt; Select Tables
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            gap={1}
            mb={4}
            flexGrow={1}
            overflow="auto"
          >
            {tables.map((table) => (
              <FormControlLabel
                key={table}
                control={
                  <Checkbox
                    checked={selectedTables.includes(table)}
                    onChange={() => handleTableSelection(table)}
                  />
                }
                label={table}
              />
            ))}
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            gap={2}
            position="fixed"
            bottom={16}
            right={16}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "white",
                color: "blue",
                textTransform: "none",
                fontWeight: "bold",
                width: "120px",
              }}
              href="/ProjectViewPage"
            >
              Back
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "blue",
                color: "white",
                textTransform: "none",
                fontWeight: "bold",
                width: "140px",
              }}
              href="/CodeView"
              disabled={selectedTables.length === 0}
            >
              Migrate
            </Button>
          </Box>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <UserAccountTab />
      </TabPanel>
    </Box>
  );
}



// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Typography from "@mui/material/Typography";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
// import PropTypes from "prop-types";
// import Project_Tab from "./Project_Tab";
// import UserAccountTab from "./UserAccountTab";

// export function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function ProjectTable({ onBack, projectName }) {
//   const [selectedTables, setSelectedTables] = useState([]);
//   const [value, setValue] = useState(0);

//   const tables = [
//     "Table1",
//     "Table2",
//     "Table3",
//     "Table4",
//     "Table5",
//     "Table6",
//     "Table7",
//     "Table8",
//   ];

//   const handleTableSelection = (table) => {
//     setSelectedTables((prevSelected) =>
//       prevSelected.includes(table)
//         ? prevSelected.filter((t) => t !== table)
//         : [...prevSelected, table]
//     );
//   };

//   const handleTabChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
//           <Tab label="PROJECT" {...a11yProps(0)} />
//           <Tab label="USERS" {...a11yProps(1)} />
//         </Tabs>
//       </Box>

//       <TabPanel value={value} index={0}>
//         <Box
//           display="flex"
//           flexDirection="column"
//           justifyContent="flex-start"
//           height="100vh"
//           p={2}
//         >
//           {/* Breadcrumbs for File Path */}
//           <Box mb={2}>
//             <Breadcrumbs aria-label="breadcrumb">
//               <Link underline="hover" color="inherit" href="/home">
//                 Home
//               </Link>
//               <Link underline="hover" color="inherit" href={`/project/${projectName}`}>
//                 {projectName || "Project"}
//               </Link>
//               <Typography color="text.primary">Select Tables</Typography>
//             </Breadcrumbs>
//           </Box>

//           <Box
//             display="flex"
//             flexDirection="column"
//             gap={1}
//             mb={4}
//             flexGrow={1}
//             overflow="auto"
//           >
//             {tables.map((table) => (
//               <FormControlLabel
//                 key={table}
//                 control={
//                   <Checkbox
//                     checked={selectedTables.includes(table)}
//                     onChange={() => handleTableSelection(table)}
//                   />
//                 }
//                 label={table}
//               />
//             ))}
//           </Box>

//           <Box
//             display="flex"
//             justifyContent="flex-end"
//             gap={2}
//             position="fixed"
//             bottom={16}
//             right={16}
//           >
//             <Button
//               variant="contained"
//               style={{
//                 backgroundColor: "white",
//                 color: "blue",
//                 textTransform: "none",
//                 fontWeight: "bold",
//                 width: "120px",
//               }}
//               href="/ProjectViewPage"
//             >
//               Back
//             </Button>
//             <Button
//               variant="contained"
//               style={{
//                 backgroundColor: "blue",
//                 color: "white",
//                 textTransform: "none",
//                 fontWeight: "bold",
//                 width: "140px",
//               }}
//               href="/CodeView"
//               disabled={selectedTables.length === 0}
//             >
//               Migrate
//             </Button>
//           </Box>
//         </Box>
//       </TabPanel>

//       <TabPanel value={value} index={1}>
//         <UserAccountTab />
//       </TabPanel>
//     </Box>
//   );
// }
