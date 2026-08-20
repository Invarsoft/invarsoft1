'use client';

import React, { useState } from 'react';
import { MOCK_CLIENT_PORTAL } from '@/config/siteData';
import { X, CheckCircle2, Clock, FileText, DollarSign, ListTodo, User, ShieldCheck, LogOut, ArrowUpRight } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'milestones' | 'documents' | 'invoices'>('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col max-h-[92vh]">
        
        {/* Top Portal Header */}
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-xs">
              IP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-sm font-bold text-white">INVARSOFT CLIENT PORTAL</h2>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  LIVE WORKSPACE
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Client: {MOCK_CLIENT_PORTAL.clientName} • {MOCK_CLIENT_PORTAL.company}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Exit Portal</span>
            </button>
          </div>
        </div>

        {/* Portal Navigation Tabs */}
        <div className="px-6 border-b border-slate-800 bg-slate-900/90 flex gap-2 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: 'Project Overview', icon: CheckCircle2 },
            { id: 'milestones', label: 'Milestones & Tasks', icon: ListTodo },
            { id: 'documents', label: 'Document Vault', icon: FileText },
            { id: 'invoices', label: 'Invoices & Billing', icon: DollarSign },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Dashboard Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Primary Active Project Progress Card */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-blue-400 uppercase">ACTIVE SPRINT • {MOCK_CLIENT_PORTAL.phase}</span>
                    <h3 className="font-display text-lg font-bold text-white mt-0.5">
                      {MOCK_CLIENT_PORTAL.projectName}
                    </h3>
                  </div>
                  <div className="font-display text-2xl font-extrabold text-blue-400">
                    {MOCK_CLIENT_PORTAL.progressPercent}% Complete
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${MOCK_CLIENT_PORTAL.progressPercent}%` }}
                  />
                </div>

                {/* Status Milestones Checklist */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                    <span className="text-[10px] text-slate-400">01. Discovery</span>
                    <div className="font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                    <span className="text-[10px] text-slate-400">02. Design & UI</span>
                    <div className="font-semibold text-emerald-400 flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-blue-500/50 text-xs">
                    <span className="text-[10px] text-slate-400">03. AI RAG System</span>
                    <div className="font-semibold text-blue-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5" /> In Progress
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs opacity-60">
                    <span className="text-[10px] text-slate-400">04. Deployment</span>
                    <div className="font-semibold text-slate-400 flex items-center gap-1 mt-0.5">
                      Upcoming
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid: Tasks & Documents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Active Sprints */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="font-display text-sm font-bold text-white flex items-center gap-2">
                    <ListTodo className="w-4 h-4 text-blue-400" /> Sprint Task Queue
                  </h4>
                  <div className="space-y-2">
                    {MOCK_CLIENT_PORTAL.tasks.map((task) => (
                      <div key={task.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-mono text-[10px] text-slate-400">{task.id}</span>
                          <p className="text-slate-200 font-medium">{task.title}</p>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          task.status === 'done' ? 'bg-emerald-950 text-emerald-400' :
                          task.status === 'in_progress' ? 'bg-blue-950 text-blue-400' : 'bg-slate-800 text-slate-400'
                        }`}>
                          {task.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shared Vault */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <h4 className="font-display text-sm font-bold text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-400" /> Deliverables Vault
                  </h4>
                  <div className="space-y-2">
                    {MOCK_CLIENT_PORTAL.documents.map((doc, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-between text-xs">
                        <div>
                          <p className="text-slate-200 font-medium truncate max-w-[200px]">{doc.name}</p>
                          <span className="text-[10px] text-slate-400">{doc.date} • {doc.size}</span>
                        </div>
                        <button className="text-xs text-blue-400 font-semibold hover:underline">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {activeTab === 'milestones' && (
            <div className="space-y-4">
              <h4 className="font-display text-base font-bold text-white">Project Roadmap Milestones</h4>
              <div className="space-y-3">
                {MOCK_CLIENT_PORTAL.milestones.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${m.status === 'completed' ? 'text-emerald-400' : 'text-slate-600'}`} />
                      <div>
                        <p className="font-semibold text-slate-100 text-sm">{m.name}</p>
                        <span className="text-[11px] text-slate-400">Target Due Date: {m.dueDate}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      {m.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-4">
              <h4 className="font-display text-base font-bold text-white">Document & Architecture Vault</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MOCK_CLIENT_PORTAL.documents.map((doc, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-blue-400">
                      <span>{doc.type}</span>
                      <span>{doc.size}</span>
                    </div>
                    <p className="font-semibold text-slate-100 text-xs">{doc.name}</p>
                    <button className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold">
                      Download File
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'invoices' && (
            <div className="space-y-4">
              <h4 className="font-display text-base font-bold text-white">Billing & Invoices</h4>
              <div className="space-y-3">
                {MOCK_CLIENT_PORTAL.invoices.map((inv) => (
                  <div key={inv.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono text-slate-400">{inv.id}</span>
                      <p className="font-bold text-slate-100 text-sm">{inv.amount}</p>
                      <span className="text-[10px] text-slate-500">Issued: {inv.date}</span>
                    </div>
                    <span className={`px-3 py-1 rounded font-bold ${
                      inv.status === 'Paid' ? 'bg-emerald-950 text-emerald-400' : 'bg-amber-950 text-amber-400'
                    }`}>
                      {inv.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
