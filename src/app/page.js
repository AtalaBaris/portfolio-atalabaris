'use client'

import Link from 'next/link'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import { PROJECTS } from '@/data/projects'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const HOME_PROJECTS = PROJECTS.slice(0, 3)

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      <section
        id="projects"
        className="w-full bg-muted/50 py-10 my-14 md:py-14"
      >
        <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-5xl lg:text-6xl">
              Projects
            </h2>
            <p className="max-w-[32rem] text-base leading-normal text-foreground/70 sm:text-lg sm:leading-7">
              Showcasing impactful projects and technical achievements.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={project.href}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>

          <div className="flex justify-center pt-2">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl border border-foreground/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ChevronDownIcon className="mr-2 size-4" aria-hidden />
            View All
          </Link>
          </div>
        </div>
      </section>
    </main>
  )
}