import Link from "next/link";
import Image from "next/image";

const LINKEDIN_URL = "https://www.linkedin.com/company/rivieraenergy";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/#what-we-do", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact Us" },
] as const;


export function Footer() {
  return (
    <footer className="bg-[#032060] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block" aria-label="Riviera Energy - Home">
              <Image
                src="/logo-dark.png"
                alt="Riviera Energy"
                width={160}
                height={67}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-on-dark-muted)] max-w-sm">
              Where Partnership Meets Performance.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Riviera Energy on LinkedIn"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-text-on-dark-muted)] transition-colors duration-[var(--duration-fast)] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-sans font-semibold tracking-wide uppercase text-[var(--color-text-on-dark-muted)]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-on-dark-muted)] transition-colors duration-[var(--duration-fast)] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-sans font-semibold tracking-wide uppercase text-[var(--color-text-on-dark-muted)]">
              Contact
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-[var(--color-text-on-dark-muted)]">
              <p>
                152 Beach Road, #10-07
                <br />
                Gateway East, Singapore 189721
              </p>
              <p>
                <a
                  href="tel:+6589239798"
                  className="transition-colors duration-[var(--duration-fast)] hover:text-white"
                >
                  (+65) 8923 9798
                </a>
              </p>
              <p>
                <a
                  href="mailto:operations@riviera-energy.co"
                  className="transition-colors duration-[var(--duration-fast)] hover:text-white"
                >
                  operations@riviera-energy.co
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-[var(--color-text-on-dark-muted)]">
            &copy; {new Date().getFullYear()} Riviera Energy Pte Ltd. All
            rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-on-dark-muted)]">
            Company No. 201438405R &middot; Employment Agency Licence No. 16C8003
          </p>
        </div>
      </div>
    </footer>
  );
}
