
import React from 'react';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <span className="text-portfolio-purple font-medium mb-4 block">Hello, I'm</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-blue mb-4">
              Sayjan J Singh
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Software Developer & Full Stack Engineer
            </p>
            <p className="text-gray-600 mb-8 max-w-lg">
              Passionate about creating robust, scalable applications with expertise in full-stack development,
              data structures & algorithms, and modern frameworks.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-portfolio-purple hover:bg-portfolio-purple/90">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10">
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex mt-8 space-x-4">
              <a 
                href="https://www.linkedin.com/in/sayjan-j-singh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="https://github.com/Sia714" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-purple transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="mailto:sayjan7777@gmail.com"
                className="text-gray-600 hover:text-portfolio-purple transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
              <a 
                href="https://leetcode.com/u/Sia714/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-purple transition-colors"
                aria-label="LeetCode"
              >
                <FileText size={22} />
              </a>
              <a 
                href="tel:+919877542077"
                className="text-gray-600 hover:text-portfolio-purple transition-colors"
                aria-label="Phone"
              >
                <Phone size={22} />
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolio-purple/20 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-portfolio-purple to-portfolio-light-blue opacity-80 absolute"></div>
                <span className="text-white text-6xl font-bold relative z-10">SJ</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-portfolio-blue font-bold text-lg">B.Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
