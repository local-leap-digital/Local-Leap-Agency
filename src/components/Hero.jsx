import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Bell, Smartphone, Laptop, CalendarCheck } from 'lucide-react';
import Button from './common/Button';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Subtle decorative background: curved line & faint teal aura */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft radial glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#05B0B5]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#01315E]/5 rounded-full blur-3xl" />
        {/* Subtle decorative curved path */}
        <svg
          className="absolute top-12 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] opacity-[0.07]"
          viewBox="0 0 1400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 450C250 150 500 550 850 220C1100 0 1350 400 1550 250"
            stroke="#05B0B5"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          {/* Faint map-pin shapes */}
          <circle cx="850" cy="220" r="16" fill="#05B0B5" fillOpacity="0.2" />
          <circle cx="850" cy="220" r="6" fill="#01315E" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#05B0B5]/10 border border-[#05B0B5]/20 text-[#008F94] font-semibold text-xs sm:text-sm tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#05B0B5]" />
              <span>Websites &amp; Smart Automations for Local Businesses</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-34px sm:text-44px md:text-[54px] lg:text-[56px] font-bold font-['Poppins'] text-[#01315E] leading-[1.12] tracking-tight mb-6">
              Helping Local Businesses{' '}
              <span className="text-[#05B0B5] inline-block">Grow Online.</span>
            </h1>

            {/* Sub-text */}
            <p className="text-base sm:text-lg md:text-[19px] text-[#334155] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
              Professional websites and simple automations that help clinics, cafes, restaurants and gyms get found on Google, look trustworthy, and get more bookings.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get a Free Demo Website
              </Button>

              <Button
                href="#work"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
                icon={ArrowRight}
              >
                See Our Work
              </Button>
            </div>

            {/* Honest Trust Line */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 text-[#01315E]">
                <CheckCircle2 className="w-4 h-4 text-[#008F94]" />
                <span>Free demo before you pay</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#01315E]">
                <CheckCircle2 className="w-4 h-4 text-[#008F94]" />
                <span>Mobile-friendly</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#01315E]">
                <CheckCircle2 className="w-4 h-4 text-[#008F94]" />
                <span>Direct WhatsApp support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Device Mockups (Laptop + Phone) with Floating Notification (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              
              {/* Laptop Frame */}
              <div className="relative rounded-2xl bg-[#01315E] p-3 shadow-2xl border border-slate-800">
                {/* Laptop Camera / Header dot */}
                <div className="flex items-center gap-1.5 pb-2 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <div className="ml-3 text-[10px] text-slate-300 font-mono tracking-tight opacity-75">
                    sample-clinic.localleap.in
                  </div>
                </div>

                {/* Laptop Screen Content */}
                <div className="relative overflow-hidden rounded-lg bg-white border border-slate-200 aspect-[16/10]">
                  <img
                    src="/projects/dental.png"
                    alt="Sample business website mockup preview"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>

                {/* Laptop Base Stand */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-32 h-2.5 bg-slate-300 rounded-b-md shadow" />
              </div>

              {/* Overlapping Phone Frame */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 w-40 sm:w-48 bg-slate-900 p-2 rounded-[28px] shadow-2xl border-2 border-slate-700 hidden xs:block">
                {/* Speaker Notch */}
                <div className="w-12 h-2.5 bg-slate-800 rounded-full mx-auto mb-2" />
                {/* Phone Screen */}
                <div className="rounded-[20px] overflow-hidden bg-white aspect-[9/18] relative flex flex-col">
                  {/* Phone Mockup Content */}
                  <div className="bg-[#01315E] p-2.5 text-white">
                    <div className="flex items-center justify-between text-[8px] font-bold">
                      <span>SmileCare Clinic</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <p className="text-[7px] text-slate-200 mt-1">Book appointment in 10s</p>
                  </div>
                  <div className="p-2 space-y-1.5 flex-1 bg-slate-50 text-[7px] text-slate-700">
                    <div className="bg-white p-1.5 rounded shadow-xs border border-slate-200">
                      <p className="font-semibold text-[#01315E]">Dr. Ananya Sharma</p>
                      <p className="text-slate-500">Root Canal &amp; Aligners</p>
                    </div>
                    <div className="bg-[#05B0B5]/10 text-[#008F94] p-1.5 rounded font-semibold text-center">
                      ✓ Instant WhatsApp Confirmation
                    </div>
                    <div className="mt-2 bg-[#25D366] text-white p-1 rounded text-center font-bold">
                      Chat on WhatsApp
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Automation Badge: "New appointment request 🔔" */}
              <div className="absolute -top-4 -right-2 sm:-right-6 bg-white rounded-xl p-3 shadow-xl border border-[#E2EEF0] flex items-center gap-3 animate-bounce [animation-duration:3s]">
                <div className="w-9 h-9 rounded-lg bg-[#05B0B5]/15 flex items-center justify-center text-[#008F94]">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#01315E]">New booking request</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">Live</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Added to Google Calendar ✓</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
