import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solution from './components/Solution';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Solution />
      <Features />
      <Roadmap />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
