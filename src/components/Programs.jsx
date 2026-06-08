import { motion } from 'framer-motion'
import { GraduationCap, Compass, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react'
import { heroImg, elderImg, careerImg, cyberImg } from '../data.js'
import { Reveal, SectionLabel } from '../shared.jsx'

const PROGRAMS = [
  {
    icon: GraduationCap,
    title: 'Education Support',
    image: heroImg,
    blurb: 'Reaching government school children and first-generation learners with the resources they need to keep learning.',
    points: ['Government school outreach', 'Scholarships & learning resources', 'Student sponsorship till graduation', 'Long-term mentorship'],
  },
  {
    icon: Compass,
    title: 'Career Guidance',
    image: careerImg,
    blurb: 'Helping students choose the right path after Class 12 with honest, experience-led counseling.',
    points: ['Career counseling after Class 12', 'Engineering, BCA & MCA guidance', 'Interview preparation', 'Professional mentoring'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Skill Development',
    image: cyberImg,
    blurb: 'In collaboration with DCiphers IT Solutions — bringing industry-led cyber awareness to students.',
    points: ['Industry-led training', 'Hands-on workshops', 'Awareness programs', 'Mentorship from practitioners'],
  },
  {
    icon: HeartHandshake,
    title: 'Elder Care & Companionship',
    image: elderImg,
    blurb: "Standing with senior citizens through dementia, Parkinson's and the quieter battles of ageing.",
    points: ["Dementia & Parkinson's support", 'Medicine support', 'Emotional wellbeing', 'Companionship visits'],
  },
]

export default function Programs() {
  return (
    <section id="programs" className="section-pad">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-10 sm:mb-14">
          <Reveal className="lg:col-span-7">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl mt-4">
              Four programs. One promise — we stay until it matters.
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-5">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Our programs are designed for long arcs, not quick wins. Each one grows out of years of work with the communities we serve.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <article className="card-elegant overflow-hidden h-full flex flex-col group">
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-background/95 px-2.5 py-1.5 rounded-sm shadow-sm">
                    <p.icon className="h-3.5 w-3.5 text-primary" />
                    <span className="text-[10px] font-medium tracking-wider uppercase text-foreground">Program</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl sm:text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
                  <ul className="mt-4 space-y-1.5 sm:space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80">
                        <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
