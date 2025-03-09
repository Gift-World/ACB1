import { motion } from 'framer-motion';


function PodcastHub() {
  return (
    
    <div className=" bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
       

        {/* PodcastHub Section */}
        <div className="relative max-w-[500px] mx-auto">
          {/* Decorative elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-white rounded-lg blur opacity-75 animate-pulse-slow"></div>
          
          {/* PodcastHub Container */}
          <div className="relative bg-black rounded-lg p-3">
            <img 
              src="https://i.imgur.com/JUyT3bl.jpeg" 
              alt="Africa's Campus Battle Season 7 PodcastHub" 
              className="w-[500px] rounded shadow-2xl transform transition-transform duration-300 hover:scale-105"
            />
            
            {/* Coming Soon Badge */}
            {/* <div className="absolute top-4 font-poppins right-4 bg-orange-500 text-white px-3 py-2 rounded-full font-bold animate-bounce">
              Coming Soon
            </div> */}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
        <div className="text-center mt-7">
              <h3 className="text-2xl font-bold font-poppins text-white mb-4">   This is where stories break free, and voices rise.
              No scripts. No filters. No judgment</h3>
           
            </div>
          
          <div className="">
            <p className='text-xl md:text-[18px] font-poppins text-white max-w-4xl mx-auto mb-8 glass-card p-6 rounded-lg'>Campus life is a journey—full of highs, lows, and everything in between. We’re here for the raw, real, and untold stories that deserve to be heard. Whether it's struggles, wins, lessons, or unforgettable moments—your voice matters.
Speak your truth. Own your story.
Got a story to share? Send it to us through the link below. Your story could be the next conversation that sparks change.</p>
          </div>
        </div>
      </div>
      <section id="apply" className="py-20 px-4  md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd1D-XeNoVdTeyueSfl9phoLLC_HnjIZvv1NtgbYVdrf1AqyQ/viewform?usp=sharing"
            className="inline-block font-poppins bg-customOrange text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            target='blank'
          >
            Share your story here today!
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}

export default PodcastHub;