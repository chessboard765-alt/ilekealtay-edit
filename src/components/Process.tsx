import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0066FF] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('process.kicker')}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {t('process.title')}
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl">
            {t('process.subtitle')}
          </p>
        </div>

        {/* 4-Step Process: Horizontal Flow on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative rounded-2xl p-6 sm:p-7 bg-[#0A0C10] border border-white/[0.08] hover:border-[#0066FF]/60 transition-all duration-300 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                {/* Step Number & Connector Indicator */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-extrabold text-[#0066FF] group-hover:scale-105 transition-transform">
                    {step.step}
                  </span>
                  {idx < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-neutral-600 hidden lg:block group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all" />
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#0066FF] transition-colors">
                    {idx === 0
                      ? t('process.step1.title')
                      : idx === 1
                      ? t('process.step2.title')
                      : idx === 2
                      ? t('process.step3.title')
                      : t('process.step4.title')}
                  </h3>
                  <p className="text-xs font-medium text-neutral-300">
                    {idx === 0
                      ? t('process.step1.desc')
                      : idx === 1
                      ? t('process.step2.desc')
                      : idx === 2
                      ? t('process.step3.desc')
                      : t('process.step4.desc')}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.05]">
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
