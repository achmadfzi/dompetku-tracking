import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturesGrid from './components/FeaturesGrid';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturesGrid />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
