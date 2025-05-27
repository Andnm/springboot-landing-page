import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Curriculum from '../components/sections/Curriculum';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import FAQ from '../components/sections/FAQ';
import ContactForm from '../components/sections/ContactForm';
import InstructorSection from '../components/sections/InstructorSection';
import Courses from '../components/sections/Courses';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Courses />
      <Curriculum />
      <InstructorSection />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      <ContactForm />
    </>
  );
};

export default LandingPage;