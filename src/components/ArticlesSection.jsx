import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const articles = [
    {
      id: 1,
      title: 'Revolutionizing Deep-Sea Mining with AI-Powered Autonomous Systems',
      excerpt: 'How Triton\'s Luna AUV fleet is transforming ocean mining through advanced machine learning algorithms and real-time environmental monitoring.',
      category: 'Technology',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Environmental Impact Assessment: One Year of Sustainable Ocean Mining',
      excerpt: 'Comprehensive analysis of our environmental monitoring data showing 95% reduction in ecosystem impact compared to traditional mining methods.',
      category: 'Sustainability',
      readTime: '6 min read',
      publishDate: '2024-01-10',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'DeepSeaGuard: Real-Time Compliance Monitoring in Action',
      excerpt: 'Behind the scenes look at how our compliance dashboard ensures adherence to ISA regulations and environmental protection standards.',
      category: 'Compliance',
      readTime: '5 min read',
      publishDate: '2024-01-08',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'The Future of Critical Mineral Supply: Ocean Mining\'s Role',
      excerpt: 'Exploring how sustainable ocean mining can meet the growing demand for critical minerals while protecting marine ecosystems.',
      category: 'Industry',
      readTime: '7 min read',
      publishDate: '2024-01-05',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'CrabBots: Precision Nodule Collection Technology',
      excerpt: 'Deep dive into our autonomous nodule collectors and their advanced precision harvesting capabilities that minimize environmental impact.',
      category: 'Technology',
      readTime: '4 min read',
      publishDate: '2024-01-03',
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'Transparency in Ocean Mining: Public Data Access and Reporting',
      excerpt: 'How Triton is leading the industry in transparency by providing public access to real-time operational and environmental data.',
      category: 'Transparency',
      readTime: '6 min read',
      publishDate: '2024-01-01',
      image: '/api/placeholder/400/250',
      featured: false
    }
  ];

  const categories = ['All', 'Technology', 'Sustainability', 'Compliance', 'Industry', 'Transparency'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Sustainability': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Compliance': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Industry': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Transparency': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    };
    return colors[category] || 'bg-ocean-primary/20 text-ocean-primary border-ocean-primary/30';
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-ocean-dark to-ocean-dark/50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold mb-6"
          >
            <span className="gradient-text">Latest Updates</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-ocean-text/80 max-w-3xl mx-auto leading-relaxed"
          >
            Stay informed about the latest developments in sustainable ocean mining, 
            technological innovations, and environmental impact research.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === 'All'
                  ? 'bg-ocean-primary text-white'
                  : 'bg-ocean-dark/50 text-ocean-text/70 hover:bg-ocean-primary/20 hover:text-ocean-primary border border-ocean-primary/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Article */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          {articles.filter(article => article.featured).map((article) => (
            <motion.article
              key={article.id}
              whileHover={{ scale: 1.02 }}
              className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-ocean-primary/20 to-ocean-accent/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-ocean-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-8 h-8 text-ocean-primary" />
                      </div>
                      <p className="text-ocean-text/70">Featured Article</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <div className="flex items-center text-ocean-text/70 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(article.publishDate)}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-orbitron font-bold text-ocean-text mb-4 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-ocean-text/70 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-ocean-text/70 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2 text-ocean-primary hover:text-ocean-accent transition-colors duration-300 font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.filter(article => !article.featured).map((article) => (
            <motion.article
              key={article.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-ocean-primary/20 to-ocean-accent/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-ocean-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <ExternalLink className="w-6 h-6 text-ocean-primary" />
                    </div>
                    <p className="text-ocean-text/70 text-sm">Article Preview</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center text-ocean-text/70 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(article.publishDate)}
                  </div>
                </div>
                
                <h3 className="text-lg font-orbitron font-semibold text-ocean-text mb-3 leading-tight group-hover:text-ocean-primary transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-ocean-text/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-ocean-text/70 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 3 }}
                    className="flex items-center space-x-1 text-ocean-primary hover:text-ocean-accent transition-colors duration-300 text-sm font-medium"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          variants={itemVariants}
          className="mt-20 bg-gradient-to-r from-ocean-primary/10 to-ocean-accent/10 border border-ocean-primary/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-orbitron font-bold text-ocean-text mb-4">
            Stay Updated
          </h3>
          <p className="text-ocean-text/70 mb-6 max-w-2xl mx-auto">
            Get the latest insights on sustainable ocean mining, technological innovations, 
            and environmental research delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-ocean-dark/50 border border-ocean-primary/30 rounded-lg text-ocean-text placeholder-ocean-text/60 focus:outline-none focus:border-ocean-primary"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;
