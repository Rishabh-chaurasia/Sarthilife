import { Heart, Mail, Phone, MapPin } from 'lucide-react'
import { NAV } from '../data.js'
import { DonateLink } from '../shared.jsx'

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground pt-12 sm:pt-16 pb-8">
      <div className="container-narrow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-primary-foreground text-foreground font-display text-base sm:text-lg">
              S
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg sm:text-xl">Sarthilife Foundation</div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-primary-foreground/60">
                Creating Opportunities. Transforming Lives.
              </div>
            </div>
          </div>
          <p className="mt-5 text-xs sm:text-sm text-primary-foreground/70 leading-relaxed max-w-md">
            A people-first social impact organization working across education,
            careers, cybersecurity skill-building, and elder care in India.
          </p>
          <DonateLink className="mt-5 inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 sm:px-5 py-2.5 sm:py-3 rounded-sm text-xs sm:text-sm font-medium hover:brightness-95 transition-all">
            <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Donate Now
          </DonateLink>
        </div>

        {/* Nav */}
        <div className="lg:col-span-3">
          <div className="eyebrow !text-primary-foreground/60 text-[10px]">Explore</div>
          <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            {NAV.slice(0, 7).map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-primary-foreground/75 hover:text-primary-foreground transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-4">
          <div className="eyebrow !text-primary-foreground/60 text-[10px]">Contact</div>
          <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2">
              <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 mt-0.5" />
              <span className="break-all">contact@sarthilife.org</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" /> +91 7052557408
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 mt-0.5" />
              <span>Gurugram, Haryana, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-narrow mt-10 sm:mt-12 pt-5 sm:pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] sm:text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Sarthilife Foundation. All rights reserved.</p>
        <p>Built with care, in India.</p>
      </div>
    </footer>
  )
}
