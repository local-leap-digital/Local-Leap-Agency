import React from 'react';
import {
  MessageSquare,
  Mail,
  MapPin,
  ArrowUp
} from 'lucide-react';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl } from '../utils/whatsapp';

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'How It Works', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Business Websites', href: '#services' },
    { name: 'Google Business Profile', href: '#services' },
    { name: 'Hosting & Care', href: '#services' },
    { name: 'Online Booking & Calendar', href: '#services' },
    { name: 'WhatsApp Quick Replies', href: '#services' },
    { name: 'Automated Review Requests', href: '#services' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-[#002242] border-t border-slate-800 text-slate-300 pt-14 sm:pt-16 pb-24 sm:pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="col-span-2 lg:col-span-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 mb-4 group"
              aria-label="LocalLeap Digital - Back to top"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-2 shadow-xs group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/logo-icon.png"
                  alt="LocalLeap Icon"
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-['Poppins'] font-bold text-xl text-white tracking-tight leading-tight">
                  LocalLeap <span className="text-[#05B0B5]">Digital</span>
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-slate-400">
                  Websites &amp; Automations
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              Websites and simple automations for local businesses. Helping clinics, cafes, restaurants, and gyms get found and get booked.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-[#05B0B5] hover:text-white text-slate-400 flex items-center justify-center transition-colors"
                aria-label="Instagram profile [PLACEHOLDER]"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-[#05B0B5] hover:text-white text-slate-400 flex items-center justify-center transition-colors"
                aria-label="LinkedIn profile [PLACEHOLDER]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-white/5 hover:bg-[#25D366] hover:text-white text-slate-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-['Poppins'] font-bold text-sm text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block py-1.5 text-slate-400 hover:text-[#05B0B5] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-['Poppins'] font-bold text-sm text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-1 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="inline-block py-1.5 text-slate-400 hover:text-[#05B0B5] transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info (3 cols) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <h4 className="font-['Poppins'] font-bold text-sm text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-0.5 hover:text-white transition-colors break-all"
                >
                  WhatsApp: +{siteConfig.whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#05B0B5] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-block py-0.5 hover:text-white transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#05B0B5] shrink-0 mt-0.5" />
                <span>{siteConfig.city}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} LocalLeap Digital. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 py-2 px-1 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
