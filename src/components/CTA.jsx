import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-emerald-900 py-24 text-white">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(16,185,129,0.6), transparent 40%), radial-gradient(circle at 80% 30%, rgba(52,211,153,0.6), transparent 45%), radial-gradient(circle at 50% 80%, rgba(5,150,105,0.6), transparent 50%)'
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s build a cleaner supply chain together</h2>
          <p className="mt-4 text-emerald-50/90">From beverage to personal care, we customize PET solutions that elevate your brand and reduce impact. Reach out for samples, specs, or quotes.</p>
          <form className="mt-10 grid gap-4 sm:grid-cols-2">
            <input className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-emerald-50/60 focus:border-white/40 focus:outline-none" placeholder="Full name" required />
            <input type="email" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-emerald-50/60 focus:border-white/40 focus:outline-none" placeholder="Work email" required />
            <input className="sm:col-span-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-emerald-50/60 focus:border-white/40 focus:outline-none" placeholder="Company" />
            <textarea className="sm:col-span-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-emerald-50/60 focus:border-white/40 focus:outline-none" rows={4} placeholder="Project details (volumes, sizes, timelines)" />
            <div className="sm:col-span-2 flex items-center justify-center gap-3">
              <button type="submit" className="rounded-full bg-white px-6 py-3 font-medium text-emerald-900 shadow-lg shadow-emerald-200/30 transition-transform hover:scale-[1.02]">Request a Quote</button>
              <span className="text-emerald-50/70 text-sm">We respond within one business day.</span>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
