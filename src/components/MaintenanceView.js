'use client'

import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function MaintenanceView() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background px-4 py-16">
      <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-8 text-center">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent/50 bg-accent/10"
          aria-hidden
        >
          <WrenchScrewdriverIcon className="size-10 text-accent" />
        </div>

        <div className="space-y-3">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Under maintenance
          </h1>
          <p className="text-base leading-relaxed text-foreground/70 sm:text-lg">
            We&apos;re updating the site. We&apos;ll be back shortly.
          </p>
        </div>

        <p className="max-w-sm text-sm text-foreground/50">
          For questions, reach out via the contact page or email.
        </p>

        <div className="mt-4 h-px w-16 bg-foreground/20" />
        <p className="font-mono text-xs text-foreground/40">
          Barış Atala · Portfolio
        </p>
      </div>
    </div>
  )
}
