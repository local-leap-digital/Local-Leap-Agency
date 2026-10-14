import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getWhatsAppUrl(siteConfig.messages.general);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
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
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-200 hover:scale-108 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Chat with LocalLeap Digital on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
