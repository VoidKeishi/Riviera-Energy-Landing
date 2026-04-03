import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GradientMesh } from '@/components/ui/GradientMesh';
import { RecruitmentTimeline } from '@/components/workforce/RecruitmentTimeline';

export const metadata: Metadata = {
  title: 'Global Workforce & Mobility Solutions',
  description:
    'Integrated delivery and compliant global mobilisation of specialist offshore capability for survey, ROV, inspection, and commissioning activities.',
  alternates: {
    canonical: '/solutions/workforce',
  },
  openGraph: {
    title: 'Global Workforce & Mobility Solutions | Riviera Energy',
    description:
      'Integrated delivery and compliant global mobilisation of specialist offshore capability for survey, ROV, inspection, and commissioning activities.',
    url: 'https://www.riviera-energy.co/solutions/workforce',
  },
};

const services = [
  {
    title: 'Contract Hiring',
    description:
      'Site-ready contract candidates sourced globally, matched by skill set, readiness, and experience — mobilised to your project faster.',
  },
  {
    title: 'Permanent Hiring',
    description:
      'Sourcing, selecting, and shortlisting high-performing permanent staff across the energy and construction sectors.',
  },
  {
    title: 'Payroll Services',
    description:
      'Managed payroll ensuring your teams are paid reliably, accurately, and on time across all jurisdictions.',
  },
  {
    title: 'Integrated Crew Management',
    description:
      'End-to-end personnel management with integrated systems, quick turnaround times, and reduced operational expenses.',
  },
  {
    title: 'Travel & Logistics',
    description:
      'Full travel and logistics execution including visa coordination, flights, accommodations, and workforce wellbeing - enabling seamless, compliant global deployment through trusted partners.',
  },
  {
    title: 'Diversity Hiring',
    description:
      'Hiring with diversity at the forefront to increase perspective, cultural awareness, and quality of collaboration.',
  },
] as const;

export default function WorkforcePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden bg-[var(--color-indigo)] pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24">
        <GradientMesh variant="dark" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vessel-aerial.jpg"
            alt="Aerial view of offshore vessel"
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
              Global Workforce &amp;<br className="hidden sm:block" /> Mobility Solutions
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 text-base sm:text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)] max-w-3xl mx-auto">
              Delivering global capability, without disruption. Deployment-ready teams reducing downtime, protecting schedule, and enabling safe, cost-efficient execution.
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

      {/* Overview + Services — merged into one light section */}
      <SectionWrapper background="off-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Workforce Solutions
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              The People for Project Success
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
              A full-service resourcing and recruitment partner with access to <span className="font-semibold">~100,000+ pre-vetted specialists</span> across six industry sectors. Rigorous screening, full regulatory compliance, and 24/7 operational support — from onboarding through to demobilisation.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="h-full flex flex-col rounded-xl border border-[var(--color-grey-100)] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(8,1,69,0.12)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 energy-gradient" />
                <h3 className="font-sans text-base font-bold text-[var(--color-text-primary)] leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2 flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Recruitment Journey — interactive */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)]">
                Our Process
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Talent Mobilisation Framework
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <RecruitmentTimeline />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — light section to break dark-on-dark with footer */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Looking for workforce solutions?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
              Whether you need contract specialists, permanent hires, or full crew management
              <br />
              — our team is ready.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Contact Our Team
              </Button>
              <Button variant="secondary" href="/#solutions">
                All Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </main>
  );
}
