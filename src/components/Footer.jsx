import { motion } from 'framer-motion';
import { ArrowUp, Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import TritonLogo from './TritonLogo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Company': [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#mission' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ],
    'Technology': [
      { name: 'DeepSeaGuard', href: '#deepseaguard' },
      { name: 'Luna AUV', href: '#luna-auv' },
      { name: 'CrabBots', href: '#crabbots' },
      { name: 'SeaLink', href: '#sealink' }
    ],
    'Resources': [
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
      { name: 'Open Source', href: '#opensource' },
      { name: 'Research Papers', href: '#research' }
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Environmental Policy', href: '#environmental' },
      { name: 'Compliance', href: '#compliance' }
    ]
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/tritonmining', color: 'hover:text-gray-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/tritonmining', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/tritonmining', color: 'hover:text-blue-600' },
    { name: 'Email', icon: Mail, href: 'mailto:info@tritonmining.com', color: 'hover:text-ocean-primary' }
  ];

  return (
    <footer className="border-t bg-ocean-dark border-ocean-primary/20">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center mb-4 space-x-3">
                  <TritonLogo size={36} className="flex-shrink-0" />
                  <span className="text-xl font-bold font-orbitron gradient-text">
                    Triton Mining Co.
                  </span>
                </div>
                <p className="mb-6 leading-relaxed text-ocean-text/70">
                  Pioneering sustainable ocean mining through advanced autonomous systems, 
                  real-time environmental monitoring, and transparent compliance management.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-ocean-dark/50 border border-ocean-primary/20 rounded-lg flex items-center justify-center text-ocean-text/70 transition-colors duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-4 text-lg font-semibold font-orbitron text-ocean-text"
                >
                  {category}
                </motion.h3>
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-3"
                >
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center text-sm transition-colors duration-300 text-ocean-text/70 hover:text-ocean-primary group"
                      >
                        {link.name}
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                        )}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 border-t border-ocean-primary/20"
        >
          <div className="p-6 bg-gradient-to-r from-ocean-primary/10 to-ocean-accent/10 rounded-xl">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div>
                <h3 className="mb-2 text-lg font-semibold font-orbitron text-ocean-text">
                  Stay Updated
                </h3>
                <p className="text-sm text-ocean-text/70">
                  Get the latest news about sustainable ocean mining and our technology.
                </p>
              </div>
              
              <div className="flex flex-col w-full gap-3 sm:flex-row md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 text-sm transition-colors duration-300 border rounded-lg bg-ocean-dark/50 border-ocean-primary/30 text-ocean-text placeholder-ocean-text/60 focus:outline-none focus:border-ocean-primary"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm btn-primary whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-ocean-primary/20">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-ocean-text/70"
            >
              © 2024 Triton Mining Co. All rights reserved. | 
              <a href="#privacy" className="ml-1 transition-colors duration-300 hover:text-ocean-primary">
                Privacy Policy
              </a>
              {' | '}
              <a href="#terms" className="transition-colors duration-300 hover:text-ocean-primary">
                Terms of Service
              </a>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm text-ocean-text/70"
            >
              <span>Made with ❤️ for the ocean</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed z-50 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 rounded-full shadow-lg bottom-8 right-8 bg-ocean-primary hover:bg-ocean-accent hover:shadow-xl"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
