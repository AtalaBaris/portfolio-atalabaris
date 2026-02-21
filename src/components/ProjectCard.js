'use client'

import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function ProjectCard({ title, description, tags = [], href = '#', imageUrl }) {
  const initial = title ? title.charAt(0) : '?'
  return (
    <div className="relative flex h-full flex-col rounded-lg border border-foreground/10 bg-background p-6">
      <div className="relative mb-5 h-[200px] w-full flex-shrink-0 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-foreground/20">
            {initial}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 pt-5">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h5>
        <p className="line-clamp-3 flex-grow font-normal text-foreground/70">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-foreground/20 bg-background px-3 py-2 text-xs font-bold leading-none text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={href} className="mt-auto pt-2">
          <span className="inline-flex h-10 w-full items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90 sm:w-auto">
            Read more
            <ChevronRightIcon className="ml-1 size-4" aria-hidden />
          </span>
        </Link>
      </div>
    </div>
  )
}
