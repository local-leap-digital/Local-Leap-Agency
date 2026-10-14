import React from 'react';
import SectionHeading from './common/SectionHeading';
import { Eye, MessagesSquare, CheckCircle, Code2, Rocket } from 'lucide-react';

export default function ProcessSection() {
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
    <section id="process" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From Demo to Launch in"
          highlightText="Simple Steps"
          description="A transparent, risk-free process designed to get your business online without any headaches."
        />

        {/* Process Steps */}
        <div className="relative mt-12 md:mt-16">
          {/* Horizontal Connecting Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[#E2EEF0] -z-0"
            aria-hidden="true"
          >
            <div className="h-full bg-gradient-to-r from-[#05B0B5] via-[#008F94] to-[#01315E] opacity-70" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-5">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#008F94] shadow-md flex items-center justify-center font-['Poppins'] font-bold text-lg text-[#01315E] group-hover:bg-[#008F94] group-hover:text-white transition-all duration-200">
                      <span>{step.number}</span>
                    </div>
                    {/* Small sub icon */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#05B0B5] text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-3 h-3" />
                    </div>
                  </div>

                  <h3 className="font-['Poppins'] font-bold text-lg text-[#01315E] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#334155] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
