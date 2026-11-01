import React, { useState } from 'react';
import { CONTACT_CONFIG } from '../data/portfolioData';
import {
  Send,
  Sparkles,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  Linkedin,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  initialProjectType?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProjectType = '' }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(initialProjectType || '');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    // Simulate prompt delivery & store in local storage
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        const inquiries = JSON.parse(localStorage.getItem('ilekealtay_inquiries') || '[]');
        inquiries.push({
          name,
          email,
          projectType,
          message,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('ilekealtay_inquiries', JSON.stringify(inquiries));
      } catch {
        // ignore
      }
    }, 800);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleDirectMailto = () => {
    const subject = encodeURIComponent(`Video Editing Inquiry - ${projectType || 'Creative Project'}`);
    const body = encodeURIComponent(`Hi ilekeALTAY,\n\nName: ${name || '[Your Name]'}\nProject: ${projectType || 'Video Editing'}\n\n${message || 'I would like to discuss video editing for my channel.'}`);
    window.location.href = `mailto:${CONTACT_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0066FF] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('contact.kicker')}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white whitespace-pre-line">
            {t('contact.title')}
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* 2-Column Split: Form on Left, Direct Contact Channels on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0A0C10] border border-white/[0.08] p-8 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#0066FF]/20 text-[#0066FF] flex items-center justify-center mx-auto border border-[#0066FF]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    {t('contact.form.success')}
                  </p>
                </div>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={handleDirectMailto}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono text-white transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-[#0066FF]" />
                    <span>Open in Email App</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0066FF] text-xs font-mono text-white transition-colors cursor-pointer"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400 block uppercase">
                      {t('contact.form.name')} <span className="text-[#0066FF]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/[0.1] focus:border-[#0066FF] focus:outline-none text-sm text-white placeholder-neutral-600 transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400 block uppercase">
                      {t('contact.form.email')} <span className="text-[#0066FF]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/[0.1] focus:border-[#0066FF] focus:outline-none text-sm text-white placeholder-neutral-600 transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type Field */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400 block uppercase">
                    {t('contact.form.projectType')}
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/[0.1] focus:border-[#0066FF] focus:outline-none text-sm text-white transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0A0C10] text-neutral-500">
                      {t('contact.form.projectTypeDefault')}
                    </option>
                    <option value="Short-Form Content" className="bg-[#0A0C10]">
                      {t('contact.form.typeShortForm')}
                    </option>
                    <option value="Long-Form YouTube Video" className="bg-[#0A0C10]">
                      {t('contact.form.typeLongForm')}
                    </option>
                    <option value="Gaming Montage / Stream Cut" className="bg-[#0A0C10]">
                      {t('contact.form.typeGaming')}
                    </option>
                    <option value="Monthly Channel Retainer" className="bg-[#0A0C10]">
                      {t('contact.form.typeRetainer')}
                    </option>
                    <option value="Custom Creative Project" className="bg-[#0A0C10]">
                      {t('contact.form.typeOther')}
                    </option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400 block uppercase">
                    {t('contact.form.message')} <span className="text-[#0066FF]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/[0.1] focus:border-[#0066FF] focus:outline-none text-sm text-white placeholder-neutral-600 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg bg-[#0066FF] hover:bg-[#1E75FF] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 electric-glow cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Options (Telegram & LinkedIn) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0C10] border border-white/[0.08] space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#0066FF] uppercase tracking-wider block">
                  {t('contact.directOptions')}
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  Fast Channels
                </h3>
                <p className="text-xs text-neutral-400">
                  Prefer direct messaging? Reach out through the channels below.
                </p>
              </div>

              {/* Channel 1: Telegram */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-display text-sm font-bold text-white block">
                        Telegram
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {CONTACT_CONFIG.telegramHandle}
                      </span>
                    </div>
                  </div>

                  <a
                    href={CONTACT_CONFIG.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-white/[0.04] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
                    title="Open Telegram"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-[11px] font-mono">
                  <span className="text-neutral-500">Quick Response</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(CONTACT_CONFIG.telegramHandle, 'telegram')}
                    className="flex items-center gap-1 text-[#0066FF] hover:underline cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedItem === 'telegram' ? 'Copied!' : 'Copy Handle'}</span>
                  </button>
                </div>
              </div>

              {/* Channel 2: LinkedIn */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#0066FF]/10 text-[#0066FF]">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-display text-sm font-bold text-white block">
                        LinkedIn
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        {CONTACT_CONFIG.linkedinHandle}
                      </span>
                    </div>
                  </div>

                  <a
                    href={CONTACT_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-white/[0.04] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors"
                    title="Open LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-[11px] font-mono">
                  <span className="text-neutral-500">Professional Network</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(CONTACT_CONFIG.linkedinHandle, 'linkedin')}
                    className="flex items-center gap-1 text-[#0066FF] hover:underline cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedItem === 'linkedin' ? 'Copied!' : 'Copy Profile'}</span>
                  </button>
                </div>
              </div>

              {/* Turnaround notice */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1 text-xs font-mono">
                <span className="text-neutral-500 block uppercase text-[10px]">Turnaround Benchmark</span>
                <span className="text-white font-medium">{CONTACT_CONFIG.turnaroundTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
