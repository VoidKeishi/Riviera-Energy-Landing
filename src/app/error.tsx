'use client';

import { Button } from '@/components/ui/Button';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
        Something went wrong
      </p>
      <h1 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
        An unexpected error occurred
      </h1>
      <p className="mt-4 max-w-md text-base font-sans leading-relaxed text-[var(--color-text-muted)]">
        We apologise for the inconvenience. Please try again or return to the
        homepage.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <Button variant="primary" onClick={() => reset()}>
          Try Again
        </Button>
        <Button variant="secondary" href="/">
          Return Home
        </Button>
      </div>
    </main>
  );
}
