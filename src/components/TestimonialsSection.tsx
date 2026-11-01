import React from 'react';
import { Star, Quote, ArrowRight, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

interface TestimonialsSectionProps {
  onOpenTrial: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-24 bg-[#131614] border-t border-[#232723] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold block mb-2">
              ATHLETE TRANSFORMATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#F5F5F0]">
              BUILT ON SWEAT, <br />
              <span className="text-[#C6FF3D]">PROVEN BY RESULTS</span>
            </h2>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 justify-end text-[#C6FF3D] mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-[#A5AAA3]">
              Sample athlete case stories. Replaceable with verified gym member feedback.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-[#0B0D0C] border border-[#232723] hover:border-[#C6FF3D]/30 transition-all flex flex-col justify-between space-y-6"
            >
              <div>
                {/* Achievement Badge */}
                <div className="mb-4 pb-4 border-b border-[#232723] flex items-center justify-between">
                  <div className="text-xs font-mono font-bold text-[#C6FF3D]">
                    {t.achievement}
                  </div>
                  <div className="flex gap-0.5 text-[#C6FF3D]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm text-[#F5F5F0]/90 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#232723]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#232723]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-display font-bold uppercase text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#A5AAA3]">{t.role}</p>
                  <span className="text-[10px] text-[#C6FF3D] font-mono block">
                    {t.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-[#171A17] border border-[#232723] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C6FF3D]/10 text-[#C6FF3D] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-display font-bold uppercase text-white">
                Start Writing Your Own Story
              </h4>
              <p className="text-xs text-[#A5AAA3]">
                Join 2,500+ athletes who chose discipline over excuses.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenTrial}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-display font-bold uppercase tracking-wider text-xs whitespace-nowrap transition-colors cursor-pointer"
          >
            Claim Your Free Trial Pass
          </button>
        </div>
      </div>
    </section>
  );
};
