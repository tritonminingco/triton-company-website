import React from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = ({ progress }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-ocean-primary/20 z-50"
      style={{
        scaleX: progress,
        transformOrigin: 'left'
      }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-ocean-primary to-ocean-accent"
        style={{
          width: '100%'
        }}
      />
    </motion.div>
  );
};

export default ScrollProgress;
