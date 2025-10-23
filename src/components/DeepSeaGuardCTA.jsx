import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, AlertTriangle, CheckCircle, ArrowRight, ExternalLink, Play, Download } from 'lucide-react';
import { DeepSeaGuardIcon } from './icons/TritonIcons';

const DeepSeaGuardCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show CTA after a short delay for better UX on every load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const rootDiv = document.getElementById('root');
    if (rootDiv) {
      if (isOpen) {
        rootDiv.classList.add('fixed','w-full');
      } else {
        rootDiv.classList.remove('fixed');
      }
    }

    return () => {
      if (rootDiv) {
        rootDiv.classList.remove('fixed');
      }
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDontShowAgain = () => {
    setIsOpen(false);
    // Note: This will still show on next page load as requested
  };

  const handleGetStarted = () => {
    // Close the CTA modal first
    handleClose();
    
    // Wait a moment for the modal to close, then trigger DeepSeaGuard product modal
    setTimeout(() => {
      // Find the DeepSeaGuard product card and click it to open the product modal
      const deepSeaGuardCard = document.querySelector('[data-product-key="deepseaguard"]');
      if (deepSeaGuardCard) {
        deepSeaGuardCard.click();
      } else {
        // Fallback: scroll to ecosystem section
        const deepSeaGuardSection = document.getElementById('ecosystem');
        if (deepSeaGuardSection) {
          deepSeaGuardSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 300);
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center sm:p-4 sm:pt-8"
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
            className="relative flex flex-col w-full border shadow-2xl sm:max-w-2xl sm:my-8 bg-ocean-dark border-ocean-primary/30 sm:rounded-2xl max-h-[100vh] sm:max-h-[90vh] overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header with Gradient Background (pinned) */}
            <div className="relative p-8 border-b bg-gradient-to-r from-ocean-primary/20 via-ocean-accent/20 to-ocean-primary/20 border-ocean-primary/30">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute w-2 h-2 rounded-full top-4 left-4 bg-ocean-primary animate-pulse"></div>
                <div className="absolute w-1 h-1 delay-100 rounded-full top-8 right-8 bg-ocean-accent animate-pulse"></div>
                <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-ocean-primary rounded-full animate-pulse delay-200"></div>
                <div className="absolute w-2 h-2 delay-300 rounded-full bottom-4 right-4 bg-ocean-accent animate-pulse"></div>
              </div>
              
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative mb-auto">
                    <DeepSeaGuardIcon className="w-16 h-16 max-[546px]:w-14 max-[546px]:h-14" />
                    <div className="absolute w-4 h-4 max-[546px]:w-3 max-[546px]:h-3 bg-green-500 rounded-full -top-1 -right-1 animate-pulse"></div>
                  </div>
                  <div>
                    <h2 className="mb-2 text-2xl font-bold sm:text-3xl font-orbitron text-ocean-text">
                      DeepSeaGuard Platform
                    </h2>
                    <p className="text-lg font-medium text-ocean-primary">
                      Real-time Compliance Monitoring
                    </p>
                    <div className="flex items-center max-[546px]:flex-col gap-y-1.5 mt-2 min-[546px]:space-x-4">
                      <span className="w-full px-3 py-1 text-sm font-medium text-green-400 border rounded-full bg-green-500/20 border-green-500/30">
                        Live System
                      </span>
                      <span className="w-full px-3 py-1 text-sm font-medium text-blue-400 border rounded-full bg-blue-500/20 border-blue-500/30">
                        Production Ready
                      </span>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  className="p-2 transition-colors duration-300 text-ocean-text/70 hover:text-ocean-text"
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            {/* Scrollable body (flex-1) */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-ocean-primary/40">
              {/* Early Tester Banner */}
              <div className="px-8 pt-6 pb-4">
                <div className="p-6 border bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20">
                      <div className="w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold font-orbitron text-ocean-text">
                        DeepSeaGuard is now live!
                      </h3>
                      <p className="mb-4 leading-relaxed text-ocean-text/80">
                        We're inviting contractors, regulators, and research partners to explore the platform as early testers. 
                        During this limited rollout, access is provided on a complimentary basis while we gather feedback to 
                        shape the future of ISA reporting and compliance tools.
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25"
                      >
                        <span>Join as an Early Tester</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {/* Left Column - Key Benefits */}
                <div className="space-y-6">
                  <div>
                    <h3 className="flex items-center mb-4 text-xl font-semibold font-orbitron text-ocean-text">
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
                          <strong>Predictive Alerts:</strong> ML-powered risk assessment and early warnings
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Live Status Indicators */}
                  <div className="p-4 border rounded-lg bg-ocean-dark/50 border-ocean-primary/20">
                    <h4 className="flex items-center mb-3 font-semibold font-orbitron text-ocean-text">
                      <div className="w-2 h-2 mr-2 bg-green-400 rounded-full animate-pulse"></div>
                      Live System Status
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-ocean-text/70">Compliance Rate</div>
                        <div className="font-bold text-ocean-primary">95%</div>
                      </div>
                      <div>
                        <div className="text-ocean-text/70">Uptime</div>
                        <div className="font-bold text-green-400">99.9%</div>
                      </div>
                      <div>
                        <div className="text-ocean-text/70">Active Alerts</div>
                        <div className="font-bold text-yellow-400">3</div>
                      </div>
                      <div>
                        <div className="text-ocean-text/70">Data Sources</div>
                        <div className="font-bold text-ocean-primary">50+</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Demo and Actions */}
                <div className="space-y-6">
                  {/* Demo Preview */}
                  <div className="p-6 border bg-ocean-dark/50 rounded-xl border-ocean-primary/20">
                    <h4 className="mb-4 font-semibold font-orbitron text-ocean-text">
                      Platform Preview
                    </h4>
                    <div className="flex items-center justify-center mb-4 rounded-lg aspect-video bg-gradient-to-br from-ocean-primary/20 to-ocean-accent/20">
                      <div className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-full bg-ocean-primary/20">
                          <Shield className="w-8 h-8 text-ocean-primary" />
                        </div>
                        <p className="text-sm text-ocean-text/70">DeepSeaGuard Dashboard</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-ocean-text/70">Real-time Monitoring</span>
                        <span className="font-medium text-green-400">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-ocean-text/70">Compliance Status</span>
                        <span className="font-medium text-ocean-primary">Excellent</span>
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
                      className="flex items-center justify-center w-full px-6 py-4 space-x-2 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-ocean-primary to-ocean-accent hover:shadow-lg hover:shadow-ocean-primary/25"
                    >
                      <Shield className="w-5 h-5" />
                      <span>Explore DeepSeaGuard</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center px-4 py-3 space-x-2 font-medium transition-all duration-300 border rounded-lg bg-ocean-dark/50 border-ocean-primary/30 text-ocean-text hover:bg-ocean-primary/10"
                      >
                        <Play className="w-4 h-4" />
                        <span>Watch Demo</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center px-4 py-3 space-x-2 font-medium transition-all duration-300 border rounded-lg bg-ocean-dark/50 border-ocean-primary/30 text-ocean-text hover:bg-ocean-primary/10"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </div>

            {/* Footer (pinned) */}
            <div className="p-6 border-t bg-ocean-dark/50 border-ocean-primary/20">
              <div className="flex items-center justify-between">
                <div className="text-sm text-ocean-text/70">
                  <AlertTriangle className="inline w-4 h-4 mr-1" />
                  DeepSeaGuard is currently monitoring active ocean mining operations
                </div>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={handleDontShowAgain}
                    className="text-sm transition-colors duration-300 text-ocean-text/50 hover:text-ocean-text/70"
                  >
                    Close
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-1 text-sm transition-colors duration-300 text-ocean-primary hover:text-ocean-accent"
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
