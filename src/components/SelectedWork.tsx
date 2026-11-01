import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, SlidersHorizontal, Info } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
  onOpenConfigHelp: () => void;
}

type FilterCategory = 'ALL' | 'SHORT-FORM' | 'LONG-FORM' | 'GAMING' | 'CREATIVE';

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProject,
  onOpenConfigHelp,
}) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterCategory>('ALL');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'ALL') return true;
    return p.category === filter;
  });

  return (
    <section id="work" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0066FF] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              {t('work.title')}
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl">
              {t('work.subtitle')}
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented Control) */}
          <div className="flex items-center gap-1.5 p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {(['ALL', 'SHORT-FORM', 'LONG-FORM', 'GAMING', 'CREATIVE'] as FilterCategory[]).map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
                    filter === cat
                      ? 'bg-[#0066FF] text-white shadow-md shadow-[#0066FF]/25 font-semibold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {cat === 'ALL'
                    ? t('work.filter.all')
                    : cat === 'SHORT-FORM'
                    ? t('work.filter.shortForm')
                    : cat === 'LONG-FORM'
                    ? t('work.filter.longForm')
                    : cat === 'GAMING'
                    ? t('work.filter.gaming')
                    : t('work.filter.creative')}
                </button>
              )
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* Portfolio Owner Architecture Notice (Clean & Reassuring) */}
        <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#0066FF]/10 text-[#0066FF] shrink-0">
              <Info className="w-4 h-4" />
            </div>
            <p className="text-xs text-neutral-400">
              <strong className="text-white font-medium">Modular Portfolio Architecture:</strong> Replace any placeholder with your YouTube embeds or MP4 clips in seconds via <code className="text-[#0066FF] font-mono">src/data/portfolioData.ts</code>.
            </p>
          </div>

          <button
            onClick={onOpenConfigHelp}
            className="text-xs font-mono text-[#0066FF] hover:underline whitespace-nowrap flex items-center gap-1 cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            View Replacement Guide →
          </button>
        </div>
      </div>
    </section>
  );
};
