import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, AlertTriangle, CheckCircle, ArrowRight, ExternalLink, Play, Download } from 'lucide-react';
import { DeepSeaGuardIcon } from './icons/TritonIcons';

const DeepSeaGuardCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenCTA, setHasSeenCTA] = useState(false);

  useEffect(() => {
    // Check if user has seen the CTA before
    const seenCTA = localStorage.getItem('deepseaguard-cta-seen');
    if (!seenCTA) {
      // Show CTA after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setHasSeenCTA(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Remember that user has seen the CTA
    localStorage.setItem('deepseaguard-cta-seen', 'true');
  };

  const handleDontShowAgain = () => {
    setIsOpen(false);
    // Set a longer expiration for "don't show again"
    localStorage.setItem('deepseaguard-cta-seen', 'true');
    localStorage.setItem('deepseaguard-cta-dismissed', 'true');
  };

  const handleGetStarted = () => {
    // Scroll to DeepSeaGuard section or open product modal
    const deepSeaGuardSection = document.getElementById('ecosystem');
    if (deepSeaGuardSection) {
      deepSeaGuardSection.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: { duration: 0.3 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Don't render if user has dismissed it permanently
  if (hasSeenCTA && localStorage.getItem('deepseaguard-cta-dismissed')) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-ocean-dark/95 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-2xl bg-ocean-dark border border-ocean-primary/30 rounded-2xl overflow-hidden shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header with Gradient Background */}
            <div className="relative p-8 bg-gradient-to-r from-ocean-primary/20 via-ocean-accent/20 to-ocean-primary/20 border-b border-ocean-primary/30">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-2 h-2 bg-ocean-primary rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-ocean-accent rounded-full animate-pulse delay-100"></div>
                <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-ocean-primary rounded-full animate-pulse delay-200"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-ocean-accent rounded-full animate-pulse delay-300"></div>
              </div>
              
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <DeepSeaGuardIcon className="w-16 h-16" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-orbitron font-bold text-ocean-text mb-2">
                      DeepSeaGuard Platform
                    </h2>
                    <p className="text-ocean-primary font-medium text-lg">
                      Real-time Compliance Monitoring
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                        Live System
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                        Production Ready
                      </span>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  className="p-2 text-ocean-text/70 hover:text-ocean-text transition-colors duration-300"
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Key Benefits */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-ocean-text mb-4 flex items-center">
                      <Shield className="w-6 h-6 mr-2 text-ocean-primary" />
                      Why DeepSeaGuard?
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-ocean-text/80">
                          <strong>Real-time ISA Compliance:</strong> Instant monitoring of all regulatory requirements
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-ocean-text/80">
                          <strong>Environmental Protection:</strong> Continuous monitoring of environmental impact
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-ocean-text/80">
                          <strong>Automated Reporting:</strong> Generate compliance reports automatically
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-ocean-text/80">
                          <strong>Predictive Alerts:</strong> AI-powered risk assessment and early warnings
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Live Status Indicators */}
                  <div className="bg-ocean-dark/50 rounded-lg p-4 border border-ocean-primary/20">
                    <h4 className="font-orbitron font-semibold text-ocean-text mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Live System Status
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-ocean-text/70">Compliance Rate</div>
                        <div className="text-ocean-primary font-bold">95%</div>
                      </div>
                      <div>
                        <div className="text-ocean-text/70">Uptime</div>
                        <div className="text-green-400 font-bold">99.9%</div>
                      </div>
                      <div>
                        <div className="text-ocean-text/70">Active Alerts</div>
                        <div className="text-yellow-400 font-bold">3</div>
                      </div>
                      <div>
                        <div className="text-ocean-text/70">Data Sources</div>
                        <div className="text-ocean-primary font-bold">50+</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Demo and Actions */}
                <div className="space-y-6">
                  {/* Demo Preview */}
                  <div className="bg-ocean-dark/50 rounded-xl p-6 border border-ocean-primary/20">
                    <h4 className="font-orbitron font-semibold text-ocean-text mb-4">
                      Platform Preview
                    </h4>
                    <div className="aspect-video bg-gradient-to-br from-ocean-primary/20 to-ocean-accent/20 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-ocean-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Shield className="w-8 h-8 text-ocean-primary" />
                        </div>
                        <p className="text-ocean-text/70 text-sm">DeepSeaGuard Dashboard</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-ocean-text/70">Real-time Monitoring</span>
                        <span className="text-green-400 font-medium">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-ocean-text/70">Compliance Status</span>
                        <span className="text-ocean-primary font-medium">Excellent</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-ocean-text/70">Last Update</span>
                        <span className="text-ocean-text/70">2 seconds ago</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleGetStarted}
                      className="w-full bg-gradient-to-r from-ocean-primary to-ocean-accent text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-ocean-primary/25"
                    >
                      <Shield className="w-5 h-5" />
                      <span>Explore DeepSeaGuard</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-ocean-dark/50 border border-ocean-primary/30 text-ocean-text hover:bg-ocean-primary/10 px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Watch Demo</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-ocean-dark/50 border border-ocean-primary/30 text-ocean-text hover:bg-ocean-primary/10 px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-ocean-dark/50 border-t border-ocean-primary/20">
              <div className="flex items-center justify-between">
                <div className="text-sm text-ocean-text/70">
                  <AlertTriangle className="w-4 h-4 inline mr-1" />
                  DeepSeaGuard is currently monitoring active ocean mining operations
                </div>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={handleDontShowAgain}
                    className="text-ocean-text/50 hover:text-ocean-text/70 transition-colors duration-300 text-sm"
                  >
                    Don't show again
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-ocean-primary hover:text-ocean-accent transition-colors duration-300 flex items-center space-x-1 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Learn More</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeepSeaGuardCTA;
