import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-16">
          <div className="">
            <Link to="/">
              <img
                src="data:image/png;base64,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"
                alt="logo"
                className="h-36  object-contain w-auto md:w-56 -ml-5 md:-ml-14 -mt-5 md:-mt-6"
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
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-white transition-colors focus:outline-none relative group"
            >
              <span className="relative">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              to="/pastseasons"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-white transition-colors focus:outline-none relative group"
            >
              <span className="relative">
                Past Seasons
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              to="/blogs"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-white transition-colors focus:outline-none relative group"
            >
              <span className="relative">
                News & Insights
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <Link
              to="/season7"
              className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-white transition-colors focus:outline-none relative group"
            >
              <span className="relative">
                Season 7
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
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-white transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  About Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/pastseasons"
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-white transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  Past Seasons
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/blogs"
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-white transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  News & Insights
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                to="/season7"
                className="font-montserrat font-medium text-[15px] inline-flex items-center px-1 pt-1 text-white hover:text-white transition-colors focus:outline-none relative group"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="relative">
                  Season 7
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