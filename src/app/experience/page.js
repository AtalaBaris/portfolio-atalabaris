'use client'

import ExperienceCard from '@/components/ExperienceCard'
import AnimateIn from '@/components/AnimateIn'
import { EXPERIENCES } from '@/data/experience'

export default function ExperiencePage() {
  return (
    <main className="container mx-auto max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <AnimateIn className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl">
          Experience
        </h1>
        <p className="text-lg text-foreground/70">
          Professional journey and career timeline.
        </p>
      </AnimateIn>

      <hr className="my-8 border-foreground/10" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4">
        {EXPERIENCES.map((exp, index) => (
          <AnimateIn key={exp.id} animation="fade-in-up" delay={index * 0.06}>
            <ExperienceCard
              variant="row"
              showViewDetails={false}
              title={exp.title}
              company={exp.company}
              companyUrl={exp.companyUrl}
              location={exp.location}
              dates={exp.dates}
              description={exp.description}
              tags={exp.tags}
              slug={exp.slug}
            />
          </AnimateIn>
        ))}
      </div>
    </main>
  )
}
