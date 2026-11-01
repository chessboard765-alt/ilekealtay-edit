import React, { useState, useEffect } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Layers,
  Wrench,
  Send,
  ExternalLink,
  Smartphone,
  Tv,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onCommission: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onCommission,
}) => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [verticalAspect, setVerticalAspect] = useState(false);

  // Sync aspect ratio when project changes
  useEffect(() => {
    if (project) {
      setVerticalAspect(project.aspectRatio === '9:16');
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [project]);

  // Keyboard navigation & lock body scroll
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  // Video simulator timer when playing
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => (prev >= 30 ? 0 : prev + 0.5));
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!project) return null;

  // Find next project in the list
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#090B10] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-white bg-white/[0.06] px-2.5 py-1 rounded border border-white/10">
              {project.number}
            </span>
            <span className="text-xs font-mono font-semibold text-[#0066FF] tracking-wider uppercase">
              {project.category}
            </span>
            <span className="text-xs text-neutral-500 hidden sm:inline">·</span>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              {project.platform}
            </span>
            {project.embedUrl && (
              <span className="text-[10px] font-mono font-bold text-white bg-red-600 px-2 py-0.5 rounded uppercase tracking-wider">
                YOUTUBE PLAYER
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Aspect Switcher if 9:16 Shorts */}
            {project.aspectRatio === '9:16' && (
              <div className="hidden sm:flex items-center gap-1 p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono">
                <button
                  onClick={() => setVerticalAspect(true)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    verticalAspect ? 'bg-[#0066FF] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Vertical 9:16 Shorts View"
                >
                  <Smartphone className="w-3 h-3" />
                  <span>9:16</span>
                </button>
                <button
                  onClick={() => setVerticalAspect(false)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                    !verticalAspect ? 'bg-[#0066FF] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Cinematic 16:9 Wide View"
                >
                  <Tv className="w-3 h-3" />
                  <span>16:9</span>
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label={t('modal.close')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Main Video Player Container */}
          <div
            className={`relative rounded-xl overflow-hidden bg-black border border-white/[0.1] transition-all duration-300 flex flex-col justify-between group shadow-2xl ${
              verticalAspect && project.aspectRatio === '9:16'
                ? 'max-w-[380px] mx-auto aspect-[9/16] h-[540px]'
                : 'w-full aspect-video'
            }`}
          >
            {/* Embed or Simulated Cinematic Player */}
            {project.embedUrl ? (
              <div className="relative w-full h-full bg-black">
                <iframe
                  src={project.embedUrl}
                  title={project.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative w-full h-full flex flex-col justify-between">
                {/* Visual Backdrop */}
                <img
                  src={project.thumbnailUrl || '/src/assets/images/abstract_timeline_motion_1793523275669.jpg'}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                    isPlaying ? 'opacity-85' : 'opacity-65'
                  }`}
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />

                {/* Top Video Specs Bar */}
                <div className="relative z-10 p-4 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
                    <span>PREVIEW SIMULATOR · {project.resolution}</span>
                  </div>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                    {project.fps}
                  </span>
                </div>

                {/* Big Center Play / Pause Button */}
                <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-[#0066FF] hover:bg-[#1E75FF] text-white flex items-center justify-center shadow-2xl shadow-[#0066FF]/50 transition-all transform hover:scale-110 cursor-pointer"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="w-7 h-7" />
                    ) : (
                      <Play className="w-7 h-7 fill-current ml-1" />
                    )}
                  </button>

                  <p className="mt-4 text-xs font-mono text-neutral-300 bg-black/70 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                    {t('modal.playerNotice')}
                  </p>
                </div>

                {/* Bottom Custom Playback Bar */}
                <div className="relative z-10 p-4 bg-gradient-to-t from-black via-black/80 to-transparent space-y-2">
                  {/* Progress Scrubber */}
                  <div
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const percent = clickX / rect.width;
                      setCurrentTime(percent * 30);
                    }}
                    className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative group/bar"
                  >
                    <div
                      className="h-full bg-[#0066FF] relative"
                      style={{ width: `${(currentTime / 30) * 100}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-neutral-300">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => setCurrentTime(0)}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="hover:text-white transition-colors cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <span className="text-[11px] tabular-nums text-[#0066FF]">
                        00:00:{String(Math.floor(currentTime)).padStart(2, '0')}:15 / {project.timecode}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-neutral-500 uppercase">Aspect {project.aspectRatio}</span>
                      <Maximize2 className="w-3.5 h-3.5 text-neutral-400" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Title & Metadata Grid */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-neutral-400 mt-1">
                  {project.shortDescription}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-red-600/15 hover:bg-red-600/25 text-white text-xs font-mono font-medium border border-red-500/30 transition-colors"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                  </a>
                )}

                <button
                  onClick={() => onCommission(project.title)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0066FF] hover:bg-[#1E75FF] text-white text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 shadow-lg shadow-[#0066FF]/20 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t('modal.commission')}</span>
                </button>
              </div>
            </div>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono">
              <div>
                <span className="text-neutral-500 block uppercase text-[10px]">{t('modal.role')}</span>
                <span className="text-white font-medium">Lead Video Editor</span>
              </div>
              <div>
                <span className="text-neutral-500 block uppercase text-[10px]">{t('modal.year')}</span>
                <span className="text-white font-medium">2026 Production</span>
              </div>
              <div>
                <span className="text-neutral-500 block uppercase text-[10px]">{t('modal.category')}</span>
                <span className="text-[#0066FF] font-semibold">{project.category}</span>
              </div>
              <div>
                <span className="text-neutral-500 block uppercase text-[10px]">{t('modal.specs')}</span>
                <span className="text-white font-medium">{project.fps} · {project.resolution}</span>
              </div>
            </div>

            {/* Deep Breakdown: Editing Approach & Hook Architecture */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0066FF] font-semibold uppercase">
                <Sparkles className="w-4 h-4" />
                <span>{t('modal.editingApproach')}</span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.fullDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.editingApproach.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300 leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Used Section */}
            <div className="space-y-3 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 font-semibold uppercase">
                <Wrench className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>{t('modal.toolsUsed')}</span>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-300">
                {project.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-white/90"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer: Next Project CTA */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-neutral-500">
              PROJECT {project.number} OF {PROJECTS.length}
            </span>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="group inline-flex items-center gap-2 text-xs font-mono text-white hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              <span>{t('modal.nextProject')}: {nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
