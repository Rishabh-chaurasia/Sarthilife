import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import { heroImg } from '../data.js'
import { Reveal, SectionLabel } from '../shared.jsx'


const stats = [
  { v: '100+', l: 'Students Guided' },
  { v: '50+', l: 'Elderly Lives Supported' },
  { v: '25+', l: 'Years of Mentorship' },
]


export default function Hero() {

  return (

    <section 
      id="home"
      className="relative overflow-hidden py-12 lg:py-20 pb-24 lg:pb-32"
    >


      {/* Background decorative blobs */}

      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-secondary/20 blur-3xl -z-10" />

      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-primary/10 blur-3xl -z-10" />




      <div className="container-narrow grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">





        {/* Text */}

        <div className="lg:col-span-7 flex flex-col justify-center">


          <Reveal>

            <SectionLabel>
              An Indian Social Impact Initiative
            </SectionLabel>

          </Reveal>






          <Reveal delay={0.08}>


            <h1 className="display-serif text-4xl sm:text-6xl lg:text-7xl mt-5 text-foreground">


              A Little Support.

              <br />


              <span className="italic text-primary">

                A New Hope.

              </span>


              <br />


              A Better Tomorrow.


            </h1>


          </Reveal>








          <Reveal delay={0.14}>


            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">


              SarthiLife believes every child deserves the chance
              to dream and every elder deserves to feel cared for.
              We create brighter futures through education, career guidance,
              digital awareness, mentorship, and compassionate support.


            </p>


          </Reveal>








          <Reveal delay={0.2}>


            <div className="mt-8 flex flex-wrap gap-3">


              <a
                href="#volunteer"
                className="btn-outline"
              >

                Become a Volunteer

                <ArrowRight className="h-4 w-4" />


              </a>


            </div>


          </Reveal>









          <Reveal delay={0.28}>


            <dl className="mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">


              {

                stats.map((s)=>(

                  <div
                    key={s.l}
                    className="border-l-2 border-secondary pl-3 sm:pl-4"
                  >


                    <dt className="font-display text-xl sm:text-2xl text-primary">

                      {s.v}

                    </dt>



                    <dd className="text-xs text-muted-foreground mt-1 leading-snug">

                      {s.l}

                    </dd>


                  </div>


                ))

              }


            </dl>


          </Reveal>


        </div>










        {/* Image */}

        <div className="lg:col-span-5 relative">


          <Reveal delay={0.12}>


            <div className="relative mt-6 lg:mt-0">








              <motion.img

                src={heroImg}

                alt="SarthiLife social impact work"

                loading="eager"


                whileHover={{
                  scale:1.02
                }}


                transition={{
                  duration:0.5
                }}


                className="
                w-full

                h-auto

                max-h-none

                object-contain

                rounded-sm

                shadow-elegant

                bg-white

                "


              />









              {/* Quote card */}


              <motion.div


                initial={{
                  opacity:0,
                  y:20
                }}


                animate={{
                  opacity:1,
                  y:0
                }}


                transition={{
                  delay:0.5,
                  duration:0.6
                }}



                className="
                relative

                mt-4

                lg:absolute

                lg:-bottom-12

                lg:right-4

                lg:w-72

                bg-background

                border

                border-border

                p-4

                rounded-sm

                shadow-lg

                "


              >




                <div className="flex items-start gap-3">


                  <Quote className="h-5 w-5 text-accent shrink-0 mt-1"/>


                  <p className="text-sm text-foreground/85 leading-relaxed">


                    "Every small act of support can become someone's turning point."



                    <span className="block mt-2 text-xs text-muted-foreground">


                      — The SarthiLife Promise


                    </span>


                  </p>


                </div>



              </motion.div>





            </div>


          </Reveal>


        </div>




      </div>


    </section>

  )
}