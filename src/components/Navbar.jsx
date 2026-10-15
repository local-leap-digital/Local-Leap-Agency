import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'How It Works', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  // Close the mobile menu with Escape or when the screen grows to desktop width
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKey = (e) => e.key === 'Escape' && setMobileMenuOpen(false);
    const handleResize = () => window.innerWidth >= 1024 && setMobileMenuOpen(false);
    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappLink = getWhatsAppUrl(siteConfig.messages.general);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E2EEF0]'
          : 'bg-white/90 backdrop-blur-sm py-4 md:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Logo brand: Map-pin icon + LocalLeap Digital text in HTML/CSS */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-[#05B0B5] rounded-lg p-1 min-w-0"
            aria-label="LocalLeap Digital - Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-[#01315E] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform duration-200">
              <img
                src="/logo-icon.png"
                alt="LocalLeap Icon"
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1 font-['Poppins'] font-bold text-base xs:text-lg sm:text-xl text-[#01315E] tracking-tight leading-tight whitespace-nowrap">
                <span>LocalLeap</span>
                <span className="text-[#05B0B5]">Digital</span>
              </div>
              <span className="text-[9px] xs:text-[10px] tracking-[0.12em] xs:tracking-[0.2em] uppercase font-semibold text-slate-400 whitespace-nowrap">
                Websites &amp; Automations
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-[#334155] hover:text-[#008F94] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#05B0B5] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: WhatsApp CTA & Mobile Toggle */}
          <div className="flex items-center gap-1.5 xs:gap-3 shrink-0">
            {/* Icon-only on small phones, full label from 480px up */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold font-['Poppins'] w-11 h-11 xs:w-auto xs:h-auto xs:px-4 xs:py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5 xs:w-4 xs:h-4 fill-white" />
              <span className="hidden xs:inline">Chat on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg text-[#01315E] hover:bg-[#F3FAFA] transition-colors focus-visible:ring-2 focus-visible:ring-[#05B0B5]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer / Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2EEF0] px-4 sm:px-6 pt-3 pb-6 shadow-xl max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain">
          <nav className="flex flex-col space-y-1 pt-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-semibold text-[#01315E] hover:text-[#008F94] hover:bg-[#F3FAFA] px-3 py-3 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 mt-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-semibold font-['Poppins'] text-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
