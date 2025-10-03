import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import EcosystemOverview from './components/EcosystemOverview';
import InteractiveMap from './components/InteractiveMap';
import DataInsights from './components/DataInsights';
import ComplianceSection from './components/ComplianceSection';
import TeamSection from './components/TeamSection';
import ArticlesSection from './components/ArticlesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import DeepSeaGuardCTA from './components/DeepSeaGuardCTA';

function App() {
  const { scrollYProgress } = useScroll();


  return (
    <div className="min-h-screen bg-ocean-dark text-ocean-text">
      <ScrollProgress progress={scrollYProgress} />
      <Navigation />
      
      <main>
        <Hero />
          <EcosystemOverview />
          <InteractiveMap />
          <DataInsights />
          <ComplianceSection />
          <TeamSection />
          <ArticlesSection />
          <ContactSection />
      </main>
      
        <Footer />
      
      {/* DeepSeaGuard CTA Popup */}
        <DeepSeaGuardCTA />
    </div>
  );
}

export default App;