import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import AboutHome from '../components/AboutHome'
import Footer from '../components/Footer/Footer'
import ContactSection from '../components/ContactSection'
import Poster from '../components/Poster'



function Home() {
  return (
    <div className="min-h-screen bg-black">
    <Hero />
    <Poster />
    <AboutHome />
    <Highlights />
   <ContactSection />
    
    <Footer />
  </div>
  )
}

export default Home