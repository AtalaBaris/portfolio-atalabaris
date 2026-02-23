'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import AnimateIn from '@/components/AnimateIn'
import { PROJECTS } from '@/data/projects'

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params?.slug
  const project = PROJECTS.find((p) => p.slug === slug || p.id === slug)

  if (!project) {
    return (
      <main className="container mx-auto max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-foreground/70">Project not found.</p>
        <Link
          href="/projects"
          className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:underline"
        >
          <ArrowLeftIcon className="mr-2 size-4" />
          Back to Projects
        </Link>
      </main>
    )
  }

  const images = project.images?.length ? project.images : [project.imageUrl].filter(Boolean)
  const techStack = project.techStack || []
  const sections = project.sections || []

  return (
    <main className="container mx-auto max-w-4xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <AnimateIn>
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="mr-2 size-4" />
          Projects
        </Link>
      </AnimateIn>

      <AnimateIn delay={0.05}>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-foreground/70">{project.description}</p>
        {project.tags?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-foreground/20 bg-foreground/5 px-3 py-1.5 text-sm font-medium text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </AnimateIn>

      {/* Project photos / gallery */}
      {images.length > 0 && (
        <AnimateIn delay={0.1} className="mt-10">
          <h2 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
            Project photos
          </h2>
          <div className="space-y-6">
            {images.length === 1 ? (
              <div className="overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5">
                <img
                  src={images[0]}
                  alt={`${project.title} screenshot`}
                  className="h-auto w-full object-contain"
                />
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {images.map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5"
                  >
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </AnimateIn>
      )}

      {/* Tech stack */}
      {techStack.length > 0 && (
        <AnimateIn delay={0.15} className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Tech stack
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimateIn>
      )}

      {/* Sections (overview, features, etc.) */}
      {sections.length > 0 && (
        <div className="mt-10 space-y-10">
          {sections.map((section, i) => (
            <AnimateIn key={section.title} delay={0.2 + i * 0.05}>
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-foreground/80 whitespace-pre-line">
                {section.content}
              </p>
            </AnimateIn>
          ))}
        </div>
      )}

      {/* Live site link */}
      {project.liveUrl && (
        <AnimateIn delay={0.3} className="mt-10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90"
          >
            Visit live site
            <ArrowTopRightOnSquareIcon className="size-4" aria-hidden />
          </a>
        </AnimateIn>
      )}
    </main>
  )
}
