import React from 'react';

import { Box, AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
  const footerStyle = {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px 0',
    boxShadow: 'none', 
  };

  const logoStyle = {
    width: '154px',
    height: 'auto',
  };

  return (
    <AppBar position="static" style={footerStyle}>
      <Toolbar>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <img src="/assets/logo.svg" alt="Logo" style={logoStyle} />
        </Box>
      </Toolbar>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Designed and Developed by{' '}
          <a style={{ textDecoration: 'none' }}
            href="https://code-xperts.com/"
            target="_blank"
            title="Code Xperts - Quality Conscious Developers"
            rel="noopener noreferrer"
          >
            <Typography component="span" sx={{ color: 'primary.main', textDecoration: 'none' }}>
              Code Xperts
            </Typography>
          </a>
        </Typography>
      </Box>
    </AppBar>
  );
}

export default Footer;
