import React from 'react';
import { ArrowDown, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenTrial: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTrial }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0D0C]"
    >
      {/* Background Image Container with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_gym_athlete_1793566985505.jpg"
          alt="Athlete performing heavy barbell strength lift at Volt Athletics"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient overlays for AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/75 to-[#0B0D0C]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0C]/90 via-[#0B0D0C]/50 to-transparent" />
        {/* Radial ambient glow in electric lime */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C6FF3D]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow kicker */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-[#171A17] border border-[#232723] text-xs font-semibold uppercase tracking-widest text-[#C6FF3D]">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>YOUR NEXT LEVEL STARTS HERE</span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight text-[#F5F5F0] leading-[0.95] mb-6 text-balance">
            BUILT BY DISCIPLINE.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C6FF3D]">
              DEFINED BY YOU.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#A5AAA3] max-w-xl mb-8 leading-relaxed">
            Train with purpose. Build your strength. Become the strongest version of yourself at VOLT ATHLETICS—an uncompromising training environment built for high-performance results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={onOpenTrial}
              className="px-8 py-4 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-display font-bold uppercase tracking-wider text-sm sm:text-base flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-xl shadow-[#C6FF3D]/20 cursor-pointer"
            >
              Start Your Free Trial
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#programs"
              className="px-8 py-4 rounded-xl bg-[#171A17] hover:bg-[#232723] text-[#F5F5F0] border border-[#232723] hover:border-white/20 font-display font-semibold uppercase tracking-wider text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              Explore Programs
            </a>
          </div>

          {/* Trust Highlights Inline */}
          <div className="mt-12 pt-6 border-t border-[#232723]/80 flex flex-wrap items-center gap-6 text-xs text-[#A5AAA3]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6FF3D]" />
              <span>Calibrated Competition Racks & Barbells</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6FF3D]" />
              <span>Certified Master Strength Coaches</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6FF3D]" />
              <span>Full Recovery & Infrared Suite</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Scroll Down Indicator */}
      <a
        href="#stats"
        aria-label="Scroll to gym statistics"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden xl:flex flex-col items-center gap-1 text-xs uppercase tracking-widest text-[#A5AAA3] hover:text-[#C6FF3D] transition-colors"
      >
        <span className="text-[9px] font-medium tracking-widest">SCROLL</span>
        <div className="w-4 h-7 rounded-full border border-[#232723] flex items-start justify-center p-0.5">
          <div className="w-1 h-1.5 rounded-full bg-[#C6FF3D] animate-bounce" />
        </div>
      </a>
    </section>
  );
};
