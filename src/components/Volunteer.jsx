import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { Reveal, SectionLabel, Field } from '../shared.jsx'

const roles = [
  'Weekend mentoring at government schools',
  'Career counseling for Class 12 students',
  'Elder companionship visits',
  'Cybersecurity workshop support',
]

export default function Volunteer() {
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 900)
  }

  return (
    <section id="volunteer" className="section-pad bg-secondary/10">
      <div className="container-narrow grid lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left */}
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel>Join Us</SectionLabel>
            <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl mt-4">
              A few hours of your week can rewrite someone's year.
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed text-sm sm:text-base">
              We welcome teachers, students, working professionals, retired citizens, and anyone
              willing to show up consistently. You don't need to be an expert — you need to care.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-6 space-y-3">
              {roles.map((x, i) => (
                <motion.li
                  key={x}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.2 }}
                  className="flex items-start gap-3 text-xs sm:text-sm text-foreground/85"
                >
                  <Calendar className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {x}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-elegant p-8 sm:p-10 text-center bg-background"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                >
                  <CheckCircle2 className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto" />
                </motion.div>
                <h3 className="font-display text-xl sm:text-2xl mt-4">Thank you for stepping forward.</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
                  A team member from Sarthilife Foundation will reach out within 3 working days.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={onSubmit}
                className="card-elegant p-5 sm:p-8 bg-background grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Profession" name="profession" />
                <Field label="Skills" name="skills" className="sm:col-span-2" />

                <div className="sm:col-span-2">
                  <label className="text-xs font-medium tracking-[0.18em] uppercase text-foreground/70 block">
                    Area of Interest
                  </label>
                  <select
                    name="interest"
                    className="mt-2 w-full bg-transparent border border-border rounded-sm px-3 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option>Education & Mentorship</option>
                    <option>Career Guidance</option>
                    <option>Cybersecurity Workshops</option>
                    <option>Elder Care</option>
                    <option>Community Engagement</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-medium tracking-[0.18em] uppercase text-foreground/70 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    className="mt-2 w-full bg-transparent border border-border rounded-sm px-3 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us what draws you to this work…"
                  />
                </div>

                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy. Your details stay with the foundation.
                  </p>
                  <button type="submit" disabled={loading} className="btn-primary shrink-0 justify-center sm:justify-start">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                          className="inline-block w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full"
                        />
                        Submitting…
                      </span>
                    ) : (
                      <><ArrowUpRight className="h-4 w-4" /> Register as Volunteer</>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
