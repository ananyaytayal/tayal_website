import { motion } from "motion/react";
import { ThreeDCard } from "../components/ThreeDCard";
import { Settings2, RefreshCw } from "lucide-react";
import { AutoRotating3D } from "../components/AutoRotating3D";

const machines = [
  {
    name: "Daewoo Puma 300 C",
    specs: "Ø 400 mm · Length 630 mm",
    description: "Heavy-duty turning center with ASA A2-11 spindle nose and 104mm bore, designed for large-scale precision components.",
    image: "/images/daewoo_puma.jpg"
  },
  {
    name: "Goodway CNC",
    specs: "Ø 200 mm · Length 250 mm",
    description: "Advanced precision CNC turning center offering exceptional stability and high-speed processing for medium components.",
    image: "/images/goodway_cnc.png"
  },
  {
    name: "Hardinge CNC",
    specs: "Ø 200 mm · Length 200 mm",
    description: "Industry-leading precision machining with superior thermal stability, ideal for aerospace-grade tolerances.",
    image: "/images/hardinge_cnc.jpg"
  },
  {
    name: "Ace Micromatic CNC",
    specs: "Ø 150 mm · Length 300 mm",
    description: "Versatile and reliable production-grade CNC lathe, perfect for high-efficiency manufacturing of intricate parts.",
    image: "/images/ace-micromatic.jpg"
  },
  {
    name: "Takisawa CNC",
    specs: "Ø 200 mm · Length 250 mm",
    description: "Japanese-engineered high-speed CNC lathe delivering superior surface finish and rapid production cycles.",
    image: "/images/takisawa.png"
  }
];

export function Gallery() {
  return (
    <div className="bg-brand-950 min-h-screen py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Machine <span className="text-brand-400">Infrastructure</span>
            </h1>
            <p className="text-brand-300 text-lg">
              Explore our state-of-the-art CNC turning and machining centers. We invest in high-performance equipment to guarantee precision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machines.map((machine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ThreeDCard className="h-full group flex flex-col overflow-hidden bg-brand-900 border-brand-800">
                <div className="relative h-64 w-full overflow-hidden rounded-t-xl bg-brand-950 p-6 flex flex-col items-center justify-center">
                  <AutoRotating3D duration={25} className="w-full h-full">
                    <div className="w-full h-full bg-brand-800 rounded-3xl border border-brand-700 shadow-2xl overflow-hidden p-1 relative group-hover:border-brand-500 transition-colors">
                      <div className="absolute inset-0 bg-brand-500/20 mix-blend-screen group-hover:bg-transparent transition-all z-10" />
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 rounded-2xl"
                      />
                    </div>
                  </AutoRotating3D>
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center text-xs">
                    <span className="bg-brand-950/90 text-brand-300 px-3 py-1 rounded-full border border-brand-800 flex items-center gap-2 shadow-lg backdrop-blur-md">
                      <RefreshCw className="w-3 h-3 animate-spin text-brand-400" />
                      Live 3D View
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col bg-brand-900 rounded-b-xl border-t border-brand-800">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    <Settings2 className="w-5 h-5 text-brand-400" />
                    {machine.name}
                  </h3>
                  <div className="inline-block bg-brand-800/80 px-3 py-1.5 rounded-md text-sm text-brand-300 font-mono mb-4 w-fit border border-brand-700">
                    {machine.specs}
                  </div>
                  <p className="text-brand-200 text-sm leading-relaxed mt-auto">
                    {machine.description}
                  </p>
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
