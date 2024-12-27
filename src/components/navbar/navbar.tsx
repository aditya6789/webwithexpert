import { useState, useEffect } from "react";
import ContainerWrapper from "../containerWrapper";
import Logo from "../../../public/logo-white.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navlink = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/work",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 px-6 md:px-10 top-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`rounded-2xl md:rounded-full transition-all duration-300 border backdrop-blur-lg shadow-lg
          ${scrolled 
            ? "bg-black/40 border-white/10 shadow-black/20" 
            : "bg-black/20 border-white/5 shadow-black/10"
          }
        `}
      >
        <ContainerWrapper className="px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <motion.div 
                className="flex items-center justify-center gap-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={Logo} alt="" className="h-10 w-10 md:h-12 md:w-12" />
                <div className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  WEBWITHEXPERT
                </div>
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </motion.button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-start items-center gap-7">
              {navlink.map((data, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={data.href}
                    className={`relative text-lg font-medium transition-colors duration-300
                      ${pathname === data.href ? "text-white" : "text-gray-400 hover:text-white"}
                    `}
                  >
                    {data.name}
                    {pathname === data.href && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500"
                        animate
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-xl px-6 py-2 font-medium hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                    Get In Touch
                  </Button>
                </motion.div>
              </Link>
            </ul>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden mt-2"
              >
                <motion.ul 
                  className="flex flex-col items-center gap-5 py-5 bg-black/60 backdrop-blur-lg rounded-xl border border-white/10"
                  variants={{
                    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                  }}
                >
                  {navlink.map((data, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link
                        to={data.href}
                        className={`${
                          pathname === data.href ? "text-white" : "text-gray-400"
                        } text-lg hover:text-white transition-colors duration-300`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {data.name}
                      </Link>
                    </motion.li>
                  ))}
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-xl px-6 py-2">
                      Get In Touch
                    </Button>
                  </Link>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </ContainerWrapper>
      </motion.nav>
    </div>
  );
};

export default Navbar;
