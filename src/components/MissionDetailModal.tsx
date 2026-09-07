import React, { useState } from 'react';
import type { Mission } from '../data/missions';
import { soundFx } from '../utils/audio';
import confetti from 'canvas-confetti';
import { 
  X, Calendar, Clock, MapPin, ArrowRight, 
  ChevronDown, ChevronUp, Radio, Cpu, Trophy, Compass, 
  CheckCircle2, Ticket, QrCode, Download, Share2
} from 'lucide-react';

interface MissionDetailModalProps {
  mission: Mission | null;
  onClose: () => void;
}

export const MissionDetailModal: React.FC<MissionDetailModalProps> = ({ mission, onClose }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showRegForm, setShowRegForm] = useState(false);
  const [regSuccessPass, setRegSuccessPass] = useState<{
    passId: string;
    fullName: string;
    email: string;
    track: string;
    timestamp: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: 'Computer Science & Engineering',
    track: 'Deep-Space Telemetry & Software',
    experienceLevel: 'Intermediate'
  });

  if (!mission) return null;

  const toggleFaq = (index: number) => {
    soundFx.playClick();
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSuccess();

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#38bdf8', '#a855f7', '#ffffff']
      });
    } catch {
      // Confetti fallback
    }

    const passId = `AMI-ASTRO-PASS-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegSuccessPass({
      passId,
      fullName: formData.fullName || 'Explorer Cadet',
      email: formData.email,
      track: formData.track,
      timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
  };

  const getObjectiveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Radio': return <Radio className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-cyan-400" />;
      default: return <Compass className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-5xl my-auto bg-[#030712] border border-cyan-500/30 rounded-2xl shadow-[0_0_80px_rgba(0,240,255,0.2)] overflow-hidden max-h-[92vh] flex flex-col tech-border">
        
        {/* Modal Top Control Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#050b1d] border-b border-cyan-500/20 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs font-bold tracking-[0.25em] text-cyan-300 uppercase">
              AMI ASTRO • {mission.missionNumber}
            </span>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-1.5 px-3 rounded bg-black/60 hover:bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>DISMISS</span>
            <X className="w-4 h-4 text-cyan-400" />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-12">
          
          {/* Hero Banner Header of Event */}
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-gradient-to-r from-[#071330] via-[#040916] to-[#02050e] p-6 sm:p-10">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 opacity-25 mix-blend-luminosity pointer-events-none">
              <img src={mission.image} alt={mission.title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-mono text-[11px] font-bold tracking-widest uppercase">
                  {mission.missionNumber}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  {mission.status}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {mission.registeredCount} / {mission.maxCapacity} Seats Claimed
                </span>
              </div>

              <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight mb-6">
                {mission.title}
              </h1>

              {/* Event Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-xs font-mono">
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-black/60 border border-cyan-500/20 text-slate-200">
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">DATE</span>
                    <span className="font-bold text-white">{mission.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-black/60 border border-cyan-500/20 text-slate-200">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">HOURS</span>
                    <span className="font-bold text-white">{mission.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-black/60 border border-cyan-500/20 text-slate-200">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">VENUE</span>
                    <span className="font-bold text-white">{mission.venue}</span>
                  </div>
                </div>
              </div>

              {/* Large CTA */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  setShowRegForm(true);
                }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-mono font-black text-sm tracking-[0.25em] uppercase hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          {/* Section: MISSION BRIEF */}
          <div>
            <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 font-bold uppercase mb-2">
              SECTION 01
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-4">
              MISSION BRIEF
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed bg-[#050b1d] p-6 rounded-xl border border-cyan-500/20">
              {mission.brief || mission.description}
            </p>
          </div>

          {/* Section: OBJECTIVES */}
          {mission.objectives && (
            <div>
              <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 font-bold uppercase mb-2">
                SECTION 02
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-6">
                EVENT OBJECTIVES
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {mission.objectives.map((obj) => (
                  <div
                    key={obj.id}
                    className="p-5 rounded-xl bg-[#050b1d] border border-cyan-500/20 hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center">
                        {getObjectiveIcon(obj.iconName)}
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white">
                        {obj.title}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: MISSION TIMELINE */}
          {mission.timeline && (
            <div>
              <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 font-bold uppercase mb-2">
                SECTION 03
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-6">
                EVENT TIMELINE
              </h2>
              <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-cyan-500/20">
                {mission.timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-5 pl-10 group">
                    <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-[#030712] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-[0_0_10px_rgba(0,240,255,0.4)]" />
                    <div className="p-4 rounded-xl bg-[#050b1d] border border-cyan-500/15 group-hover:border-cyan-400/40 w-full transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-xs font-bold text-cyan-300">
                          {item.time}
                        </span>
                        {item.speakerOrLead && (
                          <span className="font-mono text-[10px] text-slate-400">
                            LEAD: {item.speakerOrLead}
                          </span>
                        )}
                      </div>
                      <h4 className="font-heading font-bold text-base text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: MISSION CREW (Speakers/Mentors) */}
          {mission.speakers && (
            <div>
              <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 font-bold uppercase mb-2">
                SECTION 04
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-6">
                ORGANIZERS & SPEAKERS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {mission.speakers.map((spk, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#050b1d] border border-cyan-500/20 text-center">
                    <img
                      src={spk.avatar}
                      alt={spk.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-400 shadow-lg"
                    />
                    <h4 className="font-heading font-bold text-base text-white">
                      {spk.name}
                    </h4>
                    <div className="font-mono text-xs text-cyan-400 mb-1 font-semibold">
                      {spk.role}
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 mb-3">
                      {spk.affiliation}
                    </div>
                    {spk.topic && (
                      <p className="text-[11px] text-slate-300 italic border-t border-cyan-500/15 pt-2">
                        “{spk.topic}”
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: LOCATION */}
          {mission.venueDetails && (
            <div>
              <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 font-bold uppercase mb-2">
                SECTION 05
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-6">
                VENUE & LOCATION
              </h2>
              <div className="p-6 rounded-xl bg-[#050b1d] border border-cyan-500/20 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      BUILDING CONSOLE
                    </span>
                    <span className="font-heading font-bold text-white text-base">
                      {mission.venueDetails.building}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      ACCESS TERMINAL
                    </span>
                    <span className="font-mono text-xs text-cyan-300">
                      {mission.venueDetails.gate}
                    </span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      FACILITY SPECS
                    </span>
                    <span className="text-xs text-slate-300">
                      {mission.venueDetails.accessibility}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-black/60 border border-cyan-500/20 flex flex-col justify-between">
                  <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
                    <span>GPS COORDINATES</span>
                    <span className="text-emerald-400">SIGNAL LOCKED</span>
                  </div>
                  <div className="font-mono text-lg font-bold text-cyan-400 my-4 tracking-wider">
                    {mission.venueDetails.coordinates}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    CAMPUS HIGH-BAY AVIONICS QUADRANT
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section: FAQ */}
          {mission.faqs && (
            <div>
              <div className="font-mono text-xs tracking-[0.25em] text-cyan-400 font-bold uppercase mb-2">
                SECTION 06
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase mb-6">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="space-y-3">
                {mission.faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-cyan-500/20 bg-[#050b1d] overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left font-heading font-bold text-white text-base hover:text-cyan-300 transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 pt-1 text-slate-300 text-sm leading-relaxed border-t border-cyan-500/10">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sticky Bottom Re-Registration Callout */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-400/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            <div>
              <div className="font-mono text-xs text-cyan-300 font-bold uppercase tracking-widest mb-1">
                SECURE YOUR FLIGHT CREDENTIAL
              </div>
              <h3 className="font-heading font-black text-2xl text-white">
                READY TO JOIN {mission.title}?
              </h3>
            </div>
            <button
              onClick={() => {
                soundFx.playClick();
                setShowRegForm(true);
              }}
              className="px-8 py-3.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-mono font-bold text-xs tracking-[0.2em] uppercase transition-all shadow-[0_0_20px_rgba(0,240,255,0.5)] cursor-pointer"
            >
              REGISTER NOW →
            </button>
          </div>

        </div>

        {/* Dynamic Registration Modal Overlay */}
        {showRegForm && !regSuccessPass && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="hud-panel rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-cyan-400 bg-[#050b1d] relative tech-border">
              <button
                onClick={() => setShowRegForm(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white font-mono text-xs border border-cyan-500/20 px-2 py-1 rounded"
              >
                CLOSE [✕]
              </button>

              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold tracking-widest uppercase mb-2">
                <Ticket className="w-4 h-4" />
                AMI ASTRO EVENT REGISTRATION
              </div>
              <h3 className="font-heading font-black text-2xl text-white mb-2">
                {mission.title}
              </h3>
              <p className="font-mono text-xs text-slate-400 mb-6">
                Register your seat to attend this session.
              </p>

              <form onSubmit={handleRegisterSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-slate-400 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Chen"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/70 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 uppercase mb-1">University Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/70 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 uppercase mb-1">Preferred Track</label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-black/70 border border-cyan-500/30 text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option>Software & Telemetry Track</option>
                    <option>Hardware Avionics & Sensor Arrays</option>
                    <option>Robotics & Rover Navigation</option>
                    <option>Astronomy & Science Communications</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-mono font-bold text-xs tracking-[0.2em] uppercase hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all cursor-pointer"
                >
                  CONFIRM REGISTRATION →
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Verified Holographic Flight Pass Result */}
        {regSuccessPass && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="hud-panel rounded-2xl max-w-md w-full p-6 sm:p-8 border-2 border-cyan-400 bg-gradient-to-b from-[#091535] to-[#040817] relative tech-border shadow-[0_0_60px_rgba(0,240,255,0.4)]">
              <button
                onClick={() => {
                  setRegSuccessPass(null);
                  setShowRegForm(false);
                }}
                className="absolute top-4 right-4 text-slate-400 hover:text-white font-mono text-xs border border-cyan-500/20 px-2 py-1 rounded"
              >
                DONE [✕]
              </button>

              <div className="text-center pb-4 border-b border-cyan-500/20 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold tracking-widest uppercase mb-2 border border-emerald-400/40">
                  <CheckCircle2 className="w-3 h-3" />
                  REGISTRATION CONFIRMED
                </div>
                <h3 className="font-heading font-black text-2xl text-white">
                  AMI ASTRO EVENT PASS
                </h3>
                <span className="font-mono text-xs text-cyan-300 font-bold">
                  {regSuccessPass.passId}
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs mb-6 bg-black/50 p-4 rounded-xl border border-cyan-500/20">
                <div className="flex justify-between">
                  <span className="text-slate-400">ATTENDEE:</span>
                  <span className="text-white font-bold">{regSuccessPass.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">EVENT:</span>
                  <span className="text-cyan-300 font-bold">{mission.missionNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">TRACK:</span>
                  <span className="text-slate-200">{regSuccessPass.track}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">DATE:</span>
                  <span className="text-slate-200">{mission.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ISSUED:</span>
                  <span className="text-slate-200">{regSuccessPass.timestamp}</span>
                </div>
              </div>

              {/* Simulated QR Code */}
              <div className="flex items-center justify-center p-4 bg-black rounded-lg border border-cyan-500/30 mb-6">
                <div className="flex flex-col items-center">
                  <QrCode className="w-24 h-24 text-cyan-400" />
                  <span className="font-mono text-[9px] text-cyan-400/70 tracking-widest mt-1">
                    CRYPTOGRAPHIC CHECKSUM OK
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => alert('Pass downloaded to local terminal log!')}
                  className="w-full py-2.5 rounded bg-cyan-400 text-black font-mono font-bold text-xs uppercase flex items-center justify-center gap-2 hover:bg-cyan-300"
                >
                  <Download className="w-3.5 h-3.5" />
                  SAVE PASS
                </button>
                <button
                  onClick={() => alert('Mission signal shared!')}
                  className="p-2.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 hover:text-white"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
