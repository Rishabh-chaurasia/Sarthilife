import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// ─── useCounter hook ─────────────────────────────────────────────
export function useCounter(target, start, duration = 1600) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf = 0
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])
  return n
}

// ─── useIntersection hook ─────────────────────────────────────────
export function useIntersection(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (options.once !== false) obs.disconnect()
      }
    }, { rootMargin: options.margin || '-80px', threshold: 0 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

// ─── Reveal component ─────────────────────────────────────────────
export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── SectionLabel component ───────────────────────────────────────
export function SectionLabel({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="rule-gold" />
      <span className={`eyebrow${light ? ' !text-accent' : ''}`}>{children}</span>
    </div>
  )
}

// ─── DonateLink component ─────────────────────────────────────────
import { DONATION_FORM_URL } from './data.js'

export function DonateLink({ className = 'btn-accent', children }) {
  return (
    <a
      href={DONATION_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

// ─── Field component ──────────────────────────────────────────────
export function Field({ label, name, type = 'text', required, className = '' }) {
  return (
    <div className={className}>
      <label className="text-xs font-medium tracking-[0.18em] uppercase text-foreground/70 block">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border border-border rounded-sm px-3 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  )
}
