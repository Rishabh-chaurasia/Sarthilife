import { motion } from 'framer-motion'
import { ArrowRight, Lightbulb } from 'lucide-react'
import { PROBLEMS } from '../data.js'
import { Reveal, SectionLabel } from '../shared.jsx'

export default function ProblemSolution() {
  return (
    <section id="problem" className="section-pad bg-muted/40">
      <div className="container-narrow">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <Reveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="rule-gold" />
              <span className="eyebrow">Why We Exist</span>
              <span className="rule-gold" />
            </div>
            <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Real problems. <span className="italic text-primary">Real solutions.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              Scan this once and you'll know exactly what Sarthilife does and who it helps.
            </p>
          </Reveal>
        </div>

        {/* Problem → Solution cards */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
          {PROBLEMS.map((item, i) => (
            <Reveal key={item.problem} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`relative rounded-xl border-2 ${item.color} p-5 sm:p-6 overflow-hidden group`}
              >
                {/* Background emoji watermark */}
                <span className="absolute -right-3 -bottom-3 text-7xl opacity-10 select-none pointer-events-none group-hover:opacity-20 transition-opacity duration-300">
                  {item.emoji}
                </span>

                {/* Problem row */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl shrink-0 mt-0.5">{item.emoji}</span>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-foreground/40 block mb-1">The Problem</span>
                    <p className="font-display text-lg sm:text-xl text-foreground leading-snug">{item.problem}</p>
                  </div>
                </div>

                {/* Arrow divider */}
                <div className={`flex items-center gap-2 mb-4 ${item.accent}`}>
                  <div className="flex-1 h-px bg-current opacity-20" />
                  <ArrowRight className="h-4 w-4 shrink-0" />
                  <div className="flex-1 h-px bg-current opacity-20" />
                </div>

                {/* Solution row */}
                <div className="flex items-start gap-3">
                  <Lightbulb className={`h-5 w-5 shrink-0 mt-0.5 ${item.accent}`} />
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-foreground/40 block mb-1">Our Solution</span>
                    <p className={`font-medium text-base leading-snug ${item.accent}`}>{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA row */}
        <Reveal delay={0.32}>
          <div className="mt-10 text-center">
            <a href="#programs" className="btn-primary inline-flex">
              See All Programs <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
