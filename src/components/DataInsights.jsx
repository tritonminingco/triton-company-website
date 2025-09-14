import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
);

const DataInsights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isRealTime, setIsRealTime] = useState(true);

  // Chart data configurations
  const supplyDemandData = {
    labels: ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
        label: 'Supply (k MT)',
        data: [330, 345, 360, 380, 395, 410, 425, 440],
        borderColor: '#00b4d8',
        backgroundColor: 'rgba(0, 180, 216, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Demand (k MT)',
        data: [360, 390, 430, 480, 540, 610, 690, 780],
        borderColor: '#007ea7',
        backgroundColor: 'rgba(0, 126, 167, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const environmentalImpactData = {
    labels: ['Water Use', 'Land Disruption', 'CO₂ Emissions', 'Waste', 'Chemicals'],
    datasets: [
      {
        label: 'Traditional Mining',
        data: [85, 120, 58, 1800, 12],
        backgroundColor: '#ff6b6b',
        borderColor: '#ff5252',
        borderWidth: 1,
      },
      {
        label: 'Triton Technology',
        data: [18, 2, 21, 240, 3],
        backgroundColor: '#00b4d8',
        borderColor: '#0096c7',
        borderWidth: 1,
      },
    ],
  };

  const complianceData = {
    labels: ['Compliant', 'Warning', 'Critical'],
    datasets: [
      {
        data: [85, 12, 3],
        backgroundColor: ['#00b4d8', '#ffa500', '#ff4444'],
        borderWidth: 0,
      },
    ],
  };

  const environmentalMonitoringData = {
    labels: ['Water Quality', 'Sediment Levels', 'Species Protection', 'Noise Levels', 'Plume Dispersion', 'Recovery Rate'],
    datasets: [
      {
        label: 'Current Status',
        data: [92, 88, 95, 90, 85, 93],
        borderColor: '#00b4d8',
        backgroundColor: 'rgba(0, 180, 216, 0.2)',
        pointBackgroundColor: '#00b4d8',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00b4d8',
      },
      {
        label: 'ISA Threshold',
        data: [80, 80, 80, 80, 80, 80],
        borderColor: '#ffa500',
        backgroundColor: 'rgba(255, 165, 0, 0.1)',
        pointBackgroundColor: '#ffa500',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ffa500',
      },
    ],
  };

  const auvFleetData = {
    labels: ['AUV-Alpha', 'AUV-Beta', 'AUV-Gamma', 'AUV-Delta', 'AUV-Epsilon'],
    datasets: [
      {
        label: 'Battery Level (%)',
        data: [87, 92, 78, 95, 83],
        backgroundColor: '#00b4d8',
        borderColor: '#0096c7',
        borderWidth: 1,
      },
      {
        label: 'Efficiency (%)',
        data: [94, 89, 91, 96, 88],
        backgroundColor: '#007ea7',
        borderColor: '#005f73',
        borderWidth: 1,
      },
    ],
  };

  const sedimentPlumeData = {
    labels: ['0h', '2h', '4h', '6h', '8h', '10h', '12h', '14h', '16h', '18h', '20h', '22h', '24h'],
    datasets: [
      {
        label: 'Plume Concentration (mg/L)',
        data: [0, 45, 78, 92, 85, 72, 58, 41, 28, 18, 12, 8, 5],
        borderColor: '#ff6b6b',
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'ISA Limit (mg/L)',
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
        borderColor: '#ffa500',
        backgroundColor: 'transparent',
        borderDash: [5, 5],
        tension: 0,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e0f7ff',
          font: {
            family: 'Inter',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(12, 28, 44, 0.9)',
        titleColor: '#e0f7ff',
        bodyColor: '#e0f7ff',
        borderColor: '#00b4d8',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#e0f7ff',
          font: {
            family: 'Inter',
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#e0f7ff',
          font: {
            family: 'Inter',
          },
        },
      },
    },
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e0f7ff',
          font: {
            family: 'Inter',
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: '#e0f7ff',
          font: {
            family: 'Inter',
          },
        },
        ticks: {
          color: '#e0f7ff',
          backdropColor: 'transparent',
          font: {
            family: 'Inter',
          },
        },
        min: 0,
        max: 100,
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#e0f7ff',
          padding: 20,
          font: {
            family: 'Inter',
          },
        },
      },
    },
  };

  // Real-time data simulation
  useEffect(() => {
    if (!isRealTime) return;

    const interval = setInterval(() => {
      // Simulate real-time updates
      // This would typically connect to a real API
    }, 5000);

    return () => clearInterval(interval);
  }, [isRealTime]);

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
    <section id="data" className="section-padding bg-gradient-to-b from-ocean-dark to-ocean-dark/50">
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
            <span className="gradient-text">Data Insights</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-ocean-text/80 max-w-3xl mx-auto leading-relaxed"
          >
            Real-time analytics and environmental monitoring data showcasing the 
            impact and efficiency of our sustainable ocean mining operations.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-4 mt-6"
          >
            <span className="text-ocean-text/70">Real-time Updates:</span>
            <button
              onClick={() => setIsRealTime(!isRealTime)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                isRealTime ? 'bg-ocean-primary' : 'bg-ocean-text/30'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                  isRealTime ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="text-ocean-text/70">{isRealTime ? 'ON' : 'OFF'}</span>
          </motion.div>
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Supply vs Demand Chart */}
          <motion.div
            variants={itemVariants}
            className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-orbitron font-semibold mb-4 text-ocean-text">
              Critical Mineral Supply vs Demand
            </h3>
            <div className="h-64">
              <Line data={supplyDemandData} options={chartOptions} />
            </div>
            <p className="text-sm text-ocean-text/70 mt-4">
              Growing demand gap for critical minerals drives the need for sustainable ocean mining solutions.
            </p>
          </motion.div>

          {/* Environmental Impact Chart */}
          <motion.div
            variants={itemVariants}
            className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-orbitron font-semibold mb-4 text-ocean-text">
              Environmental Impact Comparison
            </h3>
            <div className="h-64">
              <Bar data={environmentalImpactData} options={chartOptions} />
            </div>
            <p className="text-sm text-ocean-text/70 mt-4">
              Triton technology reduces environmental impact by 70-90% compared to traditional mining methods.
            </p>
          </motion.div>

          {/* Compliance Status Chart */}
          <motion.div
            variants={itemVariants}
            className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-orbitron font-semibold mb-4 text-ocean-text">
              DeepSeaGuard Compliance Status
            </h3>
            <div className="h-64">
              <Doughnut data={complianceData} options={doughnutOptions} />
            </div>
            <p className="text-sm text-ocean-text/70 mt-4">
              Real-time ISA compliance monitoring ensures adherence to international regulations.
            </p>
          </motion.div>

          {/* Environmental Monitoring Chart */}
          <motion.div
            variants={itemVariants}
            className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-orbitron font-semibold mb-4 text-ocean-text">
              Environmental Monitoring Metrics
            </h3>
            <div className="h-64">
              <Radar data={environmentalMonitoringData} options={radarOptions} />
            </div>
            <p className="text-sm text-ocean-text/70 mt-4">
              Comprehensive environmental monitoring exceeds ISA threshold requirements.
            </p>
          </motion.div>

          {/* AUV Fleet Status Chart */}
          <motion.div
            variants={itemVariants}
            className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-orbitron font-semibold mb-4 text-ocean-text">
              AUV Fleet Operational Status
            </h3>
            <div className="h-64">
              <Bar data={auvFleetData} options={chartOptions} />
            </div>
            <p className="text-sm text-ocean-text/70 mt-4">
              Live fleet performance monitoring with battery levels and operational efficiency.
            </p>
          </motion.div>

          {/* Sediment Plume Tracking Chart */}
          <motion.div
            variants={itemVariants}
            className="bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-orbitron font-semibold mb-4 text-ocean-text">
              Sediment Plume Dispersion Tracking
            </h3>
            <div className="h-64">
              <Line data={sedimentPlumeData} options={chartOptions} />
            </div>
            <p className="text-sm text-ocean-text/70 mt-4">
              24-hour sediment plume monitoring ensures compliance with environmental standards.
            </p>
          </motion.div>
        </div>

        {/* Key Metrics Summary */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-ocean-dark/50 backdrop-blur-sm border border-ocean-primary/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-orbitron font-semibold mb-8 text-center text-ocean-text">
            Key Performance Indicators
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Environmental Compliance', value: '95%', color: 'text-green-400' },
              { label: 'Operational Efficiency', value: '92%', color: 'text-ocean-primary' },
              { label: 'Cost Reduction', value: '78%', color: 'text-ocean-accent' },
              { label: 'Safety Record', value: '100%', color: 'text-green-400' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl font-orbitron font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-sm text-ocean-text/70">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataInsights;
