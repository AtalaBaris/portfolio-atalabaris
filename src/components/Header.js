'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from '@/components/ThemeToggle'

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(href + '/'))

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav
        aria-label="Main navigation"
        className="container mx-auto flex max-w-8xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        {/* Logo + nav links — sol tarafa dayalı */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/"
            className="font-handwriting animate-header-scale-in text-xl font-semibold tracking-tight text-foreground transition-colors hover:opacity-80 sm:text-2xl"
          >
            <span className="sr-only">Home</span>
            Barış Atala
          </Link>
          <div className="hidden items-center gap-6 md:flex md:gap-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`animate-header-link-drop text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.href)
                    ? 'text-foreground text-accent'
                    : 'text-foreground/80'
                }`}
                style={{ animationDelay: `${(index + 1) * 0.14}s` }}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Theme + mobil menü — sağda, merdiven devamı */}
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="animate-header-link-drop inline-block" style={{ animationDelay: '0.6s' }}>
            <ThemeToggle />
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="animate-header-link-drop inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:bg-foreground/5 hover:text-foreground md:hidden"
            style={{ animationDelay: '0.74s' }}
            aria-label="Open menu"
          >
            <Bars3Icon className="size-6" aria-hidden />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-50 bg-black/50" aria-hidden />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-background p-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link
              href="/"
              className="font-handwriting text-xl font-semibold tracking-tight text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Barış Atala
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
              aria-label="Close menu"
            >
              <XMarkIcon className="size-6" aria-hidden />
            </button>
          </div>
          <div className="mt-6 flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-lg px-3 py-2.5 text-base font-medium transition-colors hover:bg-foreground/5 hover:text-accent ${
                  isActive(item.href)
                    ? 'bg-foreground/10 text-accent'
                    : 'text-foreground/80'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
