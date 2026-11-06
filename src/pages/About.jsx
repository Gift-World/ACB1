import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Footer from '../components/Footer/Footer';
import Stats from '../components/Stats';
function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
      const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
  return (
    <div className="text-white overflow-hidden">
    
    <section className="hero-pattern relative">
      <div className="hero-overlay relative flex h-[76svh] min-h-[560px] items-center justify-center overflow-hidden sm:h-[80svh] md:min-h-screen">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto rounded-2xl bg-black/20 px-4 py-6 text-center backdrop-blur-[1px] sm:px-6 sm:py-10 md:bg-transparent md:p-4"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-customOrange font-bold text-xl mb-4 text-glow float-animation"
          >
            SINCE 2014
          </motion.div>
          <h1 className="mb-6 text-4xl font-bold text-white font-poppins sm:text-5xl md:text-7xl">Africa's Campus Battle</h1>
          <p className="mx-auto mb-8 max-w-4xl rounded-lg p-4 font-poppins text-base text-gray-100 glass-card sm:p-6 sm:text-xl md:text-[18px]">
            The premier continental stage where young talent becomes a force for change.
          
            Through dance, music, spoken word and performing arts, ACB is empowering Africa's youth to transform their creativity into real impact, rewriting the future with unapologetic authenticity.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Vision & Mission Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-xl card-hover"
          >
            <h2 className="text-3xl font-bold mb-4 font-poppins text-customBrown ">Our Vision</h2>
            <p className="text-black text-[18px] font-poppins">
              To create a stage for change, where Africa's brightest voices shape a sustainable future.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-xl card-hover"
          >
            <h2 className="text-3xl font-bold mb-4 text-customBrown font-poppins ">Our Mission</h2>
            <p className="text-black text-[18px] font-poppins">
              To ignite Africa with purpose-driven talent, challenging young creatives to use their art as a force for social impact. With the SDGs as our guide, ACB connects brands with a generation dedicated to a brighter future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <Stats />
    {/* <section className="stats-pattern relative py-20">
      <div className="bg-white absolute inset-0"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "200k+", text: "Students from 28 countries" },
            { number: "$10k", text: "In scholarships and prizes" },
            { number: "50k+", text: "Physical event participants" },
            { number: "10M+", text: "Social media reach" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card text-center p-6  rounded-xl card-hover"
            >
              <h3 className="text-4xl font-bold text-orange-700 mb-2 text-glow">{stat.number}</h3>
              <p className="text-black">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section> */}

    {/* Values Section */}
    <section ref={ref} className="values-pattern relative py-20">
      <div className="bg-black absolute inset-0"></div>
      <div className="container mx-auto px-4 relative">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold font-poppins text-center mb-16 text-glow"
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Empowerment",
              description: "Enabling individuals to grow, shine, and reach their full potential.",
              icon: "🚀",
            },
            {
              title: "Inclusivity",
              description: "Creating a diverse, welcoming environment where everyone can succeed and make a difference.",
              icon: "🤝",
            },
            {
              title: "Integrity",
              description: "Upholding honesty, fairness, and transparency in all our endeavors.",
              icon: "⚖️",
            },
            {
              title: "Excellence",
              description: "Striving for top-tier quality and delivering outstanding experiences.",
              icon: "⭐",
            },
            {
              title: "Impact",
              description: "Making a positive, lasting difference in the lives of young people and communities.",
              icon: "🎯",
            },
            {
              title: "Fun",
              description: "Creating an electrifying, high-energy space where creativity thrives, talent shines, and every moment is an experience to enjoy, connect, and celebrate.",
              icon: "🎉",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.2 }}
              className="glass-card p-6 rounded-xl card-hover"
            >
              <div className="text-4xl mb-4 float-animation">{value.icon}</div>
              <h3 className="text-xl font-poppins font-bold mb-2 text-customBrown">{value.title}</h3>
              <p className="text-gray-200 font-poppins">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="team-pattern relative py-20">
      <div className="bg-white absolute inset-0"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center font-poppins mb-16 text-black ">The ACB Powerhouse</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Lamech Ang'ila",
              role: "Founder & Director",
              bio: "Lamech Ang'ila is the visionary behind Africa's Campus Battle (ACB), a platform designed to unite university students through performance arts and social impact. His passion for youth empowerment and expertise in building strategic partnerships have shaped ACB into more than just a competition—it's a movement. Lamech continues to drive ACB's expansion, ensuring its impact reaches across Africa and beyond.",
              image: "/lam1.jpg",
            },
            {
              name: "Everlyne Mutunga Ang'ila",
              role: "CEO",
              bio: "Leading ACB with a strong vision, Everlyne oversees strategy, growth, and partnerships to ensure ACB remains the ultimate platform for young creatives. With a deep passion for youth development and extensive experience in management, she ensures the seamless execution of every season, creating opportunities for students to showcase talent, connect, and thrive.",
              image: "/eve.jpg",
            },
            {
              name: "Edwin Mutoro",
              role: "Finance & Admin Director",
              bio: "Edwin Mutoro ensures ACB runs on a solid financial and operational foundation. With over a decade of experience in financial consulting, he leads the finance and administration team, guaranteeing financial responsibility and efficiency. His strategic financial oversight ensures ACB remains sustainable, growing stronger with every season.",
              image: "/eduuuuu.jpg",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-6 rounded-xl card-hover"
            >
              <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-poppins font-bold mb-2 text-customBrown">{member.name}</h3>
              <p className="text-customOrange font-poppins mb-4">{member.role}</p>
              <p className="text-black font-poppins text-sm px-4">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
  )
}

export default About
