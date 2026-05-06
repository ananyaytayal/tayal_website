import { motion } from "motion/react";

const Cube3D = ({ delay = 0, position, size = 60 }: { delay?: number; position: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, rotateX: -180, rotateY: -180 }}
    animate={{
      opacity: [0.1, 0.25, 0.1],
      rotateX: [0, 360],
      rotateY: [0, 360],
      rotateZ: [0, 180],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
    className={`absolute ${position} z-0 pointer-events-none`}
    style={{ width: size, height: size, perspective: '1000px' }}
  >
    <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
      {/* Front face */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-400/30 to-brand-600/30 border border-brand-500/40"
        style={{ transform: 'translateZ(30px)' }}
      />
      {/* Back face */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-600/30 to-brand-800/30 border border-brand-500/40"
        style={{ transform: 'translateZ(-30px) rotateY(180deg)' }}
      />
      {/* Right face */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-500/30 to-brand-700/30 border border-brand-500/40"
        style={{ transform: 'rotateY(90deg) translateZ(30px)' }}
      />
      {/* Left face */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-300/30 to-brand-500/30 border border-brand-500/40"
        style={{ transform: 'rotateY(-90deg) translateZ(30px)' }}
      />
      {/* Top face */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-200/30 to-brand-400/30 border border-brand-500/40"
        style={{ transform: 'rotateX(90deg) translateZ(30px)' }}
      />
      {/* Bottom face */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-700/30 to-brand-900/30 border border-brand-500/40"
        style={{ transform: 'rotateX(-90deg) translateZ(30px)' }}
      />
    </div>
  </motion.div>
);

const Cylinder3D = ({ delay = 0, position, size = 50 }: { delay?: number; position: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, rotateX: 0 }}
    animate={{
      opacity: [0.15, 0.3, 0.15],
      rotateX: [0, 360],
      rotateY: [0, 180],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute ${position} z-0 pointer-events-none`}
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full relative">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Cylinder body */}
        <ellipse cx="50" cy="25" rx="35" ry="8" fill="url(#cylinderGradient1)" opacity="0.4"/>
        <ellipse cx="50" cy="75" rx="35" ry="8" fill="url(#cylinderGradient2)" opacity="0.4"/>
        <rect x="15" y="25" width="70" height="50" fill="url(#cylinderSide)" opacity="0.3"/>
        
        {/* Gradients */}
        <defs>
          <radialGradient id="cylinderGradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(74,117,143)" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="rgb(74,117,143)" stopOpacity="0.2"/>
          </radialGradient>
          <radialGradient id="cylinderGradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(30,58,138)" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="rgb(30,58,138)" stopOpacity="0.2"/>
          </radialGradient>
          <linearGradient id="cylinderSide" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(74,117,143)" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="rgb(30,58,138)" stopOpacity="0.4"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </motion.div>
);

const HexagonalPrism3D = ({ delay = 0, position, size = 70 }: { delay?: number; position: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, rotateY: 0 }}
    animate={{
      opacity: [0.12, 0.28, 0.12],
      rotateY: [0, 360],
      rotateX: [0, 180],
    }}
    transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
    className={`absolute ${position} z-0 pointer-events-none`}
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
      {/* Top hexagon */}
      <div className="absolute inset-0"
        style={{ transform: 'translateZ(25px)' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 85,30 85,70 50,90 15,70 15,30"
            fill="url(#hexGradient1)"
            opacity="0.35"
            stroke="rgb(74,117,143)"
            strokeWidth="1"
          />
        </svg>
      </div>
      {/* Bottom hexagon */}
      <div className="absolute inset-0"
        style={{ transform: 'translateZ(-25px) rotateX(180deg)' }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 85,30 85,70 50,90 15,70 15,30"
            fill="url(#hexGradient2)"
            opacity="0.35"
            stroke="rgb(30,58,138)"
            strokeWidth="1"
          />
        </svg>
      </div>
      {/* Side faces */}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            transform: `rotateY(${i * 60}deg) translateZ(25px)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-brand-500/20 to-brand-600/20 border border-brand-500/30" />
        </div>
      ))}

      <defs>
        <linearGradient id="hexGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(74,117,143)" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0.3"/>
        </linearGradient>
        <linearGradient id="hexGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(30,58,138)" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="rgb(74,117,143)" stopOpacity="0.3"/>
        </linearGradient>
      </defs>
    </div>
  </motion.div>
);

const Torus3D = ({ delay = 0, position, size = 65 }: { delay?: number; position: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, rotateX: 0, rotateY: 0 }}
    animate={{
      opacity: [0.1, 0.25, 0.1],
      rotateX: [0, 360],
      rotateY: [0, -360],
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute ${position} z-0 pointer-events-none`}
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full relative">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="torusGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(74,117,143)" stopOpacity="0.6"/>
            <stop offset="70%" stopColor="rgb(59,130,246)" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="rgb(30,58,138)" stopOpacity="0.2"/>
          </radialGradient>
        </defs>
        {/* Outer ring */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="url(#torusGradient)" strokeWidth="8" opacity="0.3"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="url(#torusGradient)" strokeWidth="6" opacity="0.4"/>
        {/* Inner ring */}
        <circle cx="50" cy="50" r="25" fill="none" stroke="url(#torusGradient)" strokeWidth="4" opacity="0.5"/>
        <circle cx="50" cy="50" r="20" fill="none" stroke="url(#torusGradient)" strokeWidth="2" opacity="0.6"/>
        {/* Center highlight */}
        <circle cx="50" cy="50" r="8" fill="url(#torusGradient)" opacity="0.4"/>
      </svg>
    </div>
  </motion.div>
);

const CNCPart = ({ delay = 0, position, size = 100 }: { delay?: number; position: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotateX: -90 }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.2, 0.8],
      rotateX: [-90, 0, 90, 180, 270, 360],
      rotateY: [0, 90, 180, 270, 360],
    }}
    transition={{
      duration: 20 + delay,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
    className={`absolute ${position} z-0 pointer-events-none`}
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
      {/* CNC Machine Part - Simplified 3D representation */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-brand-800/20 border border-brand-500/30 rounded-lg backdrop-blur-sm">
        <div className="absolute top-2 left-2 w-3 h-3 bg-brand-400/50 rounded-full animate-pulse"></div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-brand-500/50 rounded animate-ping"></div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-brand-400/40 rounded"></div>
        <div className="absolute top-1/2 left-2 w-1 h-6 bg-brand-500/40 rounded"></div>
        <div className="absolute top-1/2 right-2 w-1 h-4 bg-brand-400/40 rounded"></div>
      </div>
      {/* Shadow effect */}
      <div className="absolute -bottom-2 -right-2 w-full h-full bg-black/10 rounded-lg blur-md"></div>
    </div>
  </motion.div>
);

const Gear3D = ({ delay = 0, position, size = 80 }: { delay?: number; position: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, rotate: 0 }}
    animate={{
      opacity: [0.2, 0.4, 0.2],
      rotate: [0, 360],
    }}
    transition={{
      rotate: { duration: 15, repeat: Infinity, ease: "linear", delay },
      opacity: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
    }}
    className={`absolute ${position} z-0 pointer-events-none`}
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full relative">
      <svg viewBox="0 0 100 100" className="w-full h-full text-brand-500/30">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1"/>
        {/* Gear teeth */}
        {Array.from({ length: 12 }, (_, i) => (
          <rect
            key={i}
            x="45"
            y="10"
            width="10"
            height="8"
            fill="currentColor"
            opacity="0.6"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </svg>
    </div>
  </motion.div>
);

const CNCGeometricPart = ({ delay = 0, position, size = 80 }: { delay?: number; position: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotateZ: 0 }}
    animate={{
      opacity: [0.08, 0.22, 0.08],
      scale: [0.8, 1.3, 0.8],
      rotateZ: [0, 360],
      rotateX: [0, 180],
      rotateY: [0, 360],
    }}
    transition={{
      duration: 40,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute ${position} z-0 pointer-events-none`}
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
      {/* Complex CNC machined part */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-brand-700/20 border border-brand-500/30 rounded-lg">
        {/* Precision holes */}
        <div className="absolute top-3 left-3 w-2 h-2 bg-brand-300/60 rounded-full animate-pulse"></div>
        <div className="absolute top-3 right-3 w-2 h-2 bg-brand-500/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-3 left-3 w-2 h-2 bg-brand-400/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-3 right-3 w-2 h-2 bg-brand-600/60 rounded-full animate-ping"></div>
        
        {/* Machined grooves */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-400/40 to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-brand-500/40 to-transparent"></div>
        
        {/* Threaded sections */}
        <div className="absolute top-8 left-8 w-6 h-6 border-2 border-brand-400/50 rounded-full">
          <div className="w-full h-full border border-brand-300/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
        </div>
        
        {/* Precision cuts */}
        <div className="absolute bottom-8 right-8 w-4 h-4 bg-brand-500/30 transform rotate-45"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-brand-600/30 rounded-full"></div>
      </div>
      
      {/* 3D shadow effect */}
      <div className="absolute -bottom-3 -right-3 w-full h-full bg-black/15 rounded-lg blur-lg transform rotate-3"></div>
    </div>
  </motion.div>
);

const DrillBit3D = ({ delay = 0, position, size = 60 }: { delay?: number; position: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: [0.15, 0.35, 0.15],
      y: [20, -20, 20],
      rotateZ: [0, 180, 360],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute ${position} z-0 pointer-events-none`}
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full relative">
      <svg viewBox="0 0 60 60" className="w-full h-full text-brand-400/40">
        <polygon points="30,5 35,25 45,25 37,32 40,45 30,37 20,45 23,32 15,25 25,25" fill="currentColor"/>
        <rect x="28" y="45" width="4" height="10" fill="currentColor"/>
      </svg>
    </div>
  </motion.div>
);

const ParticleSystem = ({ delay = 0, position }: { delay?: number; position: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.8, 0] }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute ${position} z-0 pointer-events-none`}
  >
    <div className="relative w-32 h-32">
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.6, 0],
            x: [0, Math.cos(i * 45 * Math.PI / 180) * 40],
            y: [0, Math.sin(i * 45 * Math.PI / 180) * 40],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.2,
          }}
          className="absolute top-1/2 left-1/2 w-1 h-1 bg-brand-400/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        />
      ))}
    </div>
  </motion.div>
);

const MorphingShape = ({ delay = 0, position, size = 60 }: { delay?: number; position: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.1, 0.3, 0.1],
      scale: [0.8, 1.4, 0.8],
      borderRadius: ["0%", "50%", "25%", "0%"],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute ${position} z-0 pointer-events-none bg-gradient-to-br from-brand-400/20 to-brand-600/20 border border-brand-500/30`}
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full relative overflow-hidden">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle, rgba(74,117,143,0.3) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(30,58,138,0.3) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full"
      />
    </div>
  </motion.div>
);

const WireframeCube = ({ delay = 0, position, size = 70 }: { delay?: number; position: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, rotateX: 0, rotateY: 0 }}
    animate={{
      opacity: [0.15, 0.35, 0.15],
      rotateX: [0, 360],
      rotateY: [0, 360],
    }}
    transition={{
      duration: 28,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
    className={`absolute ${position} z-0 pointer-events-none`}
    style={{ width: size, height: size }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="wireframeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(74,117,143)" stopOpacity="0.6"/>
          <stop offset="50%" stopColor="rgb(59,130,246)" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="rgb(30,58,138)" stopOpacity="0.6"/>
        </linearGradient>
      </defs>
      
      {/* Front face */}
      <rect x="20" y="20" width="60" height="60" fill="none" stroke="url(#wireframeGradient)" strokeWidth="1" opacity="0.5"/>
      {/* Back face */}
      <rect x="30" y="30" width="60" height="60" fill="none" stroke="url(#wireframeGradient)" strokeWidth="1" opacity="0.3"/>
      
      {/* Connecting lines */}
      <line x1="20" y1="20" x2="30" y2="30" stroke="url(#wireframeGradient)" strokeWidth="1" opacity="0.4"/>
      <line x1="80" y1="20" x2="90" y2="30" stroke="url(#wireframeGradient)" strokeWidth="1" opacity="0.4"/>
      <line x1="20" y1="80" x2="30" y2="90" stroke="url(#wireframeGradient)" strokeWidth="1" opacity="0.4"/>
      <line x1="80" y1="80" x2="90" y2="90" stroke="url(#wireframeGradient)" strokeWidth="1" opacity="0.4"/>
    </svg>
  </motion.div>
);

const PulsingRing = ({ delay = 0, position, size = 80 }: { delay?: number; position: string; size?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: [0.1, 0.4, 0.1],
      scale: [0.8, 1.5, 0.8],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute ${position} z-0 pointer-events-none`}
    style={{ width: size, height: size }}
  >
    <div className="w-full h-full relative">
      <motion.div
        animate={{
          borderWidth: [1, 3, 1],
          borderColor: [
            "rgba(74,117,143,0.3)",
            "rgba(59,130,246,0.5)",
            "rgba(74,117,143,0.3)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full rounded-full border-2 border-brand-500/30"
      />
      <motion.div
        animate={{
          borderWidth: [2, 4, 2],
          borderColor: [
            "rgba(30,58,138,0.2)",
            "rgba(74,117,143,0.4)",
            "rgba(30,58,138,0.2)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute inset-4 rounded-full border-2 border-brand-400/20"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-brand-500/10 to-transparent"></div>
    </div>
  </motion.div>
);

export function CNC3DEffects() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 3D Geometric CNC Parts */}
      <Cube3D delay={0} position="top-[12%] left-[5%]" size={80} />
      <Cube3D delay={4} position="top-[20%] right-[8%]" size={65} />
      <Cube3D delay={8} position="bottom-[25%] left-[10%]" size={70} />
      <Cube3D delay={12} position="bottom-[15%] right-[5%]" size={75} />

      {/* Cylinders */}
      <Cylinder3D delay={1} position="top-[35%] left-[15%]" size={60} />
      <Cylinder3D delay={5} position="top-[45%] right-[20%]" size={55} />
      <Cylinder3D delay={9} position="bottom-[35%] left-[25%]" size={65} />

      {/* Hexagonal Prisms */}
      <HexagonalPrism3D delay={2} position="top-[25%] left-[35%]" size={85} />
      <HexagonalPrism3D delay={6} position="top-[55%] right-[35%]" size={75} />
      <HexagonalPrism3D delay={10} position="bottom-[45%] left-[45%]" size={80} />

      {/* Torus Shapes */}
      <Torus3D delay={3} position="top-[15%] left-[60%]" size={70} />
      <Torus3D delay={7} position="bottom-[20%] right-[25%]" size={65} />
      <Torus3D delay={11} position="top-[65%] left-[20%]" size={60} />

      {/* Complex CNC Geometric Parts */}
      <CNCGeometricPart delay={0} position="top-[40%] left-[50%]" size={90} />
      <CNCGeometricPart delay={5} position="top-[60%] right-[10%]" size={85} />
      <CNCGeometricPart delay={10} position="bottom-[50%] right-[40%]" size={95} />

      {/* Rotating Gears */}
      <Gear3D delay={0} position="top-[30%] left-[70%]" size={50} />
      <Gear3D delay={3} position="bottom-[30%] left-[60%]" size={45} />
      <Gear3D delay={6} position="top-[70%] right-[50%]" size={55} />

      {/* Drill Bits */}
      <DrillBit3D delay={2} position="top-[50%] left-[5%]" size={40} />
      <DrillBit3D delay={7} position="bottom-[10%] right-[60%]" size={45} />

      {/* Particle Systems */}
      <ParticleSystem delay={0} position="top-[15%] left-[30%]" />
      <ParticleSystem delay={3} position="bottom-[25%] right-[20%]" />
      <ParticleSystem delay={6} position="top-[50%] right-[5%]" />

      {/* Morphing Shapes */}
      <MorphingShape delay={1} position="top-[8%] right-[40%]" size={50} />
      <MorphingShape delay={5} position="bottom-[15%] left-[50%]" size={45} />
      <MorphingShape delay={9} position="top-[70%] left-[60%]" size={55} />

      {/* Wireframe Cubes */}
      <WireframeCube delay={2} position="top-[25%] left-[55%]" size={60} />
      <WireframeCube delay={7} position="bottom-[35%] right-[45%]" size={65} />

      {/* Pulsing Rings */}
      <PulsingRing delay={0} position="top-[40%] left-[20%]" size={70} />
      <PulsingRing delay={4} position="bottom-[50%] right-[30%]" size={75} />
      <PulsingRing delay={8} position="top-[60%] right-[60%]" size={65} />

      {/* CNC Machine Parts */}
      <CNCPart delay={1} position="top-[10%] left-[40%]" size={100} />
      <CNCPart delay={6} position="bottom-[40%] right-[10%]" size={85} />

      {/* Additional mechanical elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] left-[30%] w-20 h-20 border-2 border-brand-500/30 rounded-full"
      >
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-brand-400/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute inset-2 border border-brand-300/40 rounded-full animate-ping"></div>
      </motion.div>

      {/* Precision grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(74,117,143,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgc3Ryb2tlPSJyZ2IoNzQsMTE3LDE0MykiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] [background-size:40px_40px]"></div>
      </div>
    </div>
  );
}