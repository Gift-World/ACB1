import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Footer from '../components/Footer/Footer';

const faqs = [
  {
    question: "What is Africa's Campus Battle (ACB)?",
    answer: "ACB is a talent competition that brings together university students from across Africa to showcase their skills in performance arts, including music, dance, poetry, and drama. It's more than just a competition—it's a movement that empowers young creatives and champions the Sustainable Development Goals (SDGs)."
  },
  {
    question: "Who can participate in ACB?",
    answer: "ACB is open to university students across Africa who are passionate about performance arts. Participants must be enrolled in a recognized university and meet the eligibility criteria outlined in the application guidelines."
  },
  {
    question: "How do I apply for ACB?",
    answer: "Applications can be submitted online through our official ACB website when the audition window is open. Simply fill out the form, upload your audition video, and follow the instructions provided."
  },
  {
    question: "Is ACB a virtual or physical competition?",
    answer: "ACB follows a hybrid format. The competition starts with virtual auditions and elimination rounds, while the semi-finals and grand finale take place in a physical location, with contestants flown in for the final showdown."
  },
  {
    question: "Is there an entry fee to participate?",
    answer: "No, participation in ACB is completely free. We believe in creating equal opportunities for young creatives across Africa."
  },
  {
    question: "What do winners of ACB get?",
    answer: "Winners receive cash prizes, mentorship, brand exposure, and career opportunities. Beyond the trophy, ACB opens doors to industry connections, collaborations, and exclusive performance opportunities."
  },
  {
    question: "How can I vote for my favorite contestant?",
    answer: "Fans can vote through our official website and social media platforms. Voting details will be shared once the competition is live."
  },
  {
    question: "How can I watch ACB?",
    answer: "ACB episodes, performances, and behind-the-scenes content are available on our YouTube channel and official social media pages. Live events may also be streamed on select platforms."
  },
  {
    question: "How can I join the ACB Community?",
    answer: "The ACB Community is for fans, supporters, and contestants who want to stay engaged. You can join by signing up on our website, following our social media pages, and participating in community discussions, polls, and events."
  },
  {
    question: "Can I partner with or sponsor ACB?",
    answer: "Yes! ACB collaborates with brands, organizations, and media partners to support young talent and create a bigger impact. Visit our 'Partners & Sponsors' section on the website to learn more about sponsorship opportunities."
  },
  {
    question: "How do I purchase ACB merchandise?",
    answer: "You can shop for official ACB T-shirts, hoodies, caps, mugs, and more through the ACB Merchandise Store on our website. Payment and delivery options will be available at checkout."
  },
  {
    question: "Who are the judges and mentors for ACB?",
    answer: "Our panel includes industry professionals, entertainers, and creative experts who provide feedback and mentorship to contestants. The official lineup is announced before each season."
  },
  {
    question: "How can I contact the ACB team?",
    answer: "For inquiries, partnerships, or media requests, you can reach us through our Contact Us page on the website or via our official email and social media channels."
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center bg-orange-700 text-white"
      >
        <h3 className="text-xl font-semibold pr-4">{faq.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-xl" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 bg-white">
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FAQS() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen overflow-hidden pt-20 px-4 bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white">
            Everything you need to know about Africa's Campus Battle
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
      <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-12 pt-8 border-t border-gray-800 w-full text-center"
          />
      <Footer />
    </motion.div>
  );
}

export default FAQS;