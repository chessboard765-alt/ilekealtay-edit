import React from 'react';
import { Sparkles, Terminal, Activity, Layers, Scissors } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Manifesto */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0066FF] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('about.kicker')}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {t('about.title')}
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              <p className="text-white font-medium">
                {t('about.p1')}
              </p>
              <p className="text-neutral-400">
                {t('about.p2')}
              </p>
              <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-[#0066FF] text-white font-display text-lg sm:text-xl font-bold tracking-tight">
                "{t('about.p3')}"
              </div>
            </div>

            {/* Editing Philosophy Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#0066FF] font-semibold">
                  <Scissors className="w-3.5 h-3.5" />
                  <span>ZERO DEAD AIR</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Ruthless trimming of lulls, breathing space calibrated to comedic or dramatic impact.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#0066FF] font-semibold">
                  <Activity className="w-3.5 h-3.5" />
                  <span>RETENTION HOOKS</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Opening 3-second architectures that prevent bounce rates across short and long form.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#0066FF] font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>LAYERED AUDIO</span>
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  Multi-track soundscaping where sound effects drive attention rather than just background music.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Faceless Abstract Editorial Brand Composition */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#0A0C10] border border-white/[0.1] p-8 space-y-6 shadow-2xl">
              {/* Abstract Waveform Artwork Backdrop */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-black/60 border border-white/[0.08]">
                <img
                  src="/src/assets/images/abstract_soundwave_dark_1793523275552.jpg"
                  alt="Abstract Soundwave Visual"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-transparent to-black/30" />
                <div className="absolute top-3 left-3 text-[10px] font-mono text-[#0066FF] bg-black/60 px-2 py-0.5 rounded border border-white/10 uppercase">
                  FREQUENCY RHYTHM
                </div>
              </div>

              {/* Minimal Brand Signature Lockup */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-white">
                    ileke<span className="text-[#0066FF]">ALTAY</span>
                  </span>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    PARADIGM 2026
                  </span>
                </div>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  CREATIVE VIDEO EDITOR · DIGITAL NATIVE
                </p>
              </div>

              {/* Editing DNA Specs */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.06] text-xs font-mono">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-500">Core Focus:</span>
                  <span className="text-white">Shorts, Reels, YouTube Long-Form</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-500">Pacing Style:</span>
                  <span className="text-white">Retention-Engineered Rhythm</span>
                </div>
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="text-neutral-500">Client Profile:</span>
                  <span className="text-[#0066FF]">Creators, Streamers, Digital Personalities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
