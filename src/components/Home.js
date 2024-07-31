import React from 'react';
import { CarouselTransition } from './Carousel1'; // Import the CarouselTransition component
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Content of your home page goes here */}
      <CarouselTransition /> {/* Render the CarouselTransition component */}
      <HeroSection/>
      
    </div>
  );
};

export default Home;
