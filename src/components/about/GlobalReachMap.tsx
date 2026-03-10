'use client';

import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./GlobalReachMapInner'), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

function MapSkeleton() {
  return (
    <div className="w-full h-[300px] md:h-[520px] lg:h-[580px] rounded-xl bg-[#e8ecf0] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-[rgba(5,38,152,0.15)] border-t-[var(--color-energy-start)] animate-spin" />
        <span className="text-sm font-sans text-[var(--color-text-muted)]">
          Loading map…
        </span>
      </div>
    </div>
  );
}

export function GlobalReachMap() {
  return (
    <div className="w-full h-[300px] md:h-[520px] lg:h-[580px] rounded-xl overflow-hidden border border-[rgba(17,107,248,0.12)]">
      <MapComponent />
    </div>
  );
}
