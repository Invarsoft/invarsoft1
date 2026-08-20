'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MessageSquare } from 'lucide-react';

// Ready architecture array for when real client reviews are added
export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const activeTestimonials: TestimonialItem[] = []; // Empty by default to respect truthful policy

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#08131C] text-white border-b border-white/10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase"
          >
            CLIENT FEEDBACK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Client Stories
          </motion.h2>
        </div>

        {/* If no testimonials populated yet, display professional placeholder */}
        {activeTestimonials.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto p-12 rounded-3xl bg-[#050A0F] border border-white/10 backdrop-blur-xl text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mx-auto">
              <MessageSquare className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">Client stories coming soon.</h3>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
              We focus on building high-impact software and digital products. Official case study reviews and client feedback will be published here upon project completions.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeTestimonials.map((item) => (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-[#050A0F] border border-white/10 backdrop-blur-xl space-y-4"
              >
                <Quote className="w-8 h-8 text-cyan-400 opacity-60" />
                <p className="text-slate-300 text-sm leading-relaxed italic">"{item.quote}"</p>
                <div className="pt-4 border-t border-white/10">
                  <div className="font-bold text-white text-sm">{item.author}</div>
                  <div className="text-xs text-slate-400">{item.role} &bull; {item.company}</div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
