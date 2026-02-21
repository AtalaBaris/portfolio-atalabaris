'use client'

import Link from 'next/link'
import {
  DocumentTextIcon,
  PhoneIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="flex min-h-screen w-full items-center bg-background px-6 pb-8 pt-6 md:py-20 lg:py-32">
      <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <div
          className="-mt-20 mb-0 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-4 border-accent bg-accent/20 md:mb-2 md:h-48 md:w-48 animate-on-load"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-2xl font-bold text-foreground md:text-4xl">BA</span>
        </div>

        <h1
          className="font-handwriting mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-8xl animate-on-load"
          style={{ animationDelay: '0.28s' }}
        >
          Barış Atala
        </h1>

        <h2
          className="font-heading text-base font-medium text-foreground/80 sm:text-xl md:text-xl lg:text-2xl animate-on-load"
          style={{ animationDelay: '0.46s' }}
        >
          Founder of <span className="text-accent">AtalaDev</span>
          <br />
          Freelancer Full Stack Developer
        </h2>

        <p
          className="mt-4 max-w-[42rem] text-center text-sm leading-normal text-foreground/70 sm:text-base animate-on-load"
          style={{ animationDelay: '0.64s' }}
        >
          Software engineer working at the intersection of AI, data, and scalable software systems.
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:space-x-4 animate-on-load"
          style={{ animationDelay: '0.82s' }}
        >
          <a
            href="/cv.pdf"
            download="Baris-Atala-CV.pdf"
            aria-label="Download CV"
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <DocumentTextIcon className="mr-2 size-5" aria-hidden />
            Resume
          </a>
          <Link
            href="/contact"
            aria-label="Contact Barış Atala"
            className="inline-flex h-11 items-center justify-center rounded-md border border-foreground/20 bg-foreground/5 px-8 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <PhoneIcon className="mr-2 size-5" aria-hidden />
            Contact
          </Link>
        </div>

        <div
          className="mt-10 animate-on-load"
          style={{ animationDelay: '1.5s' }}
        >
          <button
            type="button"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="arrow-bounce inline-block rounded-full p-2 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Scroll to Projects"
          >
            <ChevronDownIcon className="size-6 text-foreground/50" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  )
}
