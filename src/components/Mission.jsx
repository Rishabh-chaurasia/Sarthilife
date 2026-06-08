import { BookOpen, Stethoscope } from 'lucide-react'
import { Reveal, SectionLabel } from '../shared.jsx'

const pillars = [
  { icon: BookOpen, t: 'Education & Mentorship', d: 'Following students from school to graduation with scholarships, mentorship and career support.' },
  { icon: Stethoscope, t: 'Dignity in Ageing', d: 'Medical support, weekly companionship, and a caring presence for senior citizens.' },
]

export default function Mission() {
  return (
    <section id="mission" className="section-pad">
      <div className="container-narrow grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel>Our Mission</SectionLabel>
            <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl mt-4 text-foreground">
              A quiet, long-term commitment to the people India often overlooks.
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-2">
          <Reveal delay={0.06}>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              Sarthilife Foundation works with first-generation learners, government
              school children, families on the margins, and elderly citizens living alone.
              We don't run one-off events. We walk with people — through schooling,
              college, careers, and the quiet years of old age.
            </p>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every donation, every volunteer hour, and every partnership goes into
              four focused areas: education, careers, cybersecurity skill building, and elder care.
            </p>
          </Reveal>

          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            {pillars.map((b, i) => (
              <Reveal key={b.t} delay={0.1 + i * 0.06}>
                <div className="card-elegant p-4 sm:p-5 h-full">
                  <b.icon className="h-5 w-5 text-accent" />
                  <h3 className="font-display text-lg sm:text-xl mt-3">{b.t}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
