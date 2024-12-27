import { Link, useLocation } from "react-router-dom";
import ContainerWrapper from "../containerWrapper";
import Logo from "../../../public/logo-white.png";
import { motion } from "framer-motion";

const Footerlink = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Portfolio",
    href: "/work",
  },
  {
    name: "Plans",
    href: "/plan",
  },
  {
    name: "About",
    href: "/about",
  },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <ContainerWrapper>
        <div className="relative z-10 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2">
              <motion.img 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                src={Logo} 
                alt="Logo" 
                className="h-20 w-20 mb-6" 
              />
              <p className="text-gray-400 max-w-md">
                We create exceptional mobile applications that transform ideas into reality. 
                Your vision, our expertise – let's build something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {Footerlink.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      to={link.href}
                      className={`${
                        location.pathname === link.href
                          ? "text-purple-500"
                          : "text-gray-400"
                      } hover:text-white transition-colors duration-300`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
                Contact Us
              </h3>
              <div className="space-y-4 text-gray-400">
                <p>Email: hello@webwithexpert.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Location: New York, NY</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mb-12">
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20" />

          {/* Copyright */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>© 2024 Webwithexpert Agency. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <motion.a 
                whileHover={{ color: "#fff" }}
                href="#" 
                className="text-sm hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                whileHover={{ color: "#fff" }}
                href="#" 
                className="text-sm hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </footer>
  );
};

export default Footer;
