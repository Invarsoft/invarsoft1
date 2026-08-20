'use client';

import React, { useState } from 'react';
import { INSIGHTS_ARTICLES, InsightArticle } from '@/config/siteData';
import { ArrowRight, BookOpen, Clock, X } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI', 'Technology', 'Design', 'Engineering', 'Business'];

  const filteredArticles = selectedCategory === 'All'
    ? INSIGHTS_ARTICLES
    : INSIGHTS_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <section id="insights" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-semibold text-blue-700 uppercase">
              INSIGHTS & PERSPECTIVES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              THINKING ABOUT WHAT'S NEXT.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Technical breakdowns, AI architectural guides, and engineering reflections from the Invarsoft core team.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-blue-600 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="group rounded-3xl bg-slate-50 border border-slate-200 p-6 flex flex-col justify-between hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="text-blue-600 font-bold uppercase bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {art.snippet}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{art.author}</div>
                  <div className="text-[10px] text-slate-500">{art.role}</div>
                </div>

                <button
                  onClick={() => setActiveArticle(art)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:text-blue-700"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Modal Reader */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-8 space-y-6 shadow-2xl border border-slate-200">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
                {activeArticle.category} • {activeArticle.readTime}
              </span>
              <h2 className="font-display text-2xl font-extrabold text-slate-900 pt-2">
                {activeArticle.title}
              </h2>
              <div className="text-xs text-slate-500 font-mono">
                By {activeArticle.author} ({activeArticle.role}) — {activeArticle.date}
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed border-t border-b border-slate-100 py-4">
              {activeArticle.snippet}
            </p>

            <div className="text-xs text-slate-600 leading-relaxed space-y-3">
              <p>{activeArticle.content}</p>
              <p>
                At Invarsoft, we prioritize production engineering standards over superficial demo features. When implementing document retrieval systems, our teams combine dense neural embeddings with BM25 sparse keyword ranking, followed by cross-encoder reranking to ensure accuracy.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
