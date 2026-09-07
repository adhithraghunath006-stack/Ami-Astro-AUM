import React, { useState } from 'react';
import { MANAGEMENT_GUIDE } from '../data/managementGuide';
import { soundFx } from '../utils/audio';
import { Terminal, CheckCircle, Code, FileText, RefreshCw } from 'lucide-react';

interface ManagementGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ManagementGuideModal: React.FC<ManagementGuideModalProps> = ({ isOpen, onClose }) => {
  const [selectedStep, setSelectedStep] = useState(0);

  if (!isOpen) return null;

  const currentGuide = MANAGEMENT_GUIDE[selectedStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in">
      <div className="hud-panel rounded-2xl max-w-4xl w-full p-6 sm:p-10 border border-cyan-400 bg-[#030712] relative tech-border shadow-[0_0_80px_rgba(0,240,255,0.3)] max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <div>
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase block">
                AMI ASTRO OPERATIONS PROTOCOL
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                OFFICIAL WEBSITE MANAGEMENT TEAM MANUAL
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-1.5 px-3 rounded-lg bg-black/60 hover:bg-cyan-950/60 border border-cyan-500/30 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-colors"
          >
            <span>CLOSE MANUAL [✕]</span>
          </button>
        </div>

        {/* Content Area: Sidebar Tabs & Main Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 overflow-y-auto">
          
          {/* Left: 8 Protocol Step Selectors */}
          <div className="md:col-span-4 space-y-1.5 pr-2">
            <span className="font-mono text-[10px] text-slate-500 tracking-wider uppercase block mb-2">
              MAINTENANCE PROTOCOLS (8 STEPS)
            </span>
            {MANAGEMENT_GUIDE.map((guide, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={guide.step}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedStep(idx);
                  }}
                  className={`w-full text-left p-2.5 rounded-lg font-mono text-xs transition-all flex items-center gap-2.5 cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/80 font-bold shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                      : 'bg-black/40 text-slate-400 hover:text-slate-200 border border-cyan-500/10 hover:bg-cyan-950/20'
                  }`}
                >
                  <span className="w-5 h-5 rounded flex items-center justify-center bg-black/70 border border-cyan-500/30 text-[10px] text-cyan-400 shrink-0">
                    0{guide.step}
                  </span>
                  <span className="truncate">{guide.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Protocol Detailed Walkthrough */}
          <div className="md:col-span-8 bg-[#050b1d] p-6 rounded-xl border border-cyan-500/20 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-cyan-500/15 pb-3">
              <span className="px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 font-mono text-[10px] font-bold text-cyan-300 uppercase">
                {currentGuide.category}
              </span>
              <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <RefreshCw className="w-3 h-3 text-cyan-400" />
                FREQUENCY: {currentGuide.auditFrequency}
              </span>
            </div>

            <div>
              <h3 className="font-heading font-black text-2xl text-white mb-2">
                {currentGuide.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {currentGuide.summary}
              </p>
            </div>

            {/* Target File */}
            <div className="p-3 rounded-lg bg-black/60 border border-cyan-500/15 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                DATA SOURCE FILE:
              </span>
              <code className="text-cyan-300 font-bold">{currentGuide.filePath}</code>
            </div>

            {/* Action Instructions */}
            <div className="space-y-2.5">
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block">
                EXECUTION INSTRUCTIONS:
              </span>
              {currentGuide.instructions.map((inst, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{inst}</span>
                </div>
              ))}
            </div>

            {/* Code Snippet Example if present */}
            {currentGuide.codeSnippet && (
              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-cyan-400" />
                  DATA SCHEMA BLUEPRINT:
                </span>
                <pre className="p-3 rounded-lg bg-black/90 border border-cyan-500/20 font-mono text-[11px] text-cyan-200 overflow-x-auto leading-normal">
                  {currentGuide.codeSnippet}
                </pre>
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer Note */}
        <div className="pt-4 mt-4 border-t border-cyan-500/20 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>AMI ASTRO WEBSITE SPECIFICATION</span>
          <span className="text-cyan-400">ZERO REDESIGN ARCHITECTURE VERIFIED</span>
        </div>
      </div>
    </div>
  );
};
