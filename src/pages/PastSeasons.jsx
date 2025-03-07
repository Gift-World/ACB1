import { motion } from 'framer-motion';
import Footer from '../components/Footer/Footer';
import { useInView } from 'react-intersection-observer';
import PastHero from '../components/PastHero';
const PastSeasons = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const seasons = [
    {
      year: "2024",
      title: "Season 6: Digital Revolution",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
      description: "Breaking barriers with virtual performances and global reach",
    },
    {
      year: "2023",
      title: "Season 5: Unity in Diversity",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
      description: "Celebrating cultural fusion and creative excellence",
    },
    {
      year: "2022",
      title: "Season 4: Resilience",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
      description: "Adapting and thriving through challenging times",
    },
    {
      year: "2021",
      title: "Season 3: Digital Transformation",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      description: "Pioneering virtual performances during global challenges",
    },
    {
      year: "2020",
      title: "Season 2: Rising Stars",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=600&fit=crop",
      description: "Expanding horizons with new talent and fresh perspectives",
    },
    {
      year: "2014",
      title: "Season 1: The Beginning",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      description: "Where it all started - launching Africa's biggest campus movement",
    }
  ];

  const winners = [
    {
      // name: "Who will be the ",
      year: "2025",
      // category: "Spoken Word",
      image: "data:image/jpeg;base64,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",
      // description: "Revolutionized urban dance with their fusion of African and contemporary styles",
      // quote: "ACB changed our lives forever. We're now professional choreographers!",
      // achievement: "Secured a major dance residency in Paris"
    },
    {
      name: "Jackline Malavanu",
      year: "2024",
      category: "Spoken Word",
      image: "https://photos.smugmug.com/Clients/AfricaCampusBattles/n-ZNpGDb/Season-6-Finale/i-5z9F4Mz/0/KQsFmDM33pC4vbSDPQM6GfjSPzQmWRD4f9hmpnQ6C/XL/Sixtyone-75-XL.jpg",
      description: "Revolutionized urban dance with their fusion of African and contemporary styles",
      quote: "ACB changed our lives forever. We're now professional choreographers!",
      // achievement: "Secured a major dance residency in Paris"
    },
    {
      name: "Kizudeh",
      year: "2023",
      category: "Spoken Word",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNxs0nfEuqOEPu0TuY1fJYNYLnUAeu86BFYU0l5aCEBXD6nL1V7qI9vYKdlYDq6GBA3QNzt9YRJmEjD0cyxKecUXyKwPn9GMYn2cr8_ZhxkUDLkAI6qv3ElPLTQMgm8tyTYUmLDP_Vuo8zq9ao4Lb3G=w962-h641-s-no-gm",
      description: "Blended traditional African instruments with modern pop sounds",
      quote: "From campus performances to international stages - dreams do come true!",
      // achievement: "Released debut album on major streaming platforms"
    },
    {
      name: "Moses Muya",
      year: "2022",
      category: "Dance",
      image: "https://i.imgur.com/YO6liOY.jpeg",
      description: "Powerful poetry addressing social justice and youth empowerment",
      quote: "ACB gave us the platform to speak our truth to the world.",
      // achievement: "Published anthology of spoken word poetry"
    },
    {
      name: "John S. Fille",
      year: "2021",
      category: "Music",
      image: "https://i.imgur.com/tQoiVjV.jpeg",
      description: "Pioneered virtual dance performances during global lockdown",
      quote: "Even in a virtual world, we found our rhythm and connection.",
      // achievement: "Launched successful online dance academy"
    },
    {
      name: "John S. Fille",
      year: "2020",
      category: "Music",
      image: "https://i.imgur.com/kRLVpUx.jpeg",
      description: "Created viral hits combining Afrobeats with social messages",
      quote: "ACB was the launchpad for our music careers. Forever grateful!",
      // achievement: "Music featured in major African film production"
    }
  ];

  return (
    <div className="bg-black text-white ">
      <PastHero />
      {/* Legacy Section */}
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3 text-orange-600 font-poppins">The ACB Legacy</h2>
          <p className="text-xl font-poppins max-w-3xl mx-auto">
            Since 2014, we've been the stage where campus creativity meets purpose.
            Six epic seasons of talent, impact, and unforgettable moments.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {seasons.map((season, index) => (
            <motion.div
              key={season.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-6 rounded-xl overflow-hidden group"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={season.image}
                  alt={season.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60" />
                <h3 className="absolute bottom-4 left-4 text-3xl font-bold text-white">{season.year}</h3>
              </div>
              <h4 className="text-xl font-bold mb-2 text-primary">{season.title}</h4>
              <p className="text-gray-300">{season.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Hall of Fame */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-primary text-glow">Hall of Fame</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Meet the legends who turned their campus dreams into reality through ACB.
            These champions didn't just win competitions—they started movements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {winners.map((winner, index) => (
            <motion.div
              key={winner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card rounded-xl overflow-hidden group"
            >
              <div className="relative h-64">
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-primary font-bold">{winner.year}</span>
                  <h3 className="text-2xl font-bold mb-1">{winner.name}</h3>
                  <p className="text-gray-200">{winner.category} Champion</p>
                </div>
              </div>
              {/* <div className="p-6">
                <p className="text-gray-300 mb-4">{winner.description}</p>
                <blockquote className="text-primary italic mb-4">"{winner.quote}"</blockquote>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-3 py-1 bg-primary/20 rounded-full text-primary">
                    {winner.achievement}
                  </span>
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="mt-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-primary text-glow">Experience the Energy</h2>
          <div className="aspect-w-16 aspect-h-9 glass-card rounded-xl overflow-hidden">
            <iframe
              className="w-full h-[600px]"
              src="https://www.youtube.com/embed/jkRcG8xtFeM"
              title="ACB Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div> */}
        
      </div>
      <Footer />
    </div>
    
  );
};

export default PastSeasons;