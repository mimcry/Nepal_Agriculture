import './App.css';
import React from 'react';
import Navbar from './components/header/Navbar';
import HomePage from './components/homepage/HomePage';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Category from './components/category_of_items/Category';
import Footer from './components/homepage/Footer';
import Weather from './components/Weather';
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import ContactUs from './components/contact';
import Logout from './components/logout/logout';
import { routes } from './routes/routes';
import ProfilePage from './components/profile/edit_profile';
function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.category} element={<Category />} />
        <Route path={routes.weather} element={<Weather />} />
        <Route path={routes.singup} element={<Signup />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.contactus} element={<ContactUs />} />
        <Route path={routes.logout} element={<Logout />} />
        <Route path={routes.profile} element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
