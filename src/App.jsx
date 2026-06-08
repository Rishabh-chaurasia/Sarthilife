import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import ProblemSolution from './components/ProblemSolution.jsx'
import Mission from './components/Mission.jsx'
import Impact from './components/Impact.jsx'
import Programs from './components/Programs.jsx'
import Cyber from './components/Cyber.jsx'
import Founder from './components/Founder.jsx'
import OurVolunteers from './components/OurVolunteers.jsx'
import Stories from './components/Stories.jsx'
import Gallery from './components/Gallery.jsx'
import Donate from './components/Donate.jsx'
import Volunteer from './components/Volunteer.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <Mission />
        <Impact />
        <Programs />
        <Cyber />
        <Founder />
        <OurVolunteers />
        <Stories />
        <Gallery />
        <Donate />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
