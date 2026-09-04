'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { EventItem } from '@/types';
import Button from '@/components/ui/Button';

interface RegistrationModalProps {
  event: EventItem;
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  event,
  isOpen,
  onClose,
}: RegistrationModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [department, setDepartment] = useState('');
  const [hasTelescope, setHasTelescope] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsSuccess(false);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate frontend registration response (Phase 1 prototype)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#0E1424] border border-[#1E293B] rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden z-10">
        <button
          onClick={onClose}
          aria-label="Close registration modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#12182B] transition-colors border border-[#1E293B]"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center text-center py-6">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h2 id="modal-title" className="text-2xl font-bold text-white mb-2">
              Registration Confirmed!
            </h2>
            <p className="text-sm text-[#94A3B8] mb-4">
              You are registered for{' '}
              <strong className="text-white">{event.title}</strong> on{' '}
              {event.fullDateString}.
            </p>

            <div className="bg-[#12182B] border border-[#1E293B] rounded-xl p-4 w-full text-xs text-[#94A3B8] text-left mb-6 space-y-1.5">
              <div>
                <span className="text-[#64748B]">Attendee:</span>{' '}
                <span className="text-white">{fullName || 'Student Explorer'}</span>
              </div>
              <div>
                <span className="text-[#64748B]">Venue:</span>{' '}
                <span className="text-white">{event.location}</span>
              </div>
              <div>
                <span className="text-[#64748B]">Time:</span>{' '}
                <span className="text-white">{event.time}</span>
              </div>
            </div>

            <div className="bg-[#6C63FF]/10 border border-[#6C63FF]/30 text-[#A78BFA] text-xs p-3 rounded-lg w-full mb-6 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#A78BFA] shrink-0" />
              <span>A digital entry pass has been reserved for your Amity Student ID.</span>
            </div>

            <Button
              onClick={onClose}
              variant="primary"
              size="md"
              fullWidth
              className="uppercase tracking-wider text-xs py-3"
            >
              CLOSE WINDOW
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-8">
              <span className="text-[11px] font-bold tracking-widest text-[#A78BFA] uppercase block mb-1">
                EVENT REGISTRATION
              </span>
              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
                {event.title}
              </h2>
              <p className="text-xs text-[#94A3B8] mt-1">
                {event.fullDateString} • {event.time}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                    Student / Roll No (Optional)
                  </label>
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="A9910022045"
                    className="w-full px-3.5 py-2.5 bg-[#12182B] border border-[#1E293B] rounded-lg text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#6C63FF]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] mb-1.5">
                  Department / Program
                </label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="e.g. B.Tech Aerospace / Physics"
                  className="w-full px-3.5 py-2.5 bg-[#12182B] border border-[#1E293B] rounded-lg text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-[#6C63FF]"
                />
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={hasTelescope}
                  onChange={(e) => setHasTelescope(e.target.checked)}
                  className="mt-0.5 rounded border-[#1E293B] bg-[#12182B] text-[#6C63FF] focus:ring-[#6C63FF]"
                />
                <span className="text-xs text-[#94A3B8]">
                  I am bringing my own telescope / DSLR binoculars to the venue
                </span>
              </label>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  className="uppercase tracking-wider text-xs font-bold py-3"
                >
                  {isSubmitting ? 'PROCESSING...' : 'CONFIRM EVENT REGISTRATION'}
                </Button>
              </div>

              <p className="text-[11px] text-[#64748B] text-center pt-1">
                Official Amity Astronomy Club Event • Digital pass generated upon confirmation.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
