import React from 'react';
import {
  MessageSquare,
  Mail,
  MapPin,
  Phone,
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'How It Works', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  const serviceLinks = [
    { name: 'Website Development', href: '#services' },
    { name: 'Web Applications', href: '#services' },
    { name: 'Mobile Applications', href: '#services' },
    { name: 'Digital Solutions', href: '#services' },
    { name: 'Google Business Profile', href: '#services' },
    { name: 'Online Booking & Automations', href: '#services' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-deep-teal text-offwhite/80 pt-14 sm:pt-16 pb-24 sm:pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-8 pb-12 border-b border-coral/25">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="col-span-2 lg:col-span-4">
            <a
              href="#top"
              className="inline-flex items-center gap-3 mb-4 group"
              aria-label="LocalLeap Digital - Back to top"
            >
              <div className="w-11 h-11 rounded-2xl bg-offwhite flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/logo-icon.png"
                  alt="LocalLeap Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="font-heading uppercase text-2xl text-offwhite tracking-[-0.01em] leading-none">
                  Local<span className="text-coral">Leap</span>
                </div>
                <span className="text-[10px] tracking-[0.42em] uppercase font-semibold text-offwhite/70">
                  Digital
                </span>
              </div>
            </a>

            <p className="text-sm text-offwhite/70 leading-relaxed mb-6 max-w-sm">
              Customized websites, web applications and mobile apps for local shops, businesses and startups.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-md bg-coral hover:bg-offwhite text-deep-teal flex items-center justify-center transition-colors"
                aria-label="Instagram profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-md bg-coral hover:bg-offwhite text-deep-teal flex items-center justify-center transition-colors"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans font-medium text-sm text-coral uppercase tracking-[0.02em] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block py-2.5 sm:py-1.5 text-coral/65 hover:text-coral transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-medium text-sm text-coral uppercase tracking-[0.02em] mb-4">
              Our Services
            </h4>
            <ul className="space-y-1 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="inline-block py-2.5 sm:py-1.5 text-coral/65 hover:text-coral transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info (3 cols) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <h4 className="font-sans font-medium text-sm text-coral uppercase tracking-[0.02em] mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-1.5 sm:space-y-3 text-sm text-offwhite/75">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                <span className="flex flex-col">
                  {siteConfig.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="inline-block py-2 sm:py-0.5 hover:text-coral transition-colors"
                    >
                      {phone.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 sm:py-0.5 hover:text-coral transition-colors break-all"
                >
                  WhatsApp: +{siteConfig.whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-block py-2 sm:py-0.5 hover:text-coral transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Poster tagline */}
        <p className="gold-rules justify-center pt-8 text-xs sm:text-sm font-sans font-medium uppercase tracking-[0.25em] sm:tracking-[0.35em] text-offwhite text-center">
          {siteConfig.tagline}
        </p>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-offwhite/50">
          <p>© {currentYear} LocalLeap Digital. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 py-3 sm:py-2 px-2 hover:text-coral transition-colors cursor-pointer"
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
