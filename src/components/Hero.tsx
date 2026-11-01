import React from 'react';
import { ArrowRight, Film, Radio, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InteractiveTimelineHero } from './InteractiveTimelineHero';

interface HeroProps {
  onViewWork: () => void;
  onWorkTogether: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onWorkTogether }) => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Radial Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066FF]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Availability Indicator (Refined, no pulsing candy dots) */}
        <div className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono font-medium text-neutral-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
          </span>
          <span className="tracking-wider uppercase">{t('hero.availability')}</span>
        </div>

        {/* 2-Column Split: Left Typographic Core, Right Abstract Timeline Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & Conversion CTAs */}
          <div className="lg:col-span-6 space-y-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              I EDIT CONTENT <br className="hidden sm:inline" />
              THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#70a6ff] to-[#0066FF]">KEEPS PEOPLE WATCHING.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-xl">
              {t('hero.subtext')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onViewWork}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#0066FF] hover:bg-[#1E75FF] rounded-lg transition-all duration-200 electric-glow-subtle hover:electric-glow cursor-pointer whitespace-nowrap"
              >
                <span>{t('hero.cta.work')}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onWorkTogether}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] hover:border-white/[0.25] rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>{t('hero.cta.contact')}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#0066FF]" />
              </button>
            </div>

            {/* Clean Spec Indicators (No Pill Sandwich, clean unboxed metadata) */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Film className="w-3.5 h-3.5 text-[#0066FF]" />
                Short-Form & YouTube
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Radio className="w-3.5 h-3.5 text-[#0066FF]" />
                Stream & Gaming Cuts
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
                Retention Hooks
              </span>
            </div>
          </div>

          {/* Right Column: Faceless Abstract Visual Hero Element */}
          <div className="lg:col-span-6">
            <InteractiveTimelineHero />
          </div>
        </div>
      </div>
    </section>
  );
};
