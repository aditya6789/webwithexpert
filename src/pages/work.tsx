import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import ContainerWrapper from "@/components/containerWrapper";
import { Button } from "@nextui-org/react";
import Image1 from "../../public/images/marketing page.png";
import Image2 from "../../public/images/marketing page  2.png";
import Image3 from "../../public/images/marketing page 3.png";
import Image4 from "../../public/images/marketing page 4.png";

// Project data
const projects = [
  {
    title: "Marketing Solutions",
    description: "A comprehensive digital marketing platform",
    image: Image1,
    category: "Web Development",
    tech: ["React", "Node.js", "TailwindCSS"],
    link: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced features",
    image: Image2,
    category: "E-commerce",
    tech: ["Next.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics and reporting system",
    image: Image3,
    category: "Analytics",
    tech: ["React", "D3.js", "Firebase"],
    link: "#"
  },
  {
    title: "Mobile App Interface",
    description: "Intuitive mobile application design",
    image: Image4,
    category: "Mobile App",
    tech: ["React Native", "Redux", "Node.js"],
    link: "#"
  }
];

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-black pt-16 md:pt-0">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-purple-900/20 rounded-full mix-blend-multiply filter blur-[132px] animate-blob" />
        <div className="absolute top-0 -right-4 w-[500px] h-[500px] bg-blue-900/20 rounded-full mix-blend-multiply filter blur-[132px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-[500px] h-[500px] bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-[132px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-start pt-32 md:pt-40 overflow-hidden">
          <div className="absolute inset-0">
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1.0}
              particleDensity={70}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>

          <ContainerWrapper>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto px-4"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center px-6 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm text-sm font-medium text-purple-400 mb-8"
              >
                OUR WORK
              </motion.span>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Showcasing Our
                <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent"> Digital Excellence</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-gray-400 mb-8"
              >
                Explore our portfolio of innovative projects that have helped businesses transform their digital presence.
              </motion.p>
            </motion.div>
          </ContainerWrapper>
        </section>

        {/* Projects Grid Section */}
        <section className="relative py-10 md:py-16">
          <ContainerWrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-1000" />
                  <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 mb-4">
                        {project.category}
                      </span>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 rounded-md text-xs bg-white/5 text-white/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Project Button */}
                      <motion.a
                        href={project.link}
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300"
                      >
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ContainerWrapper>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-16 border-t border-purple-500/10">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
          <ContainerWrapper>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-400 mb-8">
                Let's work together to bring your vision to life.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-xl font-medium hover:opacity-90 transition-all duration-300">
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </ContainerWrapper>
        </section>
      </div>
    </div>
  );
};

export default WorkPage; 