import { ShieldCheck, HeartHandshake, Building2 } from 'lucide-react'
import { Reveal } from '../shared.jsx'


const items = [

  { 
    icon: ShieldCheck, 
    t: 'Transparent' 
  },


  { 
    icon: HeartHandshake, 
    t: 'Community-led' 
  },


  { 
    icon: Building2, 
    t: 'Institutional Partners' 
  },

]




export default function TrustStrip() {


  return (


    <div className="border-y border-border bg-muted/50">


      <div
        className="
        container-narrow
        grid
        grid-cols-1
        sm:grid-cols-3
        gap-5
        sm:gap-6
        py-6
        "
      >



        {items.map((item, i) => (


          <Reveal 
            key={item.t} 
            delay={i * 0.05}
          >



            <div
              className="
              flex
              items-center
              justify-center
              gap-3
              text-center
              "
            >



              <item.icon
                className="
                h-5
                w-5
                shrink-0
                text-primary
                "
              />




              <span
                className="
                text-sm
                sm:text-base
                font-medium
                tracking-wide
                text-foreground/80
                "
              >


                {item.t}


              </span>




            </div>




          </Reveal>



        ))}



      </div>


    </div>


  )
}