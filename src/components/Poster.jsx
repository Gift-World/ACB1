import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    
    if (difference <= 0) {
      return {};
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (Object.keys(timeLeft).length === 0) {
    return <div className="text-white text-2xl">The event has started!</div>;
  }

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="flex flex-col items-center">
          <div className="text-3xl font-bold bg-orange-700 rounded-lg p-3 min-w-[80px] text-center">
            {value}
          </div>
          <span className="text-sm mt-1 text-gray-300 capitalize">{interval}</span>
        </div>
      ))}
    </div>
  );
}
function Poster() {
  return (
    <div className=" bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
       

        {/* Poster Section */}
        <div className="relative max-w-[500px] mx-auto">
          {/* Decorative elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-white rounded-lg blur opacity-75 animate-pulse-slow"></div>
          
          {/* Poster Container */}
          <div className="relative bg-black rounded-lg p-3">
            <img 
              src="/magazines/season7.png" 
              alt="Africa's Campus Battle Season 7 Poster" 
              className="w-[450px] rounded shadow-2xl transform transition-transform duration-300 hover:scale-105"
            />
            
            {/* Coming Soon Badge */}
            <div className="absolute top-4 font-poppins right-4 bg-customOrange text-white px-3 py-2 rounded-full font-bold animate-bounce">
              Coming Soon
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
        {/* <div className="text-center  mt-7">
              <h3 className="text-2xl  font-bold font-poppins text-white mb-4">Countdown to Season 7</h3>
              <CountdownTimer  targetDate="2025-05-1" />
            </div> */}
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-white">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-customBrown">
              <h3 className="text-xl font-bold font-poppins mb-2">New Season</h3>
              <p className="font-poppins">Get ready for an incredible new journey</p>
            </div>
            <div className="bg-gray-800  p-6 rounded-lg  hover:bg-customBrown">
              <h3 className="text-xl font-poppins font-bold mb-2">More Talent</h3>
              <p className="font-poppins">Showcasing Africa's finest campus talent</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg  hover:bg-customBrown">
              <h3 className="text-xl font-poppins font-bold mb-2">Bigger Stage</h3>
              <p className="font-poppins">Taking campus entertainment to new heights</p>
            </div>
          </div>
        </div>
      </div>
      <section id="apply" className="py-20 px-4  md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-8 text-customOrange">Ready to Own the Stage?</h2>
          <p className="text-xl font-poppins text-white mb-8">Applications will soon be open.</p>
          <motion.a
            href="#"
            className="inline-block font-poppins bg-customBrown text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Apply for ACB Season 7
          </motion.a>
        </motion.div>
      </section>
      <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-12 pt-8 border-t border-gray-500 w-full text-center"
          />
    </div>
  )
}

export default Poster