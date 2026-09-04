'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';
import { CLUB_INFO } from '@/data/clubInfo';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Button from '@/components/ui/Button';
import PageHeroHeader from '@/components/layout/PageHeroHeader';

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState('join');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do I join AMI-ASTRO as a student?',
      a: 'All enrolled students of Amity University Mumbai (undergraduate, postgraduate, and PhD scholars from any department) are welcome to join. Fill out the form above with your student ID, or attend our alternate Friday orientation sessions.',
    },
    {
      q: 'Do I need prior astronomy knowledge or my own telescope?',
      a: 'Not at all! AMI-ASTRO provides all required optical instruments (including 10" Dobsonian, refractors, solar filters, and laser collimators) and conducts beginner-friendly training on constellation identification and telescope operation.',
    },
    {
      q: 'Are night stargazing sessions open to all university students?',
      a: 'Yes, on-campus observation nights on the Open Ground and Academic Block 2 terrace are open to all university students with valid ID cards.',
    },
    {
      q: 'How are off-campus dark-sky expeditions organized?',
      a: 'Expeditions to dark-sky sites in the Sahyadri mountains (such as Lonavala and Bhandardara) are scheduled around new-moon weekends. Transportation, camp gear, and safety logistics are coordinated in advance with faculty approval.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate local submission (Phase 1 prototype)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-transparent text-white min-h-screen relative">
      {/* Cinematic Page Hero Header */}
      <PageHeroHeader
        breadcrumbs={[
          { label: 'HOME', href: '/' },
          { label: 'CONTACT & JOIN US', href: '/contact' },
        ]}
        eyebrow="CONNECT WITH AMI-ASTRO"
        title="Contact & Join Us"
        description="Have questions about stargazing schedules, membership intake, or telescope access? Send us a message or find us at the campus observatory grounds."
        badge="Open for 2025–2026 Intake"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">

        {/* 2-Column Grid: Form + Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          {/* Left Column: Form (7 cols) */}
          <div id="join" className="lg:col-span-7">
            <div className="cosmic-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Message or Register
              </h2>
              <p className="text-xs text-[#94A3B8] mb-6">
                Choose your inquiry topic below and our team will get in touch.
              </p>

              {submitted ? (
                <div className="py-8 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{fullName || 'Explorer'}</span>. Your registration inquiry has been received by the AMI-ASTRO student council. We will reach out via your provided email with orientation details and upcoming observation schedules.
                  </p>
                  <div className="bg-[#12182B] border border-[#6C63FF]/30 p-4 rounded-xl text-xs text-[#A78BFA] mb-6 max-w-md flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#A78BFA] shrink-0" />
                    <span>Welcome to Amity University Mumbai&apos;s Astronomy Society!</span>
                  </div>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setEmail('');
                      setStudentId('');
                      setMessage('');
                    }}
                    variant="secondary"
                    size="md"
                    className="text-xs uppercase tracking-wider"
                  >
                    SEND ANOTHER INQUIRY
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Topic Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] mb-2">
                      I want to:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'join', label: 'Join Club' },
                        { id: 'inquiry', label: 'Inquiry' },
                        { id: 'volunteer', label: 'Volunteer' },
                        { id: 'collaborate', label: 'Partner' },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setInquiryType(tab.id)}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer border ${
                            inquiryType === tab.id
                              ? 'bg-[#6C63FF] text-white border-[#6C63FF]'
                              : 'bg-[#12182B] text-[#94A3B8] border-[#1E293B] hover:text-white'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Aryan Sharma"
                        className="w-full px-3.5 py-2.5 bg-[#12182B] border border-[#1E293B] rounded-lg text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#6C63FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@amity.edu"
                        className="w-full px-3.5 py-2.5 bg-[#12182B] border border-[#1E293B] rounded-lg text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#6C63FF]"
                      />
                    </div>
                  </div>

                  {/* Student ID / Department */}
                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                      Student ID or Department (Optional)
                    </label>
                    <input
                      type="text"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      placeholder="e.g. A9910022045 or Aerospace Dept"
                      className="w-full px-3.5 py-2.5 bg-[#12182B] border border-[#1E293B] rounded-lg text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#6C63FF]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                      Message / Astronomical Interests *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you'd like to explore: astrophotography, telescope operation, stargazing trips..."
                      className="w-full px-3.5 py-2.5 bg-[#12182B] border border-[#1E293B] rounded-lg text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#6C63FF] resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      className="uppercase tracking-wider text-xs font-bold py-3.5"
                    >
                      {isSubmitting ? 'PROCESSING...' : 'SEND MESSAGE'}
                    </Button>
                  </div>

                  <p className="text-[11px] text-[#64748B] text-center pt-1">
                    Inquiries are reviewed by the Student Astronomy Executive Council.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contact & Coordinates (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Cards */}
            <div className="cosmic-card rounded-2xl p-6 sm:p-7 flex flex-col gap-5">
              <h3 className="text-sm font-bold tracking-widest uppercase text-white">
                DIRECT CONTACT
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#6C63FF]/20 border border-[#6C63FF]/40 flex items-center justify-center text-[#A78BFA] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#64748B] text-xs block">Official Email</span>
                    <a
                      href={`mailto:${CLUB_INFO.contact.email}`}
                      className="text-white font-medium hover:text-[#A78BFA] transition-colors"
                    >
                      {CLUB_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#6C63FF]/20 border border-[#6C63FF]/40 flex items-center justify-center text-[#A78BFA] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#64748B] text-xs block">
                      Club Inquiries Line
                    </span>
                    <span className="text-white font-medium">
                      {CLUB_INFO.contact.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#6C63FF]/20 border border-[#6C63FF]/40 flex items-center justify-center text-[#A78BFA] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#64748B] text-xs block">Campus Address</span>
                    <span className="text-white leading-relaxed font-medium">
                      {CLUB_INFO.contact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#6C63FF]/20 border border-[#6C63FF]/40 flex items-center justify-center text-[#A78BFA] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[#64748B] text-xs block">Club Hours</span>
                    <span className="text-white font-medium">
                      {CLUB_INFO.contact.meetingTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stargazing Venue Card */}
            <div className="cosmic-card rounded-2xl p-6 sm:p-7 border border-[#1E293B]">
              <span className="text-[10px] font-bold tracking-widest text-[#A78BFA] uppercase block mb-1">
                OBSERVATION VENUE
              </span>
              <h4 className="text-base font-bold text-white mb-2">
                Amity University Mumbai Open Ground
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Telescopes are assembled on the western open athletic ground behind Academic Block 2, positioned for unobstructed horizons towards Orion and the celestial equator.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="pt-10 border-t border-[#1E293B] max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.2em] text-[#A78BFA] uppercase block mb-2">
              FREQUENT QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="cosmic-card rounded-xl overflow-hidden border border-[#1E293B]"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 hover:text-[#A78BFA] transition-colors"
                  >
                    <span className="text-sm font-bold text-white">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#A78BFA] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#64748B] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-[#1E293B]/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
