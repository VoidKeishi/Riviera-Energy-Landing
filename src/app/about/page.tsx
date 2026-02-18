import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { DotGrid } from "@/components/ui/DotGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Riviera Energy is an engineering and asset integrity consultancy delivering high-confidence project outcomes across the full energy asset lifecycle.",
};

const values = [
  {
    title: "Safety",
    description: "Our culture has the safety and wellbeing of people at its core.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Simplicity",
    description: "We seek efficient and sustainable solutions for our customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Trust",
    description: "We are open, honest and can be relied upon to deliver.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
      </svg>
    ),
  },
  {
    title: "Respect",
    description: "We recognise that we are all different and the importance of diversity, collaboration, integrity and culture is key to our success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Accountability",
    description: "We commit to deliver what's expected of us and ensure everyone understands their responsibilities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "Performance, quality and leadership are integral to our success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
] as const;

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
  { name: "Singapore", label: "HQ", x: 73, y: 52 },
  { name: "USA", label: null, x: 18, y: 38 },
  { name: "Europe", label: null, x: 48, y: 30 },
  { name: "Middle East", label: null, x: 58, y: 42 },
  { name: "Asia", label: null, x: 70, y: 40 },
  { name: "Africa", label: null, x: 50, y: 55 },
  { name: "Australia", label: null, x: 80, y: 68 },
] as const;

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden">
        <DotGrid size="6x6" variant="light" className="absolute top-28 right-8 md:right-20 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                  About Us
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  About Riviera Energy
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  Riviera Energy is an engineering and asset integrity consultancy delivering
                  high-confidence project outcomes across the full energy asset lifecycle.
                  We specialise in <strong>greenfield, brownfield, and late-life assets</strong> where
                  technical certainty, execution discipline, and informed decision-making are critical.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="mt-4 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  We support complex projects from concept through execution, restart, and operational readiness,
                  combining strategic project consultancy, multidisciplinary engineering expertise, and
                  deployment-ready technical teams. Our experience spans new developments, mothballed and
                  preserved facilities, and long-idle hydrocarbon assets across the U.S., Middle East, and Australasia.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <blockquote className="mt-8 border-l-4 border-[var(--color-cyan)] pl-6 py-2">
                  <p className="text-base md:text-lg font-display italic text-[var(--color-navy)]">
                    &ldquo;Asset condition cannot be assumed; only field-verified inspection reveals true risk, cost, and restart viability.&rdquo;
                  </p>
                </blockquote>
              </ScrollReveal>
              <ScrollReveal delay={500}>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/20 px-4 py-2">
                  <span className="text-sm font-sans font-semibold text-[var(--color-amber)]">
                    Established since 2014
                  </span>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={300}>
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative lg:-mr-8">
                  <WaveBackground variant="dark" className="opacity-50" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white">
                      <div className="font-display text-5xl font-extrabold energy-gradient-text">50+</div>
                      <div className="mt-1 text-sm font-sans font-medium text-white/70 uppercase tracking-wide">
                        Years Combined Leadership Experience
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <SectionWrapper background="off-white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              What Drives Us
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Our Values
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 100} className="h-full">
              <div className="h-full flex flex-col rounded-xl bg-white border border-[var(--color-grey-100)] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(8,1,69,0.1)]">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-off-white)] text-[var(--color-cyan)]">
                  {value.icon}
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-[var(--color-text-primary)]">
                  {value.title}
                </h3>
                <p className="mt-2 flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
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
        <WaveBackground variant="dark" />
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
              <svg viewBox="0 0 100 60" className="w-full h-auto" aria-label="World map showing Riviera Energy operational regions">
                <rect width="100" height="60" fill="none" />
                <ellipse cx="50" cy="32" rx="45" ry="22" fill="none" stroke="rgba(89,218,227,0.15)" strokeWidth="0.3" />
                <ellipse cx="50" cy="32" rx="35" ry="17" fill="none" stroke="rgba(89,218,227,0.1)" strokeWidth="0.3" />
                <ellipse cx="50" cy="32" rx="25" ry="12" fill="none" stroke="rgba(89,218,227,0.08)" strokeWidth="0.3" />

                {regions.map((region) => (
                  <g key={region.name}>
                    <circle cx={region.x} cy={region.y} r="1.2" fill="var(--color-energy-end)" opacity="0.3" />
                    <circle cx={region.x} cy={region.y} r="0.6" fill="var(--color-energy-end)" />
                    {region.label && (
                      <rect x={region.x - 3} y={region.y - 4} width="6" height="2.5" rx="0.5" fill="var(--color-amber)" />
                    )}
                    {region.label && (
                      <text x={region.x} y={region.y - 2.2} textAnchor="middle" fill="white" fontSize="1.5" fontWeight="700">
                        {region.label}
                      </text>
                    )}
                    <text x={region.x} y={region.y + 3} textAnchor="middle" fill="rgba(148,163,184,0.9)" fontSize="1.8" fontWeight="500">
                      {region.name}
                    </text>
                  </g>
                ))}
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
              From commissioning support to workforce mobilisation — our team brings decades of experience to every engagement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Get in Touch
              </Button>
              <Button variant="secondary" href="/solutions">
                View Our Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </main>
  );
}
