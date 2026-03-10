import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GradientMesh } from '@/components/ui/GradientMesh';

export const metadata: Metadata = {
  title: 'Strategic Project Consultancy | Riviera Energy',
  description:
    'Execution-led advisory services for complex energy projects — from early-stage concept and design through execution and operational support.',
};

export default function ConsultancyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-[var(--color-indigo)] pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24">
        <GradientMesh variant="dark" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/refinery-complex.jpg"
            alt="Industrial refinery complex"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-indigo)]/80 via-[var(--color-indigo)]/60 to-[var(--color-indigo)]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)] mb-6">
              Our Solutions
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white max-w-5xl mx-auto">
              Strategic Project Consultancy
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 text-base sm:text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)] max-w-3xl mx-auto">
              Strategic project consultancy rooted in proven technical expertise and real-world execution experience. Through a global network of senior specialists operating across time zones, we enable cost-efficient decisions, rapid issue resolution, and continuous project momentum.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Discuss Your Requirements
              </Button>
              <Button variant="ghost" href="/#solutions">
                All Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
