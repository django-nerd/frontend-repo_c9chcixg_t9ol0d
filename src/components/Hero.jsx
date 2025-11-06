import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* Background 3D scene (kept behind content) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spline
          scene="https://prod.spline.design/1o2n-0Lx0gkQ0h5V/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil above 3D, below content */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/70 via-white/60 to-white/90" />

      <motion.nav
        className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-emerald-500 shadow-lg shadow-emerald-500/30 ring-1 ring-emerald-600/30" />
          <span className="font-semibold tracking-tight text-emerald-900">EcoPlast Industries</span>
        </div>
        <div className="hidden gap-8 md:flex text-emerald-900/80">
          <a href="#features" className="hover:text-emerald-700 transition-colors">Sustainability</a>
          <a href="#process" className="hover:text-emerald-700 transition-colors">Process</a>
          <a href="#impact" className="hover:text-emerald-700 transition-colors">Impact</a>
          <a href="#contact" className="rounded-full bg-emerald-600 px-4 py-2 text-white shadow-sm shadow-emerald-600/30 hover:bg-emerald-700 transition-colors">Get a Quote</a>
        </div>
      </motion.nav>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 pt-10 text-center">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-6xl"
          style={{ y, opacity }}
        >
          Sustainable PET Bottles, Engineered for Tomorrow
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg leading-7 text-emerald-900/70"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          EcoPlast Industries blends recycled materials, clean energy, and precision manufacturing to deliver premium PET packaging with minimal footprint.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <a href="#contact" className="rounded-full bg-emerald-600 px-6 py-3 text-white shadow-lg shadow-emerald-600/30 ring-1 ring-emerald-700/30 transition-transform hover:scale-[1.02] hover:bg-emerald-700">Request Samples</a>
          <a href="#features" className="rounded-full bg-white/70 px-6 py-3 text-emerald-800 backdrop-blur ring-1 ring-emerald-900/10 transition-transform hover:scale-[1.02]">Our Promise</a>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-24 w-[120%] -translate-x-1/2 rounded-t-[50%] bg-white/90 blur-2xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
      />
    </section>
  );
};

export default Hero;
