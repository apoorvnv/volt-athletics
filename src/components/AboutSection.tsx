import React from 'react';
import { ArrowRight, Check, Shield, Flame, Target } from 'lucide-react';
import { BRAND_PRINCIPLES } from '../data/gymData';

interface AboutSectionProps {
  onOpenPhilosophy: () => void;
  onOpenTrial: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenPhilosophy,
  onOpenTrial,
}) => {
  return (
    <section id="about" className="py-24 bg-[#131614] border-t border-[#232723] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Gym Photography with Overlays */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#232723] group">
              <img
                src="/images/about_gym_facility_1793566985788.jpg"
                alt="Volt Athletics high performance strength floor and turf track"
                className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-transparent to-transparent opacity-80" />

              {/* Bottom Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B0D0C]/80 backdrop-blur-md border border-white/10">
                <span className="text-[11px] uppercase tracking-widest text-[#C6FF3D] font-bold block mb-1">
                  FACILITY SPECIFICATION
                </span>
                <p className="text-xs text-[#F5F5F0]">
                  12,000 sq ft of calibrated Eleiko barbells, competition power racks, dedicated sprint turf, and precision recovery suites.
                </p>
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-28 h-28 bg-[#C6FF3D]/10 rounded-2xl border border-[#C6FF3D]/20 -z-10 pointer-events-none" />
          </div>

          {/* Right Column: Editorial Text & Brand Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold block mb-2">
                ABOUT VOLT ATHLETICS
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#F5F5F0] leading-none mb-4">
                MORE THAN A GYM. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A5AAA3]">
                  A STANDARD.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-[#A5AAA3] leading-relaxed">
                Founded on the premise that casual effort produces casual results, VOLT ATHLETICS is engineered for those who demand excellence from their bodies and minds. We blend the discipline of elite collegiate athletic programs with the aesthetics and hospitality of a modern private club.
              </p>
            </div>

            {/* Core Brand Principles (Editorial Numbering) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {BRAND_PRINCIPLES.map((principle) => (
                <div key={principle.number} className="p-4 rounded-xl bg-[#0B0D0C] border border-[#232723] space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#C6FF3D]">{principle.number}</span>
                    <h3 className="text-xs font-bold font-display uppercase tracking-wider text-white">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#A5AAA3] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenPhilosophy}
                className="px-6 py-3.5 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-display font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#C6FF3D]/15"
              >
                Our Philosophy
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenTrial}
                className="px-6 py-3.5 rounded-xl bg-[#171A17] hover:bg-[#232723] text-white border border-[#232723] font-display font-semibold uppercase tracking-wider text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Schedule Facility Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
