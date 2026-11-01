import React from 'react';
import { ArrowRight, Radio } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AvailableBannerProps {
  onStartProject: () => void;
}

export const AvailableBanner: React.FC<AvailableBannerProps> = ({ onStartProject }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Graphic Flare */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF]/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#0E1118] to-[#08090D] border border-white/[0.12] hover:border-[#0066FF]/60 transition-all duration-300 text-center space-y-6 shadow-2xl relative">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-xs font-mono font-medium text-[#0066FF]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span className="tracking-wider uppercase">{t('callout.title')}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t('callout.subtext')}
          </h2>

          <div className="pt-2">
            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] hover:bg-[#1E75FF] text-white text-sm font-semibold tracking-wider uppercase transition-all duration-200 electric-glow cursor-pointer transform hover:scale-105"
            >
              <span>{t('callout.cta')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
