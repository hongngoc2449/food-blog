import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import '@fontsource/volkhov';
import '@fontsource/oxygen';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/food-blog');
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: 'white', 
        color: 'black' 
      }}
    >
      <Toolbar>
        <Typography 
          variant="h4" 
          component="div" 
          sx={{ 
            fontFamily: 'Volkhov', 
            cursor: 'pointer', 
            color: 'black',
            flexGrow: 1
          }}
          onClick={handleTitleClick}
        >
          Food Blog
        </Typography>
        <Button 
          color="inherit" 
          component={Link} 
          to="/food-blog" 
          style={{ fontFamily: 'Oxygen', color: 'black' }}
        >
          Home
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to="/contact" 
          style={{ fontFamily: 'Oxygen', color: 'black' }}
        >
          About us
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to="/blog" 
          style={{ fontFamily: 'Oxygen', color: 'black' }}
        >
          Blog Post
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to="/login" 
          style={{ fontFamily: 'Oxygen', color: 'black' }}
        >
          Log In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
