import React from 'react';
import { SERVICES } from '../data/portfolioData';
import { Sparkles, ArrowRight, Check, Flame, Film } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0066FF] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('services.kicker')}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {t('services.title')}
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl">
            {t('services.subtitle')}
          </p>
        </div>

        {/* 2 Focused Primary Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="relative rounded-2xl p-8 sm:p-10 bg-[#0A0C10] border border-white/[0.08] hover:border-[#0066FF]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_15px_35px_-10px_rgba(0,102,255,0.2)]"
            >
              {/* Card Top */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#0066FF] bg-[#0066FF]/10 px-3 py-1 rounded border border-[#0066FF]/30">
                    SERVICE {service.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-neutral-400 group-hover:text-white group-hover:bg-[#0066FF] transition-colors">
                    {idx === 0 ? <Flame className="w-5 h-5" /> : <Film className="w-5 h-5" />}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#0066FF] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm font-medium text-neutral-300">
                    {service.summary}
                  </p>
                </div>

                {/* Platforms List (Unboxed clean metadata) */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block">
                    Optimized Platforms:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                    {service.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.07] text-white/90"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed pt-2">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="pt-8 mt-8 border-t border-white/[0.06]">
                <button
                  onClick={() => onSelectService(service.name)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-white/[0.04] hover:bg-[#0066FF] text-white text-xs font-semibold tracking-wider uppercase border border-white/[0.1] hover:border-[#0066FF] transition-all duration-200 group-hover:bg-[#0066FF] cursor-pointer"
                >
                  <span>Book {service.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
