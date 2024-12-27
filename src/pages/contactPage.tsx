import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import ContainerWrapper from "@/components/containerWrapper";
import { Button } from "@nextui-org/react";

// Contact info data
const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    value: "hello@company.com",
    link: "mailto:hello@company.com"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    value: "+1 (555) 000-0000",
    link: "tel:+15550000000"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Location",
    value: "Delhi, India",
    link: "https://goo.gl/maps/QYsRGhYyG4T2Zcxt5"
  }
];

// Add these service options at the top of the file
const serviceOptions = [
  "Mobile App Development",
  "Web Development",
  "UI/UX Design",
  "Cloud Solutions",
  "Digital Marketing",
  "Custom Software",
];

const budgetRanges = [
  "Less than $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+"
];

const ContactPage = () => {
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
        <section className="relative py-20 lg:py-32 overflow-hidden">
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-lg"
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-flex items-center px-6 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm text-sm font-medium text-purple-400 mb-8"
                >
                  GET IN TOUCH
                </motion.span>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl lg:text-6xl font-bold text-white mb-6"
                >
                  Let's Build Something
                  <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent"> Amazing Together</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg text-gray-400 mb-12"
                >
                  Have a project in mind? We'd love to hear about it. Drop us a line and let's create something extraordinary.
                </motion.p>

                {/* Contact Info Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-6 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-400">{info.title}</h3>
                        <p className="text-white">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Right Content - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
                <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <form className="space-y-6">
                    {/* Name Field */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">First Name</label>
                        <input
                          type="text"
                          placeholder="John"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Last Name</label>
                        <input
                          type="text"
                          placeholder="Doe"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Email</label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Phone</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                    </div>

                    {/* Company and Role */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Company</label>
                        <input
                          type="text"
                          placeholder="Your Company Name"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Your Role</label>
                        <input
                          type="text"
                          placeholder="e.g. CEO, Manager, Developer"
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                        />
                      </div>
                    </div>

                    {/* Service and Budget */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Service Needed</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20">
                          <option value="" className="bg-gray-900">Select a service</option>
                          {serviceOptions.map((service) => (
                            <option key={service} value={service} className="bg-gray-900">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Budget Range</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20">
                          <option value="" className="bg-gray-900">Select budget range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range} className="bg-gray-900">
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Timeline */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Project Timeline</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/20">
                        <option value="" className="bg-gray-900">Select timeline</option>
                        <option value="immediate" className="bg-gray-900">Immediate</option>
                        <option value="1-3months" className="bg-gray-900">1-3 months</option>
                        <option value="3-6months" className="bg-gray-900">3-6 months</option>
                        <option value="6+months" className="bg-gray-900">6+ months</option>
                      </select>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Project Details</label>
                      <textarea
                        rows={6}
                        placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full px-8 py-6 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-xl font-medium hover:opacity-90 transition-all duration-300">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
            </div>
          </ContainerWrapper>
        </section>

        {/* Map Section */}
        <section className="relative py-20">
          <ContainerWrapper>
            <div className="rounded-2xl overflow-hidden h-[400px] border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004959968!2d77.06889754035558!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1708761547948!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ContainerWrapper>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
