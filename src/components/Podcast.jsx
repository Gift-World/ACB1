import { motion } from 'framer-motion';
import imageUrl, { responsiveImageSrcSet } from '../utils/netlifyImage';


function Podcast() {
  return (
    
    <div className=" bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
      
        {/* Podcast Section */}
        <div className="relative max-w-[500px] mx-auto">
          {/* Decorative elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-white rounded-lg blur opacity-75 animate-pulse-slow"></div>
          
          {/* Podcast Container */}
          <div className="relative bg-black rounded-lg p-3">
            <img 
              src={imageUrl('/micposter.webp', 768)}
              srcSet={responsiveImageSrcSet('/micposter.webp', [320, 500, 768])}
              alt="Africa's Campus Battle Season 7 Podcast" 
              className="w-[500px] rounded shadow-2xl transform transition-transform duration-300 hover:scale-105"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, 500px"
            />
            
            {/* Coming Soon Badge */}
            {/* <div className="absolute top-4 font-poppins right-4 bg-customOrange text-white px-3 py-2 rounded-full font-bold animate-bounce">
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
            <p className='text-xl md:text-[18px] font-poppins text-gray-200 max-w-4xl mx-auto mb-8 glass-card p-6 rounded-lg'>Life is a journey filled with highs, lows and everything in between. <i className='text-customOrange font-bold'>The Unapologetic Mic</i> is a
bold podcast where real, raw stories are brought to life by voices from the community - a mum,
dad, sister, brother, friend or mentor. Each episode creates space where silence breaks, healing
begins, and every story is heard.
<h2 className="text-3xl md:text-2xl font-poppins font-bold mb-8 text-customOrange">Speak your truth.Own your story </h2>

</p>
          </div>
        </div>
      </div>
      <section id="apply" className="py-20 px-4  md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-8 text-customOrange">Got a story to share? </h2>
          <h3 className='md:text-[20px] font-poppins font-medium mb-8 text-white'> Send it to us through the link below</h3>
          
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeChRXAorGxRyh5Jdxm4OsmSjLtrBK-v1Aln-8zNxos4St7ng/viewform?usp=dialog"
            className="inline-block font-poppins bg-customBrown text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            target='blank'
          >
            Upload your story here
          </motion.a>
          <h3 className='md:text-[20px] font-poppins font-medium mt-8 text-white'> Catch every episode on the <a href='https://www.youtube.com/@africascampusbattle' target='_blank' rel='noopener noreferrer' className='underline text-customOrange hover:text-orange-400'>Africa’s Campus Battle YouTube Channel</a>   and join a movement
          that’s unapologetic.</h3>

        </motion.div>
      </section>
    </div>
  )
}

export default Podcast;
