'use client'

import Link from 'next/link'
import {
  DocumentTextIcon,
  PhoneIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="flex min-h-screen w-full items-center bg-gray-900 px-6 pb-8 pt-6 md:py-20 lg:py-32">
      <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
        {/* Profile image: replace src with your photo in public/ (e.g. public/profile.jpg) */}
        <div className="-mt-20 mb-0 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-indigo-500 bg-indigo-500/20 md:mb-2 md:h-40 md:w-40">
          <span className="text-2xl font-bold text-white md:text-4xl">BA</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Barış Atala
        </h1>

        <h2 className="text-base font-medium text-gray-300 sm:text-xl md:text-xl lg:text-2xl">
          Founder of AtalaDev
          <br />
          Freelancer Full Stack Developer
        </h2>

        <p className="mt-4 max-w-[42rem] text-center text-sm leading-normal text-gray-400 sm:text-base">
          Software engineer working at the intersection of AI, data, and scalable software systems.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:space-x-4">
          <Link
            href="/about"
            aria-label="View resume"
            className="inline-flex h-11 items-center justify-center rounded-md bg-indigo-500 px-8 text-sm font-medium text-white transition-colors hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            <DocumentTextIcon className="mr-2 size-5" aria-hidden />
            Resume
          </Link>
          <Link
            href="/contact"
            aria-label="Contact Barış Atala"
            className="inline-flex h-11 items-center justify-center rounded-md border border-gray-600 bg-gray-800 px-8 text-sm font-medium text-white transition-colors hover:bg-gray-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            <PhoneIcon className="mr-2 size-5" aria-hidden />
            Contact
          </Link>
        </div>

        <div className="mt-10">
          <ChevronDownIcon className="size-6 text-gray-500" aria-hidden />
        </div>
      </div>
    </section>
  )
}
