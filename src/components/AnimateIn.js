'use client'

import { useRef, useEffect, useState } from 'react'

/**
 * Scroll'da viewport'a girince animasyonu tetikler.
 * @param {string} animation - 'fade-in-up' | 'fade-in' | 'scale-in'
 * @param {number} delay - animasyon gecikmesi (saniye), örn. stagger için
 * @param {number} threshold - görünürlük eşiği 0-1
 * @param {boolean} once - sadece bir kez tetikle (tekrar scroll'da tekrarlanmasın)
 */
export default function AnimateIn({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.08,
  once = true,
  as: Tag = 'div',
  className = '',
  ...props
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  const animClass = `animate-${animation}`
  const style = delay > 0 ? { animationDelay: `${delay}s` } : undefined

  return (
    <Tag
      ref={ref}
      className={`${animClass} ${inView ? 'in-view' : ''} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  )
}
