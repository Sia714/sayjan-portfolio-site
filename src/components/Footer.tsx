
import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-portfolio-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Sayjan J Singh</h3>
            <p className="text-gray-300 mt-1">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/sayjan-j-singh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Sia714" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-portfolio-purple transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:sayjan7777@gmail.com"
              className="hover:text-portfolio-purple transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919877542077"
              className="hover:text-portfolio-purple transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 text-sm hover:text-portfolio-purple transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sayjan J Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
