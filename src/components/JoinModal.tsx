import React, { useState, useEffect } from 'react';
import { soundFx } from '../utils/audio';
import confetti from 'canvas-confetti';
import { CheckCircle2, ArrowRight, UserPlus, Clock, Heart } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(12);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    yearAndDepartment: '',
    contributionArea: 'Technical',
    workLink: '',
    reason: ''
  });

  useEffect(() => {
    const targetDate = new Date('2026-09-15T23:59:59+05:30').getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff > 0) {
      setDaysRemaining(Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#00f0ff', '#38bdf8', '#818cf8', '#ffffff']
      });
    } catch {
      // Confetti fallback
    }

    setSubmitted(true);
  };

  const handleClose = () => {
    soundFx.playClick();
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in">
      <div className="hud-panel rounded-2xl max-w-xl w-full p-6 sm:p-8 border-2 border-cyan-400 bg-[#050b1d] relative tech-border shadow-[0_0_60px_rgba(0,240,255,0.3)] max-h-[90vh] overflow-y-auto">
        {/* Dismiss Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-black/60 border border-cyan-500/20 text-slate-400 hover:text-white font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>CLOSE [✕]</span>
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-black text-2xl text-white uppercase">
              APPLICATION RECEIVED
            </h3>
            <p className="text-cyan-300 font-mono text-xs font-semibold">
              Thank you, {formData.name || 'Explorer'}!
            </p>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              We received your application to join <strong className="text-white">AMI ASTRO</strong>. Our student committee will review your submission and reach out via university email before 18 September 2026.
            </p>
            <div className="pt-4">
              <button
                onClick={handleClose}
                className="px-8 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                BACK TO WEBSITE
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 tracking-widest uppercase mb-2">
              <UserPlus className="w-4 h-4" />
              AMI ASTRO CREW ONBOARDING 2026
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
              JOIN THE AMI ASTRO CREW
            </h2>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Want to be part of what we build at AMI ASTRO? Tell us a little about yourself, what interests you, and where you'd like to contribute.
            </p>

            {/* Deadline Banner */}
            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between mb-6 font-mono text-xs">
              <div className="flex items-center gap-2 text-cyan-300">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Applications open until <strong>15 September 2026</strong></span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 font-bold border border-emerald-500/40 text-[10px]">
                {daysRemaining} DAYS REMAINING
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                    University Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. name@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Year & Department + Contribution Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                    Year & Department *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2nd Year, Computer Science"
                    value={formData.yearAndDepartment}
                    onChange={(e) => setFormData({ ...formData, yearAndDepartment: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                    Area you'd like to contribute to *
                  </label>
                  <select
                    value={formData.contributionArea}
                    onChange={(e) => setFormData({ ...formData, contributionArea: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Technical">Technical (Coding / Electronics / Payloads)</option>
                    <option value="Design">Design (UI/UX, 3D, Posters & Graphics)</option>
                    <option value="Content & Editorial">Content & Editorial (Writing & Astrojournal)</option>
                    <option value="Marketing">Marketing (Publicity, Socials & Outreach)</option>
                    <option value="Events & Operations">Events & Operations (Logistics & Telescope Setup)</option>
                    <option value="Media">Media (Photography & Video)</option>
                    <option value="Open to exploring">Open to exploring</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Work Link */}
              <div>
                <label className="block text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                  Portfolio / GitHub / LinkedIn / Work Link
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/... or LinkedIn or portfolio"
                  value={formData.workLink}
                  onChange={(e) => setFormData({ ...formData, workLink: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              {/* Row 4: Why do you want to join */}
              <div>
                <label className="block text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
                  Why do you want to join AMI ASTRO? *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your interests, what you enjoy doing, or what you'd love to contribute to the club…"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none leading-relaxed"
                />
              </div>

              {/* Friendly Note */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                <Heart className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>No prior space or robotics experience is required. Curiosity and enthusiasm come first.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-mono font-bold text-xs uppercase tracking-[0.2em] transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>APPLY TO JOIN AMI ASTRO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
