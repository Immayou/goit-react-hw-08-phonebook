import { Link, Outlet } from 'react-router-dom';
import { Header } from '../AppBar/AppBar.styled';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function SharedAppBar() {
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
            News
          </Typography>
          <Button color="inherit" href="/goit-react-hw-08-phonebook/login">
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// const AppBar = ({ children }) => {
//   return (
//     <>
//       <Header>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="registration">Register</Link>
//           <Link to="login">Log out</Link>
//         </nav>
//       </Header>
//       <Outlet />
//     </>
//   );
// };

// export default AppBar;
