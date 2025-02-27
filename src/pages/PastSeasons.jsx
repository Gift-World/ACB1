import { motion } from 'framer-motion';
import Footer from '../components/Footer/Footer';
import { useInView } from 'react-intersection-observer';

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
      year: "2023",
      title: "Season 6: Digital Revolution",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
      description: "Breaking barriers with virtual performances and global reach",
    },
    {
      year: "2022",
      title: "Season 5: Unity in Diversity",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
      description: "Celebrating cultural fusion and creative excellence",
    },
    {
      year: "2021",
      title: "Season 4: Resilience",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
      description: "Adapting and thriving through challenging times",
    },
    {
      year: "2020",
      title: "Season 3: Digital Transformation",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      description: "Pioneering virtual performances during global challenges",
    },
    {
      year: "2019",
      title: "Season 2: Rising Stars",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=600&fit=crop",
      description: "Expanding horizons with new talent and fresh perspectives",
    },
    {
      year: "2018",
      title: "Season 1: The Beginning",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      description: "Where it all started - launching Africa's biggest campus movement",
    }
  ];

  const winners = [
    {
      name: "Team Dynamix",
      year: "2023",
      category: "Dance",
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=600&fit=crop",
      description: "Revolutionized urban dance with their fusion of African and contemporary styles",
      quote: "ACB changed our lives forever. We're now professional choreographers!",
      // achievement: "Secured a major dance residency in Paris"
    },
    {
      name: "Lyrical Warriors",
      year: "2022",
      category: "Music",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop",
      description: "Blended traditional African instruments with modern pop sounds",
      quote: "From campus performances to international stages - dreams do come true!",
      // achievement: "Released debut album on major streaming platforms"
    },
    {
      name: "Spoken Truth",
      year: "2021",
      category: "Spoken Word",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
      description: "Powerful poetry addressing social justice and youth empowerment",
      quote: "ACB gave us the platform to speak our truth to the world.",
      // achievement: "Published anthology of spoken word poetry"
    },
    {
      name: "Urban Fusion",
      year: "2020",
      category: "Dance",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=600&fit=crop",
      description: "Pioneered virtual dance performances during global lockdown",
      quote: "Even in a virtual world, we found our rhythm and connection.",
      // achievement: "Launched successful online dance academy"
    },
    {
      name: "Melody Makers",
      year: "2019",
      category: "Music",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=600&fit=crop",
      description: "Created viral hits combining Afrobeats with social messages",
      quote: "ACB was the launchpad for our music careers. Forever grateful!",
      // achievement: "Music featured in major African film production"
    },
    {
      name: "Poetic Justice",
      year: "2018",
      category: "Spoken Word",
      image: "https://images.unsplash.com/photo-1495374519711-e22c8b4596a0?w=800&h=600&fit=crop",
      description: "First-ever ACB champions who set the bar for excellence",
      quote: "The first season winners - we started a legacy of excellence.",
      // achievement: "Founded youth poetry movement across 5 universities"
    }
  ];

  return (
    <div className="bg-black text-white pt-40">
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
                  <p className="text-gray-200">{winner.category} Champions</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{winner.description}</p>
                <blockquote className="text-primary italic mb-4">"{winner.quote}"</blockquote>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-3 py-1 bg-primary/20 rounded-full text-primary">
                    {winner.achievement}
                  </span>
                </div>
              </div>
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