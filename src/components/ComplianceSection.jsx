import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, CheckCircle, XCircle, Clock, Shield, FileText, Globe, Users } from 'lucide-react';
import { DeepSeaGuardIcon } from './icons/TritonIcons';

const ComplianceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [alerts, setAlerts] = useState([]);

  // Mock compliance alerts data
  const mockAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Sediment Plume Concentration',
      message: 'Plume concentration approaching threshold in Sector 7B',
      timestamp: '2 minutes ago',
      severity: 'medium',
      status: 'active'
    },
    {
      id: 2,
      type: 'info',
      title: 'Environmental Scan Complete',
      message: 'Quarterly environmental assessment completed successfully',
      timestamp: '1 hour ago',
      severity: 'low',
      status: 'resolved'
    },
    {
      id: 3,
      type: 'critical',
      title: 'AUV Maintenance Required',
      message: 'Luna Gamma requires immediate maintenance - returning to surface',
      timestamp: '5 minutes ago',
      severity: 'high',
      status: 'active'
    },
    {
      id: 4,
      type: 'success',
      title: 'ISA Compliance Verified',
      message: 'All operations within ISA regulatory requirements',
      timestamp: '3 hours ago',
      severity: 'low',
      status: 'resolved'
    }
  ];

  useEffect(() => {
    setAlerts(mockAlerts);
  }, []);

  const complianceFeatures = [
    {
      icon: Shield,
      title: 'Real-time Monitoring',
      description: 'Continuous surveillance of all operations with instant alerts for any deviations from compliance standards.',
      status: 'active'
    },
    {
      icon: FileText,
      title: 'ISA Regulation Compliance',
      description: 'Automated adherence to International Seabed Authority regulations and environmental protocols.',
      status: 'compliant'
    },
    {
      icon: Globe,
      title: 'Environmental Protection',
      description: 'Advanced monitoring systems ensure minimal impact on marine ecosystems and biodiversity.',
      status: 'active'
    },
    {
      icon: Users,
      title: 'Transparent Reporting',
      description: 'Public access to real-time compliance data and environmental impact assessments.',
      status: 'active'
    }
  ];

  const complianceStandards = [
    {
      name: 'ISA Environmental Regulations',
      status: 'Compliant',
      lastCheck: '2 minutes ago',
      score: 95
    },
    {
      name: 'Marine Biodiversity Protection',
      status: 'Compliant',
      lastCheck: '5 minutes ago',
      score: 98
    },
    {
      name: 'Sediment Plume Management',
      status: 'Warning',
      lastCheck: '1 minute ago',
      score: 87
    },
    {
      name: 'Noise Level Standards',
      status: 'Compliant',
      lastCheck: '3 minutes ago',
      score: 92
    },
    {
      name: 'Waste Management Protocols',
      status: 'Compliant',
      lastCheck: '10 minutes ago',
      score: 96
    }
  ];

  const getAlertIcon = (type) => {
    switch (type) {
      case 'critical':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <Clock className="w-5 h-5 text-blue-500" />;
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'critical':
        return 'border-red-500/30 bg-red-500/10';
      case 'warning':
        return 'border-yellow-500/30 bg-yellow-500/10';
      case 'success':
        return 'border-green-500/30 bg-green-500/10';
      default:
        return 'border-blue-500/30 bg-blue-500/10';
    }
  };

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
    <section id="compliance" className="section-padding bg-gradient-to-b from-ocean-dark/50 to-ocean-dark">
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
            <span className="gradient-text">DeepSeaGuard Compliance</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-ocean-text/80 max-w-3xl mx-auto leading-relaxed"
          >
            Advanced compliance monitoring system ensuring adherence to international 
            regulations and environmental protection standards in real-time.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Compliance Overview */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-8"
          >
            {/* DeepSeaGuard Dashboard */}
            <div className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <DeepSeaGuardIcon className="text-ocean-primary" />
                <div>
                  <h3 className="text-xl font-orbitron font-semibold text-ocean-text">
                    DeepSeaGuard Dashboard
                  </h3>
                  <p className="text-sm text-ocean-text/70">
                    Real-time compliance monitoring and alert system
                  </p>
                </div>
              </div>

              {/* Compliance Status Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Overall Compliance', value: '95%', color: 'text-green-400' },
                  { label: 'Active Alerts', value: '2', color: 'text-yellow-400' },
                  { label: 'Critical Issues', value: '1', color: 'text-red-400' },
                  { label: 'Last Update', value: '2m', color: 'text-ocean-primary' },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center p-4 bg-ocean-dark/30 rounded-lg">
                    <div className={`text-2xl font-orbitron font-bold ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-ocean-text/70 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Live Alerts */}
              <div>
                <h4 className="text-lg font-orbitron font-semibold mb-4 text-ocean-text">
                  Live Alerts
                </h4>
                <div className="space-y-3">
                  {alerts.filter(alert => alert.status === 'active').map((alert) => (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`p-4 rounded-lg border ${getAlertColor(alert.type)}`}
                    >
                      <div className="flex items-start space-x-3">
                        {getAlertIcon(alert.type)}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-medium text-ocean-text">{alert.title}</h5>
                            <span className="text-xs text-ocean-text/70">{alert.timestamp}</span>
                          </div>
                          <p className="text-sm text-ocean-text/70 mt-1">{alert.message}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Compliance Standards */}
            <div className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-orbitron font-semibold mb-6 text-ocean-text">
                Compliance Standards Status
              </h3>
              <div className="space-y-4">
                {complianceStandards.map((standard, index) => (
                  <motion.div
                    key={standard.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-ocean-dark/30 rounded-lg"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-ocean-text">{standard.name}</h4>
                      <p className="text-sm text-ocean-text/70">Last checked: {standard.lastCheck}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className={`text-lg font-orbitron font-bold ${
                          standard.status === 'Compliant' ? 'text-green-400' : 'text-yellow-400'
                        }`}>
                          {standard.score}%
                        </div>
                        <div className={`text-xs ${
                          standard.status === 'Compliant' ? 'text-green-400' : 'text-yellow-400'
                        }`}>
                          {standard.status}
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-ocean-primary/30 flex items-center justify-center">
                        <div 
                          className="w-8 h-8 rounded-full border-4 border-transparent"
                          style={{
                            borderTopColor: standard.status === 'Compliant' ? '#00ff00' : '#ffa500',
                            transform: 'rotate(-90deg)'
                          }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Compliance Features */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-xl font-orbitron font-semibold text-ocean-text">
              Key Features
            </h3>
            
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-ocean-primary" />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-ocean-text mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-ocean-text/70 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        feature.status === 'active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-ocean-primary/20 text-ocean-primary'
                      }`}>
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          feature.status === 'active' ? 'bg-green-400' : 'bg-ocean-primary'
                        }`}></div>
                        {feature.status === 'active' ? 'Active' : 'Compliant'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Compliance Summary */}
            <div className="p-6 bg-gradient-to-br from-ocean-primary/10 to-ocean-accent/10 border border-ocean-primary/30 rounded-xl">
              <h4 className="font-orbitron font-semibold text-ocean-text mb-4">
                Compliance Summary
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-ocean-text/70">Overall Score:</span>
                  <span className="text-sm font-medium text-ocean-text">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-ocean-text/70">Standards Met:</span>
                  <span className="text-sm font-medium text-green-400">4/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-ocean-text/70">Last Audit:</span>
                  <span className="text-sm font-medium text-ocean-text">2 days ago</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-ocean-text/70">Next Review:</span>
                  <span className="text-sm font-medium text-ocean-text">28 days</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
