'use client';

import { useState, useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule,
  createCoordinates,
} from '@vnedyalk0v/react19-simple-maps';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';
import worldAtlasRaw from 'world-atlas/countries-110m.json';
import type { Topology } from 'topojson-specification';

// Cast JSON import to proper TopoJSON type (JSON imports infer `type: string` instead of `type: "Topology"`)
const worldAtlas = worldAtlasRaw as unknown as Topology;

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
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(hasProjects ? projects[0] : null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Slight east shift to center on project locations
  const mapCenter = useMemo(() => createCoordinates(20, 5), []);

  if (!hasProjects) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Map Panel - Full width, wider aspect ratio */}
      <div
        className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[var(--color-grey-100)] shadow-sm"
        role="application"
        aria-label="Interactive map of project locations"
      >
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{
            scale: 220,
            center: mapCenter,
          }}
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        >
          {/* Ocean background */}
          <Sphere stroke="#CBD5E1" strokeWidth={0.5} fill="#F0F4FA" />

          {/* Subtle graticule grid */}
          <Graticule stroke="#E2E8F0" strokeWidth={0.3} />

          {/* Country shapes */}
          <Geographies geography={worldAtlas}>
            {({ geographies }) =>
              geographies.map((geo, i) => (
                <Geography
                  key={(geo as { rsmKey?: string }).rsmKey ?? `geo-${i}`}
                  geography={geo}
                  fill="#E0E7F1"
                  stroke="#C8D0DC"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: '#D0DAE8' },
                    pressed: { outline: 'none', fill: '#D0DAE8' },
                  }}
                  tabIndex={-1}
                />
              ))
            }
          </Geographies>

          {/* Project Markers with always-visible labels */}
          {projects.map((project) => {
            const coords = createCoordinates(project.coordinates[1], project.coordinates[0]);
            const isSelected = selectedProject?.title === project.title;

            return (
              <Marker
                key={project.title}
                coordinates={coords}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer focus:outline-none"
                tabIndex={0}
                role="button"
                aria-label={`Select project: ${project.title} in ${project.location}`}
                aria-pressed={isSelected}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                {/* Transparent hit area for easier clicking */}
                <circle
                  r={24}
                  fill="transparent"
                  className="cursor-pointer"
                />

                {/* Outer ring for selected */}
                {isSelected && (
                  <circle
                    r={18}
                    fill="rgba(89, 218, 227, 0.12)"
                    stroke="none"
                    style={{
                      transition: prefersReducedMotion ? 'none' : 'all 300ms ease-out',
                    }}
                  />
                )}

                {/* Marker dot - significantly bigger */}
                <circle
                  r={isSelected ? 10 : 7}
                  fill={isSelected ? '#0098B5' : 'rgba(89, 218, 227, 0.85)'}
                  stroke={isSelected ? '#0958B3' : '#2585C4'}
                  strokeWidth={2}
                  style={{
                    transition: prefersReducedMotion ? 'none' : 'all 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />

                {/* Always-visible label - slightly larger */}
                <text
                  textAnchor="start"
                  x={14}
                  y={4}
                  className="pointer-events-none select-none"
                  style={{
                    fill: isSelected ? '#080145' : '#475569',
                    fontSize: '12px',
                    fontWeight: isSelected ? 700 : 500,
                    textShadow: '0 0 4px rgba(255,255,255,0.95), 0 0 8px rgba(255,255,255,0.7)',
                    transition: prefersReducedMotion ? 'none' : 'all 200ms ease',
                  }}
                >
                  {project.title}
                </text>
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      {/* Detail Panel — Below Map, Compact Layout */}
      {selectedProject && (
        <div
          key={selectedProject.title}
          className="w-full bg-white rounded-2xl border border-[var(--color-grey-100)] shadow-sm p-5 md:p-6"
          style={prefersReducedMotion ? undefined : {
            animation: 'detail-fade-in 400ms cubic-bezier(0.22, 1, 0.36, 1) both',
          }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Left Column: Title & Main Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-[var(--color-off-white)] text-[var(--color-cyan)] border border-[var(--color-grey-100)] uppercase tracking-wide">
                  {selectedProject.sector}
                </span>
                <span className="text-sm font-sans text-[var(--color-text-muted)] flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[var(--color-energy-mid)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedProject.location}
                </span>
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] leading-tight mb-3">
                {selectedProject.title}
              </h3>
              
              <p className="text-base font-sans text-[var(--color-text-body)] leading-relaxed max-w-3xl">
                {selectedProject.description}
              </p>
            </div>

            {/* Right Column: Highlight & Services */}
            <div className="w-full md:w-auto md:min-w-[320px] lg:min-w-[360px] flex flex-col gap-4">
              <div className="bg-[var(--color-off-white)] rounded-xl p-4 border border-[var(--color-grey-100)]">
                <h4 className="text-[10px] font-sans font-semibold text-[var(--color-cyan)] uppercase tracking-wide mb-2">
                  Key Highlight
                </h4>
                <p className="text-sm font-sans font-medium text-[var(--color-text-primary)] leading-snug">
                  {selectedProject.highlight}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-sans font-medium bg-white text-[var(--color-text-muted)] border border-[var(--color-grey-200)] shadow-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keyframe animations */}
      <style>{`
        @keyframes detail-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
