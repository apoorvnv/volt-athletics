import React from 'react';
import { X, Flame, Clock, Dumbbell, Check, ArrowRight } from 'lucide-react';
import { Program } from '../../data/gymData';

interface ProgramDetailModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
  onStartTrial: (programTitle: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  isOpen,
  onClose,
  onStartTrial,
}) => {
  if (!isOpen || !program) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-2xl bg-[#131614] border border-[#232723] rounded-2xl overflow-hidden shadow-2xl text-[#F5F5F0] max-h-[90vh] flex flex-col">
        {/* Banner with image */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden bg-black">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131614] via-[#131614]/40 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold">
              {program.difficulty} · {program.duration}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wide text-white mt-1">
              {program.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#A5AAA3]">{program.subtitle}</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#A5AAA3] font-semibold mb-2">Program Overview</h3>
            <p className="text-sm leading-relaxed text-[#F5F5F0]/90">{program.description}</p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#0B0D0C] border border-[#232723] text-xs">
            <div>
              <span className="text-[#A5AAA3] block">Est. Caloric Output</span>
              <span className="text-[#C6FF3D] font-mono font-bold text-sm mt-0.5 block">{program.caloriesBurn}</span>
            </div>
            <div>
              <span className="text-[#A5AAA3] block">Lead Coach</span>
              <span className="text-white font-semibold text-sm mt-0.5 block">{program.trainerName}</span>
            </div>
            <div>
              <span className="text-[#A5AAA3] block">Intensity Tier</span>
              <span className="text-white font-semibold text-sm mt-0.5 block">{program.difficulty}</span>
            </div>
          </div>

          {/* Core Focus Pillars */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#A5AAA3] font-semibold mb-3">Core Training Pillars</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.focus.map((pillar, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0B0D0C]/60 border border-[#232723] text-xs">
                  <div className="w-5 h-5 rounded-md bg-[#C6FF3D]/10 text-[#C6FF3D] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-white font-medium">{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Weekly Micro-cycle */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#A5AAA3] font-semibold mb-3">Sample Micro-Cycle Periodization</h3>
            <div className="space-y-2">
              {program.weeklyPlan.map((planItem, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#0B0D0C]/40 border border-[#232723] text-xs">
                  <span className="font-mono text-[#C6FF3D] font-semibold">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="text-[#F5F5F0]">{planItem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Action Footer */}
        <div className="p-4 sm:p-5 border-t border-[#232723] bg-[#171A17] flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <span className="text-xs text-[#A5AAA3] block">Experience it risk-free</span>
            <span className="text-xs font-semibold text-[#C6FF3D]">7-Day Complimentary Trial</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#232723] text-xs font-semibold text-[#A5AAA3] hover:text-white hover:bg-[#232723] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onStartTrial(program.title);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-bold font-display uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#C6FF3D]/15"
            >
              Start Free Trial With This Program
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
