import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MapPin, Quote, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { VOLUNTEERS } from '../data.js'
import { Reveal, SectionLabel } from '../shared.jsx'

function VolunteerCard({ v, i }) {
  return (
    <Reveal delay={i * 0.07}>
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.28 }}
        className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-elegant hover:border-secondary/50 transition-all duration-300"
      >
        {/* Top bar color stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

        <div className="p-5 sm:p-6 flex flex-col flex-1">
          {/* Avatar + name */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.08 }}
              className={`h-12 w-12 rounded-full ${v.avatarColor} grid place-items-center font-bold text-sm shrink-0`}
            >
              {v.avatar}
            </motion.div>
            <div className="min-w-0">
              <div className="font-display text-lg text-foreground leading-tight">{v.name}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{v.role}</div>
              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 shrink-0" />
                <span className="truncate">{v.location}</span>
              </div>
            </div>
            {/* Tag */}
            <span className={`ml-auto text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full shrink-0 ${v.tagColor}`}>
              {v.tag}
            </span>
          </div>

          {/* What they're doing */}
          <p className="text-sm text-foreground/80 leading-relaxed flex-1">
            {v.doing}
          </p>

          {/* Quote */}
          <blockquote className="mt-4 border-l-2 border-secondary pl-3">
            <Quote className="h-3 w-3 text-accent mb-1 opacity-60" />
            <p className="text-xs text-muted-foreground italic leading-relaxed">{v.quote}</p>
          </blockquote>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
            <span className="text-xs font-medium text-primary bg-primary/8 px-2.5 py-1 rounded-full">
              {v.contribution}
            </span>
            <span className="text-xs text-muted-foreground">
              Since {v.since}
            </span>
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

export default function OurVolunteers() {
  return (
    <section id="our-volunteers" className="section-pad bg-gradient-to-b from-background to-muted/40">
      <div className="container-narrow">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <Reveal className="max-w-xl">
            <SectionLabel>Our Volunteers</SectionLabel>
            <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl mt-4">
              The people who show up,<br className="hidden sm:block" />
              <span className="italic text-primary"> every single week.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>Active volunteers across Uttar Pradesh</span>
              </div>
              <a href="#volunteer" className="btn-primary text-sm px-4 py-2.5 whitespace-nowrap">
                Join Them <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VOLUNTEERS.map((v, i) => (
            <VolunteerCard key={v.name} v={v} i={i} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <Reveal delay={0.2}>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl bg-primary text-primary-foreground p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <Heart className="h-8 w-8 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-xl sm:text-2xl">Could you be our next volunteer?</h3>
                <p className="text-primary-foreground/75 text-sm mt-1 max-w-lg leading-relaxed">
                  We need teachers, engineers, students, retirees — anyone willing to show up
                  consistently. A few hours a week is enough to change a life.
                </p>
              </div>
            </div>
            <a href="#volunteer" className="btn-accent shrink-0 whitespace-nowrap">
              Register Now <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
