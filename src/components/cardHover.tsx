"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const serviceCards = [
  {
    id: 1,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications built with cutting-edge technology.",
    icon: "📱",
    gradient: "from-blue-500 to-cyan-500",
    shadowColor: "shadow-blue-500/30",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
    shadowColor: "shadow-purple-500/30",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Scalable, secure backend solutions that power your mobile applications.",
    icon: "⚡",
    gradient: "from-orange-500 to-red-500",
    shadowColor: "shadow-orange-500/30",
  },
];

export const CardHoverEffectDemo = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-6">
      {serviceCards.map((card, idx) => (
        <motion.div
          key={card.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          {/* Gradient Border */}
          <div
            className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${card.gradient} 
              opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200 blur`}
          />
          
          {/* Card Content */}
          <div className="relative h-full bg-white/10 backdrop-blur-xl rounded-xl p-8 transition-all duration-500 
            hover:bg-white/20 border border-white/10">
            {/* Icon */}
            <div className="mb-4 text-4xl">{card.icon}</div>
            
            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-white">
              {card.title}
            </h3>
            
            {/* Description */}
            <p className="text-white/80 text-sm leading-relaxed">
              {card.description}
            </p>

            {/* Hover Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 
                text-white text-sm font-medium transition-all duration-300 flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Background Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 transform-gpu blur-xl" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
