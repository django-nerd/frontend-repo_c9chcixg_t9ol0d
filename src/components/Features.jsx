import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Recycle, Zap } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Sustainable by Design',
    desc: 'Up to 100% rPET options with closed-loop sourcing and low-impact dyes.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    desc: 'Solar-assisted facilities and heat recovery systems reduce emissions.',
  },
  {
    icon: ShieldCheck,
    title: 'Food-Grade Certified',
    desc: 'Compliant with FDA and EU food-contact standards with full traceability.',
  },
  {
    icon: Recycle,
    title: 'Circular Economy',
    desc: 'Take-back programs and recycling partnerships extend material life.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Built for sustainability, tuned for performance
        </motion.h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              className="group relative rounded-2xl border border-emerald-900/10 bg-gradient-to-b from-white to-emerald-50/40 p-6 shadow-sm transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-emerald-100 p-3 text-emerald-700 ring-1 ring-emerald-600/20">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-emerald-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-emerald-900/70">{f.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 ring-emerald-400/40 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
