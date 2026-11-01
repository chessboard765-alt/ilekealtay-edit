import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenWork: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWork, onOpenContact }) => {
  const { language, setLanguage, t, languages } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#070709]/90 backdrop-blur-md border-b border-white/[0.07] shadow-xl'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (ilekeALTAY) */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-decoration-none"
        >
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#0066FF]">
            ileke<span className="text-[#0066FF] group-hover:text-white transition-colors">ALTAY</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] inline-block opacity-80 group-hover:scale-125 transition-transform" />
        </a>

        {/* Zone 2: Navigation Links (Single-Line, Minimal) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider text-neutral-400">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 uppercase tracking-widest cursor-pointer"
          >
            {t('nav.home')}
          </button>
          <button
            onClick={() => {
              scrollToSection('work');
              onOpenWork();
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 uppercase tracking-widest cursor-pointer"
          >
            {t('nav.work')}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 uppercase tracking-widest cursor-pointer"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 uppercase tracking-widest cursor-pointer"
          >
            {t('nav.contact')}
          </button>
        </nav>

        {/* Zone 3: Language Switcher & Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-neutral-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-md transition-colors cursor-pointer"
              aria-label="Change language"
              aria-expanded={langDropdownOpen}
            >
              <Globe className="w-3.5 h-3.5 text-[#0066FF]" />
              <span className="uppercase">{language}</span>
              <ChevronDown className="w-3 h-3 text-neutral-400" />
            </button>

            {langDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-36 bg-[#0E0F14] border border-white/[0.12] rounded-lg shadow-2xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150"
                onMouseLeave={() => setLangDropdownOpen(false)}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                      language === lang.code
                        ? 'bg-[#0066FF]/20 text-[#0066FF] font-semibold'
                        : 'text-neutral-300 hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    <span>{lang.label}</span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase">{lang.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <button
            onClick={() => {
              scrollToSection('contact');
              onOpenContact();
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#0066FF] hover:bg-[#1E75FF] rounded-md transition-all duration-200 electric-glow-subtle hover:electric-glow whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{t('nav.startProject')}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white bg-white/[0.04] border border-white/[0.08] rounded-md transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0f] border-b border-white/[0.1] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-sm font-semibold tracking-wider text-neutral-300 hover:text-white py-1 uppercase"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-left text-sm font-semibold tracking-wider text-neutral-300 hover:text-white py-1 uppercase"
            >
              {t('nav.work')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-sm font-semibold tracking-wider text-neutral-300 hover:text-white py-1 uppercase"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-sm font-semibold tracking-wider text-neutral-300 hover:text-white py-1 uppercase"
            >
              {t('nav.contact')}
            </button>
          </nav>

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs text-neutral-400">Language:</span>
            <div className="flex items-center gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-2 py-1 text-xs font-mono rounded ${
                    language === lang.code
                      ? 'bg-[#0066FF] text-white font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              scrollToSection('contact');
              onOpenContact();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#0066FF] hover:bg-[#1E75FF] rounded-md transition-colors"
          >
            <span>{t('nav.startProject')}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
