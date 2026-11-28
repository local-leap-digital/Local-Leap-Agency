import React, { useState } from 'react';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import Button from './common/Button';
import { siteConfig } from '../data/site';
import { getWhatsAppUrl, getDemoWhatsAppUrl } from '../utils/whatsapp';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessType: 'Dental Clinic',
    phone: '',
    message: '',
    // Honeypot field for spam prevention (must remain empty)
    botcheck: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const businessTypes = [
    'Dental Clinic',
    'Clinic / Doctor',
    'Cafe',
    'Restaurant',
    'Gym & Fitness',
    'Salon',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam honeypot check
    if (formData.botcheck) {
      setFormStatus('success');
      return;
    }

    // Client-side validation
    if (!formData.name.trim() || !formData.businessName.trim() || !formData.phone.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in your name, business name, and phone number.');
      return;
    }

    setFormStatus('loading');
    setErrorMessage('');

    try {
      const accessKey = siteConfig.formAccessKey;
      const isPlaceholder = accessKey.includes('PLACEHOLDER');

      if (!isPlaceholder && accessKey) {
        // Send to Web3Forms / form service
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `New Free Demo Website Request — ${formData.businessName}`,
            from_name: "LocalLeap Digital Website",
            name: formData.name,
            business_name: formData.businessName,
            business_type: formData.businessType,
            phone: formData.phone,
            message: formData.message || 'No additional message provided.'
          })
        });

        const result = await response.json();
        if (result.success) {
          setFormStatus('success');
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } else {
        // Fallback demo mode when access key is not set yet
        // Simulate a brief delay then mark success
        await new Promise((res) => setTimeout(res, 800));
        setFormStatus('success');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setFormStatus('error');
      setErrorMessage('Could not send right now. Please message us directly on WhatsApp below!');
    }
  };

  const whatsappGeneralUrl = getWhatsAppUrl();
  const whatsappDemoUrl = getDemoWhatsAppUrl(formData.businessName);

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-offwhite">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's Build Your"
          highlightText="Website"
          description="Tell us about your business and we'll create a free demo website for you. No cost, no obligation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Direct Contact Details & WhatsApp Button (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-[22px] sm:text-2xl text-navy mb-3">
                Talk to Us Directly
              </h3>
              <p className="text-sm sm:text-base text-muted-ink leading-relaxed mb-8">
                We prefer WhatsApp for quick replies, questions, or sharing links. We're a small team, so you'll always talk directly with us.
              </p>

              {/* Big WhatsApp Button */}
              <div className="mb-8">
                <a
                  href={whatsappGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-coral hover:bg-coral-dark text-deep-teal p-4 rounded-full font-sans font-medium uppercase tracking-[0.02em] text-sm sm:text-base transition-colors duration-200"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Message on WhatsApp</span>
                </a>
                <p className="text-xs text-center text-muted-ink mt-2">
                  Usually replies within 1–2 hours
                </p>
              </div>

              {/* Direct Details: poster-style "Get In Touch" card */}
              <div className="relative overflow-hidden bg-deep-teal rounded-2xl p-6 sm:p-7 text-offwhite ">
                <h4 className="relative font-heading font-bold text-xl sm:text-2xl text-gold mb-5">
                  Get In Touch
                </h4>
                <div className="relative space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center text-forest shrink-0 ">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-offwhite/60 font-medium">Phone / Call</p>
                    <div className="flex flex-wrap gap-x-2">
                      {siteConfig.phones.map((phone, i) => (
                        <a
                          key={phone.tel}
                          href={`tel:${phone.tel}`}
                          className="inline-block py-2 sm:py-1 font-semibold text-offwhite hover:text-gold transition-colors whitespace-nowrap"
                        >
                          {phone.display}{i < siteConfig.phones.length - 1 && <span className="text-offwhite/40"> /</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center text-forest shrink-0 ">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-offwhite/60 font-medium">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-block py-2 sm:py-1 font-semibold text-offwhite hover:text-gold transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center text-forest shrink-0 ">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-offwhite/60 font-medium">Address</p>
                    <p className="font-semibold text-offwhite">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center text-forest shrink-0 ">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-offwhite/60 font-medium">Working Hours</p>
                    <p className="font-semibold text-offwhite">
                      {siteConfig.workingHours}
                    </p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-mint p-5 xs:p-6 sm:p-10 rounded-2xl border-2 border-ink ">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy mb-2">
                Request Your Free Demo Website
              </h3>
              <p className="text-sm text-muted-ink mb-6">
                Fill this short form. We will create a sample website preview for your business and share it with you.
              </p>

              {formStatus === 'success' ? (
                <div className="bg-offwhite p-6 sm:p-8 rounded-2xl border border-emerald-200 text-center">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-navy mb-2">
                    Thanks! We'll message you on WhatsApp soon.
                  </h4>
                  <p className="text-sm text-muted-ink max-w-md mx-auto mb-6">
                    We've received your request. We'll start crafting a free concept demo for <strong>{formData.businessName || 'your business'}</strong>.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-coral text-deep-teal px-6 py-3 rounded-full text-sm font-medium uppercase tracking-[0.02em] hover:bg-coral-dark transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Ping Us on WhatsApp Now</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="py-2 px-3 text-xs text-muted-ink hover:text-navy underline cursor-pointer"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Spam honeypot field (hidden from view) */}
                  <input
                    type="text"
                    name="botcheck"
                    value={formData.botcheck}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Name & Business Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dr. Rajesh / Amit Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-offwhite border-2 border-ink text-base text-ink focus:border-green-dark focus:outline-none focus:ring-1 focus:ring-green-dark transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
                      >
                        Business Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Dental Care / Roast Cafe"
                        className="w-full px-4 py-3 rounded-xl bg-offwhite border-2 border-ink text-base text-ink focus:border-green-dark focus:outline-none focus:ring-1 focus:ring-green-dark transition-all"
                      />
                    </div>
                  </div>

                  {/* Business Type & Phone Number Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="businessType"
                        className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
                      >
                        Business Type <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-offwhite border-2 border-ink text-base text-ink focus:border-green-dark focus:outline-none focus:ring-1 focus:ring-green-dark transition-all cursor-pointer"
                      >
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
                      >
                        Phone / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 rounded-xl bg-offwhite border-2 border-ink text-base text-ink focus:border-green-dark focus:outline-none focus:ring-1 focus:ring-green-dark transition-all"
                      />
                    </div>
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5"
                    >
                      Message <span className="text-muted-ink font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific features you need? (e.g. appointment booking, table reservation, menu display, Google review automation)"
                      className="w-full px-4 py-3 rounded-xl bg-offwhite border-2 border-ink text-base text-ink focus:border-green-dark focus:outline-none focus:ring-1 focus:ring-green-dark transition-all resize-y"
                    />
                  </div>

                  {/* Error Notification */}
                  {formStatus === 'error' && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage || 'Something went wrong. Please check your details.'}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formStatus === 'loading'}
                    className="w-full"
                  >
                    {formStatus === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Creating Request...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4 shrink-0" />
                        <span>
                          Request Free Demo<span className="hidden xs:inline"> Website</span>
                        </span>
                      </span>
                    )}
                  </Button>

                  <p className="text-[11px] text-center text-muted-ink pt-1">
                    🔒 No spam, ever. We only contact you regarding your demo website.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
