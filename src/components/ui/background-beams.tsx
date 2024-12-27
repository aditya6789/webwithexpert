"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const particles: { x: number; y: number; directionX: number; directionY: number }[] = [];
    const particleCount = 100;

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        directionX: (Math.random() - 0.5) * 2,
        directionY: (Math.random() - 0.5) * 2,
      };
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.directionX;
        particle.y += particle.directionY;

        if (particle.x < 0 || particle.x > canvas.width) particle.directionX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.directionY *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        context.fillStyle = "rgba(255, 255, 255, 0.1)";
        context.fill();
      });
    };

    animate();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 -z-10 animate-fade-in", className)}
    />
  );
}; 