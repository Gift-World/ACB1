import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed  bg-transparent w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-16">
          <div className="rounded-full">
          <Link to="/">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNcDtMMJ3o7MH3ndUmJF1X4GI-Czn3fztKw&s"
    alt="logo"
    className="h-20 w-20 md:h-24 md:w-24 mt-10 object-cover rounded-full border-2 border-orange-600"
  />
</Link>

          </div>

          <div className="md:hidden">
            {isMenuOpen ? (
              <X
                className="cursor-pointer text-white"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            ) : (
              <Menu
                className="cursor-pointer text-white"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            )}
          </div>

          <div className="md:flex hidden space-x-8">
            <Link
              to="/"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-red-500 hover:text-white transition-colors focus:outline-none relative group"
            >
              <span className="relative">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              to="/about"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
            >
              <span className="relative">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              to="/pastseasons"
              className="font-montserrat font-semibold text-[17px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
            >
              <span className="relative">
                Past Seasons
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
           
            <Link
              to="/season7"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
            >
              <span className="relative">
                Season 7
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              to="/acbhub"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
            >
              <span className="relative">
                ACB Hub
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              to="/news-and-insights"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
            >
              <span className="relative">
                News & Insights
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              to="faq"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
            >
              <span className="relative">FAQ'S
                
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              to="terms"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
            >
              <span className="relative">Terms and Conditions
                
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="flex md:hidden justify-center items-center flex-col h-[calc(100vh-4rem)] mt-16 bg-black/80 backdrop-blur-sm">
            <div className="flex flex-col gap-y-8 -mt-16">
              <Link
                to="/"
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-white transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/about"
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/pastseasons"
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  Past Seasons
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
             
              <Link
                to="/season7"
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  Season 7
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/acbhub"
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  ACB Hub
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/news-and-insights"
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  News & Insights
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/faq"
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  FAQ'S
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/terms"
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-orange-500 transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  Terms and Condions
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;