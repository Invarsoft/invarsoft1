'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code2, Layout, ShoppingCart, Cpu, RefreshCw, ArrowRight } from 'lucide-react';

export const servicesData = [
  {
    number: '01',
    title: 'Web Development',
    tagline: 'Premium websites engineered for performance, usability and conversion.',
    icon: Globe,
    includes: [
      'Corporate websites',
      'Landing pages',
      'Interactive websites',
      '3D websites',
      'Web applications',
    ],
  },
  {
    number: '02',
    title: 'Software Development',
    tagline: 'Custom software built around the way your business actually works.',
    icon: Code2,
    includes: [
      'Web applications',
      'Dashboards',
      'Internal tools',
      'Business systems',
      'Custom platforms',
    ],
  },
  {
    number: '03',
    title: 'UI/UX Design',
    tagline: 'Interfaces designed to make complex technology feel simple.',
    icon: Layout,
    includes: [
      'UX research',
      'Wireframes',
      'Design systems',
      'UI design',
      'Prototyping',
    ],
  },
  {
    number: '04',
    title: 'E-Commerce',
    tagline: 'Digital storefronts designed to convert visitors into customers.',
    icon: ShoppingCart,
    includes: [
      'Shopify',
      'Custom stores',
      'Product experiences',
      'Checkout optimization',
      'E-commerce integrations',
    ],
  },
  {
    number: '05',
    title: 'AI & Automation',
    tagline: 'Intelligent systems that help businesses work faster and smarter.',
    icon: Cpu,
    includes: [
      'AI integrations',
      'Workflow automation',
      'AI assistants',
      'Business intelligence',
      'Intelligent workflows',
    ],
  },
  {
    number: '06',
    title: 'Digital Transformation',
    tagline: 'Modern technology systems that help businesses operate at the next level.',
    icon: RefreshCw,
    includes: [
      'Legacy modernization',
      'Cloud solutions',
      'Process digitization',
      'System integrations',
      'Technology strategy',
    ],
  },
];

export const WhatWeBuild: React.FC = () => {
  return (
    <section id="services" className="relative py-28 bg-[#050A0F] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-widest uppercase"
          >
            OUR CAPABILITIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            What We Build
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed"
          >
            From strategy to software, we turn ambitious ideas into powerful digital products.
          </motion.p>
        </div>

        {/* 6 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="h-full rounded-2xl p-8 bg-[#08131C] border border-white/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] relative overflow-hidden">
                  
                  {/* Subtle Top Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold text-cyan-400 tracking-widest uppercase">
                        {service.number}
                      </span>
                      <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:text-black group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-all duration-300">
                        <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Tagline / Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                      {service.tagline}
                    </p>

                    {/* Includes Bullet List */}
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      <span className="text-[11px] font-mono tracking-wider text-slate-500 uppercase font-semibold block mb-2">
                        INCLUDES
                      </span>
                      {service.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer with Hover Arrow */}
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                    <span>EXPLORE SERVICE</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
