import  { useState } from "react";
import ContainerWrapper from "../containerWrapper";
import Logo from "../../../public/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Menu, X } from "lucide-react";

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

  return (
    <nav className="bg-white ">
      <ContainerWrapper>
        <div className="flex justify-between items-center py-5">
          <Link to={"/"}>
          <img src={Logo} alt="" className="h-12 w-12 md:h-20 md:w-20" />
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-8 w-8 text-gray-800" />
              ) : (
                <Menu className="h-8 w-8 text-gray-800" />
              )}
            </button>
          </div>
          <ul className="hidden md:flex justify-start items-center gap-7">
            {navlink.map((data, index) => (
              <Link
                to={data.href}
                key={index}
                className={`${
                  pathname === data.href
                    ? "text-black"
                    : "text-gray-400"
                } text-lg hover:bg-gray-100 p-3 hover:text-black rounded-xl font-medium`}
              >
                <li>{data.name}</li>
              </Link>
            ))}
            <Link to="/contact">
              <Button
                variant="default"
                className="bg-red-500 text-white rounded-xl"
              >
                Get In Touch
              </Button>
            </Link>
          </ul>
        </div>
        {isMenuOpen && (
          
          <ul className="md:hidden flex flex-col items-center gap-5 mt-5">
            {navlink.map((data, index) => (
              <Link
                to={data.href}
                key={index}
                className={`${
                  pathname === data.href
                    ? "text-black"
                    : "text-gray-400"
                } text-lg hover:bg-gray-100 p-3 hover:text-black rounded-xl font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                <li>{data.name}</li>
              </Link>
            ))}
            <Link to="/contact">
              <Button
                variant="default"
                className="bg-red-500 text-white rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Get In Touch
              </Button>
            </Link>
          </ul>
        )}
      </ContainerWrapper>
    </nav>
  );
};

export default Navbar;
