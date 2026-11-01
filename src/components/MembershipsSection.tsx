import React, { useState } from 'react';
import { Check, Zap, HelpCircle, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../data/gymData';

interface MembershipsSectionProps {
  onSelectPlan: (plan: MembershipPlan, isAnnual: boolean) => void;
}

export const MembershipsSection: React.FC<MembershipsSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="memberships" className="py-24 bg-[#131614] border-t border-[#232723] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold block mb-2">
            MEMBERSHIP TIERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#F5F5F0] mb-4">
            INVEST IN YOUR <br />
            <span className="text-[#C6FF3D]">GREATEST ASSET</span>
          </h2>
          <p className="text-sm text-[#A5AAA3]">
            Flexible memberships designed for athletes committed to consistent results. No hidden maintenance fees.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-[#0B0D0C] border border-[#232723]">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                !isAnnual
                  ? 'bg-[#171A17] text-white shadow-sm border border-white/10 font-bold'
                  : 'text-[#A5AAA3] hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-[#C6FF3D] text-[#0B0D0C] font-bold shadow-md shadow-[#C6FF3D]/10'
                  : 'text-[#A5AAA3] hover:text-white'
              }`}
            >
              <span>Annual Plan</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                isAnnual ? 'bg-[#0B0D0C] text-[#C6FF3D]' : 'bg-[#C6FF3D]/20 text-[#C6FF3D]'
              }`}>
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPricePerMonth : plan.monthlyPrice;
            const isPerformance = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                  isPerformance
                    ? 'bg-[#171A17] border-2 border-[#C6FF3D] shadow-2xl shadow-[#C6FF3D]/10 lg:-translate-y-2'
                    : 'bg-[#0B0D0C] border border-[#232723] hover:border-white/20'
                }`}
              >
                {/* Popular Pill */}
                {isPerformance && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C6FF3D] text-[#0B0D0C] text-[11px] font-display font-bold uppercase tracking-wider shadow-md">
                    MOST RECOMMENDED TIER
                  </div>
                )}

                <div>
                  <div className="border-b border-[#232723] pb-6 mb-6">
                    <span className="text-xs uppercase tracking-widest text-[#A5AAA3] font-mono">
                      {plan.id.toUpperCase()}
                    </span>
                    <h3 className="text-3xl font-display font-bold uppercase text-white mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#A5AAA3] mt-1.5 min-h-[32px] leading-relaxed">
                      {plan.tagline}
                    </p>

                    {/* Price display */}
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-[#A5AAA3]">$</span>
                      <span className="text-5xl font-display font-bold text-white tracking-tight tabular-nums">
                        {price}
                      </span>
                      <span className="text-xs text-[#A5AAA3] font-medium">/ month</span>
                    </div>
                    <span className="text-[11px] text-[#A5AAA3]/70 block mt-1">
                      {isAnnual ? 'Billed annually · Placeholder demo price' : 'Billed month-to-month · Editable rate'}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white block mb-3">
                      Included Privileges:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-[#F5F5F0]">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPerformance
                              ? 'bg-[#C6FF3D]/20 text-[#C6FF3D]'
                              : 'bg-white/10 text-white'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Choose plan button */}
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan, isAnnual)}
                    className={`w-full py-3.5 px-6 rounded-xl font-display font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg ${
                      isPerformance
                        ? 'bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] shadow-[#C6FF3D]/20'
                        : 'bg-[#171A17] hover:bg-[#232723] text-white border border-[#232723] hover:border-white/20'
                    }`}
                  >
                    <span>Choose {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-[#A5AAA3]/60 mt-2.5">
                    Terms & fees confirmed at facility reception
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Strip */}
        <div className="mt-12 p-4 rounded-xl bg-[#0B0D0C] border border-[#232723] text-center text-xs text-[#A5AAA3] max-w-3xl mx-auto">
          <p>
            All displayed membership fees are editable demonstration placeholders. Final membership agreements, guest terms, and included services will be confirmed directly by the gym upon orientation.
          </p>
        </div>
      </div>
    </section>
  );
};
