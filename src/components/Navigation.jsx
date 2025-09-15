import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import TritonLogo from './TritonLogo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Technology', href: '#technology' },
    { name: 'Compliance', href: '#compliance' },
    { name: 'Data', href: '#data' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-ocean-dark/95 backdrop-blur-md border-b border-ocean-primary/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <TritonLogo size={32} className="flex-shrink-0" />
              <span className="text-xl font-orbitron font-bold gradient-text">
                Triton
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-ocean-text hover:text-ocean-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-ocean-text hover:text-ocean-primary transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={20} />
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-ocean-text hover:text-ocean-primary transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0,
          }}
          className="md:hidden overflow-hidden bg-ocean-dark/95 backdrop-blur-md border-t border-ocean-primary/20"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-ocean-text hover:text-ocean-primary transition-colors duration-300 font-medium py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Search Overlay */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-ocean-dark/95 backdrop-blur-md z-50 flex items-center justify-center"
          onClick={() => setIsSearchOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search Triton ecosystem..."
                className="w-full px-6 py-4 text-xl bg-ocean-dark border-2 border-ocean-primary rounded-lg text-ocean-text placeholder-ocean-text/60 focus:outline-none focus:border-ocean-accent"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-ocean-text hover:text-ocean-primary transition-colors duration-300"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Search Suggestions */}
            <div className="mt-6 space-y-2">
              <p className="text-ocean-text/60 text-sm mb-3">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {['DeepSeaGuard', 'Luna AUV', 'CrabBots', 'SeaLink', 'Environmental Monitoring', 'Compliance'].map((term) => (
                  <button
                    key={term}
                    className="px-3 py-1 bg-ocean-primary/20 text-ocean-primary rounded-full text-sm hover:bg-ocean-primary/30 transition-colors duration-300"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
