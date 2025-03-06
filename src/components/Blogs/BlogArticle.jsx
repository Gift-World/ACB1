import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

const BlogArticle = ({ articles }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.path === `/blog/${slug}`);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg"
    >
      <button 
        onClick={() => navigate('/blogs')}
        className="inline-block px-6 py-4 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
      >
        ← Back to Articles
      </button>
      
      <div className="p-6">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4 text-gray-600">
            <span className="font-medium">{article.organization}</span>
            <span className="text-sm">{article.followers}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800">
            {article.title}
          </h1>
          
          <div className="flex items-center text-gray-600">
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
          </div>
          
          <div className="prose lg:prose-xl text-gray-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
          
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                Share
              </button>
              <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300">
                Follow
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Tags:</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                #career
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                #leadership
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default BlogArticle;