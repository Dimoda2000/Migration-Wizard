import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate({ onAnimationComplete }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer); // Stop the animation after 100%
          onAnimationComplete(); // Notify the parent component that animation is complete
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [onAnimationComplete]);

  return (
    <Box sx={{ width: '50%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}




