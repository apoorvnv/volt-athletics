import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#programs' },
    { label: 'About', href: '#about' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Memberships', href: '#memberships' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0D0C]/95 backdrop-blur-md border-b border-[#232723] py-3.5 shadow-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single element brand wordmark */}
            <a
              href="#home"
              className="flex items-center gap-2.5 text-xl font-bold font-display uppercase tracking-wider text-[#F5F5F0] group shrink-0"
            >
              <span className="w-8 h-8 rounded-lg bg-[#C6FF3D] text-[#0B0D0C] flex items-center justify-center transition-transform group-hover:scale-105">
                <Zap className="w-5 h-5 fill-current" />
              </span>
              <span>
                VOLT <span className="text-[#C6FF3D]">ATHLETICS</span>
              </span>
            </a>

            {/* Zone 2: Clean single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#A5AAA3]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-[#C6FF3D] whitespace-nowrap shrink-0 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C6FF3D] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenTrial}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C6FF3D] hover:bg-[#B5F527] text-[#0B0D0C] text-xs font-bold font-display uppercase tracking-wider transition-all transform active:scale-95 shadow-lg shadow-[#C6FF3D]/15 whitespace-nowrap shrink-0 cursor-pointer"
              >
                Start Your Free Trial
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile hamburger toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="lg:hidden p-2 rounded-lg text-[#F5F5F0] hover:bg-[#232723] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/85 backdrop-blur-lg pt-24 px-6 pb-8 flex flex-col justify-between animate-fade-in">
          <nav className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display uppercase font-semibold text-[#F5F5F0] hover:text-[#C6FF3D] py-2 transition-colors border-b border-[#232723]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="w-full py-3.5 rounded-xl bg-[#C6FF3D] text-[#0B0D0C] font-bold font-display uppercase tracking-wider text-sm transition-all shadow-lg shadow-[#C6FF3D]/20"
            >
              Start Your Free Trial
            </button>
            <p className="text-center text-xs text-[#A5AAA3] mt-3">
              Power Your Potential · 840 Power Blvd
            </p>
          </div>
        </div>
      )}
    </>
  );
};
