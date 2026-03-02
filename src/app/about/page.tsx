import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Riviera Energy is an engineering and asset integrity consultancy delivering high-confidence project outcomes across the full energy asset lifecycle.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Riviera Energy",
    description:
      "Riviera Energy is an engineering and asset integrity consultancy delivering high-confidence project outcomes across the full energy asset lifecycle.",
    url: "/about",
  },
};

const team = [
  {
    name: "Jason Antunovich",
    role: "Managing Director",
    bio: "Jason brings more than 30 years of experience across design, system analysis, commissioning, and construction, supported by extensive project and line management experience. He has worked on major international projects both on site and in senior corporate roles, collaborating with Tier 1 operators such as Shell, Exxon, and Woodside, and provides strong leadership in change management, people development, and high-performing team delivery.",
    initials: "JA",
  },
  {
    name: "Julianna Iris Tan",
    role: "Managing Partner",
    bio: "Julianna brings more than 20 years of experience in the energy industry, specialising in upstream offshore installation and EPCI project management. She has worked on major international projects across Oil & Gas and Renewables, collaborating with leading operators and contractors such as TotalEnergies, TechnipFMC, and Saipem.",
    initials: "JT",
  },
  {
    name: "Aisyah Adam",
    role: "Operations & People Lead",
    bio: "Aisyah brings an extensive background in logistics and education, with a strong focus on the welfare and development of our people. As Operations & People Lead, she manages team mobilisation and rotations, placing safety, health, and individual wellbeing at the centre of operations.",
    initials: "AA",
  },
] as const;

