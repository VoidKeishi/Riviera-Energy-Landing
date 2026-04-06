'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const solutionLinks = [
  { href: '/solutions/commissioning', label: 'Commissioning & Operational Readiness' },
  { href: '/solutions/consultancy', label: 'Strategic Project Consultancy' },
  { href: '/solutions/workforce', label: 'Global Workforce & Mobility' },
] as const;


export function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);


  const closeDrawer = useCallback(() => setIsOpen(false), []);

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-cyan)] focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-semibold focus:outline-none"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 z-50 w-full bg-white transition-all duration-[var(--duration-base)] ${
          isScrolled
            ? 'shadow-sm border-b border-[var(--color-grey-100)]'
            : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" aria-label="Riviera Energy - Home">
            <Image
              src="/logo-light.png"
              alt="Riviera Energy"
              width={300}
              height={300}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <Link
              href="/about"
              className="text-sm font-sans font-medium text-[var(--color-text-body)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2 rounded-sm"
            >
              About Us
            </Link>

            {/* Solutions Dropdown */}
            <div className="group relative h-full flex items-center">
              <button
                className="text-sm font-sans font-medium text-[var(--color-text-body)] transition-colors duration-[var(--duration-fast)] group-hover:text-[var(--color-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2 rounded-sm flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Solutions
                <svg
                  className="w-4 h-4 transition-transform duration-[var(--duration-fast)] group-hover:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Dropdown Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-[var(--duration-base)] ease-[var(--ease-flow)] translate-y-2 group-hover:translate-y-0 z-50">
                {/* Bridge area to prevent flickering */}
                <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />

                <div className="bg-white rounded-lg shadow-xl border border-[var(--color-grey-100)] overflow-hidden p-2 flex flex-col gap-1">
                  {solutionLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm font-sans font-medium text-[var(--color-text-body)] hover:bg-[#F7F8FC] hover:text-[var(--color-navy)] rounded-md transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-inset"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className="text-sm font-sans font-medium text-[var(--color-text-body)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2 rounded-sm"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-sm font-sans font-medium text-[var(--color-text-body)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2 rounded-sm"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-sans font-semibold text-white energy-gradient shadow-[0_4px_14px_-3px_rgba(17,107,248,0.4)] transition-all duration-[var(--duration-base)] hover:shadow-[0_6px_20px_-3px_rgba(17,107,248,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[var(--color-text-body)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] rounded-sm"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-[var(--duration-base)] md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={closeDrawer}
        />

        {/* Drawer */}
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`absolute right-0 top-0 h-full w-full max-w-xs bg-[var(--color-indigo)] transition-transform duration-[var(--duration-base)] ease-[var(--ease-flow)] ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close button */}
          <div className="flex items-center justify-between px-6 h-18">
            <Image
              src="/logo-dark.png"
              alt="Riviera Energy"
              width={120}
              height={50}
              className="h-8 w-auto"
            />
            <button
              onClick={closeDrawer}
              className="p-2 text-white/70 hover:text-white transition-colors duration-[var(--duration-fast)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] rounded-sm"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </svg>
            </button>
          </div>

          {/* Drawer nav */}
          <nav className="px-6 py-8" aria-label="Mobile navigation">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/about"
                  onClick={closeDrawer}
                  className="block py-3 text-base font-sans font-medium text-white/80 hover:text-white transition-colors duration-[var(--duration-fast)]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className="flex w-full items-center justify-between py-3 text-base font-sans font-medium text-white/80 hover:text-white transition-colors duration-[var(--duration-fast)]"
                  aria-expanded={isMobileSolutionsOpen}
                >
                  Solutions
                  <svg
                    className={`w-5 h-5 transition-transform duration-[var(--duration-base)] ${
                      isMobileSolutionsOpen ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-[var(--duration-base)] ease-[var(--ease-flow)] ${
                    isMobileSolutionsOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="pl-4 border-l border-white/10 ml-2 space-y-1 my-2">
                    {solutionLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeDrawer}
                          className="block py-2 text-sm font-sans text-white/70 hover:text-white transition-colors duration-[var(--duration-fast)]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  href="/projects"
                  onClick={closeDrawer}
                  className="block py-3 text-base font-sans font-medium text-white/80 hover:text-white transition-colors duration-[var(--duration-fast)]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={closeDrawer}
                  className="block py-3 text-base font-sans font-medium text-white/80 hover:text-white transition-colors duration-[var(--duration-fast)]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile CTA */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <Link
                href="/contact"
                onClick={closeDrawer}
                className="flex items-center justify-center w-full rounded-lg px-6 py-3.5 text-sm font-sans font-semibold text-white energy-gradient shadow-[0_4px_14px_-3px_rgba(17,107,248,0.4)]"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
