import React from 'react';
import { ArrowRight, CheckCircle2, Bell } from 'lucide-react';
import Button from './common/Button';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#FDFDF7] to-mint">
      {/* Decorative background: soft green & gold glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft radial glow */}
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-green/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-green/5 rounded-full blur-3xl" />
        {/* Subtle decorative curved path */}
        <svg
          className="absolute top-12 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] opacity-[0.07]"
          viewBox="0 0 1400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 450C250 150 500 550 850 220C1100 0 1350 400 1550 250"
            stroke="var(--color-gold)"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          {/* Faint map-pin shapes */}
          <circle cx="850" cy="220" r="16" fill="var(--color-green)" fillOpacity="0.2" />
          <circle cx="850" cy="220" r="6" fill="var(--color-navy)" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Main H1 */}
            <h1 className="text-[34px] xs:text-[40px] sm:text-[46px] md:text-[54px] lg:text-[56px] font-bold font-heading text-navy leading-[1.12] tracking-tight mb-5 sm:mb-6">
              Turn Your Idea Into a{' '}
              <span className="text-green swoosh-underline">Digital Reality.</span>
            </h1>

            {/* Marathi line from the poster */}
            <p lang="mr" className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-navy leading-snug mb-5 sm:mb-6">
              तुमची Idea <span className="text-green">Digital Reality</span> मध्ये आणतो.
            </p>

            {/* Sub-text */}
            <p className="text-base sm:text-lg md:text-[19px] text-[#334155] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
              Customized websites, web applications and mobile apps for local shops, businesses, startups and any idea you have. Built to get you found online and bring in more customers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
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
              <div className="flex items-center gap-1.5 text-navy">
                <CheckCircle2 className="w-4 h-4 text-green-dark" />
                <span>Free demo before you pay</span>
              </div>
              <div className="flex items-center gap-1.5 text-navy">
                <CheckCircle2 className="w-4 h-4 text-green-dark" />
                <span>Websites, Web &amp; Mobile Apps</span>
              </div>
              <div className="flex items-center gap-1.5 text-navy">
                <CheckCircle2 className="w-4 h-4 text-green-dark" />
                <span>Direct WhatsApp support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Device Mockups (Laptop + Phone) with Floating Notification (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Space is reserved on the right & bottom so the phone only overlaps the laptop corner (as on the poster) */}
            <div className="relative mx-auto max-w-[480px] md:max-w-[560px] lg:max-w-none xs:pr-12 sm:pr-16 lg:pr-12 xs:pb-14 sm:pb-16">
              
              {/* Laptop Frame */}
              <div className="relative rounded-2xl bg-navy p-3 shadow-2xl border border-navy-dark ring-4 ring-gold/20">
                {/* Laptop Camera / Header dot */}
                <div className="flex items-center gap-1.5 pb-2 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <div className="ml-3 text-[10px] text-slate-300 font-mono tracking-tight opacity-75 truncate">
                    smitam-dental-care-ochre.vercel.app
                  </div>
                </div>

                {/* Laptop Screen Content */}
                <div className="relative overflow-hidden rounded-lg bg-white border border-slate-200 aspect-[16/10]">
                  <img
                    src="/projects/dental.png"
                    alt="Sample business website mockup preview"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>

                {/* Laptop Base Stand */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-32 h-2.5 bg-slate-300 rounded-b-md shadow" />
              </div>

              {/* Overlapping Phone Frame (bottom-right corner) */}
              <div className="absolute bottom-0 right-0 w-28 sm:w-32 lg:w-[7.5rem] xl:w-32 bg-slate-900 p-1.5 sm:p-2 rounded-[24px] sm:rounded-[28px] shadow-2xl border-2 border-slate-700 hidden xs:block">
                {/* Speaker Notch */}
                <div className="w-10 h-2 bg-slate-800 rounded-full mx-auto mb-1.5" />
                {/* Phone Screen */}
                <div className="rounded-[18px] sm:rounded-[20px] overflow-hidden bg-white aspect-[9/17] relative flex flex-col">
                  {/* Phone Mockup Content */}
                  <div className="bg-gradient-to-r from-forest to-green-dark p-2.5 text-white">
                    <div className="flex items-center justify-between text-[8px] font-bold">
                      <span>Smitam Dental Care</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <p className="text-[7px] text-slate-200 mt-1">Book appointment in 10s</p>
                  </div>
                  <div className="p-2 space-y-1.5 flex-1 bg-slate-50 text-[7px] text-slate-700">
                    <div className="bg-white p-1.5 rounded shadow-xs border border-slate-200">
                      <p className="font-semibold text-navy">Dr. Aditi Kulkarni</p>
                      <p className="text-slate-500">Braces &amp; Implants</p>
                    </div>
                    <div className="bg-green/10 text-green-dark p-1.5 rounded font-semibold text-center">
                      ✓ Instant WhatsApp Confirmation
                    </div>
                    <div className="mt-2 bg-[#25D366] text-white p-1 rounded text-center font-bold">
                      Chat on WhatsApp
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Automation Badge: "New appointment request 🔔" */}
              <div className="absolute -top-5 right-0 sm:-right-6 bg-white rounded-xl p-2.5 sm:p-3 shadow-xl border border-mint-border flex items-center gap-2.5 sm:gap-3 animate-bounce [animation-duration:3s] max-w-[calc(100%-1rem)]">
                <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-lg bg-green/15 flex items-center justify-center text-green-dark">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-navy">New booking request</span>
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
