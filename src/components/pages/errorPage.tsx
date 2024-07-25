import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          Error 404: Page Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          Oops! The page you're looking for doesn't exist.
        </Typography>
        <Typography variant="body1" gutterBottom>
          It looks like you took a wrong turn. Don't worry, it happens to the best of us! Here are a few options to help you get back on track:
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            component={Link}
            to="/food-blog"
            variant="contained"
            color="primary"
            size="large"
          >
            Go back to the Homepage
          </Button>
          <Button
            component={Link}
            to="/latest-posts"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ ml: 2 }}
          >
            Browse our Latest Posts
          </Button>
          <Button
            component={Link}
            to="/categories"
            variant="outlined"
            color="primary"
            size="large"
            sx={{ ml: 2 }}
          >
            Visit our Categories
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ErrorPage;