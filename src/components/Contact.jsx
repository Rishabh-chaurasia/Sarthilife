import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Reveal, SectionLabel, Field } from '../shared.jsx'

function ContactRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4 border-b border-border pb-4">
      <span className="h-9 w-9 sm:h-10 sm:w-10 grid place-items-center bg-primary/10 text-primary rounded-lg shrink-0">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </span>
      <div>
        <div className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{label}</div>
        <div className="font-display text-base sm:text-lg text-foreground mt-0.5 break-all sm:break-normal">{value}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="container-narrow grid lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left */}
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl mt-4">
              We'd love to hear from you.
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed text-sm sm:text-base">
              Whether you'd like to partner, contribute, refer a child or family,
              or simply understand how we work — write to us. We reply personally.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-7 space-y-4">
              <ContactRow icon={Mail} label="Email" value="hello@sarthilifefoundation.org" />
              <ContactRow icon={Phone} label="Phone" value="+91 7052557408" />
              <ContactRow icon={MapPin} label="Office" value="Gurugram, Haryana, India" />
            </div>
          </Reveal>
        </div>

        {/* Right */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <form className="card-elegant p-5 sm:p-8 bg-background grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Name" name="cname" required />
              <Field label="Email" name="cemail" type="email" required />
              <Field label="Subject" name="csubject" className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-xs font-medium tracking-[0.18em] uppercase text-foreground/70 block">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full bg-transparent border border-border rounded-sm px-3 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us how we can help…"
                />
              </div>
              <div className="sm:col-span-2 flex justify-end">
                <button type="button" className="btn-primary w-full sm:w-auto justify-center">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
