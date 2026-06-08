import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { founderImg } from '../data.js'
import { Reveal, SectionLabel } from '../shared.jsx'


export default function Founder() {

  return (

    <section id="founder" className="section-pad">


      <div className="container-narrow">


        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">





          {/* ── Left: Photo ─────────────────────────────────── */}


          <div className="lg:col-span-4">


            <Reveal>


              <div className="relative">


                <motion.img

                  src={founderImg}

                  alt="Dilip Kumar Srivastava — Founder, SarthiLife Foundation"

                  loading="lazy"


                  whileHover={{
                    scale: 1.015
                  }}


                  transition={{
                    duration: 0.5
                  }}


                  className="
                  w-full
                  aspect-[4/5]
                  object-cover
                  object-top
                  rounded-2xl
                  shadow-elegant
                  grayscale-[0.08]
                  "

                />






                {/* Nameplate */}


                <motion.div


                  initial={{
                    opacity: 0,
                    y: 16
                  }}


                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}


                  viewport={{
                    once: true
                  }}


                  transition={{
                    delay: 0.35,
                    duration: 0.5
                  }}


                  className="
                  absolute
                  -bottom-5
                  left-4
                  right-4
                  bg-background
                  border
                  border-border
                  rounded-xl
                  px-5
                  py-4
                  shadow-lg
                  "

                >


                  <div className="flex items-center gap-3">


                    <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-bold shrink-0">

                      DK

                    </span>



                    <div>


                      <div className="font-display text-base text-foreground leading-tight">

                        Dilip Kumar Srivastava

                      </div>


                      <div className="text-xs text-muted-foreground mt-0.5">

                        Founder · Mentor & Social Impact Leader

                      </div>


                    </div>


                  </div>



                </motion.div>




              </div>



            </Reveal>


          </div>









          {/* ── Right Content ───────────────────────────── */}



          <div className="lg:col-span-8 pt-6 lg:pt-0">



            <Reveal delay={0.06}>


              <SectionLabel>

                The Founder

              </SectionLabel>




              <h2 className="display-serif text-3xl sm:text-4xl lg:text-5xl mt-4 text-foreground">


                25+ years of experience,
                
                <br className="hidden sm:block" />

                dedicated to creating impact.


              </h2>





              <p className="mt-5 text-foreground/80 leading-relaxed text-base sm:text-lg max-w-xl">


                Dilip Kumar Srivastava brings more than two decades of leadership
                experience from some of the world's leading technology and
                cybersecurity organizations.


              </p>





              <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">


                Throughout his professional journey, he has held key leadership
                positions with several renowned companies including McAfee and
                FireEye, helping organizations grow while mentoring countless
                professionals along the way.


              </p>






              <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">


                Through SarthiLife Foundation, he now channels his knowledge and
                experience towards supporting students, guiding careers, building
                digital awareness, and bringing care to communities that need it most.


              </p>



            </Reveal>









            {/* Experience Highlight */}



            <Reveal delay={0.14}>


              <div className="mt-8">


                <div className="flex items-center gap-2 mb-5">


                  <Award className="h-4 w-4 text-accent" />



                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">


                    Professional Journey


                  </span>



                </div>







                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">


                  <p className="text-foreground/80 leading-relaxed">


                    A career built across multiple global technology companies,
                    working in senior roles and transforming years of industry
                    experience into mentorship, guidance, and meaningful social change.


                  </p>



                </div>





              </div>



            </Reveal>



          </div>



        </div>


      </div>


    </section>

  )

}