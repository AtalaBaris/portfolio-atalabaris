'use client'

import { useState, useEffect, useRef } from 'react'
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const STORAGE_KEY = 'theme'
const ACCENT_KEY = 'accent'

const APPEARANCE = [
  { value: 'dark', label: 'Dark', Icon: MoonIcon },
  { value: 'light', label: 'Light', Icon: SunIcon },
  { value: 'system', label: 'System', Icon: ComputerDesktopIcon },
]

const ACCENTS = [
  { value: 'indigo', label: 'Indigo', color: '#6366f1' },
  { value: 'red', label: 'Red', color: '#dc2626' },
  { value: 'cyan', label: 'Cyan', color: '#0891b2' },
  { value: 'green', label: 'Green', color: '#16a34a' },
  { value: 'amber', label: 'Amber', color: '#d97706' },
  { value: 'violet', label: 'Violet', color: '#7c3aed' },
  { value: 'rose', label: 'Rose', color: '#e11d48' },
]

function getSystemDark() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyTheme(theme) {
  const root = document.documentElement
  const isLight = theme === 'light' || (theme === 'system' && !getSystemDark())
  if (isLight) {
    root.classList.add('light')
  } else {
    root.classList.remove('light')
  }
}

function applyAccent(accent) {
  document.documentElement.setAttribute('data-accent', accent)
}

export default function ThemeToggle() {
  const [theme, setThemeState] = useState('dark')
  const [accent, setAccentState] = useState('indigo')
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY) || 'dark'
    const storedAccent = localStorage.getItem(ACCENT_KEY) || 'indigo'
    setThemeState(storedTheme)
    setAccentState(storedAccent)
    applyTheme(storedTheme)
    applyAccent(storedAccent)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme('system')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mounted, theme])

  useEffect(() => {
    if (!open) return
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [open])

  function selectTheme(value) {
    setThemeState(value)
    localStorage.setItem(STORAGE_KEY, value)
    applyTheme(value)
  }

  function selectAccent(value) {
    setAccentState(value)
    localStorage.setItem(ACCENT_KEY, value)
    applyAccent(value)
  }

  const currentAppearance = APPEARANCE.find((t) => t.value === theme) || APPEARANCE[0]
  const CurrentIcon = currentAppearance.Icon

  if (!mounted) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-foreground/20 bg-transparent">
        <SunIcon className="size-5 text-foreground/60" aria-hidden />
      </div>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-center gap-1 rounded-lg border border-foreground/20 p-2 text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
        aria-label="Toggle theme and accent"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <CurrentIcon className="size-5" aria-hidden />
     
        <ChevronDownIcon
          className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border border-foreground/10 bg-background py-2 shadow-lg"
          role="dialog"
          aria-label="Theme and accent options"
        >
          <p className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground/50">
            Görünüm
          </p>
          <div className="flex flex-col py-1">
            {APPEARANCE.map(({ value, label, Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => selectTheme(value)}
                className="flex items-center gap-2 px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-foreground/5"
              >
                <Icon className="size-4 shrink-0" aria-hidden />
                {label}
                {theme === value && <span className="ml-auto text-foreground/60">✓</span>}
              </button>
            ))}
          </div>
          <p className="mt-2 border-t border-foreground/10 px-3 pt-2 text-xs font-medium uppercase tracking-wider text-foreground/50">
            Renk (buton / link)
          </p>
          <div className="mt-2 flex flex-wrap gap-2 px-3">
            {ACCENTS.map(({ value, label, color }) => (
              <button
                key={value}
                type="button"
                onClick={() => selectAccent(value)}
                title={label}
                className={`flex size-8 items-center justify-center rounded-full border-2 transition-transform hover:scale-110 ${
                  accent === value
                    ? 'border-foreground ring-2 ring-foreground/20'
                    : 'border-transparent hover:border-foreground/30'
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Accent ${label}`}
                aria-pressed={accent === value}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
