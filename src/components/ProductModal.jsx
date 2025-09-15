import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Play, Download, Github, ArrowRight } from 'lucide-react';

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!product) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.3
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-ocean-dark/95 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-ocean-dark border border-ocean-primary/30 rounded-2xl overflow-hidden shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="relative p-8 bg-gradient-to-r from-ocean-primary/10 to-ocean-accent/10 border-b border-ocean-primary/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full border-2 border-ocean-primary flex items-center justify-center bg-ocean-dark/50">
                    {product.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-orbitron font-bold text-ocean-text mb-2">
                      {product.title}
                    </h2>
                    <p className="text-ocean-primary font-medium">
                      {product.category} • {product.status}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 text-ocean-text/70 hover:text-ocean-text transition-colors duration-300"
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Overview */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-ocean-text mb-4">
                      Overview
                    </h3>
                    <p className="text-ocean-text/80 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-ocean-text mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features?.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-ocean-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-ocean-text/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-orbitron font-semibold text-ocean-text mb-4">
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {product.specs?.map((spec, index) => (
                        <div key={index} className="bg-ocean-dark/50 rounded-lg p-4">
                          <div className="text-sm text-ocean-primary font-medium mb-1">
                            {spec.label}
                          </div>
                          <div className="text-ocean-text/80">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Visuals & Actions */}
                <div className="space-y-6">
                  {/* Product Image/Visual */}
                  <div className="bg-ocean-dark/50 rounded-xl p-6 border border-ocean-primary/20">
                    <div className="aspect-video bg-gradient-to-br from-ocean-primary/20 to-ocean-accent/20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-ocean-primary flex items-center justify-center bg-ocean-dark/50">
                          {product.icon}
                        </div>
                        <p className="text-ocean-text/70 text-sm">
                          {product.title} Visualization
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  {product.metrics && (
                    <div>
                      <h3 className="text-xl font-orbitron font-semibold text-ocean-text mb-4">
                        Performance Metrics
                      </h3>
                      <div className="space-y-4">
                        {product.metrics.map((metric, index) => (
                          <div key={index} className="bg-ocean-dark/50 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-ocean-text font-medium">{metric.name}</span>
                              <span className="text-ocean-primary font-bold">{metric.value}</span>
                            </div>
                            <div className="w-full bg-ocean-dark/30 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-ocean-primary to-ocean-accent h-2 rounded-full transition-all duration-1000"
                                style={{ width: `${metric.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <Play size={20} />
                      <span>Watch Demo</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-secondary flex items-center justify-center space-x-2"
                    >
                      <Download size={20} />
                      <span>Download Brochure</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-ocean-dark/50 border border-ocean-primary/30 text-ocean-text hover:bg-ocean-primary/10 px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Github size={20} />
                      <span>View Source Code</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              {product.additionalInfo && (
                <div className="mt-8 pt-8 border-t border-ocean-primary/20">
                  <h3 className="text-xl font-orbitron font-semibold text-ocean-text mb-4">
                    Additional Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.additionalInfo.map((info, index) => (
                      <div key={index} className="bg-ocean-dark/30 rounded-lg p-4">
                        <h4 className="font-orbitron font-semibold text-ocean-text mb-2">
                          {info.title}
                        </h4>
                        <p className="text-ocean-text/70 text-sm">
                          {info.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-ocean-dark/50 border-t border-ocean-primary/20">
              <div className="flex items-center justify-between">
                <div className="text-sm text-ocean-text/70">
                  Last updated: {product.lastUpdated || 'Recently'}
                </div>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-ocean-primary hover:text-ocean-accent transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-ocean-primary hover:text-ocean-accent transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>External Link</span>
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

export default ProductModal;
