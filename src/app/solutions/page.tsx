import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { DotGrid } from "@/components/ui/DotGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Integrated solutions across the project lifecycle — commissioning, strategic consultancy, and global workforce mobilisation.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Solutions | Riviera Energy",
    description:
      "Integrated solutions across the project lifecycle — commissioning, strategic consultancy, and global workforce mobilisation.",
    url: "/solutions",
  },
};

const servicePillars = [
  {
    title: "Commissioning & Operational Readiness",
    description:
      "Defined technical capability aligned to specific project scopes. Combining technical capability with compliant, timely deployment across borders — ensuring the right expertise is integrated, accountable, and effective from day one.",
    tagline: "From completion to confident operation",
    href: "/solutions/commissioning",
    gradient: "from-[#0958B3] to-[#2585C4]",
    features: [
      "Pre-Commissioning & Commissioning",
      "Operational Readiness Assurance",
      "ICORA Framework",
      "Asset Integrity",
    ],
  },
  {
    title: "Strategic Project Consultancy",
    description:
      "Strategic project consultancy rooted in proven technical expertise and real-world execution experience. Through a global network of senior specialists operating across time zones, we enable cost-efficient decisions, rapid issue resolution, and continuous project momentum.",
    tagline: "Experience-led expertise supporting execution around the clock",
    href: "/solutions/consultancy",
    gradient: "from-[#2585C4] to-[#40B2D4]",
    features: [
      "Engineering Design Advisory",
      "Commissioning Strategy",
      "Readiness Assurance",
      "O&M Planning",
    ],
  },
  {
    title: "Global Workforce & Mobility Solutions",
    description:
      "Integrated delivery and compliant global mobilisation of specialist offshore capability for survey, ROV, inspection, and commissioning activities. Efficient, deployment-ready teams reducing downtime and enabling safe, cost-efficient execution.",
    tagline: "Delivering global capability, without disruption",
    href: "/solutions/workforce",
    gradient: "from-[#40B2D4] to-[#59DAE3]",
    features: [
      "Contract & Permanent Hiring",
      "Crew Management",
      "Payroll Services",
      "Global Mobilisation",
    ],
  },
] as const;

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden">
        <DotGrid
          size="6x6"
          variant="light"
          className="absolute top-28 right-8 md:right-20 hidden lg:block"
        />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                  Our Solutions
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  Integrated Solutions Across the Project Lifecycle
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  Riviera Energy combines deep industry expertise with a flexible,
                  solutions-driven approach, offering{" "}
                  <strong>scalable resourcing models</strong> and technically
                  robust support aligned to the evolving needs of the global
                  energy market.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button variant="primary" href="/contact">
                    Get in Touch
                  </Button>
                  <Button variant="secondary" href="/about">
                    About Us
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={300}>
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative">
                  <WaveBackground variant="dark" className="opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-display text-6xl font-extrabold energy-gradient-text">
                        3
                      </div>
                      <div className="mt-2 text-sm font-sans font-medium uppercase tracking-wide text-white/70">
                        Integrated Service Pillars
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <DotGrid
                size="4x4"
                variant="light"
                className="absolute -top-4 -right-4 hidden lg:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Service Pillars */}
      <SectionWrapper background="off-white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Our Services
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              What We Do
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 space-y-8">
          {servicePillars.map((pillar, i) => (
            <ScrollReveal key={pillar.href} delay={i * 100}>
              <Link
                href={pillar.href}
                className="group block rounded-xl bg-white border border-[var(--color-grey-100)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(8,1,69,0.12)]"
              >
                <div
                  className={`h-1 rounded-t-xl bg-gradient-to-r ${pillar.gradient}`}
                />

                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-7">
                      <h3 className="font-sans text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-base font-sans leading-relaxed text-[var(--color-text-body)]">
                        {pillar.description}
                      </p>
                      <p className="mt-4 text-sm font-sans italic text-[var(--color-text-muted)]">
                        &ldquo;{pillar.tagline}&rdquo;
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-sans font-semibold text-[var(--color-cyan)] group-hover:gap-3 transition-all duration-[var(--duration-base)]">
                        Learn More
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                    </div>

                    <div className="md:col-span-5">
                      <div className="flex flex-wrap gap-2">
                        {pillar.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-sans font-medium bg-[var(--color-off-white)] text-[var(--color-text-muted)] border border-[var(--color-grey-100)]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Our Approach */}
      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                How We Work
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Our Approach
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                Our approach is grounded in a core principle:{" "}
                <strong>asset condition cannot be assumed</strong>. We combine
                field-verified inspection with data-driven insight to reduce
                uncertainty, protect capital, and execute with confidence — from
                early-stage concept through to operational readiness and
                sustained performance.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <blockquote className="mt-8 border-l-4 border-[var(--color-cyan)] pl-6 py-2">
                <p className="text-base md:text-lg font-display italic text-[var(--color-navy)]">
                  &ldquo;Asset condition cannot be assumed; only field-verified
                  inspection reveals true risk, cost, and restart
                  viability.&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative">
                <WaveBackground variant="dark" className="opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-5xl font-extrabold energy-gradient-text">
                      10+
                    </div>
                    <div className="mt-2 text-sm font-sans font-medium uppercase tracking-wide text-white/70">
                      Years of Execution Excellence
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <DotGrid
              size="4x4"
              variant="light"
              className="absolute -top-4 -right-4 hidden lg:block"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Band */}
      <section className="relative py-14 sm:py-20 md:py-28 bg-[var(--color-indigo)] text-white overflow-hidden">
        <WaveBackground variant="dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Ready to discuss your next project?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
              Whether you need commissioning support, strategic advisory, or
              workforce solutions — our team is ready.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Contact Us
              </Button>
              <Button variant="ghost" href="/about">
                Learn About Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
