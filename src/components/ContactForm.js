'use client'

import { useState } from 'react'

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : null

const inputClass =
  'w-full rounded-lg border border-foreground/20 bg-background px-4 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30'

export default function ContactForm({ idPrefix = '', showFormspreeHint = false, className = '' }) {
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const pref = idPrefix ? `${idPrefix}-` : ''

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    if (FORMSPREE_URL) {
      try {
        const res = await fetch(FORMSPREE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (res.ok) {
          setStatus('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
        } else {
          setStatus('error')
        }
      } catch {
        setStatus('error')
      }
    } else {
      console.log('Contact form data:', formData)
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label htmlFor={`${pref}name`} className="mb-1.5 block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id={`${pref}name`}
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor={`${pref}email`} className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id={`${pref}email`}
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor={`${pref}subject`} className="mb-1.5 block text-sm font-medium text-foreground">
            Subject <span className="text-foreground/50">(optional)</span>
          </label>
          <input
            id={`${pref}subject`}
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. Job offer, project idea"
          />
        </div>

        <div>
          <label htmlFor={`${pref}message`} className="mb-1.5 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id={`${pref}message`}
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} min-h-[120px] resize-y`}
            placeholder="Your message..."
          />
        </div>

        {status === 'success' && (
          <p className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400">
            Message received. I&apos;ll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
            Something went wrong. Please try again or email me directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-60 sm:w-auto sm:min-w-[140px]"
        >
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>
      </form>

      {showFormspreeHint && !FORMSPREE_URL && (
        <p className="mt-6 text-xs text-foreground/50">
          To receive messages by email, use Formspree: create a free form at formspree.io and set{' '}
          <code className="rounded bg-foreground/10 px-1">NEXT_PUBLIC_FORMSPREE_ID</code> to your form ID.
        </p>
      )}
    </div>
  )
}
