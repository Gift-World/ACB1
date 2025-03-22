import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import AboutHome from '../components/AboutHome'
import Footer from '../components/Footer/Footer'
// import ContactSection from '../components/ContactSection'
import Poster from '../components/Poster'
// import Terms from '../components/Terms'
import Partners from  '../components/Partners'
import Podcast from '../components/Podcast'

function Home() {
  return (
    <div className="min-h-screen w-full bg-black overflow-hidden">
    <Hero />
    <AboutHome />
    {/* <Terms /> */}
    <Poster />
    <Podcast />
    
    <Partners />
    <Highlights />
   {/* <ContactSection /> */}
    
    <Footer />
  </div>
  )
}

export default Home