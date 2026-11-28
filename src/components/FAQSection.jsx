import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RevealStagger, RevealItem } from './common/Reveal';
import SectionHeading from './common/SectionHeading';
import { faqs } from '../data/faqs';

export default function FAQSection() {
  // Only one open at a time
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-mint">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="COMMON QUESTIONS"
          title="Frequently Asked"
          highlightText="Questions"
          description="Clear answers about our websites, process, and ongoing support. No jargon."
        />

        <RevealStagger className="space-y-3 sm:space-y-4" stagger={0.06}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <RevealItem
                key={faq.id}
                className={`bg-offwhite rounded-2xl border overflow-hidden transition-[border-color,box-shadow] duration-300 ${
                  isOpen ? 'border-green/40 ' : 'border-mint-border  hover:border-green/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-hidden"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="font-sans font-bold text-base sm:text-lg text-ink">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'rotate-180 bg-deep-teal text-coral' : 'bg-mint text-green-dark'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-3 text-sm sm:text-base text-muted-ink leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
