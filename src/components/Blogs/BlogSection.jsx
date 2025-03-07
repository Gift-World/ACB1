import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function BlogSection({ article, index }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(article.path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col p-6 md:flex-row items-center gap-8 py-20 border-b border-gray-200 last:border-b-0"
    >
      <div className="h-full md:h-1/2">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <div className="flex pl-10 items-center space-x-4 text-gray-600">
          <span className="font-medium">{article.organization}</span>
          <span className="text-sm">{article.followers}</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">{article.title}</h2>
        <motion.a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 pl-10 font-montserrat text-[30px] inline-block text-orange-500 px-6 py-3 rounded-lg font-bold text-lg transition-colors duration-300"
          >
            {article.button}
          </motion.a>
        <div className="flex pl-10 items-center text-gray-600 text-sm">
          <span>{article.author}</span>
         
        </div>
        <p className="text-lg pl-10 text-gray-600 leading-relaxed line-clamp-6">
          {article.excerpt}
        </p>
        <motion.button
          onClick={handleReadMore}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-customBrown pl-10 font-semibold inline-flex items-center group"
        >
          View Magazine
          <svg 
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default BlogSection;