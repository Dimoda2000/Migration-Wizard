import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useTheme } from '@mui/material/styles';
import { Box, Button, TextField, Typography, Link, InputAdornment, IconButton } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import img from './Images/image.jpg';
 
const signIn = async (formData) => {
  const email = formData.email;
  const password = formData.password;
  alert(`Signing in with credentials: ${email}, ${password}`);
};
 
export default function LoginComponent() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);
 
  const handleLogin = () => {
    if (email !== 'test@example.com' || password !== 'password') {
      setError(true);
    } else {
      setError(false);
      signIn({ email, password });
    }
  };
 
  return (
    <AppProvider theme={theme}>
      <Box display="flex" alignItems="center" justifyContent="center" height="100vh" padding={2}>
        <Box
          flex={1}
          maxWidth="400px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          marginLeft={6}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment position="end">
            //       <Button color="primary" size="small">Edit</Button>
            //     </InputAdornment>
            //   ),
            // }}
            margin="normal"
          />
 
          <TextField
            label="Password*"
            variant="outlined"
            fullWidth
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
            helperText={error ? 'Wrong email or password' : ''}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            margin="normal"
          />
 
          <Link href="#" variant="body2" color="primary" underline="hover" sx={{ mt: 1 }}>
            Forgot password?
          </Link>
 
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, textTransform: 'none' }}
            onClick={handleLogin}
          >
            Continue
          </Button>
 
         
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, textTransform: 'none' }}
            href = "/DashboardPage"
          >
            Test Continue
          </Button>
 
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don’t have an account?{' '}
            <Link href="/RegisterPage" color="primary" underline="hover">
              Sign up
            </Link>
          </Typography>
        </Box>
 
        <Box flex={1} display="flex" justifyContent="center" alignItems="center">
          <img src={img} alt="Sign-in illustration" style={{ maxWidth: '60%', height: 'auto', borderRadius: '8px' }} />
        </Box>
      </Box>
    </AppProvider>
  );
}