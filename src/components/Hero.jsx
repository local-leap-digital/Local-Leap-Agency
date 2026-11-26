import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight, CheckCircle2, Bell, Sparkles } from 'lucide-react';
import Button from './common/Button';
import { EASE } from './common/motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  // Subtle 3D tilt of the device mockup following the mouse (desktop pointers only)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });

  const handleMove = (e) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#FDFDF7] to-mint">
      {/* Decorative background: soft green & gold glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft radial glow */}
        <div className="absolute inset-0 bg-grid-navy" />
        <div className="blob absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-green/15 rounded-full blur-3xl" />
        <div className="blob blob-delay absolute top-1/3 -right-32 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
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
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            variants={container}
            initial={reduce ? false : 'hidden'}
            animate="show"
          >
            {/* Small announcement pill */}
            <motion.div variants={item} className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-green/25 bg-white/80 backdrop-blur px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-navy shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                </span>
                Now taking new projects in Kolhapur
                <Sparkles className="w-3.5 h-3.5 text-gold" />
              </span>
            </motion.div>

            {/* Main H1 */}
            <motion.h1 variants={item} className="text-[34px] xs:text-[40px] sm:text-[46px] md:text-[54px] lg:text-[56px] font-bold font-heading text-navy leading-[1.12] tracking-tight mb-5 sm:mb-6">
              Turn Your Idea Into a{' '}
              <span className="text-gradient-green swoosh-underline">Digital Reality.</span>
            </motion.h1>

            {/* Marathi line from the poster */}
            <motion.p variants={item} lang="mr" className="text-lg xs:text-xl sm:text-2xl font-heading font-bold text-navy leading-snug mb-5 sm:mb-6">
              तुमची Idea <span className="text-green">Digital Reality</span> मध्ये आणतो.
            </motion.p>

            {/* Sub-text */}
            <motion.p variants={item} className="text-base sm:text-lg md:text-[19px] text-[#334155] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
              Customized websites, web applications and mobile apps for local shops, businesses, startups and any idea you have. Built to get you found online and bring in more customers.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
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
            </motion.div>

            {/* Honest Trust Line */}
            <motion.div variants={item} className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
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
            </motion.div>
          </motion.div>

          {/* Right Column: Device Mockups (Laptop + Phone) with Floating Notification (5 cols) */}
          <motion.div
            className="lg:col-span-5 relative mt-6 lg:mt-0 [perspective:1200px]"
            initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.35 }}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
          >
            {/* Space is reserved on the right & bottom so the phone only overlaps the laptop corner (as on the poster) */}
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative mx-auto max-w-[480px] md:max-w-[560px] lg:max-w-none xs:pr-12 sm:pr-16 lg:pr-12 xs:pb-14 sm:pb-16"
            >
              
              {/* Laptop Frame */}
              <div className="relative rounded-2xl bg-navy p-3 shadow-[0_40px_80px_-30px_rgba(11,44,95,0.55)] border border-navy-dark ring-4 ring-gold/20">
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
              <div className="animate-float-slow absolute bottom-0 right-0 w-28 sm:w-32 lg:w-[7.5rem] xl:w-32 bg-slate-900 p-1.5 sm:p-2 rounded-[24px] sm:rounded-[28px] shadow-2xl border-2 border-slate-700 hidden xs:block [transform:translateZ(40px)]">
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
              <div className="absolute -top-5 right-0 sm:-right-6 bg-white rounded-xl p-2.5 sm:p-3 shadow-xl border border-mint-border flex items-center gap-2.5 sm:gap-3 animate-float max-w-[calc(100%-1rem)]">
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

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
