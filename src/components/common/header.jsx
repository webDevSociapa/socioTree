import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" color="inherit" elevation={2} sx={{background:"#9fbcbf"}}>
      <Toolbar>
        {/* Logo */}
        <img
          src="./logo.png"
          alt="logo"
          width="50"
          height="50"
          style={{ marginRight: '16px' }}
        />
        {/* Navigation Links */}
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 3 }}>
          <Typography variant="h6" component="div">
            Templates
          </Typography>
          <Typography variant="h6" component="div">
            Marketplace
          </Typography>
          <Typography variant="h6" component="div">
            Discover
          </Typography>
          <Typography variant="h6" component="div">
            Pricing
          </Typography>
          <Typography variant="h6" component="div">
            Learn
          </Typography>
        </Box>

        {/* Authentication Buttons */}
        <Button color="inherit" sx={{background:"#EFF0EC",mr:2}}>Log in</Button>
        <Button variant="contained" color="success" sx={{background:"#414141"}}>
          Sign up free
        </Button>
      </Toolbar>
    </AppBar>
  );
}
