import React from 'react';
import SectionHeading from './common/SectionHeading';
import { Check } from 'lucide-react';
import { Reveal } from './common/Reveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-offwhite">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Logo Icon & Studio Badge on Ice White Panel */}
          <Reveal x={-32} y={0} className="lg:col-span-5 order-2 lg:order-1 w-full max-w-xl mx-auto lg:max-w-none">
            <div className="bg-mint rounded-2xl p-6 sm:p-12 border-2 border-ink relative overflow-hidden text-center ">
              {/* Subtle decorative circles */}
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-offwhite border-2 border-ink p-3  flex items-center justify-center mb-6">
                  <img
                    src="/logo-icon.png"
                    alt="LocalLeap Digital Icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="font-heading font-bold text-xl text-navy mb-2">
                  LocalLeap Digital
                </h3>
                <p className="text-xs font-semibold text-green-dark uppercase tracking-wider mb-6">
                  Small, Dedicated Studio
                </p>

                <div className="w-full pt-6 border-t border-mint-border space-y-3 text-left">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-ink">
                    <div className="w-5 h-5 rounded-full bg-coral flex items-center justify-center text-green-dark shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Direct personal accountability</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-ink">
                    <div className="w-5 h-5 rounded-full bg-coral flex items-center justify-center text-green-dark shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>No middlemen, agencies, or sales reps</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-ink">
                    <div className="w-5 h-5 rounded-full bg-coral flex items-center justify-center text-green-dark shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Built exclusively for local business owners</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Narrative */}
          <Reveal delay={0.1} className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              eyebrow="ABOUT US"
              title="About LocalLeap Digital"
              align="left"
              className="mb-6"
            />

            <div className="prose text-base sm:text-[17px] text-muted-ink leading-relaxed space-y-4">
              <p>
                LocalLeap Digital is a small, focused studio with one goal: helping local businesses get the online presence they deserve.
              </p>
              <p>
                We take the time to understand your business, then design and build your website and automations around it. Because we're a small team, there are no handoffs or middlemen. You always talk to the people actually doing the work.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
