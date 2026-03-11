'use client';

import dynamic from 'next/dynamic';
import type { ProjectData } from './ProjectExplorer';

interface ProjectMapProps {
  projects: readonly ProjectData[];
  selectedProject: ProjectData | null;
  onSelectProject: (project: ProjectData) => void;
}

const MapComponent = dynamic(() => import('./ProjectMapInner'), {
  ssr: false,
  loading: () => <ProjectMapSkeleton />,
});

function ProjectMapSkeleton() {
  return (
    <div className="w-full h-full bg-[#e8ecf0] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[rgba(9,88,179,0.12)] border-t-[var(--color-energy-start)] animate-spin" />
        <span className="text-sm font-sans text-[var(--color-text-muted)]">
          Loading project map…
        </span>
      </div>
    </div>
  );
}

export function ProjectMap({ projects, selectedProject, onSelectProject }: ProjectMapProps) {
  return (
    <div className="w-full h-full">
      <MapComponent
        projects={projects}
        selectedProject={selectedProject}
        onSelectProject={onSelectProject}
      />
    </div>
  );
}
