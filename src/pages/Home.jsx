import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
// import Events from '../components/Events'
import AboutHome from '../components/AboutHome'
function Home() {
  return (
    <div className="min-h-screen bg-black">
    <Hero />
    <Highlights />
    {/* <Events /> */}
    <AboutHome />
  </div>
  )
}

export default Home