const regions = [
  { name: "Singapore", label: "HQ", x: 50, y: 32 },
  { name: "Americas", label: null, x: 8, y: 26 },
  { name: "Europe", label: null, x: 28, y: 14 },
  { name: "Middle East", label: null, x: 34, y: 30 },
  { name: "Asia", label: null, x: 60, y: 18 },
  { name: "Africa", label: null, x: 30, y: 48 },
  { name: "Australia", label: null, x: 72, y: 50 },
] as const;

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden">
        <div className="absolute top-28 right-8 md:right-20 w-48 h-48 rounded-full bg-[#116BF8] opacity-[0.06] blur-3xl hidden lg:block" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                  Who We Are
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  Integrated Solutions Across the Project Lifecycle
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  Riviera Energy is an Energy Industry consultancy providing project consulting services,
                  specialist technical workforce resources, and integrated full-package project solutions
                  to clients across the <strong>oil &amp; gas, renewables, power generation, and marine energy</strong> sectors.
                  With 3 decades of experience, we support complex projects by delivering highly qualified
                  engineering professionals and tailored consultancy services across the full project lifecycle.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="mt-4 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-muted)]">
                  Our capability spans early-stage concept and design through execution and operational support,
                  enabling clients to mobilise efficiently, manage risk, and achieve consistent project outcomes.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <p className="mt-6 text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
                  Established in Singapore since 2014
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={300}>
                <div className="aspect-[3/4] rounded-xl overflow-hidden relative lg:-mr-8">
                  <Image
                    src="/images/platform-ocean.jpg"
                    alt="Offshore platform in calm ocean waters"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-indigo)]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white">
                      <div className="font-display text-5xl font-extrabold energy-gradient-text-on-dark">3</div>
                      <div className="mt-1 text-sm font-sans font-medium text-white/70 uppercase tracking-wide">
                        Decades of Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper background="off-white">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              What Drives Us
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Mission &amp; Vision
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-12">
            {/* Mission */}
            <ScrollReveal delay={200}>
              <div className="relative">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-[var(--color-cyan)] mb-4">
                  Our Mission
                </h3>
                <p className="text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  To redefine project delivery and facility start-up through governed, data-driven innovation that accelerates execution and unlocks commercial value.
                </p>
              </div>
            </ScrollReveal>

            {/* Separator */}
            <ScrollReveal delay={250}>
              <div className="w-12 h-0.5 bg-[var(--color-cyan)]/20 mx-auto rounded-full" />
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal delay={300}>
              <div className="relative">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.15em] text-[var(--color-cyan)] mb-4">
                  Our Vision
                </h3>
                <p className="text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  To set the new standard for how complex projects are delivered — faster, smarter, and with improved outcome certainty.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Leadership
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Our Team
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 100} className="h-full">
              <div className="h-full flex flex-col rounded-xl bg-white border border-[var(--color-grey-100)] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(8,1,69,0.1)]">
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] relative flex items-center justify-center">
                  <span className="font-display text-5xl font-bold text-white/20">
                    {member.initials}
                  </span>
                </div>
                <div className="flex-grow p-8">
                  <h3 className="font-sans text-xl font-bold text-[var(--color-text-primary)]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-sans font-semibold text-[var(--color-cyan)]">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                    {member.bio}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Global Reach */}
      <section className="relative py-24 md:py-32 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)]">
                Where We Operate
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                A Global Reach
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-4 text-lg font-display italic text-[var(--color-text-on-dark-muted)]">
                Mobilising expertise worldwide, wherever projects demand.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-16 relative mx-auto max-w-4xl">
              <svg viewBox="0 0 100 64" className="w-full h-auto" aria-label="World map showing Riviera Energy operational regions">
                <rect width="100" height="64" fill="none" />

                {/* Connection lines from Singapore HQ to each region */}
                {regions.filter(r => !r.label).map((region) => (
                  <line
                    key={`line-${region.name}`}
                    x1={50}
                    y1={32}
                    x2={region.x}
                    y2={region.y}
                    stroke="rgba(89,218,227,0.12)"
                    strokeWidth="0.25"
                    strokeDasharray="1 0.8"
                  />
                ))}

                {/* HQ pulse ring */}
                <circle cx={50} cy={32} r="4" fill="none" stroke="rgba(89,218,227,0.08)" strokeWidth="0.2" />
                <circle cx={50} cy={32} r="8" fill="none" stroke="rgba(89,218,227,0.05)" strokeWidth="0.15" />

                {/* Region markers */}
                {regions.map((region) => {
                  const isHQ = region.label === "HQ";
                  return (
                    <g key={region.name}>
                      {/* Outer glow */}
                      <circle cx={region.x} cy={region.y} r={isHQ ? 2 : 1.2} fill="var(--color-energy-end)" opacity={isHQ ? 0.2 : 0.15} />
                      {/* Dot */}
                      <circle cx={region.x} cy={region.y} r={isHQ ? 1 : 0.6} fill="var(--color-energy-end)" />

                      {/* HQ badge */}
                      {isHQ && (
                        <>
                          <rect x={region.x - 3} y={region.y - 5} width="6" height="2.5" rx="0.5" fill="var(--color-amber)" />
                          <text x={region.x} y={region.y - 3.2} textAnchor="middle" fill="white" fontSize="1.5" fontWeight="700">
                            HQ
                          </text>
                        </>
                      )}

                      {/* Label */}
                      <text
                        x={region.x}
                        y={region.y + (isHQ ? 4 : 3)}
                        textAnchor="middle"
                        fill={isHQ ? 'rgba(255,255,255,0.95)' : 'rgba(148,163,184,0.9)'}
                        fontSize={isHQ ? 2 : 1.8}
                        fontWeight={isHQ ? 600 : 500}
                      >
                        {region.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {regions.map((region) => (
                <div key={region.name} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-energy-end)]" />
                  <span className="text-sm font-sans text-[var(--color-text-on-dark-muted)]">
                    {region.name}
                    {region.label && <span className="ml-1 text-xs font-semibold text-[var(--color-amber)]">({region.label})</span>}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Partner with us on your next project
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-muted)]">
              From commissioning support to workforce mobilisation, our team brings decades of experience to every engagement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Get in Touch
              </Button>
              <Button variant="secondary" href="/#what-we-do">
                View Our Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </main>
  );
}
