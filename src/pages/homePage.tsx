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
import GetConnectBanner from "@/components/banner/getConnectBanner";
import axios from "axios";
const ImagesData = [
  { img: Image1 },
  { img: Image2 },
  { img: Image3 },
  { img: Image4 },
];

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
    <>
      <header className="mt-10">
        <ContainerWrapper>
          <div className="flex flex-col justify-center items-center">
            <div className="md:flex justify-between items-center gap-10">
              <div>
                <p className="text-sm md:text-[18px] font-semibold text-red-500 ">
                  MOBILE APP DESIGN & DEVELOPMENT AGENCY
                </p>
                <h1 className="font-bold text-[20px] md:text-[56px] mt-5">
                  We develop custom, amazing and beautiful mobile applications.
                </h1>
                <p className="text-[12px] md:text-[18px] font-medium text-gray-500 mt-3 max-w-lg">
                  Our team of designers and developers creates amazing mobile
                  apps for startups, big companies, and more.
                </p>
                <div className="mt-10 mb-10">
                  <div className="input-btn flex items-center">
                    <input
                      value={phoneNumber == 0 ? undefined : phoneNumber}
                      onChange={(e) => setPhoneNumber(+e.target.value)}
                      type="number"
                      placeholder="+91XXXXXXXXXX"
                      className="w-full md:w-80 py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:border-transparent transition-transform transform hover:scale-105 duration-300 !border-r-0 rounded-r-none"
                    />
                    <Button
                      onClick={() => {
                        axios
                          .post("http://34.224.213.111:5000/contact", {
                            message: phoneNumber.toString(),
                          })
                          .then((resp) => {
                            if (resp.status == 200) {
                              alert("We will contact you under 60 minutes");
                            }
                          });
                      }}
                      className="py-[15px] md:py-[25px] px-4 md:px-8 shadow-lg bg-red-500 text-xs md:text-md text-white font-semibold rounded-lg transition-transform transform hover:scale-105 duration-300 rounded-l-none"
                    >
                      Free Consultation Call
                    </Button>
                  </div>
                  <p className="text-[12px] md:text-[16px] font-normal text-red-500 leading-tight max-w-lg mt-2">
                    ** we will contact you back under 60 minutes. **
                  </p>
                </div>
              </div>

              <div>
                <video
                  playsInline
                  autoPlay
                  muted
                  loop
                  className="w-full h-full"
                >
                  <source
                    src="https://components.brixagency.com/src/brixagency-web-design-agency.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </header>
      {/* Our services */}
      <section className="bg-blue-500 rounded-tr-[200px]">
        <ContainerWrapper>
          <div className="flex flex-col md:flex-row justify-between items-end pt-[100px]">
            <div>
              <p className="text-sm md:text-[20px] font-medium text-white">
                OUR SERVICES
              </p>
              <h1 className="text-[20px] md:text-[50px] font-bold text-white">
                High-impact mobile app design & development services
              </h1>
            </div>
            <Button className="bg-white px-6 md:px-10 py-5 md:py-7 mt-5 md:mt-0">
              Get In Touch
            </Button>
          </div>
          <CardHoverEffectDemo />
        </ContainerWrapper>
      </section>

      {/* Work with us */}
      <section>
        <ContainerWrapper>
          <div className="flex flex-col md:flex-row justify-between items-end pt-[100px] pb-[70px]">
            <div>
              <p className="text-sm md:text-[20px] font-medium text-black">
                WORK WITH US
              </p>
              <h1 className="text-[20px] md:text-[50px] font-bold text-black">
                Partner with us for exceptional mobile app solutions
              </h1>
            </div>
            <Button className="bg-white shadow-md px-6 md:px-10 py-5 md:py-7 mt-5 md:mt-0">
              Get In Touch
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {workwithusData.map((data, index) => (
              <WorkwithusCard
                id={data.id}
                color={data.color}
                desc={data.desc}
                icon={data.icon || ""}
                img={data.img}
                title={data.title}
                key={index}
              />
            ))}
          </div>
        </ContainerWrapper>
      </section>
      {/* Testimonial */}
      <section className="bg-gray-100 mb-10 md:h-[115vh] h-[100vh] pt-10 mt-20">
        <div className="mt-10">
          <ContainerWrapper>
            <div className="flex flex-col justify-center items-center mt-10">
              <p className="text-red-500 font-medium text-sm md:text-xl">
                Testimonial
              </p>
              <h1 className="text-[20px] md:text-[50px] font-bold">
                Don’t take our word for it
              </h1>
              <p className="text-gray-600 font-medium text-sm md:text-xl text-center">
                Take a look at what our amazing clients have to say about us,
                and the significant impact our mobile apps have had on their
                businesses.
              </p>
            </div>
            <TabsDemo />
          </ContainerWrapper>
        </div>
      </section>
      {/* Image Scroll */}
      <section className="mt-[100px]">
        <div className="flex flex-col justify-center items-center mt-10">
          <p className="text-red-500 font-medium text-sm md:text-xl">
            PAST PROJECTS
          </p>
          <h1 className="text-[20px] md:text-[50px] font-bold">
            Let our work speak for itself
          </h1>
          <p className="text-gray-600 font-medium text-sm md:text-xl text-center">
            Want to see what we can do? Check out some of the incredible mobile
            apps that our talented team has developed.
          </p>
        </div>
        <Marquee className="mt-20" speed={200}>
          {ImagesData.map((image, index) => (
            <img
              src={image.img}
              alt=""
              key={index}
              className="h-[150px] w-[150px] md:h-[500px] md:w-[500px] ml-10 rounded-3xl bg-cover"
            />
          ))}
        </Marquee>
        <Marquee className="gap-10 mt-10" speed={200} direction="right">
          {ImagesData.map((image, index) => (
            <img
              src={image.img}
              alt=""
              key={index}
              className="h-[150px] w-[150px] md:h-[500px] md:w-[500px] ml-10 rounded-3xl bg-cover"
            />
          ))}
        </Marquee>
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center my-10 mx-10 md:mx-0">
          <Button className="bg-red-500 shadow-lg px-6 md:px-10 py-5 md:py-7 font-medium text-sm md:text-lg text-white">
            Get in Touch
          </Button>
          <Button className="bg-white shadow-lg px-6 md:px-10 py-5 md:py-7 font-medium text-sm md:text-lg">
            Browse Our Portfolio
          </Button>
        </div>
      </section>
      <GetConnectBanner />
    </>
  );
};

export default HomePage;
