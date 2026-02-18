'use client';

import { useRef, useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function StatCounter({ end, suffix = '', prefix = '', label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(el);

          const duration = 1500;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            setAnimatedCount(Math.round(easedProgress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, hasAnimated, prefersReducedMotion]);

  const displayCount = prefersReducedMotion ? end : animatedCount;

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl font-extrabold leading-none energy-gradient-text">
        {prefix}{displayCount}{suffix}
      </div>
      <div className="mt-2 text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-text-on-dark-muted)]">
        {label}
      </div>
    </div>
  );
}
