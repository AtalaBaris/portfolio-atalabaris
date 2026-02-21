'use client'

import { useState } from 'react'
import { CodeBracketIcon } from '@heroicons/react/24/outline'

function StarIcon({ filled = false }) {
  return (
    <svg
      className={`size-4 ${filled ? 'text-amber-400' : 'text-foreground/20'}`}
      aria-hidden
      fill="currentColor"
      viewBox="0 0 22 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  )
}

export default function SkillCard({ name, description, level = 5, logo }) {
  const [logoError, setLogoError] = useState(false)
  const showLogo = logo && !logoError

  const logoBox = (
    <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 p-2">
      {showLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt=""
          aria-hidden
          width={48}
          height={48}
          className="size-full object-contain"
          onError={() => setLogoError(true)}
        />
      ) : (
        <CodeBracketIcon className="size-6 text-foreground/70" aria-hidden />
      )}
    </div>
  )

  return (
    <div className="relative overflow-hidden rounded-lg border border-foreground/10 bg-background p-4 transition-colors hover:bg-foreground/[0.02] sm:p-6">
      <div className="flex h-[200px] flex-col justify-between sm:h-[220px]">
        <div className="flex items-start gap-3">
          {logoBox}
          <div className="min-w-0 flex-1 space-y-2">
            <h3 className="font-bold text-foreground">{name}</h3>
            <p className="text-sm leading-relaxed text-foreground/70">
              {description}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-0.5" aria-label={`${level} out of 5`}>
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon key={i} filled={i <= level} />
          ))}
        </div>
      </div>
    </div>
  )
}
