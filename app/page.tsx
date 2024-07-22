// src/pages/index.tsx

import React from 'react';
import Head from 'next/head';
import Header from '../app/Header';
import Hero from '../app/Hero';
import Appointment from '../app/Appointment';
import Partners from '../app/Partners';
import About from '../app/About';
import Services from '../app/Services';
import PricingPlan from '../app/PricingPlan';
import ServiceReviews from '../app/ServiceReviews';
import AppointmentSection from '../app/AppointmentSection';
import BlogSection from '../app/BlogSection';
import NewsletterSection from '../app/NewsletterSection';
import Footer from '../app/Footer';




const Home: React.FC = () => {
  return (
    <div>
      

      <Header />
      <Hero />
      <Appointment/>
      <Partners/>
      <About/>
      <Services/>
      <PricingPlan/>
      <ServiceReviews/>
      <AppointmentSection/>
      <BlogSection/>
      <NewsletterSection/>
      <Footer/>
      
      {/* Add more sections/components here if needed */}
      
      
    </div>
  );
};

export default Home;
