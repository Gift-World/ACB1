import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaGraduationCap, FaHandshake, FaGlobe } from 'react-icons/fa';

const StatCard = ({ icon: Icon, number, text, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      className="bg-orange-600 backdrop-blur-md p-8 rounded-xl shadow-xl transform transition-all duration-300"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1, rotate: 360 } : {}}
        transition={{ delay: delay + 0.2, type: "spring", stiffness: 100 }}
      >
        <Icon className="text-5xl text-orange-400 mb-4 mx-auto" />
      </motion.div>
      <motion.h3 
        className="text-3xl font-bold text-white mb-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.4 }}
      >
        {number}
      </motion.h3>
      <motion.p 
        className="text-black font-medium text-lg"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.6 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

const AboutHome = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      icon: FaUsers,
      number: "200k+",
      text: "Students from 28 countries in Africa"
    },
    {
      icon: FaGraduationCap,
      number: "$10,000",
      text: "In scholarships and prizes"
    },
    {
      icon: FaHandshake,
      number: "50k+",
      text: "Participants in physical events"
    },
    {
      icon: FaGlobe,
      number: "10M+",
      text: "Reach on social media"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden" id='about'>
      {/* Animated Background Patterns */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-500/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-orange-50 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-7xl mx-auto"
        >
         
          <div id='about' className=" bg-gradient-to-b from-white to-orange-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
          <motion.h1 
              className="text-4xl font-poppins font-bold text-black mb-7  "
              initial={{ opacity: 0.4, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              
            >
              AFRICA'S CAMPUS BATTLE
            </motion.h1>
            <motion.h3 
              className=" font-poppins text-2xl font-semibold text-orange-500 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              UNAPPOLOGETICALLY TALENTED
              {/* <span className="block text-[20px] font-poppins font-medium text-orange-500">SINCE 2014.</span> */}
            </motion.h3>
            <motion.p 
              className=" font-poppins font-medium text-[18px] text-black mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              
            >
 We are Africa's Campus Battle, the premier continental stage where young talent 
              from institutions of higher learning becomes a force for change.
              Through dance, music, spoken word and performing arts, ACB is empowering 
              Africa's Gen Z to transform their creativity into real impact, rewriting 
              the future with unapologetic authenticity.   </motion.p>
            {/* <motion.p 
              className="font-poppins font-medium text-[18px] text-black mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
    
            >
More than just a training center—CraftWise Academy is where career advancement and organizational transformation come alive. Say goodbye to uninspired workshops and hello to hands-on experiences that mirror real workplace challenges.  </motion.p> */}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://i.imgur.com/aoQUeG5.jpeg"
              alt="Professional training session"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-500 rounded-full opacity-50" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gray-500 rounded-full opacity-20" />
          </motion.div>
        </motion.div>
      </div>
    </div>
          

          <motion.h2
            className="text-4xl font-bold text-orange-400 mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              delay: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            Impact over the years
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                number={stat.number}
                text={stat.text}
                delay={1 + index * 0.2}
                
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
      />

      {/* Side Decorative Lines */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ delay: 2.2, duration: 1 }}
      />
      <motion.div
        className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ delay: 2.2, duration: 1 }}
      />
    </div>
  );
};

export default AboutHome;