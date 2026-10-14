import React from 'react';
import SectionHeading from './common/SectionHeading';
import { siteConfig } from '../data/site';
import { Users2, Check } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Logo Icon & Studio Badge on Ice White Panel */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-[#F3FAFA] rounded-3xl p-8 sm:p-12 border border-[#E2EEF0] relative overflow-hidden text-center shadow-xs">
              {/* Subtle decorative circles */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#05B0B5]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#01315E] p-4 shadow-md flex items-center justify-center mb-6">
                  <img
                    src="/logo-icon.png"
                    alt="LocalLeap Digital Icon"
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>

                <h3 className="font-['Poppins'] font-bold text-xl text-[#01315E] mb-2">
                  LocalLeap Digital
                </h3>
                <p className="text-xs font-semibold text-[#008F94] uppercase tracking-wider mb-6">
                  Dedicated Two-Person Studio
                </p>

                <div className="w-full pt-6 border-t border-[#E2EEF0] space-y-3 text-left">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#334155]">
                    <div className="w-5 h-5 rounded-full bg-[#05B0B5]/20 flex items-center justify-center text-[#008F94] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Direct personal accountability</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#334155]">
                    <div className="w-5 h-5 rounded-full bg-[#05B0B5]/20 flex items-center justify-center text-[#008F94] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>No middlemen, agencies, or sales reps</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-[#334155]">
                    <div className="w-5 h-5 rounded-full bg-[#05B0B5]/20 flex items-center justify-center text-[#008F94] shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Built exclusively for local business owners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Two Team Cards */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              eyebrow="ABOUT US"
              title="About LocalLeap Digital"
              align="left"
              className="mb-6"
            />

            <div className="prose text-base sm:text-[17px] text-[#334155] leading-relaxed space-y-4 mb-8">
              <p>
                LocalLeap Digital is a small studio of two people with one goal: helping local businesses get the online presence they deserve.
              </p>
              <p>
                One of us works directly with clients to understand what your business needs. The other builds your website and automations. Because we're small, you always talk to the people actually doing the work.
              </p>
            </div>

            {/* Small row of two Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {siteConfig.team.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-[#F3FAFA] p-5 rounded-2xl border border-[#E2EEF0] flex items-center gap-4 hover:border-[#05B0B5] transition-colors"
                >
                  {/* Initials in a teal circle */}
                  <div className="w-12 h-12 rounded-xl bg-[#01315E] text-[#05B0B5] font-['Poppins'] font-bold text-base flex items-center justify-center shrink-0 shadow-xs">
                    {member.initials}
                  </div>
                  <div>
                    <h4 className="font-['Poppins'] font-bold text-sm sm:text-base text-[#01315E]">
                      {member.name}
                    </h4>
                    <p className="text-xs font-medium text-[#008F94]">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
