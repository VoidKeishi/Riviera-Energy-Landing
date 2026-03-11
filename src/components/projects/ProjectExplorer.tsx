'use client';

import { useState, useCallback } from 'react';
import { ProjectMap } from './ProjectMap';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

// Type definitions
export interface ProjectData {
  title: string;
  location: string;
  sector: string;
  coordinates: readonly [number, number]; // [lat, lng]
  services: readonly string[];
  description: string;
  highlight: string;
}

interface ProjectExplorerProps {
  projects: readonly ProjectData[];
}

export function ProjectExplorer({ projects }: ProjectExplorerProps) {
  const hasProjects = projects.length > 0;
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    hasProjects ? projects[0] : null
  );
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleSelectProject = useCallback((project: ProjectData) => {
    setSelectedProject(project);
  }, []);

  if (!hasProjects) {
    return null;
  }

  return (
    <div
      className="relative rounded-xl overflow-hidden border border-[var(--color-grey-100)] shadow-[0_4px_24px_-4px_rgba(8,1,69,0.08)] h-[440px] md:h-[500px] lg:h-[560px] bg-[#e8ecf0]"
      role="application"
      aria-label="Interactive map of project locations — use legend to view project details"
    >
      {/* Full map background */}
      <div className="absolute inset-0">
        <ProjectMap
          projects={projects}
          selectedProject={selectedProject}
          onSelectProject={handleSelectProject}
        />
      </div>

      {/* Overlaid UI — all embedded inside the map */}
      <div className="absolute inset-0 pointer-events-none z-[1000]">

        {/* Bottom-left: Project detail card */}
        {selectedProject && (
          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 pointer-events-auto max-w-sm md:max-w-md">
            <div
              key={selectedProject.title}
              className="bg-white/92 backdrop-blur-md rounded-lg border border-[var(--color-grey-100)] shadow-lg p-3 md:p-4"
              style={prefersReducedMotion ? undefined : {
                animation: 'proj-detail-slide-up 350ms cubic-bezier(0.22, 1, 0.36, 1) both',
              }}
            >
              {/* Header row: sector + location */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-sans font-semibold bg-[var(--color-cyan)]/10 text-[var(--color-cyan)] uppercase tracking-wide">
                  {selectedProject.sector}
                </span>
                <span className="text-[11px] md:text-xs font-sans text-[var(--color-text-muted)] flex items-center gap-1">
                  <svg className="w-3 h-3 text-[var(--color-energy-mid)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedProject.location}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-base md:text-lg font-bold text-[var(--color-text-primary)] leading-tight mb-1.5">
                {selectedProject.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm font-sans text-[var(--color-text-body)] leading-relaxed mb-2 line-clamp-2">
                {selectedProject.description}
              </p>

              {/* Highlight + services */}
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-1.5">
                  <span className="text-[9px] font-sans font-semibold text-[var(--color-cyan)] uppercase tracking-wide whitespace-nowrap pt-0.5">
                    Highlight
                  </span>
                  <span className="text-[11px] md:text-xs font-sans font-medium text-[var(--color-text-primary)] leading-snug">
                    {selectedProject.highlight}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {selectedProject.services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] md:text-[10px] font-sans font-medium bg-[var(--color-off-white)] text-[var(--color-text-muted)] border border-[var(--color-grey-200)]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom-right: Project legend selector */}
        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 pointer-events-auto">
          <div className="bg-white/90 backdrop-blur-md rounded-lg border border-[var(--color-grey-100)] shadow-lg overflow-hidden">
            {/* Legend header */}
            <div className="px-3 py-1.5 border-b border-[var(--color-grey-100)] bg-[var(--color-off-white)]/60">
              <span className="text-[9px] font-sans font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Projects
              </span>
            </div>
            {/* Legend items */}
            <div className="py-1">
              {projects.map((project) => {
                const isSelected = selectedProject?.title === project.title;
                return (
                  <button
                    key={project.title}
                    onClick={() => handleSelectProject(project)}
                    className={`
                      w-full flex items-center gap-2 px-3 py-1.5 text-left text-[11px] md:text-xs font-sans
                      transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]
                      focus:outline-none focus:bg-[var(--color-cyan)]/5
                      ${isSelected
                        ? 'bg-[var(--color-cyan)]/8 text-[var(--color-cyan)] font-semibold'
                        : 'text-[var(--color-text-body)] hover:bg-[var(--color-off-white)] hover:text-[var(--color-text-primary)]'
                      }
                    `}
                    aria-pressed={isSelected}
                  >
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                        isSelected
                          ? 'bg-[var(--color-cyan)] shadow-[0_0_0_2px_rgba(0,152,181,0.2)]'
                          : 'bg-[var(--color-energy-end)]/60'
                      }`}
                    />
                    <span className="truncate max-w-[180px] md:max-w-[200px]">{project.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes proj-detail-slide-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
