import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';
import { CheckCircle2, Bell, Sparkles } from 'lucide-react';
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
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-offwhite">
      {/* Decorative background: faint coral route line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle decorative curved path */}
        <svg
          className="absolute top-12 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] opacity-[0.12]"
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
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-offwhite px-3.5 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-[0.02em] text-ink">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                </span>
                Now taking new projects in Kolhapur
                <Sparkles className="w-3.5 h-3.5 text-coral" />
              </span>
            </motion.div>

            {/* Main H1 */}
            <motion.h1 variants={item} className="text-[40px] xs:text-[48px] sm:text-[56px] md:text-[64px] font-heading uppercase text-ink leading-none tracking-[-0.01em] mb-5 sm:mb-6">
              Turn Your Idea Into a{' '}
              <span className="text-coral">Digital Reality.</span>
            </motion.h1>

            {/* Marathi line from the poster */}
            <motion.p variants={item} lang="mr" className="text-lg xs:text-xl sm:text-2xl font-sans font-bold text-ink leading-snug mb-5 sm:mb-6">
              तुमची Idea <span className="text-deep-teal underline decoration-coral decoration-4 underline-offset-4">Digital Reality</span> मध्ये आणतो.
            </motion.p>

            {/* Sub-text */}
            <motion.p variants={item} className="text-base sm:text-lg md:text-[19px] text-muted-ink leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal">
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
              >
                See Our Work
              </Button>
            </motion.div>

            {/* Honest Trust Line */}
            <motion.div variants={item} className="pt-2 border-t-2 border-ink/10 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-muted-ink font-medium">
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
              className="relative mx-auto max-w-[480px] md:max-w-[560px] lg:max-w-none pr-10 xs:pr-12 sm:pr-16 lg:pr-12 pb-10 xs:pb-14 sm:pb-16"
            >
              
              {/* Laptop Frame */}
              <div className="relative rounded-2xl bg-ink p-3 border-2 border-ink">
                {/* Laptop Camera / Header dot */}
                <div className="flex items-center gap-1.5 pb-2 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <div className="ml-3 text-[10px] text-offwhite/70 font-mono tracking-tight opacity-75 truncate">
                    smitam-dental-care-ochre.vercel.app
                  </div>
                </div>

                {/* Laptop Screen Content */}
                <div className="relative overflow-hidden rounded-lg bg-offwhite border border-slate-200 aspect-[16/10]">
                  <img
                    src="/projects/dental.png"
                    alt="Sample business website mockup preview"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>

                {/* Laptop Base Stand */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-32 h-2.5 bg-slate-300 rounded-b-md " />
              </div>

              {/* Overlapping Phone Frame (bottom-right corner) */}
              <div className="animate-float-slow absolute bottom-0 right-0 w-24 xs:w-28 sm:w-32 lg:w-[7.5rem] xl:w-32 bg-ink p-1.5 sm:p-2 rounded-2xl border-2 border-ink [transform:translateZ(40px)]">
                {/* Speaker Notch */}
                <div className="w-10 h-2 bg-muted-ink rounded-full mx-auto mb-1.5" />
                {/* Phone Screen */}
                <div className="rounded-[18px] sm:rounded-[20px] overflow-hidden bg-offwhite aspect-[9/17] relative flex flex-col">
                  {/* Phone Mockup Content */}
                  <div className="bg-deep-teal p-2.5 text-offwhite">
                    <div className="flex items-center justify-between text-[8px] font-bold">
                      <span>Smitam Dental Care</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <p className="text-[7px] text-offwhite/80 mt-1">Book appointment in 10s</p>
                  </div>
                  <div className="p-2 space-y-1.5 flex-1 bg-mint/40 text-[7px] text-ink">
                    <div className="bg-offwhite p-1.5 rounded  border border-slate-200">
                      <p className="font-semibold text-navy">Dr. Aditi Kulkarni</p>
                      <p className="text-muted-ink">Braces &amp; Implants</p>
                    </div>
                    <div className="bg-mint text-deep-teal p-1.5 rounded font-semibold text-center">
                      ✓ Instant WhatsApp Confirmation
                    </div>
                    <div className="mt-2 bg-coral text-deep-teal p-1 rounded-full text-center font-bold">
                      Chat on WhatsApp
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Automation Badge: "New appointment request 🔔" */}
              <div className="absolute -top-6 sm:-top-5 left-6 xs:left-auto right-0 sm:-right-6 lg:-right-2 xl:-right-6 bg-offwhite rounded-2xl p-2 xs:p-2.5 sm:p-3 border-2 border-ink flex items-center gap-2 xs:gap-2.5 sm:gap-3 animate-float xs:max-w-[calc(100%-1rem)]">
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 shrink-0 rounded-full bg-coral flex items-center justify-center text-deep-teal">
                  <Bell className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] xs:text-xs font-bold text-navy whitespace-nowrap">New booking request</span>
                    <span className="text-[10px] text-deep-teal font-bold bg-mint px-1 rounded">Live</span>
                  </div>
                  <p className="text-[10px] xs:text-[11px] text-muted-ink truncate">Added to Google Calendar ✓</p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
