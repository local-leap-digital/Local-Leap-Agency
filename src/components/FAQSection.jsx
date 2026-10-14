import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { faqs } from '../data/faqs';

export default function FAQSection() {
  // Only one open at a time
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F3FAFA]">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked"
          highlightText="Questions"
          description="Clear answers about our websites, process, and ongoing support. No jargon."
        />

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E2EEF0] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#05B0B5] focus-visible:outline-hidden"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-['Poppins'] font-semibold text-base sm:text-lg text-[#01315E]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F3FAFA] flex items-center justify-center shrink-0 text-[#008F94] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#05B0B5]/15' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#334155] leading-relaxed border-t border-slate-100"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
