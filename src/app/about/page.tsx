import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { Button } from "@/components/ui/Button";
import { GlobalReachMap } from "@/components/about/GlobalReachMap";

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
    image: "/images/team/jason-antunovich.jpg",
  },
  {
    name: "Julianna Iris Tan",
    role: "Managing Partner",
    bio: "Julianna brings more than 20 years of experience in the energy industry, specialising in upstream offshore installation and EPCI project management. She has worked on major international projects across Oil & Gas and Renewables, collaborating with leading operators and contractors such as TotalEnergies, TechnipFMC, and Saipem.",
    initials: "JT",
    image: "/images/team/julianna-iris-tan.jpg",
  },
  {
    name: "Aisyah Adam",
    role: "Operations & People Lead",
    bio: "Aisyah brings an extensive background in logistics and education, with a strong focus on the welfare and development of our people. As Operations & People Lead, she manages team mobilisation and rotations, placing safety, health, and individual wellbeing at the centre of operations.",
    initials: "AA",
    image: "/images/team/aisyah-adam.jpg",
  },
] as const;

const regions = [
  { name: "Singapore", label: "HQ" },
  { name: "Americas", label: null },
  { name: "Europe", label: null },
  { name: "Middle East", label: null },
  { name: "Africa", label: null },
  { name: "Australia", label: null },
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
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
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
      <section className="relative py-8 md:py-10 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered title — compact */}
          <ScrollReveal>
            <div className="text-center mb-5">
              <p className="text-xs font-sans font-medium uppercase tracking-wider text-[var(--color-energy-end)] mb-1">
                Where We Operate
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Global Reach
              </h2>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal delay={100}>
            <GlobalReachMap />
          </ScrollReveal>

          {/* Legend */}
          <ScrollReveal delay={200}>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
              {regions.map((region) => (
                <div key={region.name} className="flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${region.label === "HQ" ? "bg-[var(--color-amber)]" : "bg-[var(--color-energy-start)]"}`} />
                  <span className="text-xs font-sans text-white/50">
                    {region.name}
                    {region.label && <span className="ml-0.5 font-semibold text-[var(--color-amber)]">({region.label})</span>}
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
