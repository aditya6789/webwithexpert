// import { LampDemo } from "@/components/lampdemo";

import ContainerWrapper from "@/components/containerWrapper";
import { GlobeDemo } from "@/components/globleDemo";
import { WobbleCardDemo } from "@/components/wobleCardDemo";
import Logo from "../../public/logo.png";
import { Button } from "@nextui-org/react";
import GetConnectBanner from "@/components/banner/getConnectBanner";

const AboutPage = () => {
  return (
    <>
      <header>
        <ContainerWrapper>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mt-10 lg:mt-20">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                We are Webwithexpert Agency
              </h1>
              <p className="text-sm sm:text-md lg:text-lg font-medium text-gray-500 mt-5 lg:mt-10">
                We are not just an agency, we are a studio of creatives that
                build amazing products for startups, companies, and ourselves.
              </p>
            </div>
           
              <GlobeDemo />
            
          </div>
        </ContainerWrapper>
      </header>
      {/* story  */}
      <section>
        <ContainerWrapper>
          <div className="flex flex-col justify-center items-center my-10 lg:my-20">
            <img src={Logo} alt="" className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]" />
            <h1 className="text-3xl sm:text-4xl font-bold mt-5 lg:mt-10">
              The story started 5 years ago
            </h1>
            <p className="text-md sm:text-lg font-medium mt-3 lg:mt-5 mb-5 lg:mb-10">
              Since 2015 we have designed amazing sites, collaborated on great
              projects, and helped hundreds of companies launch world-class
              websites.
            </p>
            <WobbleCardDemo />
            <Button className="bg-red-500 px-8 sm:px-12 py-6 sm:py-8 text-white rounded-full text-md sm:text-lg mt-5 lg:mt-10 shadow-md">
              Get in Touch
            </Button>
          </div>
        </ContainerWrapper>
      </section>
    <GetConnectBanner/>
    </>
  );
};

export default AboutPage;
