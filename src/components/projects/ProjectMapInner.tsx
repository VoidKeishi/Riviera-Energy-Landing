'use client';

import { MapContainer, TileLayer, Marker, ZoomControl, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useCallback, useRef } from 'react';
import type { ProjectData } from './ProjectExplorer';

// ─── Props ──────────────────────────────────────────────────────

interface ProjectMapInnerProps {
  projects: readonly ProjectData[];
  selectedProject: ProjectData | null;
  onSelectProject: (project: ProjectData) => void;
}

// ─── Custom Marker Icons ────────────────────────────────────────

function createProjectIcon(isSelected: boolean): L.DivIcon {
  const cls = isSelected ? 'proj-marker proj-marker--selected' : 'proj-marker';
  return L.divIcon({
    className: `leaflet-marker-project${isSelected ? '-selected' : ''}`,
    html: `
      <div class="${cls}">
        ${isSelected ? '<span class="proj-marker__ring"></span>' : '<span class="proj-marker__glow"></span>'}
        <span class="proj-marker__dot${isSelected ? ' proj-marker__dot--selected' : ''}"></span>
      </div>
    `,
    iconSize: isSelected ? [44, 44] : [32, 32],
    iconAnchor: isSelected ? [22, 22] : [16, 16],
    popupAnchor: [0, isSelected ? -24 : -18],
  });
}

// ─── Map Controller ─────────────────────────────────────────────

interface MapControllerProps {
  projects: readonly ProjectData[];
  selectedProject: ProjectData | null;
}

function MapController({ projects, selectedProject }: MapControllerProps) {
  const map = useMap();
  const initialFitDone = useRef(false);

  useEffect(() => {
    function updateMinZoom() {
      const containerWidth = map.getContainer().offsetWidth;
      const safeMin = Math.ceil(Math.log2(containerWidth / 256));
      map.setMinZoom(safeMin);
      if (map.getZoom() < safeMin) {
        map.setZoom(safeMin, { animate: false });
      }
    }

    updateMinZoom();

    // Fit all project markers on first load
    if (!initialFitDone.current && projects.length > 0) {
      const bounds = L.latLngBounds(
        projects.map((p) => [p.coordinates[0], p.coordinates[1]] as [number, number])
      );
      map.fitBounds(bounds, { padding: [60, 80], maxZoom: 4, animate: false });
      initialFitDone.current = true;
    }

    map.on('resize', updateMinZoom);
    return () => {
      map.off('resize', updateMinZoom);
    };
  }, [map, projects]);

  // Fly to selected project
  useEffect(() => {
    if (selectedProject) {
      const coords: [number, number] = [
        selectedProject.coordinates[0],
        selectedProject.coordinates[1],
      ];
      const currentZoom = map.getZoom();
      map.flyTo(coords, Math.max(currentZoom, 4), {
        duration: 1.0,
        easeLinearity: 0.25,
      });
    }
  }, [selectedProject, map]);

  return null;
}

// ─── Map Component ──────────────────────────────────────────────

export default function ProjectMapInner({
  projects,
  selectedProject,
  onSelectProject,
}: ProjectMapInnerProps) {
  const handleMarkerClick = useCallback(
    (project: ProjectData) => {
      onSelectProject(project);
    },
    [onSelectProject]
  );

  return (
    <MapContainer
      center={[15, 40]}
      zoom={3}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      style={{ width: '100%', height: '100%', background: '#e8ecf0' }}
      className="proj-global-map"
      minZoom={2}
      maxZoom={8}
      maxBounds={[
        [-65, -170],
        [78, 190],
      ]}
      maxBoundsViscosity={1.0}
    >
      {/* Light tile layer — CartoDB Positron (no labels) for clean light look */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />

      {/* Zoom controls — positioned top-right to avoid chip bar overlap */}
      <ZoomControl position="topright" />

      <MapController projects={projects} selectedProject={selectedProject} />

      {/* Project markers */}
      {projects.map((project) => {
        const isSelected = selectedProject?.title === project.title;
        const position: [number, number] = [
          project.coordinates[0],
          project.coordinates[1],
        ];

        return (
          <Marker
            key={project.title}
            position={position}
            icon={createProjectIcon(isSelected)}
            eventHandlers={{
              click: () => handleMarkerClick(project),
            }}
          />
        );
      })}
    </MapContainer>
  );
}
