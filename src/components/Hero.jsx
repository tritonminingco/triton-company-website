import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
      delay: Math.random() * 20,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToEcosystem = () => {
    const element = document.querySelector('#ecosystem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-dark via-ocean-dark to-ocean-primary/20">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 rounded-full bg-ocean-primary opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.speed * 10,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-ocean-primary/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-ocean-accent/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center container-max sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-orbitron"
          >
            <span className="gradient-text whitespace-nowrap">Redefining Deep-Sea Mining</span>
            <br />
            <span className="text-lg text-ocean-text sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Sustainable, autonomous, and transparent by design.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed sm:text-xl lg:text-2xl text-ocean-text/80"
          >
          </motion.p>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12 text-sm sm:text-base"
          >
            {['Sustainability', 'Compliance', 'Transparency', 'Innovation'].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="flex items-center px-4 py-2 space-x-2 border rounded-full bg-ocean-primary/10 border-ocean-primary"
              >
                <div className="w-2 h-2 rounded-full bg-ocean-primary"></div>
                <span className="font-medium text-ocean-text">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToEcosystem}
              className="flex items-center space-x-2 btn-primary group"
            >
              <span>Explore the Technology</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 btn-secondary group"
            >
              <Play size={20} className="transition-transform duration-300 group-hover:scale-110" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid max-w-4xl grid-cols-2 gap-8 mx-auto mt-20 md:grid-cols-4"
          >
            {[
              { number: '95%', label: 'Environmental Compliance' },
              { number: '24/7', label: 'Real-time Monitoring' },
              { number: '50+', label: 'Autonomous Vehicles' },
              { number: '100%', label: 'Transparent Operations' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-xl font-bold sm:text-2xl lg:text-3xl font-inter gradient-text">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-ocean-text/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToEcosystem}
          className="transition-colors duration-300 text-ocean-text hover:text-ocean-primary"
          aria-label="Scroll to ecosystem"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
