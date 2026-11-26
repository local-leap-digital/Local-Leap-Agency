import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl } from '../utils/whatsapp';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'How It Works', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));

    // Clear the highlight when back at the hero
    const handleTop = () => window.scrollY < 300 && setActiveId('');
    window.addEventListener('scroll', handleTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleTop);
    };
  }, []);

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

  const whatsappLink = getWhatsAppUrl(siteConfig.messages.general);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 glass border-b transition-all duration-500 ${
        isScrolled
          ? 'py-3 border-mint-border/80 shadow-[0_8px_30px_-12px_rgba(11,44,95,0.18)]'
          : 'py-4 md:py-5 border-transparent'
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-green via-gold to-green"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          <a
            href="#top"
            className="flex items-center gap-2 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-green rounded-lg p-1 min-w-0"
            aria-label="LocalLeap Digital - Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
              <img src="/logo-icon.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="font-heading font-bold text-lg xs:text-xl sm:text-[22px] text-navy tracking-tight leading-none whitespace-nowrap">
                Local<span className="text-green">Leap</span>
              </div>
              <span className="mt-0.5 text-[9px] xs:text-[10px] tracking-[0.42em] uppercase font-semibold text-navy whitespace-nowrap">
                Digital
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with sliding active pill */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative isolate px-4 py-2 rounded-full text-[15px] font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-[#334155] hover:text-green-dark'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full -z-10 bg-navy"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5 xs:gap-3 shrink-0">
            <a
              href="#contact"
              className="hidden xl:inline-flex items-center gap-1.5 bg-gold text-navy hover:bg-[#E0A500] text-sm font-semibold font-heading px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow group"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Icon-only on small phones, full label from 480px up */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold font-heading w-11 h-11 xs:w-auto xs:h-auto xs:px-4 xs:py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5 xs:w-4 xs:h-4 fill-white" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full text-navy hover:bg-mint transition-colors focus-visible:ring-2 focus-visible:ring-green"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-b border-mint-border shadow-xl"
          >
            <nav
              className="flex flex-col space-y-1 px-4 sm:px-6 pt-4 pb-6 max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                  className={`text-base font-semibold px-3 py-3 rounded-xl transition-colors flex items-center justify-between ${
                    activeId === link.href.slice(1) ? 'bg-navy text-white' : 'text-navy hover:text-green-dark hover:bg-mint'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </motion.a>
              ))}
              <div className="pt-4 border-t border-slate-100 mt-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold font-heading text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
