import { motion } from "framer-motion";
// import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import ContactForm from "../ContactForm";
const links = {
  "Socials": [
    { name: "Facebook", url: "https://web.facebook.com/profile.php?id=61571583696663", icon: <FaFacebook /> },
    { name: "Instagram", url: "https://www.instagram.com/africacampusbattle/", icon: <FaInstagram /> },
    { name: "Youtube", url: "https://youtube.com/@africascampusbattle?si=8u2QjRRUbspKAIY0", icon: <FaYoutube /> }
  ],
 
  "Contact Info": [
    { name: "info@africascampusbattle.org", sectionId: "email" },
    { name: "+254 715 695 363", sectionId: "phone" },
    { name: "Nairobi , Kenya", sectionId: "address-2" }
  ]
};

const FooterLinks = () => {
 
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-12 w-full items-center justify-center">
      {Object.entries(links).map(([category, items], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: categoryIndex * 0.2 }}
          className="flex flex-col items-center"
        >
          <h3 className="font-poppins text-2xl font-semibold text-customOrange mb-4">
            {category}
          </h3>
          <ul className="space-y-5">
            {items.map((item, itemIndex) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 + itemIndex * 0.1 }}
              >
                <a
                  href={item.url ? item.url : `#${item.sectionId}`}
                
                  target={item.url ? "_blank" : "_self"}
                  rel={item.url ? "noopener noreferrer" : ""}
                  className={
                    category === "Socials"
                      ? "w-10 h-10 font-poppins rounded-full border border-[#9c6717] hover:bg-[#ea580c] transition duration-500 flex justify-center items-center text-white"
                      : "text-gray-300 hover:text-customOrange transition-colors duration-200"
                  }
                >
                  {category === "Socials" ? item.icon : item.name}
                </a>
              </motion.li>
            ))}
          </ul>
          
        </motion.div>
      ))}
      <ContactForm />
    </div>
  );
};

export default FooterLinks;
