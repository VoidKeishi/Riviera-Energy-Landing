import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Data Protection Notice",
  description:
    "Riviera Energy's Data Protection Notice — how we handle personal data for recruitment, workforce management, and project deployment under the PDPA.",
  alternates: {
    canonical: "/data-protection-notice",
  },
  openGraph: {
    title: "Data Protection Notice | Riviera Energy",
    description:
      "Riviera Energy's Data Protection Notice — how we handle personal data for recruitment, workforce management, and project deployment under the PDPA.",
    url: "/data-protection-notice",
  },
};

export default function DataProtectionNoticePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-28 pb-6 md:pt-40 md:pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollReveal>
            <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
              Legal
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]">
              Data Protection Notice
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="prose-legal">
            <ScrollReveal>
              <p>
                Riviera Energy Pte. Ltd. (&ldquo;Riviera Energy&rdquo;) is committed to protecting your personal data in accordance with applicable data protection laws, including the Singapore Personal Data Protection Act (PDPA).
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>How We Use Your Data</h2>
              <p>We may collect, use, and disclose your personal data for purposes including:</p>
              <ul>
                <li>Recruitment, candidate assessment, and job placement</li>
                <li>Contractor onboarding and project deployment</li>
                <li>Client submissions and workforce management</li>
                <li>Communication regarding opportunities, services, or administrative matters</li>
                <li>Compliance with legal, regulatory, and contractual requirements</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Sharing and Transfers</h2>
              <p>
                Your personal data may be shared with our clients, affiliates, and service providers where necessary for these purposes. In certain cases, your data may be transferred outside Singapore, and we will take reasonable steps to ensure appropriate protection.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Your Consent</h2>
              <p>
                By interacting with us, submitting your information, or using our services, you acknowledge and consent to the collection, use, and disclosure of your personal data as described above.
              </p>
              <p>
                You may request access to, correction of, or withdrawal of consent for your personal data by contacting us.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>More Information</h2>
              <p>
                For more details, please refer to our{" "}
                <Link href="/privacy-policy" className="text-[var(--color-cyan)] hover:underline transition-colors duration-[var(--duration-fast)]">
                  Privacy Policy
                </Link>
                .
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Contact</h2>
              <p>
                <strong>Riviera Energy Pte. Ltd.</strong>
                <br />
                Email:{" "}
                <a href="mailto:operations@riviera-energy.co">
                  operations@riviera-energy.co
                </a>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mt-6 pt-5 border-t-2 border-[var(--color-grey-300)]">
                <p className="text-sm font-sans font-semibold text-[var(--color-text-primary)] mb-2">Related Policies</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/privacy-policy" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan)] hover:text-[var(--color-energy-start)] transition-colors duration-[var(--duration-fast)]">
                    <span aria-hidden="true">&rarr;</span> Privacy Policy
                  </Link>
                  <Link href="/terms-of-use" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan)] hover:text-[var(--color-energy-start)] transition-colors duration-[var(--duration-fast)]">
                    <span aria-hidden="true">&rarr;</span> Terms of Use
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
