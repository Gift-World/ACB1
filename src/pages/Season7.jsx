import { motion } from 'framer-motion';
import { FaCalendar, FaTrophy, FaYoutube, FaInstagram } from 'react-icons/fa';
import Footer from '../components/Footer/Footer';

function Season7() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 to-dark/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ACB Season 7
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            {...fadeIn}
          >
            Own the stage. Show your talent. Make Africa proud.
          </motion.p>
          <motion.a
            href="#apply"
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Apply Now
          </motion.a>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          {...fadeIn}
        >
          The Journey
        </motion.h2>
        
        <div className="space-y-8">
          <TimelineItem 
            date="April 2025"
            title="Pre-Launch Webinars"
            description="Learn from industry experts, get exclusive incentives, and engage in live Q&As"
            icon={<FaCalendar />}
          />
          
          <TimelineItem 
            date="May 21, 2025"
            title="The Grand Launch"
            description="High-energy live event with performances and special guests"
            icon={<FaTrophy />}
          />
          
          <TimelineItem 
            date="June - November 2025"
            title="The Eliminations"
            description="Four online challenges testing your creativity"
            icon={<FaYoutube />}
          />
          
          <TimelineItem 
            date="November 8, 2025"
            title="The Grand Finale"
            description="Live physical event in Kenya with global streaming"
            icon={<FaInstagram />}
          />
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-dark to-black">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">Why Join ACB?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              title="Learn & Grow"
              description="Get mentored by industry experts and develop your skills"
            />
            <Card 
              title="Gain Exposure"
              description="Perform for a continental audience and grow your fanbase"
            />
            <Card 
              title="Win Big"
              description="Compete for amazing prizes and career opportunities"
            />
          </div>
        </motion.div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-20 px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Ready to Own the Stage?</h2>
          <p className="text-xl mb-8">Applications are now open for university students across Africa</p>
          <motion.a
            href="#"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Apply for ACB Season 7
          </motion.a>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}

function TimelineItem({ date, title, description, icon }) {
  return (
    <motion.div 
      className="timeline-item"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-start">
        <div className="ml-2">
          <span className="text-primary font-semibold">{date}</span>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
      
    </motion.div>
  );
}

function Card({ title, description }) {
  return (
    <motion.div 
      className="bg-dark p-6 rounded-xl border border-gray-800 card-hover"
      whileHover={{ y: -10 }}
    >
      <h3 className="text-2xl font-bold mb-4 gradient-text">{title}</h3>
      <p className="text-gray-300">{description}</p>
      
    </motion.div>
  );
}

export default Season7;