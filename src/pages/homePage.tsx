import WorkwithusCard from "@/components/card/workwithusCard";
// import ServiceCard from "@/components/card/serviceCard";
import ContainerWrapper from "@/components/containerWrapper";
import { HorizontalScrollCarousel } from "@/components/horizontal";
import { LogoName, workwithusData } from "@/data";
import { Button } from "@nextui-org/react";
import { Card } from "../components/card/card";
// import { Check } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image1 from "../../public/images/marketing page.png";
import Image2 from "../../public/images/marketing page  2.png";
import Image3 from "../../public/images/marketing page 3.png";
import Image4 from "../../public/images/marketing page 4.png";
import { motion, AnimatePresence } from "framer-motion";
import { TabsDemo } from "@/components/tabs";
import { CardHoverEffectDemo } from "@/components/cardHover";
import LogoCard from "@/components/card/logoCard";

const ImagesData = [
  {
    img: Image1,
  },
  {
    img: Image2,
  },
  {
    img: Image3,
  },
  {
    img: Image4,
  },
];

const HomePage = () => {
  const cardRefs = useRef<Array<React.MutableRefObject<HTMLDivElement | null>>>(
    []
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const cardTop = 100; // Adjust this value based on your layout
      const cardHeight = 200; // Adjust this value based on your layout
      const marginY = 20; // Adjust this value based on your layout

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
  const [images, setImages] = useState<string[]>([]); // Array of image URLs
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the scroll container

  // Function to load images when component mounts
  useEffect(() => {
    // Replace with your logic to fetch images
    // For demo purpose, I'm using placeholder images
    const fetchImages = async () => {
      // Example: Fetch images from an API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const data = await response.json();
      const imageUrls = data.map((item: any) => item.url);
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  // Function to handle scrolling animation
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const animationDuration = scrollWidth * 0.05; // Adjust the animation duration as needed

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
      <header className="h-screen">
        <ContainerWrapper>
          <div className="flex flex-col justify-center items-center h-[80vh]">
            <div className="flex justify-between items-center gap-10">
              <div>
                <p className="text-[18px] font-medium text-red-500">
                  WEB DESIGN & DEVELOPMENT AGENCY
                </p>
                <h1 className="font-bold text-[56px]">
                  We create amazing websites for world-class tech companies
                </h1>
                <p className="text-[18px] font-medium text-gray-500 mt-5 leading-tight">
                  Our team of designers & developers creates amazing websites
                  for startups, big companies, and ourselves.
                </p>
                <div className="mt-10">
                  <Button className=" py-7 px-10 shadow-lg bg-red-500 mr-10 text-lg">
                    Contact Us
                  </Button>
                  <Button
                    variant="bordered"
                    className="py-7 px-10 shadow-lg bg-white text-lg"
                  >
                    Protfolio
                  </Button>
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
      {/* our services  */}
      <section className="bg-blue-500 rounded-tr-[200px] h-[130vh]">
        <ContainerWrapper>
          <div className="flex justify-between items-end pt-[100px]  ">
            <div className="">
              <p className="text-[20px] font-medium text-white">OUR SERVICES</p>
              <h1 className="text-[50px] font-bold text-white">
                High-impact design & development services
              </h1>
            </div>
            <Button className="bg-white">Get In Touch</Button>
          </div>
          <CardHoverEffectDemo />
        </ContainerWrapper>
      </section>

      {/* work with us  */}
      <section>
        <ContainerWrapper>
          <div className="flex justify-between items-end pt-[100px] pb-[70px] ">
            <div className="">
              <p className="text-[20px] font-medium text-black">OUR SERVICES</p>
              <h1 className="text-[50px] font-bold text-black">
                High-impact design & development services
              </h1>
            </div>
            <Button className="bg-white">Get In Touch</Button>
          </div>
          <div>
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
      {/* Testimonial  */}
      <section className="bg-gray-100 mb-10 h-screen pt-10 mt-20">
        <div className="mt-10">
          <ContainerWrapper>
            <div className="flex flex-col justify-center items-center mt-10">
              <p className="text-red-500 font-medium text-xl">Testimonial</p>
              <h1 className="text-[50px] font-bold ">
                Don’t take our word for it
              </h1>
              <p className="text-gray-600 font-medium text-xl text-center">
                Take a look at what our amazing clients have to say about us,
                and the great impact Webwithexpert Agency has done on their
                businesses.
              </p>
            </div>

            <TabsDemo />
          </ContainerWrapper>
        </div>
      </section>
      {/* Img Scroll  */}

      <section className="mt-[100px]">
        <div className="flex flex-col justify-center items-center mt-10 ">
          <p className="text-red-500 font-medium text-xl">PAST PROJECTS</p>
          <h1 className="text-[50px] font-bold ">
            Let our work speak for itself
          </h1>
          <p className="text-gray-600 font-medium text-xl text-center">
            Want to discover what we can do? Take a look at some of the amazing
            websites that have been created by our team of talented designers
            and developers.
          </p>
        </div>
        <Marquee className="mt-20" speed={200}>
          {ImagesData.map((image, index) => (
            <img
              src={image.img}
              alt=""
              key={index}
              className=" h-[500px] w-[500px] ml-10 rounded-3xl bg-cover"
            />
          ))}
        </Marquee>
        <Marquee className="gap-10 mt-10" speed={200} direction="right">
          {ImagesData.map((image, index) => (
            <img
              src={image.img}
              alt=""
              key={index}
              className=" h-[500px] w-[500px] ml-10 rounded-3xl bg-cover"
            />
          ))}
        </Marquee>
        <div className="flex justify-center gap-10 items-center my-10">
          <Button className="bg-red-500 shadow-lg px-10 py-7 font-medium text-lg text-white">
            Get in Touch
          </Button>
          <Button className="bg-white shadow-lg px-10 py-7 font-medium text-lg ">
            Browse Our Protfolio
          </Button>
        </div>
      </section>
      {/* website for company  */}
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

export default HomePage;
