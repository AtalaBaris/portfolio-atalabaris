'use client'

import { useState, useEffect } from 'react'
import { useRef } from 'react'
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const STORAGE_KEY = 'theme'
const THEMES = [
  
  { value: 'dark', label: 'Dark', Icon: MoonIcon },
  { value: 'light', label: 'Light', Icon: SunIcon },
  { value: 'system', label: 'System', Icon: ComputerDesktopIcon },
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

export default function ThemeToggle() {
  const [theme, setThemeState] = useState('dark')
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)

  // 1) Sayfa yüklendiğinde localStorage'dan oku ve uygula
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) || 'dark'
    setThemeState(stored)
    applyTheme(stored)
    setMounted(true)
  }, [])

  // 2) System seçiliyken OS tema değişikliğini dinle
  useEffect(() => {
    if (!mounted || theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme('system')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mounted, theme])

  // 3) Dışarı tıklanınca dropdown kapat
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
    setOpen(false)
  }

  const current = THEMES.find((t) => t.value === theme) || THEMES[2]
  const CurrentIcon = current.Icon

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
        className="flex items-center justify-center rounded-lg border border-foreground/20 p-2 text-foreground/80 transition-colors hover:bg-foreground/5 hover:text-foreground"
        aria-label="Toggle theme"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <CurrentIcon className="size-5" aria-hidden />
        <ChevronDownIcon
          className={`ml-1 size-4 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-50 mt-2 w-40 rounded-lg border border-foreground/10 bg-background py-1 shadow-lg"
          role="menu"
        >
          {THEMES.map(({ value, label, Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => selectTheme(value)}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-foreground/5"
              role="menuitem"
            >
              <Icon className="size-4 shrink-0" aria-hidden />
              {label}
              {theme === value && (
                <span className="ml-auto text-xs text-foreground/60">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
