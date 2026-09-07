import React, { useState } from 'react';
import { soundFx } from '../utils/audio';
import { 
  Send, Mail, MapPin, 
  Radio, CheckCircle2, Terminal, Copy, Check 
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      soundFx.playTransmission();
      const signalId = `SIG-FREQ-${Math.floor(1000 + Math.random() * 9000)}-TX`;
      setTransmissionSuccess(signalId);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  const copyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText('contact@amiastro.edu');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 font-mono text-[11px] tracking-[0.25em] text-cyan-400 uppercase mb-4">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            AMI ASTRO CONTACT
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-none mb-6 uppercase">
            LET'S CONNECT
          </h2>
          <p className="text-xl sm:text-2xl font-light text-cyan-300 border-l-2 border-cyan-400 pl-4 py-1">
            “Every great journey begins with a signal.”
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Signal Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Terminal Box */}
            <div className="hud-panel rounded-2xl p-6 border border-cyan-500/25 bg-[#050b1d]/90">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs tracking-wider text-slate-400 uppercase">
                  DIRECT COMMAND FREQUENCY
                </span>
                <span className="font-mono text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40">
                  UPLINK OPEN
                </span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/60 border border-cyan-500/20 mb-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">
                      OFFICIAL DISPATCH
                    </span>
                    <span className="font-mono text-sm font-bold text-white">
                      contact@amiastro.edu
                    </span>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 transition-colors"
                  title="Copy frequency"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-slate-400 text-xs font-mono leading-relaxed">
                Reach the Core Committee for collegiate partnerships, hackathon sponsorships, guest speaker invites, or prospective member inquiries.
              </p>
            </div>

            {/* Base Coordinates */}
            <div className="hud-panel rounded-2xl p-6 border border-cyan-500/25 bg-[#050b1d]/90">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <span className="font-mono text-xs tracking-wider text-slate-400 uppercase block">
                    GROUND STATION HEADQUARTERS
                  </span>
                  <span className="font-heading font-bold text-base text-white">
                    Level 4, Center for Aerospace & Deep Tech, Innovation Complex
                  </span>
                </div>
              </div>
              <div className="font-mono text-xs text-slate-400 p-3 rounded-lg bg-black/60 border border-cyan-500/15">
                <div className="text-cyan-400 font-semibold mb-1">
                  HOURS: 09:00 - 21:00 IST (MON-SAT)
                </div>
                <div>OBSERVATORY ACCESS: 20:00 - 03:00 (CLEAR NIGHTS)</div>
              </div>
            </div>

            {/* Social Signal Networks */}
            <div className="hud-panel rounded-2xl p-6 border border-cyan-500/25 bg-[#050b1d]/90">
              <span className="font-mono text-xs tracking-wider text-slate-400 uppercase block mb-4">
                COMMUNICATION NETWORKS
              </span>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-black/60 hover:bg-cyan-950/60 border border-cyan-500/20 text-center transition-colors group"
                >
                  <InstagramIcon className="w-5 h-5 text-cyan-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[11px] text-slate-300 block">@amiastro</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-black/60 hover:bg-cyan-950/60 border border-cyan-500/20 text-center transition-colors group"
                >
                  <LinkedinIcon className="w-5 h-5 text-cyan-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[11px] text-slate-300 block">LinkedIn</span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-black/60 hover:bg-cyan-950/60 border border-cyan-500/20 text-center transition-colors group"
                >
                  <YoutubeIcon className="w-5 h-5 text-cyan-400 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[11px] text-slate-300 block">YouTube</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Transmission Dispatch Terminal (Form) */}
          <div className="lg:col-span-7">
            <div className="hud-panel rounded-2xl p-6 sm:p-10 border border-cyan-400/40 bg-[#050b1d]/90 relative overflow-hidden tech-border shadow-[0_0_50px_rgba(0,0,0,0.6)]">
              
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase">
                    SEND A MESSAGE TO AMI ASTRO
                  </span>
                </div>
                <span className="font-mono text-xs text-emerald-400 font-semibold">
                  ONLINE
                </span>
              </div>

              {transmissionSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white">
                    MESSAGE SENT
                  </h3>
                  <div className="font-mono text-xs text-cyan-300 font-bold">
                    SIGNAL RECEIVED
                  </div>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to <strong className="text-white">AMI ASTRO</strong>. Our committee team has received your note and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setTransmissionSuccess(null)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-400 uppercase tracking-wider mb-2">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-cyan-500/30 text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 uppercase tracking-wider mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@university.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-black/60 border border-cyan-500/30 text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider mb-2">
                      SUBJECT *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Partnership Proposal / Event Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-black/60 border border-cyan-500/30 text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 uppercase tracking-wider mb-2">
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Detail your request, ideas, or collaboration proposal..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-black/60 border border-cyan-500/30 text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-mono font-black text-xs sm:text-sm tracking-[0.25em] uppercase hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Radio className="w-4 h-4 animate-spin text-black" />
                        SENDING MESSAGE...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        SEND MESSAGE →
                        <Send className="w-4 h-4 text-black" />
                      </span>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
