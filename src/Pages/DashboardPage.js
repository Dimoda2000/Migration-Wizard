// import React from "react";
// import { Box, Button, Typography, Grid } from "@mui/material";
// import FolderIcon from "@mui/icons-material/Folder";
// import { Link } from "react-router-dom"; // Import Link

// const DashboardPage = () => {
//   // Handler for folder clicks
//   const handleFolderClick = (folderName) => {
//     alert(`You clicked on ${folderName}`);
//   };

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif" }}>
//       <Box 
//         sx={{ 
//           display: "flex", 
//           flexDirection: "column", 
//           alignItems: "flex-start", 
//           padding: { xs: "5%", sm: "2%", md: "2%" }, 
//           minHeight: "calc(100vh - 10%)" 
//         }}
//       >
        
//         {/* Recent Projects */}
//         <Typography 
//           variant="h6" 
//           sx={{ 
//             fontWeight: "bold", 
//             marginBottom: "1%", 
//             alignSelf: "flex-start" 
//           }}
//         >
//           Recent Projects
//         </Typography>
//         <Grid container spacing={2}>
//           {["Watawala", "SLT", "HUTCH", "LB"].map((project) => (
//             <Grid item xs={12} sm={6} md={3} key={project}>
//               {project === "LB" ? (
//                 <Link to="/ExtractionConversion" style={{ textDecoration: "none" }}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       padding: { xs: "5%", sm: "3%", md: "2%" },
//                       border: "1px solid #ddd",
//                       borderRadius: "4px", 
//                       backgroundColor: "#f9f9f9",
//                       cursor: "pointer",
//                     }}
//                   >
//                     <FolderIcon sx={{ color: "#fbc02d", marginRight: "5%" }} />
//                     <Typography>{project}</Typography>
//                   </Box>
//                 </Link>
//               ) : (
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     padding: { xs: "5%", sm: "3%", md: "2%" },
//                     border: "1px solid #ddd",
//                     borderRadius: "4px",
//                     backgroundColor: "#f9f9f9",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => handleFolderClick(project)}
//                 >
//                   <FolderIcon sx={{ color: "#fbc02d", marginRight: "5%" }} />
//                   <Typography>{project}</Typography>
//                 </Box>
//               )}
//             </Grid>
//           ))}
//         </Grid>

//         {/* New Projects */}
//         <Typography 
//           variant="h6" 
//           sx={{ 
//             fontWeight: "bold", 
//             marginBottom: "1%", 
//             alignSelf: "flex-start" 
//           }}
//         >
//           New Projects
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6} md={3}>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 padding: { xs: "5%", sm: "3%", md: "2%" },
//                 border: "1px solid #ddd",
//                 borderRadius: "4px",  
//                 backgroundColor: "#f9f9f9",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleFolderClick("Dialog")}
//             >
//               <FolderIcon sx={{ color: "#fbc02d", marginRight: "5%" }} />
//               <Typography>Dialog</Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Footer */}
//       <Box
//         sx={{
//           backgroundColor: "#0a74da",
//           height: "5%",  
//           width: "100%",
//         }}
//       />
//     </div>
//   );
// };

// export default DashboardPage;


import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { Link } from "react-router-dom"; // Import Link

// JSON variable for projects
const projectsData = {
  recentProjects: [
    { name: "Watawala", link: null },
    { name: "SLT", link: null },
    { name: "HUTCH", link: null },
    { name: "LB", link: "/ExtractionConversion" }, // LB has a specific link
  ],
  newProjects: [
    { name: "Dialog", link: null }, // No specific link for now
  ],
};

const DashboardPage = () => {
  // Handler for folder clicks
  const handleFolderClick = (folderName) => {
    alert(`You clicked on ${folderName}`);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "flex-start", 
          padding: { xs: "5%", sm: "2%", md: "2%" }, 
          minHeight: "calc(100vh - 10%)" 
        }}
      >
        {/* Recent Projects */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: "bold", 
            marginBottom: "1%", 
            alignSelf: "flex-start" 
          }}
        >
          Recent Projects
        </Typography>
        <Grid container spacing={2}>
          {projectsData.recentProjects.map((project) => (
            <Grid item xs={12} sm={6} md={3} key={project.name}>
              {project.link ? (
                <Link to={project.link} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: { xs: "5%", sm: "3%", md: "2%" },
                      border: "1px solid #ddd",
                      borderRadius: "4px", 
                      backgroundColor: "#f9f9f9",
                      cursor: "pointer",
                    }}
                  >
                    <FolderIcon sx={{ color: "#fbc02d", marginRight: "5%" }} />
                    <Typography>{project.name}</Typography>
                  </Box>
                </Link>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: { xs: "5%", sm: "3%", md: "2%" },
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    backgroundColor: "#f9f9f9",
                    cursor: "pointer",
                  }}
                  onClick={() => handleFolderClick(project.name)}
                >
                  <FolderIcon sx={{ color: "#fbc02d", marginRight: "5%" }} />
                  <Typography>{project.name}</Typography>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>

        {/* New Projects */}
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: "bold", 
            marginBottom: "1%", 
            alignSelf: "flex-start" 
          }}
        >
          New Projects
        </Typography>
        <Grid container spacing={2}>
          {projectsData.newProjects.map((project) => (
            <Grid item xs={12} sm={6} md={3} key={project.name}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: { xs: "5%", sm: "3%", md: "2%" },
                  border: "1px solid #ddd",
                  borderRadius: "4px",  
                  backgroundColor: "#f9f9f9",
                  cursor: "pointer",
                }}
                onClick={() => handleFolderClick(project.name)}
              >
                <FolderIcon sx={{ color: "#fbc02d", marginRight: "5%" }} />
                <Typography>{project.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#0a74da",
          height: "5%",  
          width: "100%",
        }}
      />
    </div>
  );
};

export default DashboardPage;
