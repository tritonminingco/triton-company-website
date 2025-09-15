import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  DeepSeaGuardIcon,
  SeaLinkIcon,
  ShellbyIcon,
  LunaAUVIcon,
  CrabBotsIcon,
  ProcessingStationsIcon,
  DataInfrastructureIcon,
  ExternalSystemsIcon,
  TritonServicesIcon,
  EnvironmentalMonitoringIcon,
  AITechnologyIcon,
  SustainabilityIcon
} from './icons/TritonIcons';
import ProductModal from './ProductModal';
import { productData } from '../data/productData';

const EcosystemOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ecosystemProducts = [
    {
      key: 'deepseaguard',
      icon: DeepSeaGuardIcon,
      title: 'DeepSeaGuard',
      description: 'Real-time compliance dashboard for ISA regulations and environmental monitoring',
      category: 'Compliance',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'sealink',
      icon: SeaLinkIcon,
      title: 'SeaLink',
      description: 'Autonomous buoy mesh network for communication and data transmission',
      category: 'Communication',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      key: 'shellby',
      icon: ShellbyIcon,
      title: 'Shellby',
      description: 'Coastal sentinel system for environmental protection and monitoring',
      category: 'Environmental',
      color: 'from-teal-500 to-green-500'
    },
    {
      key: 'lunaAUV',
      icon: LunaAUVIcon,
      title: 'Luna AUV',
      description: 'Deep-sea autonomous underwater vehicles for exploration and data collection',
      category: 'Vehicles',
      color: 'from-green-500 to-emerald-500'
    },
    {
      key: 'crabbots',
      icon: CrabBotsIcon,
      title: 'CrabBots',
      description: 'Autonomous nodule collectors with precision harvesting capabilities',
      category: 'Mining',
      color: 'from-emerald-500 to-lime-500'
    },
    {
      key: 'processingStations',
      icon: ProcessingStationsIcon,
      title: 'Processing Stations',
      description: 'Inland refineries for sustainable mineral processing and refinement',
      category: 'Processing',
      color: 'from-lime-500 to-yellow-500'
    },
    {
      key: 'dataInfrastructure',
      icon: DataInfrastructureIcon,
      title: 'Data Infrastructure',
      description: 'Secure databases, APIs, and cloud systems for data management',
      category: 'Infrastructure',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      key: 'externalSystems',
      icon: ExternalSystemsIcon,
      title: 'External Systems',
      description: 'Integration with regulators, NGOs, and partner organizations',
      category: 'Integration',
      color: 'from-orange-500 to-red-500'
    },
    {
      key: 'tritonServices',
      icon: TritonServicesIcon,
      title: 'Triton Services',
      description: 'Consulting services and open-source tools for the industry',
      category: 'Services',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const handleProductClick = (productKey) => {
    const product = productData[productKey];
    if (product) {
      setSelectedProduct({ ...product, icon: ecosystemProducts.find(p => p.key === productKey)?.icon });
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const coreTechnologies = [
    {
      icon: AITechnologyIcon,
      title: 'AI Technology',
      description: 'Machine learning algorithms for autonomous decision-making and optimization',
      category: 'Technology'
    },
    {
      icon: EnvironmentalMonitoringIcon,
      title: 'Environmental Monitoring',
      description: 'Advanced sensors and real-time data collection for ecosystem protection',
      category: 'Monitoring'
    },
    {
      icon: SustainabilityIcon,
      title: 'Sustainability',
      description: 'Carbon-neutral operations and circular economy principles',
      category: 'Sustainability'
    }
  ];

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

  return (
    <section id="ecosystem" className="section-padding bg-gradient-to-b from-ocean-dark to-ocean-dark/50">
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
            <span className="gradient-text">Triton Ecosystem</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-ocean-text/80 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive suite of technologies working together to revolutionize 
            ocean mining through innovation, sustainability, and transparency.
          </motion.p>
        </motion.div>

        {/* Core Technologies */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-orbitron font-semibold mb-12 text-center"
          >
            Core Technologies
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreTechnologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-8 text-center card-hover"
              >
                <div className="flex justify-center mb-6">
                  <tech.icon className="text-ocean-primary" />
                </div>
                <h4 className="text-xl font-orbitron font-semibold mb-4 text-ocean-text">
                  {tech.title}
                </h4>
                <p className="text-ocean-text/70 leading-relaxed">
                  {tech.description}
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-ocean-primary/20 text-ocean-primary rounded-full text-sm font-medium">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ecosystem Products Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-orbitron font-semibold mb-12 text-center"
          >
            Ecosystem Products
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecosystemProducts.map((product, index) => (
              <motion.div
                key={product.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleProductClick(product.key)}
                className="group bg-ocean-dark/30 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6 card-hover relative overflow-hidden cursor-pointer"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <product.icon className="text-ocean-primary group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-lg font-orbitron font-semibold text-ocean-text group-hover:text-ocean-primary transition-colors duration-300">
                        {product.title}
                      </h4>
                      <span className="text-sm text-ocean-primary/70 font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-ocean-text/70 leading-relaxed text-sm">
                    {product.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-ocean-primary group-hover:text-ocean-accent transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ecosystem Flow Diagram */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-orbitron font-semibold mb-12 text-center"
          >
            How It All Works Together
          </motion.h3>
          
          <div className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Data Collection */}
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-ocean-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvironmentalMonitoringIcon className="text-ocean-primary" />
                </div>
                <h4 className="text-lg font-orbitron font-semibold mb-2 text-ocean-text">Data Collection</h4>
                <p className="text-sm text-ocean-text/70">Sensors and AUVs gather real-time environmental and operational data</p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                variants={itemVariants}
                className="hidden md:flex justify-center"
              >
                <svg className="w-8 h-8 text-ocean-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>

              {/* Processing */}
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-ocean-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DataInfrastructureIcon className="text-ocean-primary" />
                </div>
                <h4 className="text-lg font-orbitron font-semibold mb-2 text-ocean-text">AI Processing</h4>
                <p className="text-sm text-ocean-text/70">Advanced algorithms analyze data and optimize operations</p>
              </motion.div>

              {/* Arrow */}
              <motion.div
                variants={itemVariants}
                className="hidden md:flex justify-center"
              >
                <svg className="w-8 h-8 text-ocean-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>

              {/* Compliance */}
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-ocean-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DeepSeaGuardIcon className="text-ocean-primary" />
                </div>
                <h4 className="text-lg font-orbitron font-semibold mb-2 text-ocean-text">Compliance</h4>
                <p className="text-sm text-ocean-text/70">Real-time monitoring ensures adherence to regulations</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default EcosystemOverview;
