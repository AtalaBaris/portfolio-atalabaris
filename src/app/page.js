'use client'

import Link from 'next/link'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import ExperienceCard from '@/components/ExperienceCard'
import SkillCard from '@/components/SkillCard'
import ContactForm from '@/components/ContactForm'
import AnimateIn from '@/components/AnimateIn'
import { PROJECTS } from '@/data/projects'
import { EXPERIENCES } from '@/data/experience'
import { SKILLS } from '@/data/skills'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const HOME_PROJECTS = PROJECTS.slice(0, 3)
const HOME_EXPERIENCES = EXPERIENCES.slice(0, 3)
const HOME_SKILLS = SKILLS.slice(0, 6)

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      <section
        id="projects"
        className="w-full bg-muted/50 py-10 my-14 md:py-14"
      >
        <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-5xl lg:text-6xl">
              Projects
            </h2>
            <p className="max-w-[32rem] text-base leading-normal text-foreground/70 sm:text-lg sm:leading-7">
              Showcasing impactful projects and technical achievements.
            </p>
          </AnimateIn>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_PROJECTS.map((project, index) => (
              <AnimateIn key={project.id} animation="scale-in" delay={0.12 + index * 0.22}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  href={project.slug ? `/projects/${project.slug}` : project.id ? `/projects/${project.id}` : '/projects'}
                  imageUrl={project.imageUrl}
                />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn className="flex justify-center pt-2" delay={0.55}>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-foreground/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ChevronDownIcon className="mr-2 size-4" aria-hidden />
              View All
            </Link>
          </AnimateIn>
        </div>
      </section>
      <section
        id="skills"
        className="w-full py-10 my-14 md:py-14"
      >
        <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-5xl lg:text-6xl">
              Skills
            </h2>
            <p className="max-w-[32rem] text-base leading-normal text-foreground/70 sm:text-lg sm:leading-7">
              Key skills that define my professional identity.
            </p>
          </AnimateIn>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SKILLS.map((skill, index) => (
              <AnimateIn key={skill.id} animation="scale-in" delay={index * 0.08}>
                <SkillCard
                  name={skill.name}
                  description={skill.description}
                  level={skill.level}
                  logo={skill.logo}
                />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn className="flex justify-center pt-2" delay={0.5}>
            <Link
              href="/skills"
              className="inline-flex items-center justify-center rounded-xl border border-foreground/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ChevronDownIcon className="mr-2 size-4" aria-hidden />
              View All
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="w-full bg-muted/50 py-10 my-14 md:py-14"
      >
        <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-5xl lg:text-6xl">
              Experience
            </h2>
            <p className="max-w-[32rem] text-base leading-normal text-foreground/70 sm:text-lg sm:leading-7">
              Professional journey and career timeline.
            </p>
          </AnimateIn>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_EXPERIENCES.map((exp, index) => (
              <AnimateIn key={exp.id} animation="scale-in" delay={index * 0.08}>
                <ExperienceCard
                  title={exp.title}
                  company={exp.company}
                  companyUrl={exp.companyUrl}
                  location={exp.location}
                  dates={exp.dates}
                  description={exp.description}
                  tags={exp.tags}
                  slug={exp.slug}
                  viewDetailsHref="/experience"
                />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn className="flex justify-center pt-2" delay={0.5}>
            <Link
              href="/experience"
              className="inline-flex items-center justify-center rounded-xl border border-foreground/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ChevronDownIcon className="mr-2 size-4" aria-hidden />
              View All
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-muted/50 py-10 my-14 md:py-14">
        <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl md:text-5xl lg:text-6xl">
              Contact
            </h2>
            <p className="max-w-[32rem] text-base leading-normal text-foreground/70 sm:text-lg sm:leading-7">
              Get in touch for projects, collaboration, or just to say hello.
            </p>
          </AnimateIn>

          <AnimateIn className="mx-auto max-w-xl" delay={0.1}>
            <ContactForm idPrefix="home" />
          </AnimateIn>
        </div>
      </section>
    </main>
  )
}