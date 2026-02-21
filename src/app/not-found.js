import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] w-full flex-col items-center justify-center px-4 py-16 sm:px-6">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-6 text-center">
        <p className="font-mono text-6xl font-bold tabular-nums text-accent sm:text-8xl">
          404
        </p>
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Page not found
        </h1>
        <p className="max-w-md text-base text-foreground/70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-foreground/20 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        >
          <HomeIcon className="size-5" aria-hidden />
          Back to home
        </Link>
      </div>
    </main>
  )
}
