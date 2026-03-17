'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

export function VideoBackground() {
  const reducedMotion = usePrefersReducedMotion();
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleLoadedData = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {/* Fallback image — always rendered for LCP and as poster fallback */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Video — hidden on mobile (<768px) and when reduced motion is preferred */}
      {!reducedMotion && (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-bg.jpg"
          onLoadedData={handleLoadedData}
          className={`video-bg absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-[var(--ease-flow)] hidden md:block ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/jadeclover.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
