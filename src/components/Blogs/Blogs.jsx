import { motion } from 'framer-motion';
import BlogSection from './BlogSection';
import Footer from '../Footer/Footer';

const articles = [
  
  {
    id: 1,
    title: "ACB SEASON 6 MAGAZINE",
    // author: "George Munge",
    // date: "February 13, 2025",
    excerpt: "Experience the thrill, passion, and jaw-dropping moments of Africa's Campus Battle Season 6! From electrifying performances to inspiring stories of resilience and talent, this edition of the ACB Magazine takes you behind the scenes of the most unforgettable competition yet. Discover the champions, relive the highlights, and uncover the secrets that made this season one for the history books.",
    content: `acb`,
    imageUrl: "/season6magazine.jpg",
    organization: "Africa's Campus Battle",
    // followers: "18 followers",
    path: "/season-6-magazine"
  },
   {
    id: 2,
    title: "ACB SEASON 5 MAGAZINE",
    // author: "George Munge",
    // date: "February 13, 2025",
    excerpt: "Step back into the thrilling world of Africa's Campus Battle Season 5! Discover expert analysis, unforgettable performances, and inspiring success stories that defined the season. From game-changing strategies to standout moments, our coverage brings you the highlights and behind-the-scenes magic of this iconic chapter",
    content: `acb`,
    imageUrl: "/season5magazine.jpg",
    organization: "Africa's Campus Battle",
    // followers: "18 followers",
    path: "/season-5-magazine"
  },
 
];

function Blogs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/262.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          width: '100%',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-montserrat font-bold mb-4">Our News And Insights</h1>
            <p className="text-xl font-montserrat max-w-2xl mx-auto">
            Discover exclusive stories, behind-the-scenes moments, and talent-packed blogs. Stay updated on ACB’s latest happenings, standout performances, and unforgettable journeys—all in one place!            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Content */}
      <main className="max-w-7xl font-montserrat mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {articles.map((article, index) => (
          <BlogSection key={article.id} article={article} index={index} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Blogs;