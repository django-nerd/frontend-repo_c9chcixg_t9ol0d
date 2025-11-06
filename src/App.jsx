import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="font-inter antialiased text-emerald-900">
      <Hero />
      <Features />
      <Process />
      <CTA />
      <footer className="bg-white py-10 text-center text-sm text-emerald-900/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} EcoPlast Industries — Sustainable PET Packaging</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
