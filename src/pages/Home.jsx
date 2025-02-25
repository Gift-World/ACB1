import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import { motion } from 'framer-motion';
// import Events from '../components/Events'
import AboutHome from '../components/AboutHome'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-black">
    <Hero />
    <AboutHome />
    <Highlights />
    <section id="apply" className="py-20 px-4 bg-white md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-8 text-orange-500">Ready to Own the Stage?</h2>
          <p className="text-xl font-poppins text-black mb-8">Applications are now open for university students across Africa</p>
          <motion.a
            href="#"
            className="inline-block font-poppins bg-orange-700 text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Apply for ACB Season 7
          </motion.a>
        </motion.div>
      </section>
    {/* <Events /> */}
    
    <Footer />
  </div>
  )
}

export default Home