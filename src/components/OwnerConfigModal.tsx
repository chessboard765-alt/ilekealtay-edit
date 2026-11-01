import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Sparkles, Layers, Link as LinkIcon } from 'lucide-react';

interface OwnerConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerConfigModal: React.FC<OwnerConfigModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleConfigSnippet = `// in src/data/portfolioData.ts:
{
  id: 'project-01',
  number: '01',
  title: 'MY APEX LEGENDS MONTAGE',
  category: 'GAMING',
  platform: 'YouTube & TikTok',
  aspectRatio: '16:9',
  shortDescription: 'High-energy kill montage synced to phonk audio.',
  fullDescription: 'Custom 3D camera tracker and beat drops...',
  editingApproach: ['Synced bass drops', 'Kinetic captions'],
  toolsUsed: ['Adobe Premiere Pro', 'After Effects'],
  timecode: '00:03:45:00',
  fps: '60 FPS',
  resolution: '4K UHD',
  // Simply paste your YouTube embed or MP4:
  embedUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
  thumbnailUrl: '/my-custom-thumbnail.jpg',
  isPlaceholder: false,
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleConfigSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0B0D12] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-2">
            <FileCode className="w-4 h-4 text-[#0066FF]" />
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Portfolio Owner: Replacement Architecture
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto text-xs font-mono text-neutral-300">
          <div className="space-y-2">
            <h4 className="font-display text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0066FF]" />
              Replacing Placeholders with 5–10 Real Projects
            </h4>
            <p className="text-neutral-400 leading-relaxed font-sans text-sm">
              Your portfolio is pre-structured with clean modular data so you never have to touch complex UI layouts. Everything is managed in a single central file:
            </p>
            <div className="p-2.5 rounded bg-black/60 border border-white/[0.08] text-[#0066FF] font-bold">
              src/data/portfolioData.ts
            </div>
          </div>

          {/* Quick Steps */}
          <div className="space-y-3 font-sans">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="w-5 h-5 rounded-full bg-[#0066FF]/20 text-[#0066FF] flex items-center justify-center font-mono font-bold text-xs shrink-0">1</span>
              <div>
                <strong className="text-white block text-xs">Embed YouTube / Vimeo or MP4</strong>
                <span className="text-xs text-neutral-400">Set <code className="text-[#0066FF] font-mono">embedUrl: "https://www.youtube.com/embed/..."</code> for any project.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="w-5 h-5 rounded-full bg-[#0066FF]/20 text-[#0066FF] flex items-center justify-center font-mono font-bold text-xs shrink-0">2</span>
              <div>
                <strong className="text-white block text-xs">Set Real Thumbnails & Titles</strong>
                <span className="text-xs text-neutral-400">Update <code className="text-[#0066FF] font-mono">title</code>, <code className="text-[#0066FF] font-mono">thumbnailUrl</code>, and set <code className="text-[#0066FF] font-mono">isPlaceholder: false</code>.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="w-5 h-5 rounded-full bg-[#0066FF]/20 text-[#0066FF] flex items-center justify-center font-mono font-bold text-xs shrink-0">3</span>
              <div>
                <strong className="text-white block text-xs">Update Telegram & LinkedIn Handles</strong>
                <span className="text-xs text-neutral-400">In <code className="text-[#0066FF] font-mono">CONTACT_CONFIG</code>, replace the placeholder handles with your real usernames.</span>
              </div>
            </div>
          </div>

          {/* Code Snippet Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-neutral-400">
              <span>Example Project Entry</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-[#0066FF] hover:underline cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Snippet'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-black border border-white/[0.08] text-[11px] text-neutral-300 overflow-x-auto leading-relaxed">
              {sampleConfigSnippet}
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-white/[0.08] bg-black/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#0066FF] hover:bg-[#1E75FF] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
