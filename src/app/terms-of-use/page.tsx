import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for the Riviera Energy website — acceptable use, submissions, intellectual property, and liability.",
  alternates: {
    canonical: "/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use | Riviera Energy",
    description:
      "Terms of Use for the Riviera Energy website — acceptable use, submissions, intellectual property, and liability.",
    url: "/terms-of-use",
  },
};

export default function TermsOfUsePage() {
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
              Terms of Use
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-4 text-sm font-sans text-[var(--color-text-muted)]">
              Last updated: 31 March 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="prose-legal">
            <ScrollReveal>
              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using this website, you agree to these Terms of Use and our{" "}
                <Link href="/privacy-policy" className="text-[var(--color-cyan)] hover:underline transition-colors duration-[var(--duration-fast)]">
                  Privacy Policy
                </Link>
                . If you do not agree, please discontinue use of this website.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Use of Website</h2>
              <p>You agree to use this website only for lawful purposes. You must not:</p>
              <ul>
                <li>Breach any applicable laws or regulations</li>
                <li>Attempt unauthorised access to systems or data</li>
                <li>Introduce malicious or harmful material</li>
                <li>Use the website for fraudulent or misleading purposes</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>User Submissions</h2>
              <p>By submitting any information (including resumes or business details), you confirm that:</p>
              <ul>
                <li>The information is accurate and not misleading</li>
                <li>You have the right to provide such information</li>
                <li>You consent to its use in accordance with our Privacy Policy</li>
              </ul>
              <p>Submission of information does not guarantee employment, placement, or engagement.</p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Recruitment and Placement Disclaimer</h2>
              <p>
                Riviera Energy facilitates recruitment and workforce deployment services. All hiring and engagement decisions are made solely by the client. Riviera Energy does not guarantee job offers, project assignments, or duration of engagement. Any formal engagement will be governed by separate agreements.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Intellectual Property</h2>
              <p>
                All content on this website, including text, branding, and original materials, is owned by or licensed to Riviera Energy Pte. Ltd., unless otherwise stated.
              </p>
              <p>
                Certain images, graphics, or media may be sourced from third-party providers and remain subject to their respective licenses and ownership rights.
              </p>
              <p>
                You may not reproduce, distribute, modify, or use any content from this website without prior written consent from Riviera Energy or the relevant rights holder.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Riviera Energy shall not be liable for any loss arising from:</p>
              <ul>
                <li>Use of, or reliance on, this website</li>
                <li>Client decisions regarding candidates or engagements</li>
                <li>Delays, changes, or cancellations in project requirements</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Third-Party Links</h2>
              <p>
                This website may contain links to external sites. Riviera Energy is not responsible for their content or practices.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Website Availability</h2>
              <p>
                We do not guarantee uninterrupted or error-free access to the website and may modify or discontinue it at any time.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Changes to Terms</h2>
              <p>
                We may update these Terms at any time. Continued use of the website constitutes acceptance of the updated Terms.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Governing Law</h2>
              <p>
                These Terms are governed by the laws of Singapore. Any disputes shall be subject to the exclusive jurisdiction of the Singapore courts.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2>Contact</h2>
              <p>For any questions regarding these Terms, please contact:</p>
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
                  <Link href="/data-protection-notice" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-cyan)] hover:text-[var(--color-energy-start)] transition-colors duration-[var(--duration-fast)]">
                    <span aria-hidden="true">&rarr;</span> Data Protection Notice
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
