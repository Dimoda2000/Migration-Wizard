import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

export default function LinearDeterminate({ onBack, isSuccess }) {
  const [progress, setProgress] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          setCompleted(true); // Set completion state to true when progress reaches 100
          clearInterval(timer); // Stop the timer once completed
          return oldProgress;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
      }}
    >
      {!completed && (
        <Box
          sx={{
            width: '300px',
            padding: 2,
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      )}
      {completed && (
        <Box
          sx={{
            width: '400px',
            height: '185px',
            textAlign: 'center',
            backgroundColor: '#fff',
            padding: 3,
            borderRadius: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          {isSuccess ? (
            <>
              <CheckCircleIcon
                sx={{ fontSize: 50, color: 'green', marginBottom: 1 }}
              />
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Project Created Successfully
              </Typography>
            </>
          ) : (
            <>
              <ErrorIcon sx={{ fontSize: 50, color: 'red', marginBottom: 1 }} />
              <Typography variant="h6" sx={{ marginBottom: 2, color: 'red' }}>
                Project Creation Failed
              </Typography>
            </>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={onBack} // Call the passed function to handle "Back"
            sx={{
              width: '150px',
              marginTop: 1,
            }}
          >
            Back
          </Button>
        </Box>
      )}
    </Box>
  );
}
