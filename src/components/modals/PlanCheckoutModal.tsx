import React, { useState } from 'react';
import { X, CheckCircle2, Shield, CreditCard, Sparkles, Check } from 'lucide-react';
import { MembershipPlan } from '../../data/gymData';

interface PlanCheckoutModalProps {
  plan: MembershipPlan | null;
  isAnnual: boolean;
  isOpen: boolean;
  onClose: () => void;
  onConfirmTrialInstead: () => void;
}

export const PlanCheckoutModal: React.FC<PlanCheckoutModalProps> = ({
  plan,
  isAnnual,
  isOpen,
  onClose,
  onConfirmTrialInstead,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !plan) return null;

  const currentPrice = isAnnual ? plan.annualPricePerMonth : plan.monthlyPrice;
  const billingCycle = isAnnual ? 'Billed annually ($' + currentPrice * 12 + '/yr)' : 'Billed monthly';

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!agreeTerms) {
      newErrors.terms = 'Please accept the demo membership terms';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setPhone('');
    setAgreeTerms(false);
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
    >
      <div className="relative w-full max-w-lg bg-[#131614] border border-[#232723] rounded-2xl p-6 text-[#F5F5F0] shadow-2xl">
        <button
          onClick={handleReset}
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#A5AAA3] hover:text-[#F5F5F0] hover:bg-[#232723]"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C6FF3D]/20 border border-[#C6FF3D] flex items-center justify-center text-[#C6FF3D]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold">Enrollment Initiated</span>
              <h3 className="text-2xl font-bold font-display uppercase mt-1">VOLT {plan.name} Membership</h3>
              <p className="text-xs text-[#A5AAA3] max-w-sm mx-auto mt-2">
                Thank you, <span className="text-white font-medium">{name}</span>. An onboarding welcome packet and contract agreement have been prepared for <span className="text-white">{email}</span>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D0C] border border-[#232723] text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-[#232723] pb-2">
                <span className="text-[#A5AAA3]">Selected Tier</span>
                <span className="text-[#C6FF3D] font-bold uppercase">{plan.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#232723] pb-2">
                <span className="text-[#A5AAA3]">Rate</span>
                <span className="font-mono font-bold text-white">${currentPrice}/month ({billingCycle})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A5AAA3]">Next Step</span>
                <span className="text-white">Verify ID & collect keycard at front desk</span>
              </div>
            </div>

            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[11px] text-amber-200/90 text-left">
              Demo Environment Notice: No actual payment transaction took place. Official membership agreements and credit card processing are finalized upon member verification at VOLT ATHLETICS.
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-bold font-display uppercase tracking-wider rounded-xl text-sm transition-all"
            >
              Complete Demo Checkout
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold">Select Membership</span>
              <h3 className="text-2xl font-bold font-display uppercase text-white mt-1">
                VOLT {plan.name} Plan
              </h3>
              <p className="text-xs text-[#A5AAA3]">{plan.tagline}</p>
            </div>

            {/* Price Preview Card */}
            <div className="p-4 rounded-xl bg-[#0B0D0C] border border-[#232723] mb-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#A5AAA3] block">Commitment</span>
                <span className="text-xs font-semibold text-white">{billingCycle}</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-display font-bold text-[#C6FF3D]">${currentPrice}</span>
                <span className="text-xs text-[#A5AAA3]">/mo</span>
              </div>
            </div>

            {/* Included highlights */}
            <div className="mb-5 space-y-1.5">
              <span className="text-xs uppercase tracking-wider text-[#A5AAA3] font-semibold block mb-2">
                Tier Inclusions:
              </span>
              {plan.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#F5F5F0]">
                  <Check className="w-3.5 h-3.5 text-[#C6FF3D] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleCheckout} className="space-y-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1">Full Legal Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan Miller"
                  className="w-full px-3 py-2 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-white focus:outline-none focus:border-[#C6FF3D]"
                />
                {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan@example.com"
                  className="w-full px-3 py-2 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-white focus:outline-none focus:border-[#C6FF3D]"
                />
                {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2 text-xs text-[#A5AAA3] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 rounded border-[#232723] accent-[#C6FF3D]"
                  />
                  <span>
                    I acknowledge that final membership terms, fees, and included services will be confirmed directly with VOLT ATHLETICS.
                  </span>
                </label>
                {errors.terms && <p className="text-[11px] text-red-400 mt-1">{errors.terms}</p>}
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-bold font-display uppercase tracking-wider rounded-xl text-sm transition-all shadow-md shadow-[#C6FF3D]/10"
                >
                  Confirm & Reserve Membership
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onConfirmTrialInstead();
                  }}
                  className="text-xs text-[#A5AAA3] hover:text-[#C6FF3D] py-1 transition-colors text-center"
                >
                  Prefer to try first? Claim a free 7-day trial instead &rarr;
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
