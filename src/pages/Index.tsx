
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-foreground transition-colors duration-300">
      <Header />
      <div id="home" data-aos="fade-up" data-aos-duration="800"><Hero /></div>
      <div id="about" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"><About /></div>
      <div id="skills" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="bg-gray-50 dark:bg-gray-800"><Skills /></div>
      <div id="experience" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="bg-white dark:bg-gray-900"><Experience /></div>
      <div id="projects" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="bg-gray-50 dark:bg-gray-800"><Projects /></div>
      <div id="education" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="dark:bg-gray-900"><Education /></div>
      <div id="contact" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="bg-gray-50 dark:bg-gray-800"><Contact /></div>
      <Footer />
    </div>
  );
};

export default Index;
