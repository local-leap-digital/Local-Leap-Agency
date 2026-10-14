import React from 'react';
import SectionHeading from './common/SectionHeading';
import { Star, Quote } from 'lucide-react';

/**
 * ========================================================================
 * TESTIMONIALS SECTION (SWITCH ON WHEN REAL REVIEWS EXIST)
 * ========================================================================
 * Per Section 2 ("Honesty rules"):
 * "We are a new studio. The website must not contain anything fake...
 * Leave a hidden/commented-out Testimonials section in the code that can
 * be switched on later when real reviews exist."
 *
 * To enable this section:
 * 1. Collect genuine reviews with client permission.
 * 2. Fill the `realTestimonials` array below.
 * 3. In App.jsx, uncomment <TestimonialsSection />.
 * ========================================================================
 */

export const realTestimonials = [
  /*
  {
    id: 1,
    clientName: "Dr. Real Client",
    businessName: "City Dental Care",
    quote: "Our appointments doubled within 3 weeks of launching our new website. Patients love the simple WhatsApp booking.",
    rating: 5,
    location: "Indiranagar, Bangalore"
  }
  */
];

export default function TestimonialsSection() {
  // Returns null while real reviews are pending to avoid fake social proof
  if (!realTestimonials || realTestimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F3FAFA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLIENT REVIEWS"
          title="What Local Business"
          highlightText="Owners Say"
          description="Real feedback from owners who trusted us with their websites and automations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {realTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-2xl border border-[#E2EEF0] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[#334155] text-sm leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="font-['Poppins'] font-bold text-sm text-[#01315E]">
                  {item.clientName}
                </p>
                <p className="text-xs text-slate-500">
                  {item.businessName} · {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
