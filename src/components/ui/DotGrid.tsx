interface DotGridProps {
  size?: '4x4' | '6x6';
  variant?: 'light' | 'dark';
  className?: string;
}

export function DotGrid({ size = '4x4', variant = 'light', className = '' }: DotGridProps) {
  const count = size === '4x4' ? 4 : 6;
  const gap = 12;
  const radius = 1.75;
  const svgSize = count * gap;
  const color = variant === 'light' ? 'var(--color-navy)' : 'var(--color-cyan)';
  const opacity = variant === 'light' ? 0.18 : 0.25;

  const dots: Array<{ cx: number; cy: number }> = [];
  for (let row = 0; row < count; row++) {
    for (let col = 0; col < count; col++) {
      dots.push({
        cx: col * gap + radius + 2,
        cy: row * gap + radius + 2,
      });
    }
  }

  return (
    <svg
      width={svgSize + 4}
      height={svgSize + 4}
      viewBox={`0 0 ${svgSize + 4} ${svgSize + 4}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={radius}
          fill={color}
          opacity={opacity}
        />
      ))}
    </svg>
  );
}
