// Comprehensive product data for Triton ecosystem
export const productData = {
  deepseaguard: {
    title: 'DeepSeaGuard',
    category: 'Compliance & Monitoring',
    status: 'Production Ready',
    description: 'Advanced real-time compliance monitoring system that ensures adherence to International Seabed Authority (ISA) regulations and environmental protection standards. DeepSeaGuard provides comprehensive oversight of all ocean mining operations with instant alerts and detailed reporting capabilities.',
    features: [
      'Real-time ISA compliance monitoring and alerting',
      'Environmental impact assessment and tracking',
      'Automated regulatory reporting and documentation',
      'Multi-sensor data integration and analysis',
      'Predictive compliance risk assessment',
      'Customizable dashboard and reporting tools',
      'Integration with external regulatory systems',
      '24/7 monitoring and alert management'
    ],
    specs: [
      { label: 'Response Time', value: '< 2 seconds' },
      { label: 'Data Sources', value: '50+ sensors' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Compliance Rate', value: '95%' },
      { label: 'Alert Accuracy', value: '98.5%' },
      { label: 'Data Retention', value: '7 years' }
    ],
    metrics: [
      { name: 'Compliance Score', value: '95%', percentage: 95 },
      { name: 'System Uptime', value: '99.9%', percentage: 99.9 },
      { name: 'Alert Response', value: '98%', percentage: 98 },
      { name: 'Data Accuracy', value: '99.2%', percentage: 99.2 }
    ],
    additionalInfo: [
      {
        title: 'Regulatory Compliance',
        content: 'Fully compliant with ISA regulations ISBA/21/LTC/15 and international environmental standards. Automated reporting to regulatory bodies with real-time status updates.'
      },
      {
        title: 'Integration Capabilities',
        content: 'Seamlessly integrates with existing mining operations, environmental monitoring systems, and third-party compliance tools. RESTful API and webhook support.'
      },
      {
        title: 'Security & Privacy',
        content: 'Enterprise-grade security with end-to-end encryption, role-based access control, and audit logging. SOC 2 Type II compliant infrastructure.'
      },
      {
        title: 'Support & Maintenance',
        content: '24/7 technical support with dedicated compliance specialists. Regular updates and maintenance with zero-downtime deployments.'
      }
    ],
    lastUpdated: 'December 2024'
  },

  sealink: {
    title: 'SeaLink',
    category: 'Communication Network',
    status: 'Production Ready',
    description: 'Autonomous buoy mesh network providing reliable communication infrastructure for deep-sea operations. SeaLink enables real-time data transmission, command and control, and emergency communication across vast ocean areas.',
    features: [
      'Autonomous buoy deployment and management',
      'Mesh network topology with self-healing capabilities',
      'Low-latency data transmission (< 100ms)',
      'Satellite and underwater communication links',
      'Autonomous positioning and maintenance',
      'Weather-resistant and corrosion-proof design',
      'Solar and wave energy harvesting',
      'Emergency communication protocols'
    ],
    specs: [
      { label: 'Coverage Area', value: '10,000 km²' },
      { label: 'Data Rate', value: '100 Mbps' },
      { label: 'Latency', value: '< 100ms' },
      { label: 'Battery Life', value: '5+ years' },
      { label: 'Depth Rating', value: '6,000m' },
      { label: 'Buoy Count', value: '50+ units' }
    ],
    metrics: [
      { name: 'Network Uptime', value: '99.8%', percentage: 99.8 },
      { name: 'Data Throughput', value: '95%', percentage: 95 },
      { name: 'Signal Strength', value: '98%', percentage: 98 },
      { name: 'Energy Efficiency', value: '92%', percentage: 92 }
    ],
    additionalInfo: [
      {
        title: 'Autonomous Operations',
        content: 'Self-deploying and self-maintaining buoy network with ML-powered optimization. Automatic reconfiguration based on environmental conditions and operational requirements.'
      },
      {
        title: 'Environmental Impact',
        content: 'Minimal environmental footprint with biodegradable materials and zero-emission operation. Designed for long-term sustainability in marine environments.'
      },
      {
        title: 'Scalability',
        content: 'Modular design allows for easy expansion and reconfiguration. Can scale from small operations to large-scale mining projects with thousands of connected devices.'
      }
    ],
    lastUpdated: 'November 2024'
  },

  shellby: {
    title: 'Shellby',
    category: 'Environmental Protection',
    status: 'Production Ready',
    description: 'Coastal sentinel system designed to protect and monitor coastal ecosystems during ocean mining operations. Shellby provides comprehensive environmental monitoring, early warning systems, and automated protection protocols.',
    features: [
      'Real-time coastal ecosystem monitoring',
      'Automated early warning systems',
      'Marine life detection and protection',
      'Water quality continuous monitoring',
      'Sediment plume tracking and analysis',
      'Noise level monitoring and control',
      'Automated protection protocols',
      'Environmental impact reporting'
    ],
    specs: [
      { label: 'Monitoring Range', value: '50 km radius' },
      { label: 'Sensor Types', value: '15+ different' },
      { label: 'Detection Accuracy', value: '99.5%' },
      { label: 'Response Time', value: '< 30 seconds' },
      { label: 'Data Points', value: '1,000+/hour' },
      { label: 'Alert Thresholds', value: 'Customizable' }
    ],
    metrics: [
      { name: 'Detection Accuracy', value: '99.5%', percentage: 99.5 },
      { name: 'Response Time', value: '98%', percentage: 98 },
      { name: 'False Positives', value: '0.2%', percentage: 0.2 },
      { name: 'Coverage Area', value: '100%', percentage: 100 }
    ],
    additionalInfo: [
      {
        title: 'Marine Life Protection',
        content: 'Advanced ML algorithms detect and protect marine life including whales, dolphins, and other protected species. Automatic operation suspension when threats are detected.'
      },
      {
        title: 'Environmental Standards',
        content: 'Exceeds all international environmental standards including MARPOL, IMO guidelines, and regional marine protection regulations. Continuous compliance monitoring.'
      },
      {
        title: 'Integration with Operations',
        content: 'Seamlessly integrates with mining operations to provide real-time environmental feedback and automatic safety protocols. Prevents environmental damage before it occurs.'
      }
    ],
    lastUpdated: 'October 2024'
  },

  lunaAUV: {
    title: 'Luna AUV',
    category: 'Autonomous Vehicles',
    status: 'Production Ready',
    description: 'Deep-sea autonomous underwater vehicles designed for exploration, data collection, and precision operations in extreme ocean depths. Luna AUVs operate independently or in coordinated swarms for maximum efficiency.',
    features: [
      'Autonomous navigation and mission planning',
      'Deep-sea operation capability (6,000m+)',
      'Swarm coordination and communication',
      'Advanced sensor suite and data collection',
      'Precision manipulation and sampling',
      'Long-duration missions (24+ hours)',
      'Real-time data transmission',
      'Self-diagnostic and maintenance capabilities'
    ],
    specs: [
      { label: 'Max Depth', value: '6,000m' },
      { label: 'Endurance', value: '24+ hours' },
      { label: 'Speed', value: '5 knots' },
      { label: 'Payload', value: '50kg' },
      { label: 'Sensors', value: '20+ types' },
      { label: 'Swarm Size', value: '10+ units' }
    ],
    metrics: [
      { name: 'Mission Success', value: '97%', percentage: 97 },
      { name: 'Battery Efficiency', value: '94%', percentage: 94 },
      { name: 'Data Quality', value: '99.1%', percentage: 99.1 },
      { name: 'Swarm Coordination', value: '96%', percentage: 96 }
    ],
    additionalInfo: [
      {
        title: 'ML-Powered Navigation',
        content: 'Advanced ML algorithms enable autonomous navigation in complex underwater environments with obstacle avoidance and optimal path planning.'
      },
      {
        title: 'Swarm Intelligence',
        content: 'Coordinated swarm operations allow multiple AUVs to work together on complex tasks, sharing data and optimizing collective performance.'
      },
      {
        title: 'Modular Design',
        content: 'Modular payload system allows for easy customization of sensors and tools based on specific mission requirements and operational needs.'
      }
    ],
    lastUpdated: 'December 2024'
  },

  crabbots: {
    title: 'CrabBots',
    category: 'Mining Operations',
    status: 'Production Ready',
    description: 'Precision nodule collectors with advanced ML-powered harvesting capabilities. CrabBots are designed for efficient, environmentally-friendly collection of polymetallic nodules with minimal seabed disturbance.',
    features: [
      'AI-powered precision harvesting',
      'Minimal seabed disturbance design',
      'Real-time quality assessment',
      'Autonomous operation and navigation',
      'Environmental impact monitoring',
      'Precise nodule selection and collection',
      'Self-cleaning and maintenance systems',
      'Integration with processing systems'
    ],
    specs: [
      { label: 'Collection Rate', value: '500kg/hour' },
      { label: 'Precision', value: '±2cm' },
      { label: 'Efficiency', value: '95%' },
      { label: 'Disturbance Area', value: '< 1m²' },
      { label: 'Operating Depth', value: '4,000m' },
      { label: 'Battery Life', value: '12 hours' }
    ],
    metrics: [
      { name: 'Collection Efficiency', value: '95%', percentage: 95 },
      { name: 'Precision Accuracy', value: '98%', percentage: 98 },
      { name: 'Environmental Impact', value: 'Minimal', percentage: 85 },
      { name: 'Operational Uptime', value: '92%', percentage: 92 }
    ],
    additionalInfo: [
      {
        title: 'Environmental Design',
        content: 'Specially designed to minimize environmental impact with gentle collection methods and real-time monitoring of seabed conditions.'
      },
      {
        title: 'AI Quality Control',
        content: 'Advanced AI algorithms assess nodule quality in real-time, ensuring only high-grade materials are collected and processed.'
      },
      {
        title: 'Maintenance & Reliability',
        content: 'Self-diagnostic systems and modular design ensure high reliability with minimal maintenance requirements in harsh deep-sea conditions.'
      }
    ],
    lastUpdated: 'November 2024'
  },

  processingStations: {
    title: 'Processing Stations',
    category: 'Industrial Processing',
    status: 'Production Ready',
    description: 'Inland refineries for sustainable mineral processing and refinement. Our processing stations utilize cutting-edge technology to extract maximum value from collected materials while maintaining environmental standards.',
    features: [
      'Sustainable mineral processing',
      'Zero-waste production methods',
      'Advanced separation technologies',
      'Real-time quality monitoring',
      'Automated processing lines',
      'Environmental compliance monitoring',
      'Energy-efficient operations',
      'Modular and scalable design'
    ],
    specs: [
      { label: 'Processing Capacity', value: '1,000 tons/day' },
      { label: 'Recovery Rate', value: '98.5%' },
      { label: 'Energy Efficiency', value: '95%' },
      { label: 'Waste Reduction', value: '99%' },
      { label: 'Water Usage', value: '90% less' },
      { label: 'Emissions', value: 'Carbon neutral' }
    ],
    metrics: [
      { name: 'Processing Efficiency', value: '98.5%', percentage: 98.5 },
      { name: 'Energy Efficiency', value: '95%', percentage: 95 },
      { name: 'Waste Reduction', value: '99%', percentage: 99 },
      { name: 'Quality Control', value: '99.8%', percentage: 99.8 }
    ],
    additionalInfo: [
      {
        title: 'Sustainable Processing',
        content: 'Revolutionary processing methods that minimize environmental impact while maximizing material recovery. Zero-waste production with full material utilization.'
      },
      {
        title: 'Advanced Technology',
        content: 'State-of-the-art separation and refinement technologies including AI-powered quality control and automated optimization systems.'
      },
      {
        title: 'Environmental Standards',
        content: 'Exceeds all environmental standards with carbon-neutral operations, minimal water usage, and comprehensive waste management systems.'
      }
    ],
    lastUpdated: 'December 2024'
  },

  dataInfrastructure: {
    title: 'Data Infrastructure',
    category: 'Data Management',
    status: 'Production Ready',
    description: 'Secure, scalable data infrastructure supporting all Triton operations. Our data systems provide real-time analytics, secure storage, and seamless integration across the entire ecosystem.',
    features: [
      'Real-time data processing and analytics',
      'Secure cloud and edge computing',
      'Advanced data visualization tools',
      'API-first architecture',
      'Machine learning and AI integration',
      'Comprehensive data security',
      'Scalable infrastructure',
      '24/7 monitoring and support'
    ],
    specs: [
      { label: 'Data Processing', value: '1TB/hour' },
      { label: 'Storage Capacity', value: '10PB+' },
      { label: 'API Response', value: '< 50ms' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Security', value: 'SOC 2 Type II' },
      { label: 'Scalability', value: 'Unlimited' }
    ],
    metrics: [
      { name: 'System Uptime', value: '99.99%', percentage: 99.99 },
      { name: 'Data Processing', value: '98%', percentage: 98 },
      { name: 'Security Score', value: '100%', percentage: 100 },
      { name: 'API Performance', value: '99.5%', percentage: 99.5 }
    ],
    additionalInfo: [
      {
        title: 'Security & Compliance',
        content: 'Enterprise-grade security with end-to-end encryption, multi-factor authentication, and comprehensive audit logging. SOC 2 Type II compliant.'
      },
      {
        title: 'AI & Machine Learning',
        content: 'Integrated AI and ML capabilities for predictive analytics, automated decision-making, and continuous optimization of operations.'
      },
      {
        title: 'Integration & APIs',
        content: 'Comprehensive API suite enabling seamless integration with third-party systems and custom applications. RESTful and GraphQL APIs available.'
      }
    ],
    lastUpdated: 'December 2024'
  },

  externalSystems: {
    title: 'External Systems',
    category: 'Integration & Partnerships',
    status: 'Production Ready',
    description: 'Comprehensive integration platform connecting Triton operations with regulators, NGOs, partners, and external stakeholders. Ensures transparency, compliance, and seamless collaboration.',
    features: [
      'Regulatory system integration',
      'NGO and stakeholder portals',
      'Partner API connections',
      'Transparency reporting tools',
      'Real-time data sharing',
      'Compliance documentation',
      'Stakeholder communication',
      'Public data access portals'
    ],
    specs: [
      { label: 'Integration Points', value: '50+' },
      { label: 'API Endpoints', value: '200+' },
      { label: 'Data Sharing', value: 'Real-time' },
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Stakeholder Access', value: '24/7' },
      { label: 'Documentation', value: 'Automated' }
    ],
    metrics: [
      { name: 'Integration Success', value: '100%', percentage: 100 },
      { name: 'Data Accuracy', value: '99.9%', percentage: 99.9 },
      { name: 'Stakeholder Satisfaction', value: '98%', percentage: 98 },
      { name: 'Compliance Rate', value: '100%', percentage: 100 }
    ],
    additionalInfo: [
      {
        title: 'Regulatory Integration',
        content: 'Direct integration with ISA, IMO, and other regulatory bodies for automated compliance reporting and real-time status updates.'
      },
      {
        title: 'Stakeholder Engagement',
        content: 'Comprehensive portals for NGOs, environmental groups, and other stakeholders with real-time access to operational data and reports.'
      },
      {
        title: 'Transparency & Trust',
        content: 'Public data access and transparency reporting tools that build trust and demonstrate commitment to responsible ocean mining practices.'
      }
    ],
    lastUpdated: 'December 2024'
  },

  tritonServices: {
    title: 'Triton Services',
    category: 'Professional Services',
    status: 'Available',
    description: 'Comprehensive consulting services and open-source tools supporting the sustainable ocean mining industry. Our services help organizations implement best practices and leverage cutting-edge technology.',
    features: [
      'Strategic consulting and planning',
      'Technology implementation support',
      'Open-source tool development',
      'Training and education programs',
      'Environmental impact assessment',
      'Regulatory compliance consulting',
      'Technical documentation',
      'Community support and forums'
    ],
    specs: [
      { label: 'Consulting Hours', value: '24/7' },
      { label: 'Open Source Tools', value: '20+' },
      { label: 'Training Programs', value: '10+' },
      { label: 'Client Satisfaction', value: '98%' },
      { label: 'Response Time', value: '< 4 hours' },
      { label: 'Support Coverage', value: 'Global' }
    ],
    metrics: [
      { name: 'Client Satisfaction', value: '98%', percentage: 98 },
      { name: 'Project Success', value: '95%', percentage: 95 },
      { name: 'Response Time', value: '96%', percentage: 96 },
      { name: 'Knowledge Transfer', value: '99%', percentage: 99 }
    ],
    additionalInfo: [
      {
        title: 'Open Source Community',
        content: 'Active development of open-source tools and libraries that benefit the entire ocean mining industry. Community-driven development with transparent processes.'
      },
      {
        title: 'Education & Training',
        content: 'Comprehensive training programs covering sustainable ocean mining practices, technology implementation, and regulatory compliance.'
      },
      {
        title: 'Global Support',
        content: 'Worldwide support network with local expertise and 24/7 technical assistance. Multilingual support and cultural adaptation services.'
      }
    ],
    lastUpdated: 'December 2024'
  }
};

// Helper function to get product by key
export const getProductByKey = (key) => {
  return productData[key] || null;
};

// Get all products as array
export const getAllProducts = () => {
  return Object.values(productData);
};

// Get products by category
export const getProductsByCategory = (category) => {
  return Object.values(productData).filter(product => 
    product.category.toLowerCase().includes(category.toLowerCase())
  );
};
