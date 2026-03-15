import { ProjectExplorer } from '@/components/projects/ProjectExplorer';
import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Riviera Energy project portfolio: delivering high-confidence outcomes across global energy infrastructure.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Riviera Energy",
    description:
      "Riviera Energy project portfolio: delivering high-confidence outcomes across global energy infrastructure.",
    url: "/projects",
  },
};

const projects = [
  {
    title: "West Texas GTL Assessment",
    location: "Texas, Americas",
    sector: "Oil & Gas",
    coordinates: [31.9, -102.1],
    services: ["Field Condition Assessment", "Preservation Review", "Restart Feasibility"],
    description:
      "Comprehensive assessment of a mothballed gas-to-liquids facility. Our team disproved nitrogen-preservation claims through field-verified inspection and uncovered hidden failures, providing the client with a credible restart risk profile and cost model.",
    highlights: ["mothballed gas-to-liquids facility", "disproved nitrogen-preservation claims", "uncovered hidden failures"],
  },
  {
    title: "Middle East Refinery Rehabilitation",
    location: "Middle East",
    sector: "Oil & Gas",
    coordinates: [25.3, 51.5],
    services: ["Government Advisory", "Modular Replacement Strategy", "Feasibility Study"],
    description:
      "Government-advisory engagement for a major refinery rehabilitation programme. Developed modular replacement strategies and provided independent technical assessment supporting capital allocation decisions for facility modernisation.",
    highlights: ["Government-advisory", "modular replacement strategies", "independent technical assessment"],
  },
  {
    title: "Kaombo Norte FPSO",
    location: "Angola",
    sector: "Oil & Gas",
    coordinates: [-7.5, 12.5],
    services: ["EPCI Project Management", "Offshore Installation", "Commissioning"],
    description:
      "Upstream offshore EPCI project for TotalEnergies. Contributed to the engineering, procurement, construction, and installation phases of the Kaombo Norte floating production, storage, and offloading vessel, one of the largest deepwater developments in West Africa.",
    highlights: ["TotalEnergies", "largest deepwater developments in West Africa"],
  },
  {
    title: "CORAL Sul FLNG",
    location: "Mozambique",
    sector: "Oil & Gas",
    coordinates: [-14.0, 40.5],
    services: ["EPCI Management", "Floating LNG", "Commissioning Support"],
    description:
      "Engagement on the CORAL Sul floating LNG facility for TotalEnergies, the first deepwater FLNG development in Africa. Supported execution-phase project management and commissioning readiness activities across an international, multi-contractor delivery model.",
    highlights: ["first deepwater FLNG development in Africa", "TotalEnergies"],
  },
  {
    title: "Yulin Offshore Wind Farm",
    location: "Asia",
    sector: "Renewables",
    coordinates: [21.4, 109.5],
    services: ["Offshore Wind Development", "Project Management", "Installation Support"],
    description:
      "Offshore wind energy development contributing to the growing renewables portfolio. Delivered project management and installation support for the Yulin wind farm, demonstrating Riviera Energy's capability beyond traditional oil and gas sectors.",
    highlights: ["renewables portfolio", "beyond traditional oil and gas"],
  },
  {
    title: "Australasia Refinery Assessments",
    location: "Australia",
    sector: "Oil & Gas",
    coordinates: [-33.8, 151.2],
    services: ["Full-Facility Assessment", "Asset Integrity", "Restart Readiness"],
    description:
      "Multiple full-facility assessments for refineries ranging from 80–300 kbpd capacity across Australasia. Partnered with Tier 1 operators including BP, Shell, and Caltex to deliver verified asset condition reports, restart risk profiles, and credible cost/schedule ranges.",
    highlights: ["80–300 kbpd capacity", "BP, Shell, and Caltex", "verified asset condition reports"],
  },
] as const;

