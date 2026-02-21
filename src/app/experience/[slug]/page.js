'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import AnimateIn from '@/components/AnimateIn'
import { EXPERIENCES } from '@/data/experience'

export default function ExperienceDetailPage() {
  const params = useParams()
  const slug = params?.slug
  const exp = EXPERIENCES.find((e) => e.slug === slug)

  if (!exp) {
    return (
      <main className="container mx-auto max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-foreground/70">Deneyim bulunamadı.</p>
        <Link
          href="/experience"
          className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:underline"
        >
          <ArrowLeftIcon className="mr-2 size-4" />
          Experience sayfasına dön
        </Link>
      </main>
    )
  }

  return (
    <main className="container mx-auto max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <AnimateIn>
        <Link
          href="/experience"
          className="mb-6 inline-flex items-center text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="mr-2 size-4" />
          Experience
        </Link>
      </AnimateIn>
      <AnimateIn delay={0.08}>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {exp.title}
          </h1>
          <p className="text-lg text-foreground/70">
            {exp.company} · {exp.location} · {exp.dates}
          </p>
          <p className="text-foreground/80">{exp.description}</p>
        </div>
      </AnimateIn>
    </main>
  )
}
