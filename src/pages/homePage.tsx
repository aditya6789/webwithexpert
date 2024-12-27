import WorkwithusCard from "@/components/card/workwithusCard";
import ContainerWrapper from "@/components/containerWrapper";

import { workwithusData } from "@/data";
import { Button } from "@nextui-org/react";
import { useRef, useEffect, useState } from "react";

import Marquee from "react-fast-marquee";
import Image1 from "../../public/images/marketing page.png";
import Image2 from "../../public/images/marketing page  2.png";
import Image3 from "../../public/images/marketing page 3.png";
import Image4 from "../../public/images/marketing page 4.png";

import { TabsDemo } from "@/components/tabs";
import { CardHoverEffectDemo } from "@/components/cardHover";
// import GetConnectBanner from "@/components/banner/getConnectBanner";
import { motion } from "framer-motion";
// import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const ImagesData = [
  { img: Image1 },
  { img: Image2 },
  { img: Image3 },
  { img: Image4 },
];

interface WindowGTAG extends Window {
  gtag?(
    a1?: string,
    a2?: string,
    a3?: {
      [key: string]: string;
    }
  ): void;
}

const HomePage = () => {
  const cardRefs = useRef<Array<React.MutableRefObject<HTMLDivElement | null>>>(
    []
  );

  const [phoneNumber, setPhoneNumber] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const cardTop = 100;
      const cardHeight = 200;
      const marginY = 20;

      cardRefs.current.forEach((cardRef, index) => {
        const card = cardRef.current;
        if (card) {
          const scrolling = cardTop - top - index * (cardHeight + marginY);
          if (scrolling > 0) {
            const translateY = marginY * index;
            const scale = (cardHeight - scrolling * 0.05) / cardHeight;
            card.style.transform = `translateY(${translateY}px) scale(${scale})`;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [images, setImages] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const data = await response.json();
      const imageUrls = data.map((item: { url: string }) => item.url);
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const animationDuration = scrollWidth * 0.05;

      const scroll = () => {
        container.scrollTo({
          left: scrollWidth,
          behavior: "smooth",
        });
      };

      const resetScroll = () => {
        container.scrollTo({
          left: 0,
          behavior: "auto",
        });
      };

      const interval = setInterval(scroll, animationDuration);
      container.addEventListener("scroll", () => {
        if (container.scrollLeft === 0) {
          resetScroll();
        }
      });

      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="min-h-screen bg-black pt-16 md:pt-0">
      {/* Add animated background elements */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Enhanced Gradient Orbs with better colors and opacity */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-600/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px] opacity-20" />
        
        {/* Enhanced radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/50 to-slate-900/90" />
      </div>

      {/* Update header background */}
      <div className="relative z-10">
        <header className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
          {/* Particles Background */}
          <div className="absolute inset-0">
            <SparklesCore
              // id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />

          {/* Main Content */}
          <ContainerWrapper>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center relative z-10 max-w-4xl mx-auto px-4"
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="inline-flex items-center px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium text-red-500 mb-8">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  MOBILE APP DESIGN & DEVELOPMENT AGENCY
                </span>
              </motion.div>

              {/* Main Title */}
              <div className="mb-8">
                <TypewriterEffect 
                  words={[
                    {
                      text: "We craft",
                      className: "text-3xl md:text-6xl font-bold text-white"
                    },
                    {
                      text: "exceptional",
                      className: "text-3xl md:text-6xl font-bold text-red-500"
                    },
                    {
                      text: "mobile",
                      className: "text-3xl md:text-6xl font-bold text-blue-500"
                    },
                    {
                      text: "experiences",
                      className: "text-3xl md:text-6xl font-bold text-white"
                    }
                  ]}
                />
              </div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              >
                Transform your vision into reality with our expert team of designers 
                and developers crafting cutting-edge mobile applications.
              </motion.p>

              {/* CTA Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center gap-8 mt-12"
              >
                {/* Primary CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="px-8 h-[52px] bg-gradient-to-r from-red-500 to-purple-500 text-white font-medium rounded-2xl hover:opacity-90 transition-all duration-300 text-lg"
                  >
                    Get Started
                  </Button>
                </motion.div>

                {/* Alternative CTA */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded-xl px-8 py-4 hover:bg-white/10 transition-all duration-300">
                      View Our Work
                    </Button>
                  </motion.div>
                  
                  <span className="text-white/40">or</span>
                  
                  <motion.a
                    href="#portfolio"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    Browse Portfolio
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </motion.a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col items-center gap-4 mt-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-center gap-2 text-white/60"
                  >
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Trusted by 500+ clients worldwide</span>
                  </motion.div>

                  <div className="flex items-center gap-6 text-white/40 text-sm">
                    <span>• 24/7 Support</span>
                    <span>• Free Consultation</span>
                    <span>• Quick Response</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </ContainerWrapper>
        </header>
        {/* Our services */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 rounded-tr-[200px]">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />
          <ContainerWrapper>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-end pt-[100px]"
            >
              <div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm md:text-[20px] font-medium text-blue-200"
                >
                  OUR SERVICES
                </motion.p>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[20px] md:text-[50px] font-bold text-white max-w-2xl"
                >
                  High-impact mobile app design & development services
                </motion.h1>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white/10 backdrop-blur-sm px-6 md:px-10 py-5 md:py-7 mt-5 md:mt-0 border border-white/20 hover:bg-white/20 transition-all duration-300 text-white">
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
            <div className="relative z-10">
              <CardHoverEffectDemo />
            </div>
          </ContainerWrapper>
        </section>

        {/* Work with us */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-gray-900 to-black">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
          <ContainerWrapper>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-end pt-[100px] pb-[70px]"
            >
              <div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm md:text-[20px] font-medium bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500"
                >
                  WORK WITH US
                </motion.p>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[20px] md:text-[50px] font-bold text-white max-w-2xl"
                >
                  Partner with us for exceptional mobile app solutions
                </motion.h1>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-red-500 to-purple-500 px-6 md:px-10 py-5 md:py-7 mt-5 md:mt-0 text-white shadow-xl hover:shadow-red-500/25 transition-all duration-300">
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {workwithusData.map((data, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <WorkwithusCard
                    id={data.id}
                    color={data.color}
                    desc={data.desc}
                    icon={data.icon || ""}
                    img={data.img}
                    title={data.title}
                  />
                </motion.div>
              ))}
            </motion.div>
          </ContainerWrapper>
        </section>
        {/* Testimonial */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-gray-900" />
          <div className="relative z-10">
            <ContainerWrapper>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center items-center"
              >
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-purple-500 font-medium text-sm md:text-xl"
                >
                  TESTIMONIALS
                </motion.p>
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[20px] md:text-[50px] font-bold text-white text-center"
                >
                  Don't take our word for it
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/60 font-medium text-sm md:text-xl text-center max-w-2xl mt-4"
                >
                  Take a look at what our amazing clients have to say about us,
                  and the significant impact our mobile apps have had on their
                  businesses.
                </motion.p>
              </motion.div>
              <TabsDemo />
            </ContainerWrapper>
          </div>
        </section>
        {/* Image Scroll */}
        <section className="relative overflow-hidden py-20">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black" />
          
          {/* Content */}
          <div className="relative z-10">
            <ContainerWrapper>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center items-center"
              >
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500"
                >
                  PAST PROJECTS
                </motion.p>
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[20px] md:text-[50px] font-bold text-white text-center mt-2"
                >
                  Let our work speak for itself
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/60 font-medium text-sm md:text-xl text-center max-w-2xl mt-4"
                >
                  Want to see what we can do? Check out some of the incredible mobile
                  apps that our talented team has developed.
                </motion.p>
              </motion.div>
            </ContainerWrapper>

            {/* First Marquee */}
            <div className="relative mt-20">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
              <Marquee className="overflow-hidden" speed={50} gradient={false}>
                <div className="flex gap-6 px-6">
                  {ImagesData.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                      <img
                        src={image.img}
                        alt=""
                        className="h-[200px] w-[300px] md:h-[400px] md:w-[600px] rounded-3xl object-cover shadow-2xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-xl font-bold">Project {index + 1}</h3>
                        <p className="text-sm text-white/80">Mobile Application</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Marquee>
            </div>

            {/* Second Marquee */}
            <div className="relative mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10" />
              <Marquee className="overflow-hidden" speed={50} direction="right" gradient={false}>
                <div className="flex gap-6 px-6">
                  {ImagesData.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                      <img
                        src={image.img}
                        alt=""
                        className="h-[200px] w-[300px] md:h-[400px] md:w-[600px] rounded-3xl object-cover shadow-2xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-xl font-bold">Project {index + 1}</h3>
                        <p className="text-sm text-white/80">Mobile Application</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Marquee>
            </div>

            {/* Call to Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-center gap-6 items-center my-20"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-red-500 to-purple-500 px-8 md:px-12 py-6 md:py-8 text-white rounded-xl text-md md:text-lg shadow-xl hover:shadow-red-500/25 transition-all duration-300">
                  Get in Touch
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 md:px-12 py-6 md:py-8 text-white rounded-xl text-md md:text-lg shadow-xl hover:bg-white/20 transition-all duration-300">
                  Browse Our Portfolio
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* <GetConnectBanner /> */}
      </div>
    </div>
  );
};

export default HomePage;
