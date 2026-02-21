'use client'

import Link from 'next/link'
import { ChevronRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const viewDetailsButtonClass =
  'inline-flex items-center rounded-lg border border-foreground/20 bg-transparent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground/5'

export default function ExperienceCard({
  title,
  company,
  companyUrl,
  location,
  dates,
  description,
  tags = [],
  slug,
  variant = 'card',
  showViewDetails = true,
  viewDetailsHref,
}) {
  const detailsHref = viewDetailsHref ?? (slug ? `/experience/${slug}` : '#')

  const viewDetailsLink = (
    <Link
      href={detailsHref}
      className={viewDetailsButtonClass}
    >
      View Details
      <ChevronRightIcon className="ml-1.5 size-3.5" aria-hidden />
    </Link>
  )

  const mainContent = (
    <>
      <div className="flex flex-wrap items-start gap-2">
        <h3 className="text-base font-bold text-foreground sm:text-lg">
          {title}
        </h3>
        <span className="inline-flex items-center rounded-full border border-foreground/20 bg-foreground/5 px-2 py-0.5 text-xs font-medium text-foreground/80">
          {dates}
        </span>
      </div>
      <div className="mt-1 flex items-center gap-1.5 text-sm text-foreground/70">
        <span>{company}</span>
        {companyUrl && (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded p-0.5 text-foreground/50 transition-colors hover:text-foreground"
            aria-label={`${company} website`}
          >
            <ArrowTopRightOnSquareIcon className="size-3.5" aria-hidden />
          </a>
        )}
        <span>•</span>
        <span>{location}</span>
      </div>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-foreground/70">
        {description}
      </p>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-foreground/10 bg-foreground/5 px-2 py-0.5 text-xs font-medium text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  )

  if (variant === 'row') {
    return (
      <div className="flex flex-col gap-4 overflow-hidden rounded-lg border border-foreground/10 bg-background p-4 transition-colors sm:flex-row sm:items-start sm:gap-4 sm:p-6">
        <div className="min-w-0 flex-1">{mainContent}</div>
        {showViewDetails && (
          <div className="flex shrink-0 justify-end sm:justify-end">
            {viewDetailsLink}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-foreground/10 bg-background p-4 transition-colors sm:p-6">
      <div className="flex items-start justify-between gap-2">
        <h3 className="min-w-0 flex-1 text-base font-bold text-foreground sm:text-lg">
          {title}
        </h3>
        {companyUrl && (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded p-1 text-foreground/50 transition-colors hover:text-foreground"
            aria-label={`${company} website`}
          >
            <ArrowTopRightOnSquareIcon className="size-4" aria-hidden />
          </a>
        )}
      </div>
      <p className="mt-1 text-sm text-foreground/70">
        {company}
        <span className="mx-1.5">•</span>
        {location}
      </p>
      <span className="mt-2 inline-flex w-fit items-center rounded-full border border-foreground/20 bg-foreground/5 px-2 py-1 text-xs font-medium text-foreground/80">
        {dates}
      </span>
      <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-foreground/70">
        {description}
      </p>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-foreground/10 bg-foreground/5 px-2 py-1 text-xs font-medium text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
   
    </div>
  )
}
