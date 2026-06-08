import { STORIES } from '../data.js'
import { Reveal, SectionLabel } from '../shared.jsx'

export default function Stories() {
  return (
    <section id="stories" className="section-pad bg-muted/40">
      <div className="container-narrow">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-10 sm:mb-12">
          <Reveal className="max-w-xl">
            <SectionLabel>Stories from the Ground</SectionLabel>
            <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl mt-4">
              Real people. Real change. Documented honestly.
            </h2>
          </Reveal>
          <Reveal delay={0.06} className="max-w-sm">
            <p className="text-muted-foreground text-sm leading-relaxed">
              We share these stories with consent — names and details changed where needed to protect privacy.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {STORIES.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07}>
              <article className="card-elegant overflow-hidden h-full flex flex-col sm:grid sm:grid-cols-5">
                <div className="h-44 sm:h-full sm:col-span-2 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="sm:col-span-3 p-4 sm:p-5 lg:p-6 flex flex-col">
                  <span className="eyebrow">{s.tag}</span>
                  <h3 className="font-display text-lg sm:text-xl lg:text-2xl mt-2 sm:mt-3 leading-snug">{s.title}</h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">{s.body}</p>
                  <div className="mt-4 pt-3 border-t border-border text-xs text-foreground/70">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground"> · {s.place}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
