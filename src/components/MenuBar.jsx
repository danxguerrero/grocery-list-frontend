import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  SignOutButton,
} from '@clerk/clerk-react';

export const MenuBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Groceries
          </Typography>
          
          {/* Show authentication buttons based on user state */}
          <SignedOut>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <SignInButton mode="modal">
                <Button color="inherit">Login</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button color="inherit" variant="outlined" sx={{ borderColor: 'white', color: 'white' }}>
                  Sign Up
                </Button>
              </SignUpButton>
            </Box>
          </SignedOut>
          
          <SignedIn>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: {
                      width: 32,
                      height: 32,
                    }
                  }
                }}
              />
            </Box>
          </SignedIn>
        </Toolbar>
      </AppBar>
    </Box>
  );
}