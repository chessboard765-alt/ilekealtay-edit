import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, Sparkles, Layers, Sliders } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const InteractiveTimelineHero: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(38); // 0 to 100%
  const [fps] = useState(60);
  const [activeClipIndex, setActiveClipIndex] = useState(2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Clips on the Video Track
  const videoClips = [
    { id: 1, name: 'HOOK 0–1.5s', start: 0, end: 15, color: 'bg-blue-600/80', tag: 'RETENTION HOOK' },
    { id: 2, name: 'PATTERN INTERRUPT', start: 15, end: 32, color: 'bg-blue-500/70', tag: 'PACING SHIFT' },
    { id: 3, name: 'CLIMAX & BEAT SYNC', start: 32, end: 60, color: 'bg-indigo-600/80', tag: 'HIGH ENERGY' },
    { id: 4, name: 'AUDIO PEAK & IMPACT', start: 60, end: 82, color: 'bg-sky-600/80', tag: 'SFX DROP' },
    { id: 5, name: 'SEAMLESS LOOP OUT', start: 82, end: 100, color: 'bg-blue-700/80', tag: 'INFINITE LOOP' },
  ];

  // Motion graphics overlay track
  const overlayClips = [
    { id: 101, name: 'KINETIC TEXT', start: 5, end: 28, color: 'bg-sky-400/30 border border-sky-400/50' },
    { id: 102, name: 'ELECTRIC GLOW ACCENT', start: 35, end: 55, color: 'bg-blue-400/30 border border-blue-400/50' },
    { id: 103, name: 'CAMERA SHAKE SFX', start: 68, end: 90, color: 'bg-cyan-400/30 border border-cyan-400/50' },
  ];

  // Calculate formatted timecode based on progress (00:00:30:00 total timeline)
  const totalFrames = Math.floor((progress / 100) * 1800); // 30 seconds at 60fps = 1800 frames
  const minutes = Math.floor(totalFrames / (60 * 60));
  const seconds = Math.floor((totalFrames % (60 * 60)) / 60);
  const frames = totalFrames % 60;
  const timecode = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(frames).padStart(2, '0')}`;

  // Auto-play animation
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      if (isPlaying) {
        const delta = (currentTime - lastTime) / 1000;
        setProgress((prev) => {
          const next = prev + delta * 8; // speed
          return next >= 100 ? 0 : next;
        });
      }
      lastTime = currentTime;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying]);

  // Determine active clip
  useEffect(() => {
    const active = videoClips.findIndex((clip) => progress >= clip.start && progress <= clip.end);
    if (active !== -1) setActiveClipIndex(active);
  }, [progress]);

  // Render dynamic waveform on HTML canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const barCount = 70;
    const barWidth = width / barCount - 1.5;

    for (let i = 0; i < barCount; i++) {
      const x = i * (barWidth + 1.5);
      const distFromPlayhead = Math.abs((i / barCount) * 100 - progress);
      const isNearPlayhead = distFromPlayhead < 6;
      
      // Calculate waveform height
      const seed = Math.sin(i * 0.4) * 0.5 + Math.cos(i * 0.8) * 0.3 + 0.5;
      const amp = isNearPlayhead ? 1.4 : 1.0;
      const barHeight = Math.max(4, seed * height * 0.8 * amp);

      const y = (height - barHeight) / 2;

      if ((i / barCount) * 100 <= progress) {
        // Played audio bar
        ctx.fillStyle = isNearPlayhead ? '#38BDF8' : '#0066FF';
      } else {
        // Future audio bar
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      }

      ctx.fillRect(x, y, barWidth, barHeight);
    }
  }, [progress]);

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setProgress(newProgress);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0A0C10] shadow-2xl transition-all duration-300 hover:border-[#0066FF]/50">
      {/* Background Abstract Glow Image Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="/src/assets/images/abstract_timeline_motion_1793523275669.jpg"
          alt="Abstract Motion Graphic Texture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/80 to-transparent" />
      </div>

      {/* Editor Deck Header */}
      <div className="relative z-10 px-5 py-3.5 border-b border-white/[0.08] bg-black/40 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-white">
              SEQ_01 // HIGH_RETENTION_MASTER
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-500 hidden sm:inline">|</span>
          <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
            4K UHD · 60 FPS · RECT 9:16 / 16:9
          </span>
        </div>

        {/* Timecode and Transport Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-black/60 px-3 py-1 rounded border border-white/[0.08]">
            <span className="text-[10px] font-mono text-neutral-500 uppercase">TC</span>
            <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-widest tabular-nums text-[#0066FF]">
              {timecode}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded bg-white/[0.08] hover:bg-[#0066FF] text-white transition-colors cursor-pointer"
              title={isPlaying ? 'Pause Timeline' : 'Play Timeline'}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>
            <button
              onClick={() => setProgress(0)}
              className="p-1.5 rounded bg-white/[0.04] hover:bg-white/[0.1] text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Reset Timeline to 0"
              aria-label="Reset to start"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interactive Timeline Workspace */}
      <div className="relative z-10 p-5 space-y-4">
        {/* Dynamic Context Display: Current Active Edit Hook */}
        <div className="flex items-center justify-between text-xs font-mono py-1.5 px-3 rounded bg-white/[0.03] border border-white/[0.06]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
            <span className="text-neutral-400">ACTIVE TIMELINE EVENT:</span>
            <span className="text-white font-semibold">
              {videoClips[activeClipIndex]?.tag || 'PACING SHIFT'}
            </span>
          </div>
          <span className="text-[11px] text-neutral-500 hidden sm:inline">
            {Math.round(progress)}% TIMELINE POSITION
          </span>
        </div>

        {/* Tracks Container with Clickable Scrubber */}
        <div
          onClick={handleTimelineClick}
          className="relative pt-6 pb-2 cursor-pointer select-none group"
        >
          {/* Timeline Time Ruler */}
          <div className="flex justify-between text-[10px] font-mono text-neutral-500 mb-2 px-1">
            <span>00:00:00</span>
            <span className="hidden sm:inline">00:00:07:30</span>
            <span>00:00:15:00</span>
            <span className="hidden sm:inline">00:00:22:30</span>
            <span>00:00:30:00</span>
          </div>

          {/* Vertical Playhead Cursor */}
          <div
            className="absolute top-0 bottom-0 z-30 pointer-events-none transition-[left] duration-75 ease-out"
            style={{ left: `${progress}%` }}
          >
            {/* Playhead Head Marker */}
            <div className="relative -left-2.5 top-0 w-5 h-4 flex items-center justify-center">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#0066FF] drop-shadow-[0_0_8px_#0066FF]" />
            </div>
            {/* Playhead Line */}
            <div className="w-[1.5px] h-full bg-[#0066FF] shadow-[0_0_8px_#0066FF]" />
          </div>

          {/* Track 1: V2 (Overlays / VFX / Kinetic Motion) */}
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-1">
              <Layers className="w-3 h-3 text-neutral-500" />
              <span className="text-[10px] font-mono font-medium text-neutral-400">
                V2 · KINETIC MOTION & SFX OVERLAYS
              </span>
            </div>
            <div className="h-7 w-full bg-black/40 rounded border border-white/[0.05] relative overflow-hidden flex items-center">
              {overlayClips.map((clip) => (
                <div
                  key={clip.id}
                  className={`absolute h-5 rounded px-2 flex items-center text-[9px] font-mono text-white/90 font-medium ${clip.color} transition-opacity`}
                  style={{
                    left: `${clip.start}%`,
                    width: `${clip.end - clip.start}%`,
                  }}
                >
                  <span className="truncate">{clip.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Track 2: V1 (Primary Cuts & Hooks) */}
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-1">
              <Sliders className="w-3 h-3 text-neutral-500" />
              <span className="text-[10px] font-mono font-medium text-neutral-400">
                V1 · PACING & RETENTION CUTS
              </span>
            </div>
            <div className="h-10 w-full bg-black/40 rounded border border-white/[0.05] relative overflow-hidden flex items-center p-0.5 gap-1">
              {videoClips.map((clip, idx) => {
                const isActive = activeClipIndex === idx;
                return (
                  <div
                    key={clip.id}
                    className={`h-full rounded flex flex-col justify-center px-2 transition-all duration-200 ${clip.color} ${
                      isActive ? 'ring-1 ring-white/80 shadow-lg' : 'opacity-85'
                    }`}
                    style={{ width: `${clip.end - clip.start}%` }}
                  >
                    <span className="text-[9px] font-mono font-bold text-white truncate">
                      {clip.name}
                    </span>
                    <span className="text-[8px] font-mono text-white/70 truncate hidden sm:inline">
                      {clip.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Track 3: A1 (Audio Master & Sound Design Waveform) */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Volume2 className="w-3 h-3 text-neutral-500" />
              <span className="text-[10px] font-mono font-medium text-neutral-400">
                A1 · SOUND DESIGN & AUDIO RETENTION MASTER
              </span>
            </div>
            <div className="h-10 w-full bg-black/50 rounded border border-white/[0.05] overflow-hidden flex items-center px-2">
              <canvas
                ref={canvasRef}
                width={800}
                height={40}
                className="w-full h-full object-fill pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Timeline Footer Info */}
        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-white/[0.06]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
            {t('timeline.scrubHint')}
          </span>
          <span className="text-white/80 font-medium">
            HIGH-VELOCITY EDITING ENGINE
          </span>
        </div>
      </div>
    </div>
  );
};
