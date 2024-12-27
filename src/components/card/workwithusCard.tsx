import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface WorkwithusCardProps {
  id: number;
  title: string;
  desc: string;
  color: string;
  icon?: string;
  img?: string;
}

const WorkwithusCard = ({ title, desc, color, icon, img }: WorkwithusCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Background Gradient Animation */}
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-red-500 to-purple-500 opacity-0 group-hover:opacity-75 blur transition duration-1000" />
      
      {/* Card Content */}
      <div className="relative h-full bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden transition-all duration-300">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] [mask-image:radial-gradient(white,transparent_90%)]" />
        
        {/* Icon Container */}
        <div className={cn(
          "relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
          color ? `bg-${color}-500/10` : "bg-blue-500/10"
        )}>
          {icon && (
            <img 
              src={icon} 
              alt={title} 
              className="w-8 h-8 object-contain"
            />
          )}
          
          {/* Glow Effect */}
          <div className={cn(
            "absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300",
            color ? `bg-${color}-500/20` : "bg-blue-500/20"
          )} />
        </div>

        {/* Title with Gradient */}
        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 group-hover:from-red-500 group-hover:to-purple-500 transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/60 leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300">
          {desc}
        </p>

        {/* Image Section */}
        {img && (
          <div className="relative mt-8 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img 
              src={img} 
              alt={title}
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        )}

        {/* Learn More Button */}
        <motion.div 
          className="mt-6 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          <span className="font-medium">Learn More</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </motion.div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
      </div>
    </motion.div>
  );
};

export default WorkwithusCard;
