import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { IMPACT } from '../data.js'
import { useCounter } from '../shared.jsx'

function ImpactCard({ stat, inView, delay }) {
  const n = useCounter(stat.value, inView)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="border-t border-primary-foreground/20 pt-5 sm:pt-6"
    >
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
        {n.toLocaleString('en-IN')}
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-xs sm:text-sm tracking-wide text-primary-foreground/70 leading-snug">{stat.label}</div>
    </motion.div>
  )
}

export default function Impact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="impact" className="section-pad bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-accent/15 blur-3xl" aria-hidden />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="inline-block w-10 sm:w-14 h-px bg-secondary" />
            <span className="eyebrow !text-secondary">Our Impact So Far</span>
          </div>
          <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl mt-4">
            Behind every number is a person whose life moved forward.
          </h2>
        </motion.div>

        <div ref={ref} className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {IMPACT.map((stat, i) => (
            <ImpactCard key={stat.label} stat={stat} inView={inView} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
