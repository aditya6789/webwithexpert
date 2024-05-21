import { Button } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";
import ContainerWrapper from "../containerWrapper";
import Logo from "../../../public/logo.png";

const Footerlink = [
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
const Footer = () => {
  const pathname = useLocation();

  return (
    <footer>
      <ContainerWrapper>
        <div className="flex justify-between items-center py-10">
          <img src={Logo} alt="" className="h-20 w-20" />

          <ul className="flex justify-start items-center gap-7">
            {Footerlink.map((data, index) => (
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
          </ul>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        <div className="py-10">
          <h1>Copyright © 2024 Webwithexpert Agency</h1>
        </div>
      </ContainerWrapper>
    </footer>
  );
};

export default Footer;
