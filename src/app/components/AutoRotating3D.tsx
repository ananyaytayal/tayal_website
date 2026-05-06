import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "./ThreeDCard";

export function AutoRotating3D({
  children,
  className,
  duration = 20,
  onClick,
  isRotating: controlledIsRotating,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  onClick?: () => void;
  isRotating?: boolean;
}) {
  const [internalIsRotating, setInternalIsRotating] = useState(true);
  const isRotating = controlledIsRotating !== undefined ? controlledIsRotating : internalIsRotating;

  const handleClick = () => {
    if (controlledIsRotating === undefined) {
      setInternalIsRotating(!internalIsRotating);
    }
    onClick?.();
  };

  return (
    <div
      className={cn("relative perspective-1000 cursor-pointer", className)}
      style={{ perspective: "1000px" }}
      onClick={handleClick}
    >
      <motion.div
        animate={isRotating ? { rotateY: [0, 360] } : { rotateY: 0 }}
        transition={{
          repeat: isRotating ? Infinity : 0,
          ease: "linear",
          duration: duration,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        <div
          className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] z-10 pointer-events-none rounded-xl"
          style={{ transform: "translateZ(1px)" }}
        />
        {children}
      </motion.div>

      {/* Rotation indicator */}
      <div className="absolute top-2 right-2 z-20 bg-brand-950/80 backdrop-blur text-brand-400 p-1 rounded-full text-xs">
        {isRotating ? (
          <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
        )}
      </div>
    </div>
  );
}
