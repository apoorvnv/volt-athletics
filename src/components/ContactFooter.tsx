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
} from 'lucide-react';

interface ContactFooterProps {
  onOpenTrial: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenTrial }) => {
  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'success'>('idle');
  const [contactError, setContactError] = useState('');

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');
  const [newsletterError, setNewsletterError] = useState('');

  // Legal Modal States
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactError('Please fill out all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
      setContactError('Please enter a valid email address.');
      return;
    }
    setContactError('');
    setContactStatus('success');
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
                    <span>Inquiries</span>
                  </div>
                  <p className="text-white font-mono font-medium">info@voltathletics.com</p>
                  <p className="text-[#A5AAA3]">Support & Corporate Partnerships</p>
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

            {/* Right 6 cols: Inbound Contact Form */}
            <div className="lg:col-span-6 bg-[#131614] p-6 sm:p-8 rounded-2xl border border-[#232723]">
              <span className="text-xs uppercase tracking-widest text-[#C6FF3D] font-bold block mb-1">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl font-display font-bold uppercase text-white mb-2">
                Questions? Send A Direct Message
              </h3>
              <p className="text-xs text-[#A5AAA3] mb-6">
                Our coaching staff responds to all training inquiries within 4 business hours.
              </p>

              {contactStatus === 'success' ? (
                <div className="p-6 rounded-xl bg-[#0B0D0C] border border-[#232723] text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#C6FF3D]/20 text-[#C6FF3D] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-display uppercase font-bold text-white">Message Dispatched</h4>
                  <p className="text-xs text-[#A5AAA3]">
                    Thank you, {contactName}. A VOLT fitness advisor has received your message and will reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setContactStatus('idle');
                      setContactName('');
                      setContactEmail('');
                      setContactMessage('');
                    }}
                    className="text-xs text-[#C6FF3D] hover:underline pt-2 block mx-auto"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Jordan Miller"
                      className="w-full px-3.5 py-2.5 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-white placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="jordan@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-white placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#A5AAA3] mb-1 font-semibold">
                      Message / Question *
                    </label>
                    <textarea
                      rows={3}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Tell us about your fitness goals or questions about coaching..."
                      className="w-full px-3.5 py-2.5 bg-[#0B0D0C] border border-[#232723] rounded-xl text-sm text-white placeholder-[#A5AAA3]/50 focus:outline-none focus:border-[#C6FF3D] resize-none"
                    />
                  </div>

                  {contactError && <p className="text-xs text-red-400">{contactError}</p>}

                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] font-bold font-display uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-[#C6FF3D]/10"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-[#A5AAA3]/60 text-center">
                    Demo Mode Notice: Inquiries are acknowledged within client preview.
                  </p>
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
                <strong>1. Demonstration Context:</strong> VOLT ATHLETICS is presented as a demonstration and portfolio website. No payment tokens, sensitive credit card credentials, or binding contracts are captured without explicit written agreement.
              </p>
              <p>
                <strong>2. Data Protection:</strong> Any information submitted through our trial registration or contact forms is handled with strict confidentiality and never shared with third-party advertisers.
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