/* Professional industry icons — clean line style, 24x24 viewBox */
const industries = [
  {
    name: 'Oil & Gas',
    scope: 'Onshore & offshore, upstream to downstream',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2v4" />
        <path d="M12 6l4 3v9H8V9l4-3z" />
        <path d="M8 18H6v-5l2-1.5" />
        <path d="M16 18h2v-5l-2-1.5" />
        <path d="M6 22h12" />
        <path d="M8 18v4" />
        <path d="M16 18v4" />
        <path d="M10 12h4" />
        <path d="M10 15h4" />
      </svg>
    ),
  },
  {
    name: 'Renewable Energy',
    scope: 'Wind, solar & emerging sustainable projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 10V2.5c0 0 3.5 1 3.5 4.5S12 10 12 10z" />
        <path d="M13.7 12.7l5.3 3.1c0 0-.5 3.5-3.9 2.5S13.7 12.7 13.7 12.7z" />
        <path d="M10.3 12.7l-5.3 3.1c0 0 .5 3.5 3.9 2.5S10.3 12.7 10.3 12.7z" />
        <path d="M10 22h4" />
        <path d="M12 14v8" />
      </svg>
    ),
  },
  {
    name: 'Marine',
    scope: 'Diverse marine projects, global placement',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 16l1.5-8h13L20 16" />
        <path d="M6 8V5h4v3" />
        <path d="M12 8V3l2 1" />
        <path d="M2 16h20" />
        <path d="M2 19c1.5 1.5 3 1.5 4 0s2.5-1.5 4 0 3 1.5 4 0 2.5-1.5 4 0 2.5 1.5 4 0" />
      </svg>
    ),
  },
  {
    name: 'Process Engineering',
    scope: 'Specialists across the engineering lifecycle',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="6" height="4" rx="1" />
        <rect x="16" y="3" width="6" height="4" rx="1" />
        <rect x="9" y="17" width="6" height="4" rx="1" />
        <path d="M5 7v3a2 2 0 002 2h10a2 2 0 002-2V7" />
        <path d="M12 12v5" />
      </svg>
    ),
  },
  {
    name: 'Construction',
    scope: 'Safety-focused, efficiency-driven staffing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M2 22h20" />
        <path d="M6 22V10l6-4 6 4v12" />
        <path d="M10 22v-5h4v5" />
        <path d="M10 13h4" />
        <path d="M3 22v-6l3-2" />
        <path d="M21 22v-6l-3-2" />
      </svg>
    ),
  },
  {
    name: 'Power Generation',
    scope: 'Thermal, gas & hybrid power systems',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
      </svg>
    ),
  },
] as const;

const stats = [
  { value: "100+", label: "Projects Executed" },
  { value: "300", label: "kbpd Maximum Assessment Capacity" },
  { value: "50+", label: "Years Combined Leadership" },
] as const;

export default function ProjectsPage() {
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
                  Australasia, supporting Tier 1 operators and government clients with
                  commissioning, consultancy, and workforce solutions.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={300}>
                <div className="aspect-[7/9] rounded-xl overflow-hidden relative lg:-mr-8">
                  <Image
                    src="/images/offshore-construction.jpg"
                    alt="Heavy-lift vessel performing offshore construction with crane operations at sea"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-indigo)]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-end p-8">
                    <div className="text-white">
                      <div className="font-display text-5xl font-extrabold energy-gradient-text-on-dark">100+</div>
                      <div className="mt-1 text-sm font-sans font-medium text-white/70 uppercase tracking-wide">
                        Projects Executed
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Project Case Studies — Full-bleed map */}
      <section className="relative bg-[var(--color-off-white)] pb-16 sm:pb-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12 md:pt-16 pb-4 md:pb-6">
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
        </div>

        {/* Map contained within standard layout */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ProjectExplorer projects={projects} />
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/offshore-platform-night.jpg"
            alt="Offshore platform illuminated at night"
            fill
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-indigo)]/85 via-[var(--color-indigo)]/70 to-[var(--color-indigo)]" />
        </div>
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

          <div className="mt-16 grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-extrabold energy-gradient-text-on-dark">
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

      {/* Industries */}
      <section className="py-10 sm:py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
                Sectors
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Industries We Serve
              </h2>
            </ScrollReveal>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry.name} delay={i * 60}>
                <div className="h-full flex items-start gap-4 rounded-xl border border-[var(--color-grey-100)] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-[var(--duration-base)] ease-[var(--ease-lift)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(8,1,69,0.08)]">
                  <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-[var(--color-energy-start)]/8 text-[var(--color-energy-start)]">
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-[var(--color-text-primary)] leading-snug">
                      {industry.name}
                    </h3>
                    <p className="mt-1 text-xs font-sans leading-relaxed text-[var(--color-text-muted)]">
                      {industry.scope}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 sm:py-20 md:py-28 bg-[var(--color-indigo)] text-white overflow-hidden">
        <GradientMesh variant="dark" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Discuss your project requirements
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-6 text-lg font-sans leading-relaxed text-[var(--color-text-on-dark-muted)]">
              Whether you need commissioning support, strategic advisory, or workforce
              solutions, our team brings decades of experience to every engagement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="/contact">
                Contact Us
              </Button>
              <Button variant="ghost" href="/#what-we-do">
                View Our Solutions
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
