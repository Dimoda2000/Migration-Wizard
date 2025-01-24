import Button from '@mui/material/Button';

export const MuiButton = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '20px', // Distance from the bottom of the page
        right: '20px',  // Distance from the right side of the page
        display: 'flex',
        flexDirection: 'row', // Stack buttons vertically
        gap: '10px', // Add spacing between buttons
      }}
    >
      {/* Sign Up Button */}
      <Button
        variant="contained"
        id="sign-up-btn"
        style={{
            backgroundColor: '#1976d2',
            color: '#fff',
            padding: '10px 20px',
            fontSize: '16px',
            }}
         >
            Sign Up
      </Button>

      {/* Back Button */}
      <Button
        variant="outlined"
        id="back-btn"
        style={{
          borderColor: '#1976d2',
          color: '#1976d2',
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        Back
      </Button>
    </div>
  );
};


