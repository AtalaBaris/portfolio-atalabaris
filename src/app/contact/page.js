'use client'

import AnimateIn from '@/components/AnimateIn'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
      <AnimateIn className="flex flex-col space-y-4">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-5xl">
          Contact
        </h1>
        <p className="text-lg text-foreground/70">
          Get in touch for projects, collaboration, or just to say hello.
        </p>
      </AnimateIn>

      <hr className="my-8 border-foreground/10" />

      <AnimateIn className="mx-auto max-w-xl" delay={0.1}>
        <ContactForm showFormspreeHint />
      </AnimateIn>
    </main>
  )
}
