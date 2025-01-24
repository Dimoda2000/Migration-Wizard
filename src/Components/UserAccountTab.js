import React, { useState } from 'react';
import { Button } from '@mui/material';
import DeleteUser from './DeleteUser';

const UserAccountTab = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'john_doe', password: 'password123', role: 'Admin', email: 'john@example.com' },
    { id: 2, username: 'jane_doe', password: 'password456', role: 'User', email: 'jane@example.com' },
    { id: 3, username: 'sam_smith', password: 'password789', role: 'Editor', email: 'sam@example.com' },
    { id: 4, username: 'alex_jones', password: 'password101', role: 'Viewer', email: 'alex@example.com' },
    { id: 5, username: 'maria_rodriguez', password: 'password112', role: 'Admin', email: 'maria@example.com' },
  ]);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDeleteClick = (userId) => {
    setSelectedUserId(userId);
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDeleteDialogOpen(false);
    setSelectedUserId(null);
  };

  const handleConfirmDelete = () => {
    setUsers(users.filter(user => user.id !== selectedUserId));
    handleCloseDialog();
  };

  return (
    <div>
      <h2>User Accounts</h2>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ height: '50px' }}>
            <th>User ID</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Role</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={{ height: '50px' }}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="contained" color="primary" href = "/Update_userDetail_page" >
                  Update
                </Button>
              </td>
              <td>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDeleteClick(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DeleteUser
        open={isDeleteDialogOpen}
        handleClose={handleCloseDialog}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default UserAccountTab;
