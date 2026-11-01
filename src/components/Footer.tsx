import React from 'react';
import { CONTACT_CONFIG } from '../data/portfolioData';
import { ExternalLink, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenConfigHelp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConfigHelp }) => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050608] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Brand & Title */}
          <div className="space-y-2">
            <span className="font-display text-2xl font-bold tracking-tight text-white block">
              ileke<span className="text-[#0066FF]">ALTAY</span>
            </span>
            <p className="text-xs font-mono text-neutral-400">
              {t('footer.role')}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-mono font-medium text-neutral-400">
            <button
              onClick={() => scrollTo('home')}
              className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollTo('work')}
              className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
            >
              {t('nav.work')}
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
            <a
              href={CONTACT_CONFIG.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Telegram</span>
              <ExternalLink className="w-3 h-3 text-[#0066FF]" />
            </a>
            <span className="text-neutral-700">·</span>
            <a
              href={CONTACT_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#0066FF]" />
            </a>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Guide Trigger */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>{t('footer.copyright')}</p>

          <button
            onClick={onOpenConfigHelp}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-[#0066FF] transition-colors cursor-pointer"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{t('footer.configHelp')}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
