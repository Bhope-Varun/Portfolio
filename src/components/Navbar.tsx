import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleScrollClick(e, '#hero')}
            className="flex items-center space-x-2 group focus:outline-none"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
              <Terminal className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-gray-900 tracking-tight text-base leading-tight group-hover:text-blue-600 transition-colors">
                {personalInfo.name}
              </span>
              <span className="font-mono text-[10px] text-gray-500 tracking-wider uppercase">
                Portfolio '26
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollClick(e, item.href)}
                  id={`nav-link-${item.name.toLowerCase()}`}
                  className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-blue-600 bg-blue-50/50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleScrollClick(e, '#contact')}
              id="nav-cta"
              className="ml-4 inline-flex items-center space-x-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-sans text-sm font-medium rounded-lg transition-colors shadow-sm shadow-blue-200"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-nav-panel"
            className="md:hidden border-b border-gray-100 bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollClick(e, item.href)}
                    className={`block px-4 py-3 rounded-xl font-sans text-base font-medium transition-all ${
                      isActive
                        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollClick(e, '#contact')}
                  className="w-full text-center block px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-medium rounded-xl transition-colors shadow-sm shadow-blue-200"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
