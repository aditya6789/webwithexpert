"use client";
import React, { useEffect, useRef } from "react";

interface SparklesProps {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore: React.FC<SparklesProps> = ({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  className,
  particleColor = "#FFF"
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }> = [];

    const createParticles = () => {
      const density = particleDensity;
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles.length = 0;
      createParticles();
    };

    handleResize();
    animate();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [maxSize, minSize, particleColor, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      style={{ background }}
      className={className}
    />
  );
}; 