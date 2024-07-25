import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Link,
  Box,
  Paper,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import imageList from '../pageStyle/homepageImage';

const HomePage: React.FC = () => {
  const handleCardClick = () => {
    window.location.href = '/food-blog/food'; 
  };

  return (
    <Container maxWidth="lg">
      <AppBar position="static" sx={{ backgroundColor: 'black', mb: 4 }}>
        <Toolbar style={{ justifyContent: 'center', gap: '30px' }}>
          {['Appetizers', 'Bread & Cakes', 'Dessert', 'Drinks', 'Entrees', 'Sauces', 'Side Dishes', 'Soup', 'Vegetarian'].map((item, index) => (
            <Button key={index} color="inherit">{item}</Button>
          ))}
        </Toolbar>
      </AppBar>

      <Typography variant="h4" align="center" gutterBottom>
        Bread & Cakes
      </Typography>

      <Grid container spacing={4}>
        {imageList.slice(0, 6).map((src, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card onClick={handleCardClick} sx={{ cursor: 'pointer' }}>
              <CardMedia
                component="img"
                alt={`Image ${index + 1}`}
                height="140"
                image={src}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Product Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet amet tristique ipsum aliquam. Vulputate dolor, nunc phasellus vestibulum turpis posuere turpis eget vel.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', m: 4 }}>
        <Button variant="contained" sx={{ backgroundColor: '#2c2c6c', color: 'white' }}>
          See Products
        </Button>
      </Box>

      <Typography variant="h4" align="center" gutterBottom>
        Healthy & Cookture
      </Typography>

      {['Nutrition Advice', 'Healthy Tips'].map((section, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ backgroundColor: '#e0e0e0', p: 2, borderRadius: '8px', display: 'inline-block', mb: 2 }}>
            {section}
          </Typography>
          <Grid container spacing={4}>
            {[...Array(4)].map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">
                    Title
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet amet tristique ipsum aliquam. Vulputate dolor, nunc phasellus vestibulum turpis posuere turpis eget vel.
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      <Typography variant="h4" align="center" gutterBottom>
        Blog Posts
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Blog Posts</Typography>
        <Link href="#" underline="hover">
          More
        </Link>
      </Box>

      <Grid container spacing={4}>
        {[...Array(2)].map((_, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={`Blog Post ${index + 1}`}
                height="140"
                image={imageList[index % imageList.length]} 
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Post Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Author: Jane Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`Posted ${Math.floor(Math.random() * 60)} minutes ago`} 
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" endIcon={<ArrowForward />}>Read More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Oven Temperatures in
        </Typography>
        <Grid container spacing={4}>
          {[...Array(2)].map((_, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="body2">
                  Temp Content Here...
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
