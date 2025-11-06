import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    name: 'Material Prep',
    detail: 'Sorting, washing, and pelletizing recycled PET to stringent specs.',
  },
  {
    name: 'Preform Molding',
    detail: 'High-precision injection ensures clarity, consistency, and strength.',
  },
  {
    name: 'Blow Molding',
    detail: 'ISBM lines produce lightweight bottles with exacting tolerances.',
  },
  {
    name: 'Quality & Traceability',
    detail: 'Inline inspection, lot tracking, and lab validation for every batch.',
  },
];

const Process = () => {
  return (
    <section id="process" className="relative w-full bg-emerald-50 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_20%_10%,rgba(16,185,129,0.06),transparent),radial-gradient(30rem_18rem_at_80%_30%,rgba(5,150,105,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Precision manufacturing from start to finish
        </motion.h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((s, idx) => (
            <motion.div
              key={s.name}
              className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-emerald-900/10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-600/30">
                  <span className="text-sm font-bold">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-900">{s.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900/70">{s.detail}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-100/60 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
