import React from 'react';
import SectionHeading from './common/SectionHeading';
import { Eye, MessagesSquare, CheckCircle, Code2, Rocket } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { RevealStagger, RevealItem } from './common/Reveal';

export default function ProcessSection() {
  const reduce = useReducedMotion();
  const steps = [
    {
      number: '1',
      title: 'Free Demo',
      description: 'We create a sample website for your business so you can see it before deciding.',
      icon: Eye
    },
    {
      number: '2',
      title: 'Discuss',
      description: 'We talk about what you need, your services and the features you want.',
      icon: MessagesSquare
    },
    {
      number: '3',
      title: 'Confirm',
      description: 'Approve the plan and pay a 50% advance to begin.',
      icon: CheckCircle
    },
    {
      number: '4',
      title: 'Build & Review',
      description: 'We build your website and make changes based on your feedback.',
      icon: Code2
    },
    {
      number: '5',
      title: 'Launch',
      description: 'Your website goes live, and we stay available for support.',
      icon: Rocket
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 bg-offwhite relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From Demo to Launch in"
          highlightText="Simple Steps"
          description="A transparent, risk-free process designed to get your business online without any headaches."
        />

        {/* Process Steps */}
        <div className="relative mt-8 sm:mt-12 md:mt-16">
          {/* Vertical connecting line (phones) */}
          <div className="sm:hidden absolute left-7 top-7 bottom-7 w-0.5 bg-ink opacity-30" aria-hidden="true" />
          {/* Horizontal Connecting Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-mint-border -z-0"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-coral origin-left"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
          </div>

          <RevealStagger stagger={0.18} delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-x-6 sm:gap-y-10 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              return (
                <RevealItem
                  key={step.number}
                  className={`flex items-start gap-4 text-left sm:flex-col sm:items-center sm:gap-0 sm:text-center group sm:max-w-sm sm:mx-auto ${
                    isLast ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className="relative shrink-0 sm:mb-5">
                    <div className="relative w-14 h-14 rounded-full bg-offwhite border-2 border-green-dark  flex items-center justify-center font-heading font-bold text-lg text-navy group-hover:bg-green-dark group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <span>{step.number}</span>
                    </div>
                    {/* Small sub icon */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-coral text-deep-teal flex items-center justify-center ">
                      <Icon className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="min-w-0 pt-1.5 sm:pt-0">
                    <h3 className="font-heading font-bold text-lg text-navy mb-1 sm:mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-muted-ink leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
