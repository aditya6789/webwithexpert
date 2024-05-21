import ContainerWrapper from "@/components/containerWrapper";
import Inputwithlabel from "@/components/input/inputwithlabel";
import { Button } from "@nextui-org/react";

const ContactPage = () => {
  return (
    <>
    <header>
        <ContainerWrapper>
          <div className="md:px-[200px]">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mt-10 lg:mt-20">
              <p className="text-md md:text-xl font-semibold text-red-500">CONTACT US</p>
              <h1 className="text-xl md:text-6xl font-bold mt-5">
              Send us a message
              </h1>
              <p className="text-sm sm:text-md lg:text-lg font-medium text-gray-500 mt-5 ">
              Fill the form below and one of our team members will get back to you within 24 business hours to schedule a project discovery call.
              </p>
            </div>
           
          
            
          </div>
          </div>
        </ContainerWrapper>
      </header>
      <section className="mt-20">
        <ContainerWrapper>
          <div className="md:px-[200px]">
          <div className="md:flex justify-center gap-10  items-center">
            <Inputwithlabel label="What's your name?" placeholder="Enter Your Full Name"/>
            <Inputwithlabel label="What's your email?" placeholder="Enter Your Email" classname="mt-5 md:mt-0"/>

          </div>
          <div className="md:flex justify-center gap-10  items-center mt-10">
            <Inputwithlabel label="What's your company?" placeholder="Enter Your company name"/>
            <Inputwithlabel label="What's your current website?" placeholder="Enter Your website" classname="mt-5 md:mt-0"/>

          </div>
          <Inputwithlabel label="Tell us a little more about you project" placeholder="please feel free to write as much as you need" classname="mt-10"/>
          <Button className="px-[100px] py-[30px] mt-10 text-white font-medium bg-red-500 shadow-md rounded-3xl">Send Message</Button>
          
          </div>
        </ContainerWrapper>
      </section>
    </>
  );
};

export default ContactPage;
