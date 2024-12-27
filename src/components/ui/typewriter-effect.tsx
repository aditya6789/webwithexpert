"use client";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";


export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        {words.map((word, idx) => (
          <motion.span
            key={idx}
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: idx * 0.2,
              duration: 0.5,
            }}
            className={cn("inline-block mr-2", word.className)}
          >
            {word.text}
          </motion.span>
        ))}
      </div>
    </div>
  );
}; 