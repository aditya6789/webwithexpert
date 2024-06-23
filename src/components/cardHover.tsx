import { HoverEffect } from "./hoverEffect";

export function CardHoverEffectDemo() {
  return (
    <div className="w-full mx-auto px-8">
      <HoverEffect items={serviceCardData} />
    </div>
  );
}

export const serviceCardData = [
  {
    title: "Mobile App Design",
    color: "#fff8f9",
    description:
      "We design mobile applications that look stunning, deliver a seamless user experience, and are optimized for conversions.",
    img: "https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/64062922a09751a1098ce054_web-design-agency.png",
  },
  {
    title: "Mobile App Development",
    color: "#eaf2ff",
    description:
      "We develop fast, responsive, and feature-rich mobile applications using the latest development practices of 2023.",
    img: "https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/6414a7979cc623601c053b0c_web-development-agency.png",
  },
  {
    title: "UI/UX Design",
    color: "#fff3c9",
    description:
      "We design intuitive mobile apps focused on driving user engagement and increasing user retention.",
    img: "https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/6414ba53ec407864f180cfe0_ui-ux-design-agency.png",
  },
  {
    title: "Brand Design",
    color: "#f3fef4",
    description:
      "We transform businesses into world-class brands through a well-thought-out brand identity design process.",
    img: "https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/64062930acab8e66b2e103de_brand-design-agency.png",
  },
  {
    title: "App Optimization",
    color: "#f0efff",
    description:
      "We help you A/B test your mobile app to boost your conversion rates and gain more users.",
    img: "https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/6414a9110b22bf8cbfe6a1dc_conversion-optimization-agency.png",
  },
  {
    title: "App Automation",
    color: "#eaf2ff",
    description:
      "We help your business gain efficiency through automation using simple, yet powerful NoCode tools for your mobile applications.",
    img: "https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/6526d381da3521c0550eed6f_automation-agency.png",
  },
];
