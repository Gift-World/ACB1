import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const links = {
  "Socials": [
    { name: "Facebook", url: "https://web.facebook.com/profile.php?id=61571583696663", icon: <FaFacebook /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/craftwise-academyke/?viewAsMember=true", icon: <FaLinkedin /> },
    { name: "Instagram", url: "https://www.instagram.com/craftwiseke?igsh=MWxyZmJsemFzeGRkdg==", icon: <FaInstagram /> }
  ],
  "Programs": [
    { name: "Past Seasons", route: "/rising" },
    { name: "Season 7", route: "/managers" },
    { name: "News & Insights", route: "/emerging" },
    { name: "FAQS", route: "/legacy" }
  ],
  "Company": [
    { name: "About Us", sectionId: "about" },
    { name: "Home", sectionId: "what-we-do" },
    { name: "Season Highlights", sectionId: "crafters" },
    { name: "Partners", sectionId: "partners" }
  ],
  "Contact Info": [
    { name: "info@africascampusbattle.org", sectionId: "email" },
    { name: "+254 715 695 363", sectionId: "phone" },
    { name: "Nairobi , Kenya", sectionId: "address-2" }
  ]
};

const FooterLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e, route, sectionId) => {
    e.preventDefault();
    
    if (route) {
      navigate(route);
    } else if (sectionId) {
      if (location.pathname === "/") {
        // Scroll directly if already on Home
        scrollToSection(sectionId);
      } else {
        // Navigate to Home first, then scroll
        navigate("/", { state: { scrollTo: sectionId } });
      }
    }
  };

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-full text-center">
      {Object.entries(links).map(([category, items], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: categoryIndex * 0.2 }}
          className="flex flex-col items-center"
        >
          <h3 className="font-montserrat text-2xl font-semibold text-orange-500 mb-4">
            {category}
          </h3>
          <ul className="space-y-2">
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
                  onClick={(e) =>
                    item.route
                      ? handleClick(e, item.route)
                      : item.sectionId && handleClick(e, null, item.sectionId)
                  }
                  target={item.url ? "_blank" : "_self"}
                  rel={item.url ? "noopener noreferrer" : ""}
                  className={
                    category === "Socials"
                      ? "w-10 h-10 font-montserrat rounded-full border border-[#9c6717] hover:bg-[#ea580c] transition duration-500 flex justify-center items-center text-white"
                      : "text-gray-300 hover:text-orange-600 transition-colors duration-200"
                  }
                >
                  {category === "Socials" ? item.icon : item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default FooterLinks;
