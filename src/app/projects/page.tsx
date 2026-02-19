import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { DotGrid } from "@/components/ui/DotGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Riviera Energy project portfolio — delivering high-confidence outcomes across global energy infrastructure.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Riviera Energy",
    description:
      "Riviera Energy project portfolio — delivering high-confidence outcomes across global energy infrastructure.",
    url: "/projects",
  },
};

const projects = [
  {
    title: "West Texas GTL Assessment",
    location: "Texas, USA",
    sector: "Oil & Gas",
    services: ["Field Condition Assessment", "Preservation Review", "Restart Feasibility"],
    description:
      "Comprehensive assessment of a mothballed gas-to-liquids facility. Our team disproved nitrogen-preservation claims through field-verified inspection and uncovered hidden failures, providing the client with a credible restart risk profile and cost model.",
    highlight: "Disproved preservation claims — uncovered hidden failures",
  },
  {
    title: "Middle East Refinery Rehabilitation",
    location: "Middle East",
    sector: "Oil & Gas",
    services: ["Government Advisory", "Modular Replacement Strategy", "Feasibility Study"],
    description:
      "Government-advisory engagement for a major refinery rehabilitation programme. Developed modular replacement strategies and provided independent technical assessment supporting capital allocation decisions for facility modernisation.",
    highlight: "Government advisory — modular replacement strategy",
  },
  {
    title: "Kaombo Norte FPSO",
    location: "Angola",
    sector: "Oil & Gas",
    services: ["EPCI Project Management", "Offshore Installation", "Commissioning"],
    description:
      "Upstream offshore EPCI project for TotalEnergies. Contributed to the engineering, procurement, construction, and installation phases of the Kaombo Norte floating production, storage, and offloading vessel — one of the largest deepwater developments in West Africa.",
    highlight: "TotalEnergies — deepwater FPSO development",
  },
  {
    title: "CORAL Sul FLNG",
    location: "Mozambique",
    sector: "Oil & Gas",
    services: ["EPCI Management", "Floating LNG", "Commissioning Support"],
    description:
      "Engagement on the CORAL Sul floating LNG facility for TotalEnergies — the first deepwater FLNG development in Africa. Supported execution-phase project management and commissioning readiness activities across an international, multi-contractor delivery model.",
    highlight: "First deepwater FLNG in Africa",
  },
  {
    title: "Yulin Offshore Wind Farm",
    location: "Asia",
    sector: "Renewables",
    services: ["Offshore Wind Development", "Project Management", "Installation Support"],
    description:
      "Offshore wind energy development contributing to the growing renewables portfolio. Delivered project management and installation support for the Yulin wind farm, demonstrating Riviera Energy's capability beyond traditional oil and gas sectors.",
    highlight: "Renewables sector — offshore wind",
  },
  {
    title: "Australasia Refinery Assessments",
    location: "Australia",
    sector: "Oil & Gas",
    services: ["Full-Facility Assessment", "Asset Integrity", "Restart Readiness"],
    description:
      "Multiple full-facility assessments for refineries ranging from 80–300 kbpd capacity across Australasia. Partnered with Tier 1 operators including BP, Shell, and Caltex to deliver verified asset condition reports, restart risk profiles, and credible cost/schedule ranges.",
    highlight: "BP, Shell, Caltex — 80–300 kbpd facilities",
  },
] as const;

const sectors = [
  {
    title: "Oil & Gas",
    description: "Upstream, midstream, and downstream operations — from deepwater FPSO to refinery restart",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Renewables",
    description: "Offshore wind, solar, and emerging sustainable energy projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Marine",
    description: "Offshore and marine energy operations across global waters",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Power Generation",
    description: "Thermal, gas, and hybrid power systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
] as const;

const stats = [
  { value: "200+", label: "Equipment Packages Inspected" },
  { value: "300", label: "kbpd Maximum Assessment Capacity" },
  { value: "6", label: "Global Regions" },
  { value: "50+", label: "Years Combined Leadership" },
] as const;

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden">
        <DotGrid size="6x6" variant="light" className="absolute top-28 right-8 md:right-20 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                  Our Projects
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  Project Portfolio
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-6 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  Decades of execution experience across <strong>greenfield, brownfield, and
                  late-life assets</strong> in the global energy sector. From deepwater FPSO
                  installations to mothballed refinery assessments, our team delivers
                  field-verified outcomes that protect capital and reduce risk.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="mt-4 text-base md:text-lg font-sans leading-relaxed text-[var(--color-text-body)]">
                  Our project experience spans the U.S., Middle East, Africa, Asia, and
                  Australasia — supporting Tier 1 operators and government clients with
                  commissioning, consultancy, and workforce solutions.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={300}>
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] overflow-hidden relative lg:-mr-8">
                  <WaveBackground variant="dark" className="opacity-50" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white">
                      <div className="font-display text-5xl font-extrabold energy-gradient-text">6+</div>
                      <div className="mt-1 text-sm font-sans font-medium text-white/70 uppercase tracking-wide">
                        Global Regions
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Project Case Studies */}
      <SectionWrapper background="off-white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Case Studies
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Selected Project Experience
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100} className="h-full">
              <div className="h-full flex flex-col rounded-xl bg-white border border-[var(--color-grey-100)] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(8,1,69,0.1)]">
                {/* Card header strip */}
                <div className="bg-gradient-to-br from-[var(--color-navy-mid)] to-[var(--color-indigo)] px-6 py-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-sans font-medium bg-white/15 text-white/90">
                      {project.sector}
                    </span>
                    <span className="text-xs font-sans text-white/60">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="mt-3 font-sans text-lg font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Card body */}
                <div className="flex-grow flex flex-col p-6">
                  <p className="flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                    {project.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[var(--color-grey-100)]">
                    <p className="text-xs font-sans font-semibold uppercase tracking-wide text-[var(--color-cyan)] mb-2">
                      Key Highlight
                    </p>
                    <p className="text-sm font-sans font-medium text-[var(--color-text-primary)]">
                      {project.highlight}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-sans font-medium bg-[var(--color-off-white)] text-[var(--color-text-muted)] border border-[var(--color-grey-100)]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Stats */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[var(--color-indigo)] text-white overflow-hidden">
        <WaveBackground variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-energy-end)]">
                Track Record
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Proven Credentials
              </h2>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-extrabold energy-gradient-text">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-sans font-medium text-[var(--color-text-on-dark-muted)] uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <SectionWrapper background="white">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Industries
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Sectors We Serve
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, i) => (
            <ScrollReveal key={sector.title} delay={i * 100} className="h-full">
              <div className="h-full flex flex-col text-center rounded-xl bg-white border border-[var(--color-grey-100)] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(8,1,69,0.1)]">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--color-off-white)] text-[var(--color-cyan)] mx-auto">
                  {sector.icon}
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-[var(--color-text-primary)]">
                  {sector.title}
                </h3>
                <p className="mt-2 flex-grow text-sm font-sans leading-relaxed text-[var(--color-text-muted)]">
                  {sector.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative py-14 sm:py-20 md:py-28 bg-[var(--color-indigo)] text-white overflow-hidden">
        <WaveBackground variant="dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Discuss your project requirements
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
              Whether you need commissioning support, strategic advisory, or workforce
              solutions — our team brings decades of experience to every engagement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Contact Us
              </Button>
              <Button variant="ghost" href="/solutions">
                View Our Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
