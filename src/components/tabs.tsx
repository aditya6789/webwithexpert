"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "The team delivered an exceptional mobile app that exceeded our expectations. Their attention to detail and innovative approach sets them apart.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    company: {
      logo: "/images/company1.png",
      name: "TechStart Inc."
    },
    rating: 5
  },
  {
    id: 2,
    quote: "Working with this team was a game-changer for our business. They transformed our idea into a powerful, user-friendly mobile application.",
    author: "Michael Chen",
    role: "Product Manager, InnovateLabs",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    company: {
      logo: "/images/company2.png",
      name: "InnovateLabs"
    },
    rating: 5
  },
  {
    id: 3,
    quote: "Their expertise in mobile app development is unmatched. The final product was not only beautiful but also performed exceptionally well.",
    author: "Emily Rodriguez",
    role: "CTO, FutureScale",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    company: {
      logo: "/images/company3.png",
      name: "FutureScale"
    },
    rating: 5
  }
];

export const TabsDemo = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="px-4 md:px-8 mt-16 max-w-6xl mx-auto">
      {/* Testimonial Cards */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 blur-3xl" />
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeTab === index ? 1 : 0,
                y: activeTab === index ? 0 : 20,
                scale: activeTab === index ? 1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
              className={`${
                activeTab === index ? "block" : "hidden"
              } bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/10`}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="h-10 w-10 text-purple-500 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="mb-8">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeTab === index
                ? "bg-purple-500 w-8"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

