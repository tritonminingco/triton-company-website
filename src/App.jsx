import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import EcosystemOverview from './components/EcosystemOverview';
import InteractiveMap from './components/InteractiveMap';
import DataInsights from './components/DataInsights';
import ComplianceSection from './components/ComplianceSection';
import ArticlesSection from './components/ArticlesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import DeepSeaGuardCTA from './components/DeepSeaGuardCTA';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-ocean-dark flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-ocean-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-ocean-text text-xl font-inter">Triton Mining Co.</h2>
          <p className="text-ocean-primary">Loading...</p>
        </div>
      </div>
    );
  }

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