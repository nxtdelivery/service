import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DeliveryForm from './components/DeliveryForm';
import Services from './components/Services';
import PricingSection from './components/PricingSection';
import CoverageMap from './components/CoverageMap';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import TrackingDemo from './components/TrackingDemo';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <DeliveryForm />
        <Benefits />
        <PricingSection />
        <CoverageMap />
        <TrackingDemo />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;