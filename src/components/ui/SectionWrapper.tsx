import type { ReactNode } from 'react';

type SectionBackground = 'white' | 'off-white' | 'dark';

interface SectionWrapperProps {
  background?: SectionBackground;
  className?: string;
  children: ReactNode;
  id?: string;
  wide?: boolean;
}

const bgStyles: Record<SectionBackground, string> = {
  white: 'bg-white',
  'off-white': 'bg-[var(--color-off-white)]',
  dark: 'bg-[var(--color-indigo)] text-white',
};

export function SectionWrapper({
  background = 'white',
  className = '',
  children,
  id,
  wide = false,
}: SectionWrapperProps) {
  const containerWidth = wide ? 'max-w-[1400px]' : 'max-w-7xl';

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-24 md:py-32 ${bgStyles[background]} ${className}`}
    >
      <div className={`mx-auto px-6 sm:px-8 lg:px-12 ${containerWidth}`}>
        {children}
      </div>
    </section>
  );
}
