import React from 'react';
import { TOOLKIT_ITEMS } from '../data/portfolioData';
import { Sparkles, Layers, Wand2, Image, PenTool, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Toolkit: React.FC = () => {
  const { t } = useLanguage();

  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Adobe Premiere Pro':
        return <Layers className="w-5 h-5 text-[#0066FF]" />;
      case 'Adobe After Effects':
        return <Wand2 className="w-5 h-5 text-indigo-400" />;
      case 'Adobe Photoshop':
        return <Image className="w-5 h-5 text-sky-400" />;
      case 'Adobe Illustrator':
        return <PenTool className="w-5 h-5 text-amber-400" />;
      case 'CapCut':
        return <Smartphone className="w-5 h-5 text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-[#0066FF]" />;
    }
  };

  const getToolMonogram = (name: string) => {
    switch (name) {
      case 'Adobe Premiere Pro':
        return 'Pr';
      case 'Adobe After Effects':
        return 'Ae';
      case 'Adobe Photoshop':
        return 'Ps';
      case 'Adobe Illustrator':
        return 'Ai';
      case 'CapCut':
        return 'Cc';
      default:
        return 'Ed';
    }
  };

  return (
    <section id="toolkit" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0066FF] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('toolkit.kicker')}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              {t('toolkit.title')}
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl">
              {t('toolkit.subtitle')}
            </p>
          </div>
        </div>

        {/* 5-Tool Sleek Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {TOOLKIT_ITEMS.map((tool) => (
            <div
              key={tool.name}
              className="p-6 rounded-xl bg-[#0A0C10] border border-white/[0.08] hover:border-[#0066FF]/50 transition-all duration-300 space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Subtle Software Badge */}
                  <div className="w-10 h-10 rounded-lg bg-black/60 border border-white/[0.1] flex items-center justify-center font-mono font-bold text-sm text-white group-hover:border-[#0066FF]/60 transition-colors">
                    {getToolMonogram(tool.name)}
                  </div>
                  {getToolIcon(tool.name)}
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-[#0066FF] transition-colors">
                    {tool.name}
                  </h3>
                  <span className="text-[11px] font-mono text-neutral-400 block">
                    {tool.category}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono">
                <span className="text-neutral-500">{tool.tag}</span>
                <span className="text-[#0066FF] font-medium">{tool.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
