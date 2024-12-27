import { motion } from "framer-motion";
import ContainerWrapper from "@/components/containerWrapper";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@nextui-org/react";
import { GlobeDemo } from "@/components/globleDemo";
import { Link } from "react-router-dom";


// Company stats
const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "25+", label: "Team Members" },
];

// First, add this testimonial data at the top of the file
const testimonials = [
  {
    content: "Working with WebWithExpert was a game-changer for our business. Their mobile app development expertise helped us reach new heights.",
    author: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "/testimonials/user1.jpg" // Add your testimonial images
  },
  {
    content: "The team's attention to detail and innovative approach to problem-solving made our project a huge success.",
    author: "Michael Chen",
    position: "Founder, InnovateLabs",
    image: "/testimonials/user2.jpg"
  },
  {
    content: "Exceptional service and outstanding results. They truly understand modern mobile app development.",
    author: "Emily Rodriguez",
    position: "CTO, DigitalFlow",
    image: "/testimonials/user3.jpg"
  }
];

const AboutPage = () => {
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
        <section className="relative min-h-screen flex items-start pt-32 md:pt-40 overflow-hidden">
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
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-left"
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-flex items-center px-6 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm text-sm font-medium text-purple-400 mb-8"
                >
                  ABOUT US
                </motion.span>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                  We're a team of
                  <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent"> digital craftsmen</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg text-gray-400 mb-8"
                >
                  Building exceptional mobile applications is not just our job — it's our passion. 
                  We blend creativity with technical expertise to create solutions that make a difference.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                <Link to="/contact">
                <Button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-xl font-medium hover:opacity-90 transition-all duration-300">
                    Get Started
                  </Button>
                  </Link>
                  <Button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right Content - Globe */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative mt-8 md:mt-0 h-[500px] md:h-[600px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
                <div className="w-full h-full flex items-center justify-center">
                  <GlobeDemo />
                </div>
              </motion.div>
            </div>
          </ContainerWrapper>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
          <ContainerWrapper>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </ContainerWrapper>
        </section>

        {/* Our Story Section */}
        <section className="py-20 relative">
          <ContainerWrapper>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-gray-400 mb-6">
                  Founded in 2019, we set out to revolutionize the mobile app development industry. 
                  Our journey began with a simple belief: that great software should be both beautiful 
                  and functional.
                </p>
                <p className="text-gray-400 mb-8">
                  Today, we're proud to have helped numerous businesses transform their digital presence 
                  through innovative mobile solutions.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-white rounded-xl px-8 py-4 hover:bg-purple-500/20 transition-all duration-300">
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden">
                  {/* <img 
                    src="/about/team.jpg" // Add your image
                    alt="Our Team"
                    className="w-full h-full object-cover"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </motion.div>
            </div>
          </ContainerWrapper>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative">
          {/* Enhanced background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
          
          <ContainerWrapper>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20" // Increased margin bottom
            >
              {/* Enhanced title styling */}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="inline-flex items-center px-6 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm text-sm font-medium text-purple-400 mb-6"
              >
                TESTIMONIALS
              </motion.span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                What Our Clients Say
              </h2>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what our clients have to say about their experience working with us.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Enhanced card styling */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-red-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-1000" />
                  <div className="relative p-8 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                    {/* Enhanced quote icon */}
                    <div className="mb-6">
                      <svg 
                        className="w-12 h-12 text-purple-500/80" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Enhanced testimonial content */}
                    <p className="text-white text-lg leading-relaxed mb-8 drop-shadow-lg">
                      "{testimonial.content}"
                    </p>

                    {/* Enhanced author info */}
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-purple-500/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">
                          {testimonial.author}
                        </h4>
                        <p className="text-purple-400 text-sm font-medium">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced stats section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-32 text-center" // Increased margin top
            >
              <div className="flex flex-wrap justify-center gap-16 items-center">
                {[
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "50+", label: "Active Clients" },
                  { value: "100+", label: "Projects Delivered" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center px-8 relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
                    <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl">
                      {stat.value}
                    </h3>
                    <p className="text-gray-300 mt-3 text-lg font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ContainerWrapper>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative border-t border-purple-500/10">
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
               <Link to="/contact">
               <Button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-xl font-medium hover:opacity-90 transition-all duration-300">
                  Get in Touch
                </Button>
               </Link>
              </motion.div>
            </div>
          </ContainerWrapper>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
