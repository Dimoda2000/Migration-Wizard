import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Project_Tab() {
  const navigate = useNavigate(); // React Router's navigation hook
  const [open, setOpen] = React.useState(false);
  const [projectName, setProjectName] = React.useState("");
  const [projects, setProjects] = React.useState([
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
  ]);
  const [editIndex, setEditIndex] = React.useState(null);
  const [renameDialogOpen, setRenameDialogOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setProjectName("");
  };

  const handleCreate = () => {
    if (projectName.trim() !== "") {
      setProjects([...projects, projectName]);
    }
    handleClose();
  };

  const handleDelete = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleRename = (index) => {
    setEditIndex(index);
    setProjectName(projects[index]);
    setRenameDialogOpen(true);
  };

  const handleRenameConfirm = () => {
    if (projectName.trim() !== "") {
      const updatedProjects = [...projects];
      updatedProjects[editIndex] = projectName;
      setProjects(updatedProjects);
    }
    setRenameDialogOpen(false);
    setEditIndex(null);
    setProjectName("");
  };

  const handleRenameCancel = () => {
    setRenameDialogOpen(false);
    setEditIndex(null);
    setProjectName("");
  };

  const handleProjectClick = (project) => {
    // Navigate to AddServerPage2 with the project name as a query parameter or state
    navigate("/AddserverPage2", { state: { projectName: project } });
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Autocomplete
          disablePortal
          options={projects.map((project) => ({ label: project }))}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Search Project" />}
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ height: 56 }}
          onClick={handleOpen}
        >
          Create New Project
        </Button>
      </Box>

      <p style={{ textAlign: "left", marginTop: "16px", fontWeight: "bold" }}>Recent Projects</p>
      <Stack spacing={2} direction="column" sx={{ mt: 2 }}>
        {projects.map((project, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px 16px",
            }}
          >
            <Button
              variant="text"
              startIcon={<FolderRoundedIcon />}
              sx={{ textTransform: "none", fontSize: "16px", flexGrow: 1, justifyContent: "flex-start" }}
              onClick={() => handleProjectClick(project)} // Navigate on click
            >
              {project}
            </Button>
            <IconButton onClick={() => handleRename(index)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Stack>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent>
          <TextField
            label="Project Name"
            fullWidth
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleCreate} variant="contained" color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={renameDialogOpen} onClose={handleRenameCancel} fullWidth>
        <DialogTitle>Rename Project</DialogTitle>
        <DialogContent>
          <TextField
            label="New Project Name"
            fullWidth
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRenameCancel} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleRenameConfirm} variant="contained" color="primary">
            Rename
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
