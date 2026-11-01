import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Dumbbell, Zap } from 'lucide-react';

interface CtaSectionProps {
  onOpenTrial: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenTrial }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('Strength & Conditioning');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleQuickRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Valid email is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSuccess(true);
  };

  return (
    <section className="relative py-28 bg-[#0B0D0C] overflow-hidden border-t border-[#232723]">
      {/* Background with dramatic dark athletic photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_gym_athlete_1793566985505.jpg"
          alt="Athletic training backdrop"
          className="w-full h-full object-cover opacity-25 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/80 to-[#0B0D0C]" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C6FF3D]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171A17] border border-[#232723] text-xs font-semibold uppercase tracking-widest text-[#C6FF3D] mb-6">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>ZERO EXCUSES · 100% ATHLETIC CULTURE</span>
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold uppercase tracking-tight text-[#F5F5F0] mb-6">
          YOUR FUTURE SELF <br />
          <span className="text-[#C6FF3D]">IS WAITING.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#A5AAA3] max-w-2xl mx-auto mb-10 leading-relaxed">
          Take the first step. Experience the energy of VOLT ATHLETICS with an all-inclusive 7-day complimentary trial pass.
        </p>

        {/* Quick Lead Capture Box */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#131614]/90 backdrop-blur-md border border-[#232723] shadow-2xl text-left">
          {isSuccess ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#C6FF3D]/20 border border-[#C6FF3D] flex items-center justify-center text-[#C6FF3D]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold uppercase text-white">Trial Pass Reserved!</h3>
                <p className="text-sm text-[#A5AAA3] mt-1">
                  Welcome, <span className="text-white font-medium">{name}</span>. Your pass code has been dispatched to <span className="text-white">{email}</span>.
                </p>
              </div>
              <p className="text-xs text-[#A5AAA3]/70 pt-2 border-t border-[#232723]">
                Demo Mode Notice: Pass confirmed in simulation mode. No charges applied.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setName('');
                  setEmail('');
                }}
                className="px-6 py-2.5 rounded-xl bg-[#232723] hover:bg-[#2F352F] text-xs font-semibold text-white transition-colors"
              >
                Register Another Guest Pass
              </button>
            </div>
          ) : (
            <form onSubmit={handleQuickRegister} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marcus Reid"
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-white placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D]"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-white placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D]"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                  Preferred Discipline
                </label>
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-white focus:outline-none focus:border-[#C6FF3D]"
                >
                  <option value="Strength & Conditioning">Strength & Conditioning</option>
                  <option value="Personal Training">Personal 1-on-1 Coaching</option>
                  <option value="HIIT & Functional Training">HIIT & Functional Training</option>
                  <option value="Hypertrophy & Muscle Building">Hypertrophy & Muscle Building</option>
                  <option value="Mobility & Active Recovery">Mobility & Active Recovery</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-display font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-[#C6FF3D]/20 cursor-pointer"
                >
                  <span>Claim Your Free Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onOpenTrial}
                  className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-[#171A17] hover:bg-[#232723] text-xs font-semibold text-[#A5AAA3] hover:text-white border border-[#232723] transition-colors whitespace-nowrap cursor-pointer text-center"
                >
                  Advanced Options & Times
                </button>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-[#A5AAA3]/70">
                <span>Free 7-Day Access · No Credit Card Required</span>
                <span>Demo Mode Active</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
