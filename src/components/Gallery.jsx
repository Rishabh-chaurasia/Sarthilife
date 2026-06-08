import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'
import { GALLERY } from '../data.js'
import { Reveal, SectionLabel } from '../shared.jsx'

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad">
      <div className="container-narrow">
        <div className="flex items-end justify-between flex-wrap gap-5 mb-8 sm:mb-10">
          <Reveal>
            <SectionLabel>From The Field</SectionLabel>
            <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl mt-4">
              A look at the work, unfiltered.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Camera className="h-4 w-4" />
              Documentary photographs from our programs
            </div>
          </Reveal>
        </div>

        {/* Mobile: 2-col simple grid; md+: auto-rows masonry-like */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:auto-rows-[200px] gap-2.5 sm:gap-3 md:gap-4">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
              className={`relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer${
                g.span ? ` md:${g.span}` : ''
              }`}
              style={{ minHeight: '140px' }}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <figcaption className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3 text-primary-foreground text-[10px] sm:text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {g.cat}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
