import { Heart, Phone, ShieldCheck, HandHeart, QrCode, FileCheck2, Mail, IndianRupee, Landmark, GraduationCap } from 'lucide-react'
import { Reveal, SectionLabel, DonateLink } from '../shared.jsx'

const steps = [
  { icon: HandHeart, t: 'Choose to Give', d: 'Click Donate Now — it opens our secure Google Form.' },
  { icon: QrCode, t: 'Pay via UPI / Bank', d: 'Use the QR code, UPI ID, or bank details inside the form.' },
  { icon: FileCheck2, t: 'Upload Receipt', d: 'Share your screenshot, name, email and phone for our records.' },
  { icon: Mail, t: 'Get Confirmation', d: 'We acknowledge every contribution personally.' },
]

const tiers = [
  { icon: IndianRupee, k: '₹500', v: 'Books for a child for a year' },
  { icon: Landmark, k: '₹2,500', v: 'Monthly elder care support' },
  { icon: GraduationCap, k: '₹10,000', v: 'One semester scholarship' },
]

export default function Donate() {
  return (
    <section id="donate" className="section-pad bg-background">
      <div className="container-narrow grid lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left */}
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel>Support Our Work</SectionLabel>
            <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl mt-4">
              Every rupee you give has a name attached to it.
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed text-sm sm:text-base">
              Every donation is tracked and directly contributes to educational support,
              mentorship programs, cybersecurity training initiatives, and elderly care services.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-7 card-elegant p-4 sm:p-6 bg-muted/30">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-base sm:text-lg">Transparent by Design</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                    Bank details, UPI ID and a verified QR code are shown inside the donation form —
                    no third-party gateway, no hidden fees, no surprises.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <DonateLink className="btn-accent">
                <Heart className="h-4 w-4" /> Donate Now
              </DonateLink>
              <a href="#contact" className="btn-outline">
                <Phone className="h-4 w-4" /> Talk to Us First
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06}>
                <div className="card-elegant p-4 sm:p-6 h-full">
                  <div className="flex items-center justify-between">
                    <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    <span className="text-xs text-muted-foreground">Step {i + 1}</span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl mt-3">{s.t}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {tiers.map((b, i) => (
              <Reveal key={b.k} delay={0.24 + i * 0.06}>
                <div className="border border-border p-3 sm:p-5 rounded-sm bg-background hover:border-secondary transition-colors text-center sm:text-left">
                  <b.icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent mx-auto sm:mx-0" />
                  <div className="font-display text-xl sm:text-2xl mt-2">{b.k}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 leading-snug">{b.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
