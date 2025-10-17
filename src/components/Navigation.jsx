import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu, X, Sun, Moon } from 'lucide-react';
import TritonLogo from './TritonLogo';
import { ThemeContext } from '../contexts/ThemeContext';

const Navigation = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Technology', href: '#technology' },
    { name: 'Compliance', href: '#compliance' },
    { name: 'Data', href: '#data' },
    { name: 'Team', href: '#team' },
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
              <TritonLogo size={38} className="flex-shrink-0" />
              <span className="text-xl font-bold font-orbitron gradient-text">
                Triton
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="items-center hidden space-x-8 min-[920px]:flex">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="font-medium transition-colors duration-300 text-ocean-text hover:text-ocean-primary"
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
                className="p-2 transition-colors duration-300 text-ocean-text hover:text-ocean-primary"
                aria-label="Search"
              >
                <Search size={20} />
              </motion.button>

              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 transition-colors duration-300 text-ocean-text hover:text-ocean-primary"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 transition-colors duration-300 min-[920px]:hidden text-ocean-text hover:text-ocean-primary"
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
          className="overflow-hidden border-t min-[920px]:hidden bg-ocean-dark/95 backdrop-blur-md border-ocean-primary/20"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full py-2 font-medium text-left transition-colors duration-300 text-ocean-text hover:text-ocean-primary"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-ocean-dark/95 backdrop-blur-md"
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
                className="w-full px-6 py-4 text-xl border-2 rounded-lg bg-ocean-dark border-ocean-primary text-ocean-text placeholder-ocean-text/60 focus:outline-none focus:border-ocean-accent"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute transition-colors duration-300 transform -translate-y-1/2 right-4 top-1/2 text-ocean-text hover:text-ocean-primary"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Search Suggestions */}
            <div className="mt-6 space-y-2">
              <p className="mb-3 text-sm text-ocean-text/60">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {['DeepSeaGuard', 'Luna AUV', 'CrabBots', 'SeaLink', 'Environmental Monitoring', 'Compliance'].map((term) => (
                  <button
                    key={term}
                    className="px-3 py-1 text-sm transition-colors duration-300 rounded-full bg-ocean-primary/20 text-ocean-primary hover:bg-ocean-primary/30"
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
