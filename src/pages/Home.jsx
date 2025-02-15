import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Events from '../components/Events'
function Home() {
  return (
    <div className="min-h-screen bg-black">
    <Hero />
    <Highlights />
    <Events />
  </div>
  )
}

export default Home