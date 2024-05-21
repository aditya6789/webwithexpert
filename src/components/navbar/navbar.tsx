import ContainerWrapper from "../containerWrapper";
import Logo from "../../../public/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
const navlink = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Protfolio",
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
console.log(navlink);
const Navbar = () => {
  const pathname = useLocation();
  return (
    <nav>
      <ContainerWrapper>
        <div className="flex justify-between items-center py-5">
          <img src={Logo} alt="" className="h-20 w-20" />
          <ul className="flex justify-start items-center gap-7">
            {navlink.map((data, index) => (
              <Link
                to={data.href}
                key={index}
                className={`${
                  pathname.pathname === data.href
                    ? "text-black"
                    : "text-gray-400"
                } text-lg hover:bg-gray-100 p-3 hover:text-black  rounded-xl font-medium`}
              >
                <li>{data.name}</li>
              </Link>
            ))}
            <Link to={"/contact"}>
              <Button
                variant={"default"}
                className={`bg-red-500 text-white rounded-xl`}
              >
                Get In Touch
              </Button>
            </Link>
          </ul>
        </div>
      </ContainerWrapper>
    </nav>
  );
};

export default Navbar;
