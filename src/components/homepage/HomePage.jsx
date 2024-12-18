import React from 'react';
import {
  Typography,
  Button,
  Container,
  Grid,
  CardContent,
  CardMedia,
  Avatar,
  Link,
  Card,
  Paper,
  Box,
} from '@mui/material';
import Highlights from './Highlights';
import Category from './Category';
import FeaturedProducts from './FeaturedProducts';
import UpcomingEvents from './Upcomingevents';
import Articles from './Articles';
import { global } from '../Global';
import Hero from './Hero';
import SuccessStoriesCarousel from './SuccessStoriesCarousel';
const HomePage = () => {
  return (
    <div className="">
      <Hero />

      <Highlights />

      <FeaturedProducts />
      <UpcomingEvents />
      <Articles />
      <SuccessStoriesCarousel />
    </div>
  );
};

export default HomePage;
