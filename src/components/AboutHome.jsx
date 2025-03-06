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
         
         <div className="relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[40px] font-poppins font-bold text-black mb-6">
            AFRICA'S CAMPUS BATTLE
          </h2>
          <div className="inline-block bg-orange-600 font-semibold font-poppins text-black px-6 py-2 rounded-full text-xl mb-8 transform hover:scale-105 transition-transform duration-300">
            UNAPOLOGETICALLY TALENTED
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center text-lg text-gray-300 leading-relaxed mb-12">
          <p className="mb-6 text-gray-800 font-poppins font-light text-[20px]">
            We are Africa's Campus Battle, the premier continental stage where young talent 
            from institutions of higher learning becomes a force for change. Through dance, 
            music, spoken word and performing arts, ACB is empowering Africa's Gen Z to 
            transform their creativity into real impact, rewriting the future with unapologetic 
            authenticity.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-orange-500 text-4xl font-bold mb-4">01</div>
            <h3 className="text-xl font-bold text-black mb-3">Talent Discovery</h3>
            <p className="text-black">Unearthing and nurturing the next generation of African performers</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-orange-500 text-4xl font-bold mb-4">02</div>
            <h3 className="text-xl font-bold text-black mb-3">Cultural Impact</h3>
            <p className="text-black">Celebrating and amplifying authentic African creative expression</p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-orange-500 text-4xl font-bold mb-4">03</div>
            <h3 className="text-xl font-bold text-black mb-3">Future Leaders</h3>
            <p className="text-black">Building tomorrow's creative industry leaders today</p>
          </div>
        </div> */}
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