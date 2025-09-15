import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Tag, ExternalLink, Share2, Bookmark } from 'lucide-react';

const ArticleModal = ({ isOpen, onClose, article }) => {
  if (!article) return null;

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
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-ocean-primary/20 text-ocean-primary rounded-full text-sm font-medium border border-ocean-primary/30">
                      {article.category}
                    </span>
                    <div className="flex items-center text-ocean-text/70 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.publishDate}
                    </div>
                    <div className="flex items-center text-ocean-text/70 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-orbitron font-bold text-ocean-text mb-4 leading-tight">
                    {article.title}
                  </h2>
                  
                  <p className="text-lg text-ocean-text/80 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 text-ocean-text/70 hover:text-ocean-text transition-colors duration-300 ml-4"
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="prose prose-invert max-w-none">
                {/* Article Content */}
                <div className="space-y-6">
                  {/* Featured Image */}
                  <div className="aspect-video bg-gradient-to-br from-ocean-primary/20 to-ocean-accent/20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ocean-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-8 h-8 text-ocean-primary" />
                      </div>
                      <p className="text-ocean-text/70">Article Featured Image</p>
                    </div>
                  </div>

                  {/* Article Body */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-orbitron font-semibold text-ocean-text">
                      Introduction
                    </h3>
                    <p className="text-ocean-text/80 leading-relaxed">
                      {article.fullContent?.introduction || 
                        "This comprehensive article explores the latest developments in sustainable ocean mining technology and its impact on the future of critical mineral supply chains. Our analysis covers technological innovations, environmental considerations, and regulatory frameworks that are shaping the industry."}
                    </p>

                    <h3 className="text-2xl font-orbitron font-semibold text-ocean-text">
                      Key Insights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {article.keyInsights?.map((insight, index) => (
                        <div key={index} className="bg-ocean-dark/50 rounded-lg p-4 border border-ocean-primary/20">
                          <h4 className="font-orbitron font-semibold text-ocean-text mb-2">
                            {insight.title}
                          </h4>
                          <p className="text-ocean-text/70 text-sm">
                            {insight.content}
                          </p>
                        </div>
                      )) || [
                        { title: "Environmental Impact", content: "Revolutionary reduction in environmental footprint through advanced autonomous systems." },
                        { title: "Economic Viability", content: "Significant cost reductions and improved efficiency in mineral extraction processes." },
                        { title: "Regulatory Compliance", content: "Full adherence to international standards with real-time monitoring capabilities." },
                        { title: "Technology Innovation", content: "Cutting-edge AI and robotics driving the future of sustainable ocean mining." }
                      ].map((insight, index) => (
                        <div key={index} className="bg-ocean-dark/50 rounded-lg p-4 border border-ocean-primary/20">
                          <h4 className="font-orbitron font-semibold text-ocean-text mb-2">
                            {insight.title}
                          </h4>
                          <p className="text-ocean-text/70 text-sm">
                            {insight.content}
                          </p>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-2xl font-orbitron font-semibold text-ocean-text">
                      Technical Details
                    </h3>
                    <p className="text-ocean-text/80 leading-relaxed">
                      {article.fullContent?.technicalDetails || 
                        "The technical implementation involves sophisticated sensor networks, autonomous underwater vehicles, and real-time data processing systems. Our approach combines machine learning algorithms with environmental monitoring to ensure sustainable operations while maximizing resource extraction efficiency."}
                    </p>

                    <h3 className="text-2xl font-orbitron font-semibold text-ocean-text">
                      Future Outlook
                    </h3>
                    <p className="text-ocean-text/80 leading-relaxed">
                      {article.fullContent?.futureOutlook || 
                        "Looking ahead, we anticipate continued innovation in autonomous systems, enhanced environmental protection measures, and expanded regulatory frameworks. The industry is poised for significant growth while maintaining the highest standards of environmental responsibility."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-ocean-dark/50 border-t border-ocean-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-ocean-text/70">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Triton Research Team</span>
                  </div>
                  <div className="flex items-center space-x-2 text-ocean-text/70">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm">{article.category}</span>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-ocean-primary hover:text-ocean-accent transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Bookmark className="w-4 h-4" />
                    <span className="text-sm">Save</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-ocean-primary hover:text-ocean-accent transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">Share</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="text-ocean-primary hover:text-ocean-accent transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Full Article</span>
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

export default ArticleModal;
