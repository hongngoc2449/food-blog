import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/pages/MainLayout';
import HomePage from './components/pages/homepage';
import BlogPage from './components/pages/blogPage';
import ContactPage from './components/pages/contactPage';
import LoginPage from './components/pages/loginPage';
import SignupPage from './components/pages/signupPage';
import ErrorPage from './components/pages/errorPage';
import FoodPage from './components/pages/foodPage';
import ForgotPassPage from './components/pages/forgotPassPage';
import SinglePostPage from './components/pages/singlePostPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="food" element={<FoodPage />} />
          <Route path="forgot-password" element={<ForgotPassPage />} />
          <Route path="post" element={<SinglePostPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;