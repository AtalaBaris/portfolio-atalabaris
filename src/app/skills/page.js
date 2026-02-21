'use client'

import SkillCard from '@/components/SkillCard'
import AnimateIn from '@/components/AnimateIn'
import { SKILLS } from '@/data/skills'

export default function SkillsPage() {
  return (
    <main className="container mx-auto max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <AnimateIn className="mt-5 flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Skills
          </h1>
          <p className="text-lg text-foreground/70">
            Key skills that define my professional identity.
          </p>
        </div>
      </AnimateIn>

      <hr className="my-6 border-foreground/10" />

      <div className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill, index) => (
          <AnimateIn key={skill.id} animation="scale-in" delay={index * 0.06}>
            <SkillCard
              name={skill.name}
              description={skill.description}
              level={skill.level}
              logo={skill.logo}
            />
          </AnimateIn>
        ))}
      </div>
    </main>
  )
}
