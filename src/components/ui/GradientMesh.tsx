interface GradientMeshProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function GradientMesh({ variant = 'dark', className = '' }: GradientMeshProps) {
  const isDark = variant === 'dark';

  if (!isDark) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(17,107,248,0.05) 0%, transparent 45%, rgba(33,188,238,0.04) 100%)',
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Base gradient — smooth diagonal sweep */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, #032272 0%, #0747A6 30%, #0A5CB8 55%, #0850AD 75%, #043A8E 100%)',
        }}
      />

      {/* Top-right glow — creates depth and directionality */}
      <div
        className="absolute -top-[20%] -right-[10%] w-[70%] h-[80%] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(17,107,248,0.3) 0%, rgba(9,88,179,0.1) 45%, transparent 70%)',
        }}
      />

      {/* Soft center-right cyan accent */}
      <div
        className="absolute top-[25%] right-[5%] w-[50%] h-[55%] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(33,188,238,0.1) 0%, rgba(25,148,225,0.04) 40%, transparent 65%)',
        }}
      />
    </div>
  );
}
