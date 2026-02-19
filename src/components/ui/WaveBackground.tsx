interface WaveBackgroundProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const wavePaths = [
  'M0 180 C120 160, 240 220, 360 180 S600 120, 720 180 S960 220, 1080 180 S1320 140, 1440 180',
  'M0 200 C160 170, 280 240, 440 200 S640 150, 800 200 S1000 240, 1160 200 S1340 170, 1440 200',
  'M0 220 C100 250, 300 190, 480 220 S680 260, 840 220 S1020 180, 1200 220 S1360 250, 1440 220',
  'M0 160 C180 130, 320 200, 520 160 S720 120, 880 160 S1060 210, 1240 160 S1380 130, 1440 160',
  'M0 240 C140 210, 260 270, 400 240 S560 200, 720 240 S920 270, 1100 240 S1300 210, 1440 240',
  'M0 190 C200 220, 340 160, 500 190 S700 230, 860 190 S1040 150, 1220 190 S1400 220, 1440 190',
  'M0 210 C130 240, 310 180, 460 210 S660 250, 820 210 S980 170, 1140 210 S1350 240, 1440 210',
];

const strandColors = [
  '#0958B3',
  '#1A6DBD',
  '#2585C4',
  '#3199CE',
  '#40B2D4',
  '#4CC5DA',
  '#59DAE3',
];

export function WaveBackground({ variant = 'dark', className = '' }: WaveBackgroundProps) {
  const baseOpacity = variant === 'dark' ? 0.1 : 0.08;
  const opacityRange = variant === 'dark' ? 0.1 : 0.07;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="wave-svg absolute inset-0 h-full w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {wavePaths.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke={strandColors[i]}
            strokeWidth={1 + (i % 2) * 0.5}
            strokeLinecap="round"
            opacity={baseOpacity + (i / wavePaths.length) * opacityRange}
            style={{
              strokeDasharray: '12 8',
              animation: `wave-drift-${i} ${8 + i * 1.5}s var(--ease-wave) infinite alternate`,
            }}
          />
        ))}
      </svg>

      <style>{`
        ${wavePaths.map((_, i) => `
          @keyframes wave-drift-${i} {
            0% {
              stroke-dashoffset: 0;
              transform: translateX(${-15 + i * 3}px) translateY(${i % 2 === 0 ? -6 : 6}px);
            }
            100% {
              stroke-dashoffset: ${-80 - i * 12};
              transform: translateX(${15 - i * 3}px) translateY(${i % 2 === 0 ? 6 : -6}px);
            }
          }
        `).join('')}

        @media (prefers-reduced-motion: reduce) {
          ${wavePaths.map((_, i) => `
            @keyframes wave-drift-${i} {
              0%, 100% {
                stroke-dashoffset: 0;
                transform: none;
              }
            }
          `).join('')}
        }
      `}</style>
    </div>
  );
}
