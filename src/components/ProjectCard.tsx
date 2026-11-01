import React from 'react';
import { Project } from '../data/portfolioData';
import { ArrowUpRight, Play, Film, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const { t } = useLanguage();

  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative rounded-2xl overflow-hidden bg-[#0A0C10] border border-white/[0.08] hover:border-[#0066FF]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,102,255,0.25)] cursor-pointer flex flex-col"
    >
      {/* Thumbnail & Video Preview Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
        {project.thumbnailUrl ? (
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                '/src/assets/images/abstract_timeline_motion_1793523275669.jpg';
            }}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-75 group-hover:opacity-95"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0c0e14] via-[#090b10] to-[#050608]">
            <Film className="w-12 h-12 text-white/20" />
          </div>
        )}

        {/* Gradient Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-black/30 to-black/20" />

        {/* Top Badges & Numbering */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
              {project.number}
            </span>
            <span className="text-[11px] font-mono text-[#0066FF] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-[#0066FF]/30 font-semibold uppercase">
              {project.category}
            </span>
            {project.embedUrl && (
              <span className="text-[10px] font-mono text-white bg-red-600/90 backdrop-blur-md px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                YOUTUBE
              </span>
            )}
          </div>

          <span className="text-[10px] font-mono text-neutral-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
            <Clock className="w-2.5 h-2.5 text-[#0066FF]" />
            {project.timecode}
          </span>
        </div>

        {/* Centered Play / Watch Callout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#0066FF]/90 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0066FF] shadow-lg shadow-[#0066FF]/40 mb-3">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
          
          {project.isPlaceholder ? (
            <div className="space-y-1 transition-opacity duration-300">
              <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-white/90 bg-black/70 px-2.5 py-0.5 rounded border border-white/10 uppercase">
                {t('work.card.comingSoon')}
              </span>
              <p className="text-[10px] font-mono text-neutral-400">
                {t('work.card.placeholderNotice')}
              </p>
            </div>
          ) : (
            <div className="space-y-1 transition-opacity duration-300">
              <span className="inline-block text-[11px] font-mono font-bold tracking-widest text-white bg-[#0066FF] px-2.5 py-0.5 rounded shadow-lg shadow-[#0066FF]/40 uppercase">
                WATCH VIDEO
              </span>
              <p className="text-[10px] font-mono text-neutral-300">
                Play YouTube Cut
              </p>
            </div>
          )}
        </div>

        {/* Bottom subtle specs strip */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-neutral-400">
          <span>{project.platform}</span>
          <span className="text-white/80">{project.resolution}</span>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-lg font-bold text-white group-hover:text-[#0066FF] transition-colors line-clamp-1">
              {project.title}
            </h3>
            <div className="p-1.5 rounded bg-white/[0.04] text-neutral-400 group-hover:text-white group-hover:bg-[#0066FF] transition-colors shrink-0">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Editorial Metadata (Unboxed text with dots, NO pills) */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <div className="flex items-center gap-1.5 text-neutral-300">
            <Sparkles className="w-3 h-3 text-[#0066FF]" />
            <span>{project.toolsUsed.slice(0, 2).join(' · ')}</span>
          </div>
          <span className="text-[#0066FF] group-hover:underline font-medium">
            {t('work.card.viewDetails')} →
          </span>
        </div>
      </div>
    </div>
  );
};
