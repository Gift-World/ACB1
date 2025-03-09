import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import Footer from './Footer/Footer';
import PodcastHub from './PodcastHub';
// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const videoItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  }
};

// Season data
const seasons = [
  
  { id: 6, name: "Season 6" }
  
];

// Video data by season
const videoDataBySeason = {
 
 
  6: [
    {
      id: 13,
      title: "Season 6: Season Highlights",
      thumbnail: "https://i.ytimg.com/vi/jkRcG8xtFeM/maxresdefault.jpg",
      embedId: "jkRcG8xtFeM",
      views: "1.2M",
      likes: "45K",
      date: "2 weeks ago"
    },
    // {
    //   id: 14,
    //   title: "Season 6: Behind the Scenes",
    //   thumbnail: "https://i.ytimg.com/vi/fx1mxvxNbaE/maxresdefault.jpg",
    //   embedId: "fx1mxvxNbaE",
    //   views: "890K",
    //   likes: "32K",
    //   date: "1 month ago"
    // },
    // {
    //   id: 15,
    //   title: "Season 6: Top 10 Plays",
    //   thumbnail: "https://i.ytimg.com/vi/SKl-0hV_Zhg/maxresdefault.jpg",
    //   embedId: "SKl-0hV_Zhg",
    //   views: "750K",
    //   likes: "28K",
    //   date: "3 weeks ago"
    // },
    // {
    //   id: 16,
    //   title: "Season 6: All-Star Weekend",
    //   thumbnail: "https://i.ytimg.com/vi/l39ALL3oC2A/maxresdefault.jpg",
    //   embedId: "l39ALL3oC2A",
    //   views: "1.5M",
    //   likes: "67K",
    //   date: "1 week ago"
    // },
   
  ]
};

const VideoGallery = () => {
  const [selectedSeason] = useState(6);
  const [selectedVideo, setSelectedVideo] = useState(videoDataBySeason[6][0]);
//   const [isLiked, setIsLiked] = useState(false);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    // setIsLiked(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 
  return (
    <div className="bg-gray-900 text-light min-h-screen ">
      {/* Hero Section */}
      <PodcastHub />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark z-10"></div>
        
        {/* <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-extrabold text-center mb-4"
          >
            <span className="text-orange-700 text-[50px] font-poppins">The Unapologetic Mic</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-poppins md:text-2xl text-center max-w-2xl"
          >
           This is where stories break free, and voices rise.
No scripts. No filters. No judgment.

          </motion.p>
        </div> */}
      </motion.div>

      <div className="container mx-auto px-4 mt-10 pb-10">
        {/* Season Selector */}
       

        {/* Featured Video */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-glow">
              {selectedVideo.title}
            </h2>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isLiked ? 'bg-primary text-white' : 'bg-gray-800 text-gray-300'}`}
              >
                <FaHeart className={isLiked ? 'text-white' : 'text-gray-300'} />
                <span>{isLiked ? parseInt(selectedVideo.likes) + 1 + 'K' : selectedVideo.likes}</span>
              </motion.button> */}
              {/* <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800 text-gray-300"
              >
                <FaShare />
                <span>Share</span>
              </motion.button> */}
            </div>
          </div>

          <div className="aspect-w-16 aspect-h-9 glass-card rounded-xl overflow-hidden neon-border">
            <iframe
              className="w-full h-[500px] md:h-[600px]"
              src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-gray-400">{selectedVideo.date} </p>
            </div>
           
          </div>
        </motion.div>

        {/* Video Gallery */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">
             Podcast Videos
            </h3>
            
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {videoDataBySeason[selectedSeason].map((video) => (
              <motion.div
                key={video.id}
                variants={videoItem}
                className={`glass-card rounded-lg overflow-hidden hover-scale cursor-pointer ${selectedVideo.id === video.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => handleVideoSelect(video)}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-primary p-3 rounded-full">
                      <FaPlay className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2 line-clamp-2">{video.title}</h4>
                  <div className="flex justify-between text-sm text-gray-400">
                    {/* <span>{video.views} views</span> */}
                    <span>{video.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </div>
      <Footer />
    </div>
    
  );
};

export default VideoGallery;