import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getWhatsAppUrl(siteConfig.messages.general);

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Desktop Hover Tooltip */}
      <div
        className={`hidden md:flex items-center px-3.5 py-1.5 rounded-lg bg-[#01315E] text-white text-xs font-semibold shadow-lg transition-all duration-200 pointer-events-none ${
          showTooltip
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
        role="tooltip"
      >
        <span>Chat with us on WhatsApp</span>
        {/* Little right arrow pointer */}
        <div className="w-2 h-2 bg-[#01315E] rotate-45 -mr-1 ml-1" />
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-108 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Chat with LocalLeap Digital on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
      </a>
    </div>
  );
}
