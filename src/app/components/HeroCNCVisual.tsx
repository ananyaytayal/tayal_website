import { motion } from "motion/react";

export function HeroCNCVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-transparent">
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C8960C" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#C8960C" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="200" r="180" fill="url(#heroGlow)" />

        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          style={{ transformBox: "fill-box", transformOrigin: "200px 200px" }}
        >
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="#C8960C"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="#C8960C"
            strokeWidth="1.5"
            strokeDasharray="8 24"
            strokeOpacity="0.8"
          />
          <g stroke="#C8960C" strokeWidth="1" strokeOpacity="0.5">
            <line x1="200" y1="42" x2="200" y2="52" />
            <line x1="200" y1="348" x2="200" y2="358" />
            <line x1="42" y1="200" x2="52" y2="200" />
            <line x1="348" y1="200" x2="358" y2="200" />
          </g>
        </motion.g>

        <motion.g
          animate={{ rotate: [0, -360] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          style={{ transformBox: "fill-box", transformOrigin: "200px 200px" }}
        >
          <circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="#C8960C"
            strokeWidth="0.8"
            strokeDasharray="4 8"
            strokeOpacity="0.5"
          />
          <circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="#8B6508"
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
        </motion.g>

        <circle
          cx="200"
          cy="200"
          r="70"
          fill="#1a1f2e"
          stroke="#C8960C"
          strokeWidth="1"
          strokeOpacity="0.6"
        />
        <circle
          cx="200"
          cy="200"
          r="50"
          fill="none"
          stroke="#C8960C"
          strokeWidth="0.5"
          strokeOpacity="0.4"
        />

        <motion.circle
          cx="200"
          cy="200"
          r="6"
          fill="#C8960C"
          animate={{ opacity: [0.4, 1, 0.4], r: [6, 10, 6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        <g stroke="#C8960C" strokeWidth="1" strokeOpacity="0.6">
          <line x1="200" y1="135" x2="200" y2="165" />
          <line x1="200" y1="235" x2="200" y2="265" />
          <line x1="135" y1="200" x2="165" y2="200" />
          <line x1="235" y1="200" x2="265" y2="200" />
        </g>

        <g stroke="#C8960C" strokeWidth="1" strokeOpacity="0.4" fill="none">
          <polygon points="200,88 212,94 212,106 200,112 188,106 188,94" />
          <polygon points="200,288 212,294 212,306 200,312 188,306 188,294" />
          <polygon points="88,200 94,188 106,188 112,200 106,212 94,212" />
          <polygon points="288,200 294,188 306,188 312,200 306,212 294,212" />
        </g>

        <g stroke="#F0C040" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="2 4">
          <line x1="60" y1="200" x2="340" y2="200" />
          <line x1="200" y1="60" x2="200" y2="340" />
        </g>

        <g stroke="#C8960C" strokeWidth="1" strokeOpacity="0.5" fill="none">
          <path d="M 30 50 L 30 30 L 50 30" />
          <path d="M 370 50 L 370 30 L 350 30" />
          <path d="M 30 350 L 30 370 L 50 370" />
          <path d="M 370 350 L 370 370 L 350 370" />
        </g>

        <text x="50" y="25" fill="#C8960C" fontFamily="JetBrains Mono, monospace" fontSize="8" fillOpacity="0.6">
          Ø 300mm
        </text>
        <text x="300" y="25" fill="#C8960C" fontFamily="JetBrains Mono, monospace" fontSize="8" fillOpacity="0.6">
          L 600mm
        </text>
        <text x="10" y="380" fill="#8B6508" fontFamily="JetBrains Mono, monospace" fontSize="7" fillOpacity="0.5">
          SLE-CNC-PREC
        </text>
        <text x="300" y="380" fill="#8B6508" fontFamily="JetBrains Mono, monospace" fontSize="7" fillOpacity="0.5">
          REV.2024
        </text>
      </svg>
    </div>
  );
}
