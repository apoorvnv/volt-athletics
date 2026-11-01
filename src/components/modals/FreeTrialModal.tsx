import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Mail, Phone, Dumbbell, ShieldCheck, Download } from 'lucide-react';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  initialProgram = 'Strength & Conditioning',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState(initialProgram);
  const [timeSlot, setTimeSlot] = useState('Morning (6:00 AM – 9:00 AM)');
  const [experience, setExperience] = useState('Intermediate');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passCode, setPassCode] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedCode = `VOLT-${Math.floor(100000 + Math.random() * 900000)}`;
      setPassCode(generatedCode);
      setIsSubmitted(true);
    }
  };

  const handleDownloadPass = () => {
    const textContent = `VOLT ATHLETICS - 7-DAY VIP TRIAL PASS
Pass Code: ${passCode}
Member: ${fullName}
Email: ${email}
Phone: ${phone || 'N/A'}
Selected Program: ${program}
Preferred Window: ${timeSlot}
Experience Level: ${experience}
Status: Valid for 7 consecutive days starting today.
Location: 840 Power Boulevard, District 4
Notice: Present this pass at the front desk or mobile check-in kiosk.`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `VOLT_PASS_${passCode}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setErrors({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div
        className="relative w-full max-w-xl bg-[#131614] border border-[#232723] rounded-2xl shadow-2xl overflow-hidden transition-all text-[#F5F5F0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#232723] bg-[#171A17]/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C6FF3D]/10 border border-[#C6FF3D]/30 flex items-center justify-center text-[#C6FF3D]">
              <Dumbbell className="w-4 h-4" />
            </div>
            <div>
              <h2 id="trial-modal-title" className="text-lg font-bold font-display uppercase tracking-wide">
                Start Your 7-Day Free Trial
              </h2>
              <p className="text-xs text-[#A5AAA3]">Zero commitment. Full gym & class access.</p>
            </div>
          </div>
          <button
            onClick={resetForm}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-[#A5AAA3] hover:text-[#F5F5F0] hover:bg-[#232723] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#C6FF3D]/20 border border-[#C6FF3D] flex items-center justify-center text-[#C6FF3D]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold">Registration Confirmed</span>
                <h3 className="text-2xl font-bold font-display uppercase mt-1">Welcome to VOLT, {fullName}</h3>
                <p className="text-sm text-[#A5AAA3] max-w-md mx-auto mt-2">
                  Your complimentary 7-day all-access trial has been registered in our system. A confirmation email has been dispatched to <span className="text-white font-medium">{email}</span>.
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="p-5 rounded-xl bg-[#0B0D0C] border border-[#232723] text-left space-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6FF3D]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex justify-between items-start border-b border-[#232723] pb-3">
                  <div>
                    <span className="text-xs text-[#A5AAA3] uppercase tracking-wider">VIP TRIAL PASS</span>
                    <p className="text-lg font-mono font-bold text-[#C6FF3D] mt-0.5">{passCode}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#A5AAA3]">Valid For</span>
                    <p className="text-xs font-semibold text-white">7 Days from Today</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#A5AAA3] block">Preferred Program</span>
                    <span className="text-white font-medium">{program}</span>
                  </div>
                  <div>
                    <span className="text-[#A5AAA3] block">Training Window</span>
                    <span className="text-white font-medium">{timeSlot.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#232723] flex items-center justify-between text-xs text-[#A5AAA3]">
                  <span>Present at 840 Power Blvd Front Desk</span>
                  <span className="text-[#C6FF3D] font-medium">Ready for check-in</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadPass}
                  className="flex-1 py-3 px-4 bg-[#232723] hover:bg-[#2C312C] text-[#F5F5F0] rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors border border-white/5"
                >
                  <Download className="w-4 h-4 text-[#C6FF3D]" />
                  Download Pass Voucher
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 py-3 px-4 bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] rounded-xl font-bold text-sm transition-colors"
                >
                  Done & Close
                </button>
              </div>

              <p className="text-[11px] text-[#A5AAA3]/70">
                Notice: Demo environment. No payment or credit card was processed.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A5AAA3] mb-1.5">
                  Full Name <span className="text-[#C6FF3D]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A5AAA3]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full pl-10 pr-4 py-2.5 bg-[#0B0D0C] border ${
                      errors.fullName ? 'border-red-500' : 'border-[#232723]'
                    } rounded-xl text-sm text-[#F5F5F0] placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D] transition-colors`}
                  />
                </div>
                {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A5AAA3] mb-1.5">
                  Email Address <span className="text-[#C6FF3D]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A5AAA3]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className={`w-full pl-10 pr-4 py-2.5 bg-[#0B0D0C] border ${
                      errors.email ? 'border-red-500' : 'border-[#232723]'
                    } rounded-xl text-sm text-[#F5F5F0] placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D] transition-colors`}
                  />
                </div>
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              {/* Phone (Optional) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A5AAA3] mb-1.5">
                  Phone Number <span className="text-xs normal-case text-[#A5AAA3]/60">(Optional for SMS alerts)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A5AAA3]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-10 pr-4 py-2.5 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-[#F5F5F0] placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D] transition-colors"
                  />
                </div>
              </div>

              {/* Program & Time Slot in 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A5AAA3] mb-1.5">
                    Primary Program Interest
                  </label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C6FF3D] transition-colors"
                  >
                    <option value="Strength & Conditioning">Strength & Conditioning</option>
                    <option value="Personal Training">Personal 1-on-1 Coaching</option>
                    <option value="HIIT & Functional Training">HIIT & Functional Training</option>
                    <option value="Hypertrophy & Muscle Building">Hypertrophy & Muscle Building</option>
                    <option value="Weight Management & MetCon">Weight Management & MetCon</option>
                    <option value="Mobility & Active Recovery">Mobility & Active Recovery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A5AAA3] mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2.5 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-[#F5F5F0] focus:outline-none focus:border-[#C6FF3D] transition-colors"
                  >
                    <option value="Morning (6:00 AM – 9:00 AM)">Morning (6:00 AM – 9:00 AM)</option>
                    <option value="Midday (11:30 AM – 2:00 PM)">Midday (11:30 AM – 2:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                    <option value="Flexible / Weekends">Flexible / Weekends</option>
                  </select>
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A5AAA3] mb-2">
                  Current Training Experience
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setExperience(lvl)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        experience === lvl
                          ? 'border-[#C6FF3D] bg-[#C6FF3D]/10 text-[#C6FF3D]'
                          : 'border-[#232723] bg-[#0B0D0C] text-[#A5AAA3] hover:text-[#F5F5F0]'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Perks Checklist */}
              <div className="pt-2 pb-1 border-t border-[#232723] space-y-1.5 text-xs text-[#A5AAA3]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C6FF3D]" />
                  <span>Includes 1 complimentary fitness assessment & body scan</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C6FF3D]" />
                  <span>No credit card required. No automatic recurring charges.</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-4 py-3.5 px-6 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-bold font-display uppercase tracking-wider text-base transition-all transform active:scale-[0.99] shadow-lg shadow-[#C6FF3D]/10"
              >
                Claim 7-Day Free Trial Pass
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
