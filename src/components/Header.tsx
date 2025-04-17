
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling when clicking navigation links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      
      window.scrollTo({
        top: targetSection.getBoundingClientRect().top + window.scrollY - 80, // -80 for header offset
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent dark:bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center animate-fade-in">
        <a 
          href="#home" 
          className="text-xl md:text-2xl font-bold text-portfolio-blue dark:text-white transition-colors"
          onClick={(e) => scrollToSection(e, '#home')}
        >
          Sayjan J Singh
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href}
              className={`font-medium dark:text-gray-300 hover:text-portfolio-purple dark:hover:text-portfolio-purple transition-colors stagger-item animate-slide-in opacity-0`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          {/* <DarkModeToggle /> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* <DarkModeToggle /> */}
          <button 
            className="text-portfolio-blue dark:text-white p-2 transition-transform hover:scale-110"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="animate-scale-up" /> : <Menu size={24} className="animate-scale-up" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 w-full border-t border-gray-100 dark:border-gray-700 py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href}
              className={`font-medium py-2 dark:text-gray-300 hover:text-portfolio-purple dark:hover:text-portfolio-purple transition-colors stagger-item animate-slide-in opacity-0`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={(e) => {
                scrollToSection(e, link.href);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
