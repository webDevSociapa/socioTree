import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ mx: "30px",my:"10px" }}> {/* Wrap the AppBar inside a Box */}
      <AppBar position="static" color="inherit" elevation={2} sx={{ background: "#9fbcbf", borderRadius: "8px" }}>
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
            {['Templates', 'Marketplace', 'Discover', 'Pricing', 'Learn'].map((item) => (
              <Typography key={item} variant="h6" component="div">
                {item}
              </Typography>
            ))}
          </Box>

          {/* Authentication Buttons */}
          <Button color="inherit" sx={{ background: "#EFF0EC", mr: 2, fontFamily: "arial", fontWeight: "400" }}>
            Log in
          </Button>
          <Button variant="contained" color="success" sx={{ background: "#414141" }}>
            Sign up free
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
