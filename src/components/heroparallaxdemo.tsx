import { HeroParallax } from "./heroparallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

// Updated products array with your projects
export const products = [
  {
    thumbnail: "/images/project1.png", // Update with your project images
    title: "", // Removed text
    link: "#"
  },
  {
    thumbnail: "/images/project2.png",
    title: "",
    link: "#"
  },
  {
    thumbnail: "/images/project3.png",
    title: "",
    link: "#"
  },
  {
    thumbnail: "/images/project4.png",
    title: "",
    link: "#"
  },
  {
    thumbnail: "/images/project5.png",
    title: "",
    link: "#"
  },
  {
    thumbnail: "/images/project6.png",
    title: "",
    link: "#"
  },
  // Add more projects as needed
];
