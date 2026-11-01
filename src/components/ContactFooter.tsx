import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Zap,
  CheckCircle2,
  Send,
  ExternalLink,
  Download,
  Key,
  ShieldCheck,
  AlertCircle,
  Loader2,
  Inbox,
} from 'lucide-react';
import {
  sendInquiryEmail,
  createMailtoLink,
  downloadInquiryReceipt,
  GYM_OWNER_EMAIL,
  InquiryPayload,
} from '../utils/emailService';

interface ContactFooterProps {
  onOpenTrial: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenTrial }) => {
  // Contact Form Fields
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactProgram, setContactProgram] = useState('Strength & Conditioning');
  const [preferredTime, setPreferredTime] = useState('Morning (6:00 AM – 10:00 AM)');
  const [contactMessage, setContactMessage] = useState('');

  // Status & Validation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState<InquiryPayload | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Web3Forms Key Config Modal
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [customKey, setCustomKey] = useState(
    () => localStorage.getItem('volt_web3forms_key') || ''
  );
  const [keySaved, setKeySaved] = useState(false);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');
  const [newsletterError, setNewsletterError] = useState('');

  // Legal Modal States
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!contactName.trim()) errs.name = 'Please provide your full name.';
    if (!contactEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!contactMessage.trim()) {
      errs.message = 'Please specify your goals or inquiry question.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const inquiryId = Math.floor(100000 + Math.random() * 900000).toString();

    const payload: InquiryPayload = {
      name: contactName.trim(),
      email: contactEmail.trim(),
      phone: contactPhone.trim(),
      program: contactProgram,
      preferredTime: preferredTime,
      message: contactMessage.trim(),
      inquiryId,
    };

    await sendInquiryEmail(payload);

    setIsSubmitting(false);
    setSubmittedPayload(payload);
  };

  const handleSaveKey = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('volt_web3forms_key', customKey.trim());
    setKeySaved(true);
    setTimeout(() => {
      setKeySaved(false);
      setIsKeyModalOpen(false);
    }, 1200);
  };

  const handleResetForm = () => {
    setSubmittedPayload(null);
    setContactName('');
    setContactEmail('');
    setContactPhone('');
    setContactMessage('');
    setErrors({});
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError('Please provide a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterStatus('success');
  };

  return (
    <>
      <footer id="contact" className="bg-[#0B0D0C] border-t border-[#232723] pt-20 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section: Contact Info + Working Inbound Inquiry Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#232723]">
            {/* Left 6 cols: Location, Details, Opening Hours */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <a
                  href="#home"
                  className="inline-flex items-center gap-2.5 text-2xl font-bold font-display uppercase tracking-wider text-[#F5F5F0] mb-3"
                >
                  <span className="w-8 h-8 rounded-lg bg-[#C6FF3D] text-[#0B0D0C] flex items-center justify-center">
                    <Zap className="w-5 h-5 fill-current" />
                  </span>
                  <span>
                    VOLT <span className="text-[#C6FF3D]">ATHLETICS</span>
                  </span>
                </a>
                <p className="text-xs uppercase tracking-widest text-[#C6FF3D] font-mono font-semibold">
                  POWER YOUR POTENTIAL
                </p>
                <p className="text-sm text-[#A5AAA3] max-w-md mt-2 leading-relaxed">
                  A high-performance training ground designed for those who measure progress in kilos, seconds, and unwavering consistency.
                </p>
              </div>

              {/* Gym Details List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#131614] border border-[#232723] space-y-1">
                  <div className="flex items-center gap-2 text-[#C6FF3D] font-semibold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Facility Location</span>
                  </div>
                  <p className="text-white font-medium">840 Power Boulevard, District 4</p>
                  <p className="text-[#A5AAA3]">Metropolis, CA 90210</p>
                </div>

                <div className="p-4 rounded-xl bg-[#131614] border border-[#232723] space-y-1">
                  <div className="flex items-center gap-2 text-[#C6FF3D] font-semibold uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="text-white font-medium">Mon – Fri: 5:00 AM – 11:00 PM</p>
                  <p className="text-[#A5AAA3]">Sat – Sun: 6:00 AM – 9:00 PM</p>
                </div>

                <div className="p-4 rounded-xl bg-[#131614] border border-[#232723] space-y-1">
                  <div className="flex items-center gap-2 text-[#C6FF3D] font-semibold uppercase tracking-wider">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Phone</span>
                  </div>
                  <p className="text-white font-mono font-medium">+1 (800) 555-8658</p>
                  <p className="text-[#A5AAA3]">Front Desk & Member Concierge</p>
                </div>

                <div className="p-4 rounded-xl bg-[#131614] border border-[#232723] space-y-1">
                  <div className="flex items-center gap-2 text-[#C6FF3D] font-semibold uppercase tracking-wider">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Direct Concierge</span>
                  </div>
                  <p className="text-white font-mono font-medium truncate">{GYM_OWNER_EMAIL}</p>
                  <p className="text-[#A5AAA3]">Direct Gym Owner Routing</p>
                </div>
              </div>

              {/* Map Preview Simulation */}
              <div className="rounded-xl overflow-hidden border border-[#232723] bg-[#131614] p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-white block">Metropolis Central Campus</span>
                  <span className="text-[11px] text-[#A5AAA3]">Validated 2-hour athlete parking available on site</span>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#232723] hover:bg-[#C6FF3D] text-xs font-semibold text-white hover:text-black transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right 6 cols: Inbound Contact & Inquiry Form */}
            <div className="lg:col-span-6 bg-[#131614] p-6 sm:p-8 rounded-2xl border border-[#232723] relative">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold block">
                  GET IN TOUCH
                </span>
                <button
                  type="button"
                  onClick={() => setIsKeyModalOpen(true)}
                  title="Configure Email Access Key (Web3Forms)"
                  className="text-[11px] text-[#A5AAA3] hover:text-[#C6FF3D] flex items-center gap-1 px-2 py-1 rounded bg-[#0B0D0C] border border-[#232723] transition-colors"
                >
                  <Key className="w-3 h-3 text-[#C6FF3D]" />
                  <span>Email Settings</span>
                </button>
              </div>

              <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">
                Questions? Send A Direct Message
              </h3>
              <p className="text-xs text-[#A5AAA3] mb-6">
                Direct inquiry routing to coaching concierge. All questions receive a personal response within 4 business hours.
              </p>

              {submittedPayload ? (
                <div className="p-6 rounded-xl bg-[#0B0D0C] border border-[#232723] space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#C6FF3D]/20 border border-[#C6FF3D] text-[#C6FF3D] flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="text-center">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#C6FF3D] tracking-widest">
                      INQUIRY LOGGED · REF #{submittedPayload.inquiryId}
                    </span>
                    <h4 className="text-xl font-display uppercase font-bold text-white mt-1">
                      Inquiry Dispatched Successfully
                    </h4>
                    <p className="text-xs text-[#A5AAA3] max-w-md mx-auto mt-1.5 leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{submittedPayload.name}</span>. Your inquiry has been routed to the coaching team at <span className="text-white">{GYM_OWNER_EMAIL}</span>.
                    </p>
                  </div>

                  {/* Dual Notification Status Card */}
                  <div className="p-3.5 rounded-lg bg-[#171A17] border border-[#232723] space-y-2.5 text-xs">
                    <div className="flex items-start gap-2">
                      <Inbox className="w-4 h-4 text-[#C6FF3D] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-medium block">1. Gym Concierge Notification</span>
                        <span className="text-[#A5AAA3] text-[11px]">
                          Complete applicant details dispatched to {GYM_OWNER_EMAIL}.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-2 border-t border-[#232723]">
                      <Mail className="w-4 h-4 text-[#C6FF3D] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-medium block">2. Athlete Confirmation Receipt</span>
                        <span className="text-[#A5AAA3] text-[11px]">
                          Inquiry ticket #{submittedPayload.inquiryId} addressed to {submittedPayload.email}.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Info Grid */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-[#131614] border border-[#232723] text-xs">
                    <div>
                      <span className="text-[#A5AAA3] block text-[10px] uppercase">Selected Discipline</span>
                      <span className="text-white font-medium">{submittedPayload.program}</span>
                    </div>
                    <div>
                      <span className="text-[#A5AAA3] block text-[10px] uppercase">Callback Time</span>
                      <span className="text-white font-medium">{submittedPayload.preferredTime.split(' ')[0]}</span>
                    </div>
                    <div>
                      <span className="text-[#A5AAA3] block text-[10px] uppercase">Phone</span>
                      <span className="text-white font-medium">{submittedPayload.phone || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="text-[#A5AAA3] block text-[10px] uppercase">Status</span>
                      <span className="text-[#C6FF3D] font-medium">Under Review</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                    <a
                      href={createMailtoLink(submittedPayload)}
                      className="flex-1 py-2.5 px-3 bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] rounded-xl text-xs font-bold font-display uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors text-center"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Direct Email Copy</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => downloadInquiryReceipt(submittedPayload)}
                      className="flex-1 py-2.5 px-3 bg-[#232723] hover:bg-[#2C322C] text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-white/5"
                    >
                      <Download className="w-3.5 h-3.5 text-[#C6FF3D]" />
                      <span>Download Receipt</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="text-xs text-[#A5AAA3] hover:text-[#C6FF3D] pt-1 block mx-auto transition-colors"
                  >
                    ← Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                        Your Name <span className="text-[#C6FF3D]">*</span>
                      </label>
                      <input
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Jordan Miller"
                        className={`w-full px-3.5 py-2.5 bg-[#0B0D0C] border ${
                          errors.name ? 'border-red-500' : 'border-[#232723]'
                        } rounded-xl text-sm text-white placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D] transition-colors`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                        Email Address <span className="text-[#C6FF3D]">*</span>
                      </label>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="jordan@example.com"
                        className={`w-full px-3.5 py-2.5 bg-[#0B0D0C] border ${
                          errors.email ? 'border-red-500' : 'border-[#232723]'
                        } rounded-xl text-sm text-white placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D] transition-colors`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-white placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D] transition-colors"
                      />
                    </div>

                    {/* Program of Interest */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                        Program Interest
                      </label>
                      <select
                        value={contactProgram}
                        onChange={(e) => setContactProgram(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#0B0D0C] border border-[#232723] rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-[#C6FF3D] transition-colors"
                      >
                        <option value="Strength & Conditioning">Strength & Conditioning</option>
                        <option value="Personal 1-on-1 Coaching">Personal 1-on-1 Coaching</option>
                        <option value="HIIT & Functional Training">HIIT & Functional Training</option>
                        <option value="Hypertrophy & Muscle Building">Hypertrophy & Muscle Building</option>
                        <option value="Weight Management & MetCon">Weight Management & MetCon</option>
                        <option value="Mobility & Active Recovery">Mobility & Active Recovery</option>
                        <option value="Membership Tiers & Pricing">Membership Tiers & Pricing</option>
                        <option value="General Facility Inquiry">General Facility Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Callback Preference */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                      Preferred Callback Window
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        'Morning (6:00 AM – 10:00 AM)',
                        'Midday (11:00 AM – 3:00 PM)',
                        'Evening (4:00 PM – 9:00 PM)',
                      ].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setPreferredTime(slot)}
                          className={`py-2 px-2 text-[11px] rounded-lg border text-center transition-all ${
                            preferredTime === slot
                              ? 'border-[#C6FF3D] bg-[#C6FF3D]/10 text-[#C6FF3D] font-semibold'
                              : 'border-[#232723] bg-[#0B0D0C] text-[#A5AAA3] hover:text-white'
                          }`}
                        >
                          {slot.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                      Message / Goals <span className="text-[#C6FF3D]">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Tell us about your fitness background, current goals, or questions about training schedules..."
                      className={`w-full px-3.5 py-2.5 bg-[#0B0D0C] border ${
                        errors.message ? 'border-red-500' : 'border-[#232723]'
                      } rounded-xl text-sm text-white placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D] resize-none transition-colors`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-5 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] disabled:opacity-50 text-[#0B0D0C] font-bold font-display uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-[#C6FF3D]/15"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Dispatching Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-[#A5AAA3]/70 pt-1">
                    <span>Replies within 4 business hours</span>
                    <span>Direct: {GYM_OWNER_EMAIL}</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Middle Section: Quick Links + Newsletter Subscription */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#232723]">
            {/* Quick Links Column */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-xs uppercase tracking-wider text-white font-semibold block">
                Quick Navigation
              </span>
              <ul className="space-y-2 text-xs text-[#A5AAA3]">
                <li><a href="#home" className="hover:text-[#C6FF3D] transition-colors">Home & Vision</a></li>
                <li><a href="#programs" className="hover:text-[#C6FF3D] transition-colors">Training Programs</a></li>
                <li><a href="#about" className="hover:text-[#C6FF3D] transition-colors">About Facility</a></li>
                <li><a href="#trainers" className="hover:text-[#C6FF3D] transition-colors">Certified Trainers</a></li>
                <li><a href="#memberships" className="hover:text-[#C6FF3D] transition-colors">Membership Tiers</a></li>
                <li><a href="#schedule" className="hover:text-[#C6FF3D] transition-colors">Class Timetable</a></li>
              </ul>
            </div>

            {/* Programs Column */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-xs uppercase tracking-wider text-white font-semibold block">
                Featured Disciplines
              </span>
              <ul className="space-y-2 text-xs text-[#A5AAA3]">
                <li><a href="#programs" className="hover:text-[#C6FF3D] transition-colors">Strength & Conditioning</a></li>
                <li><a href="#programs" className="hover:text-[#C6FF3D] transition-colors">Personal 1-on-1 Coaching</a></li>
                <li><a href="#programs" className="hover:text-[#C6FF3D] transition-colors">HIIT & Metabolic Sprints</a></li>
                <li><a href="#programs" className="hover:text-[#C6FF3D] transition-colors">Hypertrophy & Mechanics</a></li>
                <li><a href="#programs" className="hover:text-[#C6FF3D] transition-colors">Mobility & Deep Recovery</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="md:col-span-6 space-y-3">
              <span className="text-xs uppercase tracking-wider text-white font-semibold block">
                The Volt Protocol Newsletter
              </span>
              <p className="text-xs text-[#A5AAA3]">
                Subscribe for weekly evidence-based training insights, nutrition guides, and priority guest pass announcements.
              </p>

              {newsletterStatus === 'success' ? (
                <div className="p-3.5 rounded-xl bg-[#131614] border border-[#232723] flex items-center gap-2 text-xs text-[#C6FF3D]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Check your inbox for our free Strength Blueprint.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3.5 py-2.5 bg-[#131614] border border-[#232723] rounded-xl text-xs text-white placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D]"
                  />
                  <button
                    type="submit"
                    className="py-2.5 px-5 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-bold font-display uppercase tracking-wider text-xs whitespace-nowrap cursor-pointer transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
              {newsletterError && <p className="text-xs text-red-400">{newsletterError}</p>}
            </div>
          </div>

          {/* Bottom Bar: Copyright + Socials + Legal Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5AAA3]">
            <p>
              © {new Date().getFullYear()} VOLT ATHLETICS. All Rights Reserved. Power Your Potential.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#A5AAA3]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#C6FF3D] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-[#C6FF3D] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-[#C6FF3D] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#C6FF3D] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-white/20">·</span>
              <button
                type="button"
                onClick={() => setLegalModal('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Web3Forms Access Key Setup Modal */}
      {isKeyModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-[#131614] border border-[#232723] rounded-2xl p-6 text-[#F5F5F0] shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#232723] pb-3">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-[#C6FF3D]" />
                <h3 className="font-display uppercase font-bold text-base text-white">
                  Live Email Delivery Setup
                </h3>
              </div>
              <button
                onClick={() => setIsKeyModalOpen(false)}
                className="text-[#A5AAA3] hover:text-white text-xs"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-[#A5AAA3] leading-relaxed">
              VOLT ATHLETICS supports instant email forwarding via <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="text-[#C6FF3D] underline">Web3Forms</a>. Enter your free access key below to route all submissions directly to your email inbox:
            </p>

            <form onSubmit={handleSaveKey} className="space-y-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                  Web3Forms Access Key
                </label>
                <input
                  type="text"
                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  placeholder="e.g. 12345678-abcd-efgh-ijkl-1234567890ab"
                  className="w-full px-3 py-2 bg-[#0B0D0C] border border-[#232723] rounded-xl text-xs text-white focus:outline-none focus:border-[#C6FF3D]"
                />
              </div>

              {keySaved && (
                <div className="p-2 rounded-lg bg-[#C6FF3D]/10 text-[#C6FF3D] text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key saved to browser! Form will now dispatch live emails.</span>
                </div>
              )}

              <div className="pt-2 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                >
                  Save Access Key
                </button>
                <a
                  href="https://web3forms.com"
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-4 bg-[#232723] hover:bg-[#2F352F] text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1"
                >
                  <span>Get Free Key</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[10px] text-[#A5AAA3]/70">
                You can also set <code className="text-white">VITE_WEB3FORMS_ACCESS_KEY</code> in your Vercel Environment Variables.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Privacy Policy & Terms Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLegalModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#131614] border border-[#232723] rounded-2xl p-6 text-[#F5F5F0] shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#232723] pb-3">
              <h3 className="font-display uppercase font-bold text-lg text-white">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="text-[#A5AAA3] hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="text-xs text-[#A5AAA3] leading-relaxed max-h-60 overflow-y-auto space-y-2">
              <p>
                <strong>1. Demonstration & Privacy Policy:</strong> VOLT ATHLETICS handles submitted member inquiries with confidentiality. Inquiry data is routed directly to the designated gym coaching concierge and not shared with external advertising networks.
              </p>
              <p>
                <strong>2. Auto-Response & Communications:</strong> By submitting an inquiry, athletes agree to receive a confirmation email with preparation guidelines and direct communication from certified coaching staff.
              </p>
              <p>
                <strong>3. Facility Rules:</strong> Member health and safety is paramount. All athletes agree to follow standard gym etiquette, rack weights, wipe equipment down, and follow coach instructions.
              </p>
            </div>
            <button
              onClick={() => setLegalModal(null)}
              className="w-full py-2.5 rounded-xl bg-[#232723] hover:bg-[#2F352F] text-xs font-semibold text-white transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </>
  );
};
