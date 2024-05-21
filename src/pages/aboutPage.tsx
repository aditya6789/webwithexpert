// import { LampDemo } from "@/components/lampdemo";

import ContainerWrapper from "@/components/containerWrapper";
import { GlobeDemo } from "@/components/globleDemo";
import { WobbleCardDemo } from "@/components/wobleCardDemo";
import Logo from "../../public/logo.png";
import { Button } from "@nextui-org/react";

const AboutPage = () => {
  return (
    <>
      <header>
        <ContainerWrapper>
          <div className="flex justify-between items-center">
            <div className=" mt-20">
              <h1 className="text-7xl font-bold">
                We are Webwithexpert Agency
              </h1>
              <p className="text-md font-medium text-gray-500 mt-10 ">
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
          <div className="flex flex-col justify-center items-center my-20">
            <img src={Logo} alt="" className="h-[150px] w-[150px]" />
            <h1 className="text-4xl font-bold mt-10 ">
              The story started 5 years ago
            </h1>
            <p className="text-lg font-medium mt-5 mb-10">
              Since 2015 we have designed amazing sites, collaborated on great
              projects, and helped hundreds of companies launch world-class
              websites.
            </p>
            <WobbleCardDemo />
            <Button className="bg-red-500 px-12 py-8 text-white rounded-full text-lg mt-10 ">
              Get in Touch
            </Button>
          </div>
        </ContainerWrapper>
      </section>
      <section className="bg-[#0a62e3] mt-10 rounded-t-[300px]">
        <div className="flex justify-between items-center px-[200px]">
          <div>
            <video
              playsInline
              autoPlay
              muted
              loop
              className="w-full h-[50vh] shadow-2xl rounded-3xl my-10"
            >
              <source
                src="https://components.brixagency.com/src/brix-agency-design-agency.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <ContainerWrapper>
            <div className=" ml-10">
              <h1 className="text-5xl font-bold text-white  mt-5">
                Ready to create an amazing website for your company?
              </h1>
              <p className="text-lg font-medium text-white mt-5">
                Our amazing team of designers & developers is ready to help you
                take your website to the next level. Send us a message today!
              </p>
              <Button className="bg-white shadow-lg px-10 py-7 font-medium text-lg mt-10">
                Get in Touch
              </Button>
            </div>
          </ContainerWrapper>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
