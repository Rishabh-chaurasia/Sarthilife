import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Heart, ChevronRight } from 'lucide-react'
import { NAV, DONATION_FORM_URL } from '../data.js'
import { DonateLink } from '../shared.jsx'


export default function Navbar() {


  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)



  useEffect(() => {

    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()

    window.addEventListener(
      'scroll',
      onScroll,
      { passive:true }
    )


    return () =>
      window.removeEventListener(
        'scroll',
        onScroll
      )

  }, [])





  // Mobile menu open hone par page scroll lock

  useEffect(() => {


    if(open){

      document.body.style.overflow = 'hidden'

    }else{

      document.body.style.overflow = ''

    }


    return () => {

      document.body.style.overflow = ''

    }


  }, [open])







  return (


    <header

      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
        ?
        'bg-white border-b border-gray-200 shadow-sm'
        :
        'bg-transparent'
      }`}

    >




      <div className="container-narrow flex items-center justify-between py-4">





        {/* Logo */}



        <a 
          href="#home"
          className="flex items-center gap-3 group"
        >



          <motion.span

            whileHover={{
              scale:1.08
            }}

            className="
            grid
            place-items-center
            h-10
            w-10
            rounded-full
            bg-primary
            text-primary-foreground
            font-display
            text-lg
            shadow-soft
            "

          >

            S

          </motion.span>





          <span className="flex flex-col leading-tight">


            <span className="font-display text-lg text-black">

              Sarthilife

            </span>



            <span className="text-[10px] tracking-[0.28em] uppercase text-gray-500">

              Foundation

            </span>



          </span>



        </a>









        {/* Desktop Navbar */}


        <nav className="hidden lg:flex items-center gap-6">



          {
            NAV.map((n)=>(


              <a

                key={n.href}

                href={n.href}

                className="
                text-[13px]
                font-medium
                text-black/70
                hover:text-primary
                transition-colors
                duration-200
                relative
                group
                "

              >


                {n.label}


                <span

                  className="
                  absolute
                  -bottom-0.5
                  left-0
                  w-0
                  h-px
                  bg-primary
                  group-hover:w-full
                  transition-all
                  duration-300
                  "

                />


              </a>


            ))
          }



        </nav>








        {/* Desktop Donate */}



        <div className="hidden lg:flex items-center gap-3">


          <DonateLink className="btn-accent text-sm px-4 py-2">


            <Heart className="h-4 w-4"/>


            Donate


          </DonateLink>


        </div>









        {/* Mobile Hamburger */}




        <button

          className="
          lg:hidden
          p-2
          -mr-2
          text-black
          rounded-sm
          hover:bg-gray-100
          transition-colors
          "

          aria-label="Open menu"

          onClick={()=>setOpen(true)}

        >


          <Menu className="h-7 w-7"/>


        </button>





      </div>









      {/* Mobile Menu */}



      <AnimatePresence>


      {

      open && (



      <motion.div


        initial={{
          opacity:0,
          x:'100%'
        }}


        animate={{
          opacity:1,
          x:0
        }}


        exit={{
          opacity:0,
          x:'100%'
        }}



        transition={{
          duration:0.3,
          ease:[0.22,1,0.36,1]
        }}




        className="
        fixed
        inset-0
        z-[70]
        bg-white
        text-black
        overflow-y-auto
        "

      >






        <div
          className="
          flex
          items-center
          justify-between
          px-6
          py-4
          border-b
          border-gray-200
          "
        >



          <span className="font-display text-lg text-black">

            Sarthilife Foundation

          </span>





          <button

            onClick={()=>setOpen(false)}

            aria-label="Close menu"

            className="
            p-2
            -mr-2
            rounded-sm
            hover:bg-gray-100
            transition-colors
            "

          >


            <X className="h-6 w-6 text-black"/>


          </button>





        </div>








        <nav className="flex flex-col px-6 py-6 gap-1">



          {

          NAV.map((n,i)=>(


            <motion.a


              key={n.href}

              href={n.href}


              initial={{
                opacity:0,
                x:20
              }}


              animate={{
                opacity:1,
                x:0
              }}


              transition={{
                delay:i*0.05+0.1
              }}


              onClick={()=>setOpen(false)}



              className="
              flex
              items-center
              justify-between
              py-4
              border-b
              border-gray-200
              font-display
              text-2xl
              text-black
              "


            >


              {n.label}


              <ChevronRight className="h-5 w-5 text-gray-500"/>


            </motion.a>


          ))

          }










          <motion.div


            initial={{
              opacity:0,
              y:16
            }}


            animate={{
              opacity:1,
              y:0
            }}



            transition={{
              delay:NAV.length*0.05+0.15
            }}



            className="mt-6"


          >




            <DonateLink className="btn-accent w-full justify-center">


              <Heart className="h-4 w-4"/>


              Donate Now



            </DonateLink>




          </motion.div>





        </nav>






      </motion.div>



      )


      }


      </AnimatePresence>





    </header>

  )
}