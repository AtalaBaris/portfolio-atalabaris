'use client'

import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { PROJECTS, TABS } from '@/data/projects'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

  const filtered =
    activeTab === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab)

  return (
    <main className="container mx-auto max-w-8xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mt-5 flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Projects
          </h1>
          <p className="text-lg text-foreground/70">
            Showcasing impactful projects and technical achievements.
          </p>
        </div>
      </div>

      <hr className="my-6 border-foreground/10" />

      <div className="mx-auto max-w-full overflow-x-hidden">
        {/* Mobile filter dropdown */}
        <div className="mb-4 md:hidden">
          <button
            type="button"
            onClick={() => setMobileFilterOpen((o) => !o)}
            className="flex h-10 w-full items-center justify-between rounded-md border border-foreground/20 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            aria-expanded={mobileFilterOpen}
            aria-haspopup="listbox"
          >
            {TABS.find((t) => t.id === activeTab)?.label ?? 'All'}
            <ChevronDownIcon
              className={`size-4 transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </button>
          {mobileFilterOpen && (
            <div
              className="mt-2 rounded-md border border-foreground/10 bg-background py-1 shadow-lg"
              role="listbox"
            >
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id)
                    setMobileFilterOpen(false)
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm font-medium transition-colors hover:bg-foreground/5 ${
                    activeTab === tab.id ? 'text-accent bg-foreground/5' : 'text-foreground'
                  }`}
                  role="option"
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop tabs */}
        <div className="hidden md:block">
          <div
            className="grid w-full grid-cols-3 gap-1 rounded-md bg-foreground/5 p-1 text-foreground/70"
            role="tablist"
            aria-label="Project filter"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  activeTab === tab.id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
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

        {filtered.length === 0 && (
          <p className="py-12 text-center text-foreground/60">
            No projects in this category yet.
          </p>
        )}
      </div>
    </main>
  )
}
