import React, { useRef, useState } from "react";


export const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isHorizontalScrolling, setIsHorizontalScrolling] = useState(true);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (targetRef.current) {
      const container = targetRef.current;
      const isEndOfHorizontalScroll =
        container.scrollLeft ===
        container.scrollWidth - container.clientWidth;

      if (
        isHorizontalScrolling &&
        isEndOfHorizontalScroll &&
        event.deltaY > 0
      ) {
        setIsHorizontalScrolling(false);
      }

      if (!isHorizontalScrolling || !isEndOfHorizontalScroll) {
        container.scrollLeft += event.deltaY;
      } else {
        container.scrollTop += event.deltaY;
      }
    }
  };

  return (
    <section
      ref={targetRef}
      className="relative overflow-hidden flex h-screen"
      onWheel={handleScroll}
    >
      <div className="flex gap-4 p-4">
        {serviceCardData.map((card) => (
          <Card serviceCardData={card} key={card.title} />
        ))}
      </div>
    </section>
  );
};

const Card = ({ serviceCardData }: { serviceCardData: CardType }) => {
  return (
    <div className="group relative flex h-[50vh] w-[80vw] rounded-[20px] overflow-hidden bg-neutral-200">
      <div className="flex-1 flex flex-col justify-center items-start px-10">
        <h1 className="text-4xl font-bold">{serviceCardData.title}</h1>
        <p className="text-lg">{serviceCardData.desc}</p>
      </div>
      <div className="flex-1">
        <div
          style={{
            backgroundImage: `url(${serviceCardData.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full bg-cover bg-center"
        ></div>
      </div>
    </div>
  );
};

export type CardType = {
  img: string;
  title: string;
  desc: string;
  color: string;
};


export const serviceCardData:CardType[]  =[
    {
        title:"Web Design",
        desc:"We design websites that look amazing, convey the right brand message and are highly oriented for conversion.",
        color:"",
        img:"https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/64062922a09751a1098ce054_web-design-agency.png"
    },
    {
        title:"Web Development",
        desc:"We develop fast, perfectly responsive, and SEO-optimized websites built with the best development practices of 2023.",
        color:"",
        img:"https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/6414a7979cc623601c053b0c_web-development-agency.png"
    },   {
        title:"UI/UX Design",
        desc:"We design intuitive web & mobile apps focused on driving user engagement and increasing users retention.",
        color:"",
        img:"https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/6414ba53ec407864f180cfe0_ui-ux-design-agency.png"
    },   {
        title:"Brand Design",
        desc:"We transform businesses into world-class brands by going through a well thought brand identity design process.",
        color:"",
        img:"https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/64062930acab8e66b2e103de_brand-design-agency.png"
    },   {
        title:"Conversion Optimization",
        desc:"We help you A/B test your website core landing pages to boost your conversion rates and get more leads.",
        color:"",
        img:"https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/6414a9110b22bf8cbfe6a1dc_conversion-optimization-agency.png"
    },   {
        title:"Automation",
        desc:"We help your business gain leverage and efficiency through automation using simple, yet powerful NoCode tools.",
        color:"",
        img:"https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/6526d381da3521c0550eed6f_automation-agency.png"
    },   
]