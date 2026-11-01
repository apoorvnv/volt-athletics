import React from 'react';
import { X, Award, Zap, Target, Users, Shield } from 'lucide-react';
import { BRAND_PRINCIPLES } from '../../data/gymData';

interface PhilosophyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTrial: () => void;
}

export const PhilosophyModal: React.FC<PhilosophyModalProps> = ({
  isOpen,
  onClose,
  onStartTrial,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-2xl bg-[#131614] border border-[#232723] rounded-2xl p-6 sm:p-8 text-[#F5F5F0] shadow-2xl max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 p-2 rounded-lg text-[#A5AAA3] hover:text-[#F5F5F0] hover:bg-[#232723] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold">The Volt Ethos</span>
            <h2 className="text-3xl font-bold font-display uppercase tracking-wide text-white mt-1">
              Built By Discipline. Defined By You.
            </h2>
            <p className="text-sm text-[#A5AAA3] mt-2 leading-relaxed">
              At VOLT ATHLETICS, we reject the notion that fitness is a casual hobby or an aesthetic shortcut. Physical capacity is the bedrock of personal autonomy, resilience, and mental clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BRAND_PRINCIPLES.map((principle) => (
              <div key={principle.number} className="p-4 rounded-xl bg-[#0B0D0C] border border-[#232723] space-y-2">
                <span className="font-mono text-sm font-bold text-[#C6FF3D]">{principle.number}</span>
                <h3 className="font-display uppercase font-bold text-white text-base">{principle.title}</h3>
                <p className="text-xs text-[#A5AAA3] leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-[#171A17] border border-[#232723] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-display uppercase font-bold text-white text-base">Step on the Platform</h4>
              <p className="text-xs text-[#A5AAA3]">Experience our facility and training ethos with zero risk.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onStartTrial();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-bold font-display uppercase tracking-wider text-xs whitespace-nowrap transition-colors"
            >
              Claim 7-Day Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
