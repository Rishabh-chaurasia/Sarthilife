import { motion } from 'framer-motion'
import { Shield, Users, Briefcase, Sparkles } from 'lucide-react'
import { cyberImg } from '../data.js'
import { Reveal } from '../shared.jsx'

const features = [
  { icon: Shield, t: 'Cyber Awareness' },
  { icon: Users, t: 'Student Empowerment' },
  { icon: Briefcase, t: 'Industry Exposure' },
  { icon: Sparkles, t: 'Mentorship' },
]

export default function Cyber() {
  return (
    <section id="cyber" className="section-pad bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-accent/10 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-secondary/10 blur-3xl" aria-hidden />

      <div className="container-narrow grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative">
        {/* Text */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="inline-block w-10 sm:w-14 h-px bg-accent" />
              <span className="eyebrow !text-accent">Collaboration</span>
            </div>
            <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl mt-4 text-primary-foreground">
              Cybersecurity, taught by people who do it for a living.
            </h2>
            <p className="mt-4 text-primary-foreground/75 leading-relaxed text-sm sm:text-base max-w-xl">
              In partnership with <strong className="text-primary-foreground">DCiphers IT Solutions</strong>,
              we bring industry-grade cybersecurity awareness to students from government schools
              and small towns — the ones least likely to encounter this world otherwise.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
              {features.map((f) => (
                <li
                  key={f.t}
                  className="flex items-center gap-2.5 border border-primary-foreground/15 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:border-accent/40 transition-colors"
                >
                  <f.icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" />
                  <span className="text-xs sm:text-sm">{f.t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-primary-foreground/50">
              A Social Impact Initiative — Not a Course
            </p>
          </Reveal>
        </div>

        {/* Image */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <Reveal delay={0.1}>
            <div className="relative">
              <motion.img
                src={cyberImg}
                alt="Cybersecurity workshop with students"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="w-full h-[260px] sm:h-[380px] lg:h-[460px] object-cover rounded-xl sm:rounded-2xl grayscale-[0.15]"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-5 -left-3 sm:-left-5 bg-accent text-accent-foreground p-4 sm:p-5 max-w-[170px] sm:max-w-[200px] rounded-xl shadow-lg"
              >
                <div className="font-display text-2xl sm:text-3xl">100%</div>
                <div className="text-xs mt-1 leading-snug">
                  Fee-free training for every government school participant.
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
