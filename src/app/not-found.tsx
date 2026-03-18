import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-sans font-medium uppercase tracking-wide text-[var(--color-cyan)]">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base font-sans leading-relaxed text-[var(--color-text-muted)]">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8">
        <Button variant="primary" href="/">
          Return Home
        </Button>
      </div>
    </main>
  );
}
