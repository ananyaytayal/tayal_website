import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Settings, RefreshCw, ArrowRight, X } from "lucide-react";
import { AutoRotating3D } from "../components/AutoRotating3D";
import { ThreeDCard } from "../components/ThreeDCard";

const products = [
  {
    id: 1,
    name: "Auto Parts",
    shortDesc: "Various precision components designed for the automotive industry.",
    fullDesc: "We manufacture a wide range of critical automotive components including suspension bushings, drivetrain crosses, and custom engine inserts. Our parts are engineered for high-performance vehicle systems, ensuring durability under extreme conditions and long-term reliability.",
    specifications: [
      "Material: Alloy Steel, Bronze, Cast Iron",
      "Tolerance: Up to ±0.005mm",
      "Process: CNC Turning & Grinding",
      "Compliance: IATF Standards",
      "Applications: Drivetrain, Suspension, Engine"
    ],
    features: [
      "High fatigue resistance",
      "Precision ground surfaces",
      "Custom material configurations",
      "Zero-defect manufacturing"
    ],
    applications: [
      "Passenger vehicles",
      "Commercial trucks",
      "Agricultural tractors",
      "High-performance racing"
    ],
    certifications: ["ISO 9001:2015", "IATF 16949"],
    image: "/images/auto_parts.png"
  },
  {
    id: 2,
    name: "Valve Liners",
    shortDesc: "High-precision liners specifically produced in 2″ and 3″ sizes.",
    fullDesc: "Our valve liners are engineered for seamless integration into high-pressure valve assemblies. Specifically optimized in 2″ and 3″ configurations, these liners provide a superior sealing surface and exceptional wear resistance for fluid control systems.",
    specifications: [
      "Sizes: 2″ and 3″ nominal",
      "Material: Hardened Stainless Steel",
      "Surface Finish: Ra 0.4μm",
      "Hardness: 45-55 HRC",
      "Pressure Rating: API Class compliant"
    ],
    features: [
      "Mirror-finish internal bore",
      "Corrosion resistant coating",
      "Perfect concentricity",
      "Long-life wear surface"
    ],
    applications: [
      "Oil & Gas control valves",
      "Chemical processing lines",
      "Power plant flow control",
      "Water treatment facilities"
    ],
    certifications: ["ISO 9001:2015", "API 6A"],
    image: "/images/valve.png"
  },
  {
    id: 3,
    name: "Sleeves",
    shortDesc: "Precision 2″ and 3″ sleeves, typically paired with valve liners.",
    fullDesc: "These sleeves are designed as high-precision companion components for our valve liners. Available in 2″ and 3″ sizes, they ensure structural alignment and protection within valve bodies, maintaining system integrity under high cyclic loads.",
    specifications: [
      "Sizes: 2″ and 3″ matching",
      "Material: Alloy Steel / Stainless",
      "Precision wall thickness",
      "Heat Treatment: Case Hardened",
      "Tolerance: ±0.01mm"
    ],
    features: [
      "Compatible with major valve types",
      "High structural rigidity",
      "Anti-galling properties",
      "Custom lengths available"
    ],
    applications: [
      "Valve body assemblies",
      "High-pressure manifolds",
      "Hydraulic cylinders",
      "Pumping equipment"
    ],
    certifications: ["ISO 9001:2015", "ASTM Standards"],
    image: "/images/liner_sleeve.png"
  },
  {
    id: 4,
    name: "1502 Crosses",
    shortDesc: "Specialized components for high-pressure oil & gas applications.",
    fullDesc: "The 1502 Cross is a mission-critical component used in high-pressure oilfield manifolds. Rated for working pressures up to 15,000 PSI, these crosses are machined from high-strength forging to withstand the most demanding wellhead environments.",
    specifications: [
      "Rating: 15,000 PSI (1502 Series)",
      "Material: Forged 4130 Alloy Steel",
      "Connections: Hammer Union compatible",
      "Hardness: NACE MR0175 compliant",
      "Testing: Hydrostatic tested"
    ],
    features: [
      "Integral forged construction",
      "High impact resistance",
      "Precision machined internal flow",
      "Certified for sour gas service"
    ],
    applications: [
      "Wellhead manifolds",
      "Fracturing flowlines",
      "Cementing equipment",
      "Acidizing systems"
    ],
    certifications: ["API 6A", "NACE MR0175", "API 16C"],
    image: "/images/crank_bush.png"
  },
  {
    id: 5,
    name: "Forge Shafts",
    shortDesc: "Precision-machined shafts created from premium forge blanks.",
    fullDesc: "We specialize in the precision machining of shafts starting from high-quality forge blanks. This process ensures optimal grain flow and superior structural strength compared to standard bar stock, making them ideal for high-torque applications.",
    specifications: [
      "Source: High-grade Forge Blanks",
      "Diameter: Up to 350mm",
      "Length: Up to 1500mm",
      "Machining: CNC Turned & Ground",
      "Concentricity: <0.01mm"
    ],
    features: [
      "Superior structural integrity",
      "Optimized grain flow",
      "High torque capacity",
      "Custom spline/keyway cutting"
    ],
    applications: [
      "Heavy industrial drives",
      "Agricultural PTO shafts",
      "Marine propulsion",
      "Mining machinery"
    ],
    certifications: ["ISO 9001:2015", "ASME Standards"],
    image: "/images/forge_shaft.png"
  },
  {
    id: 6,
    name: "Flanges",
    shortDesc: "Specialized flange job work producing various metal flange types.",
    fullDesc: "Our company specializes in professional job work for a wide variety of metal flanges. We produce Weld Neck, Slip-On, Blind, and Socket Weld flanges with precision-faced surfaces and accurate bolt-hole patterns for seamless piping integration.",
    specifications: [
      "Types: WN, SO, Blind, SW, Threaded",
      "Standards: ANSI/ASME B16.5",
      "Materials: Carbon Steel, Stainless, Alloy",
      "Rating: Class 150 to 2500",
      "Finish: Phonographic/Smooth Face"
    ],
    features: [
      "Accurate bolt-hole alignment",
      "Precision flange facing",
      "Serrated/Smooth surface options",
      "Custom ID/OD configurations"
    ],
    applications: [
      "Industrial piping systems",
      "Refinery equipment",
      "HVAC installations",
      "Chemical plant manifolds"
    ],
    certifications: ["ISO 9001:2015", "ASME B16.5"],
    image: "/images/flange.png"
  }
];

const machines = [
  {
    id: 1,
    name: "Daewoo Puma 300 C",
    type: "Heavy Duty Turning Center",
    capacity: "Ø400mm × 630mm",
    description: "High-performance heavy-duty turning center designed for precision machining of large diameter workpieces with robust box-way construction.",
    specifications: [
      "Maximum Turning Diameter: 400mm",
      "Maximum Turning Length: 630mm",
      "Spindle Nose: ASA A2-11",
      "Spindle Bore: 104mm",
      "Controller: Fanuc High-Speed"
    ],
    image: "/images/daewoo_puma.jpg"
  },
  {
    id: 2,
    name: "Goodway CNC",
    type: "Precision CNC Turning Center",
    capacity: "Ø200mm × 250mm",
    description: "Compact and efficient CNC turning center offering high stability and accuracy for medium-sized precision components.",
    specifications: [
      "Maximum Turning Diameter: 200mm",
      "Maximum Turning Length: 250mm",
      "Spindle Speed: 4500 RPM",
      "Turret: 12 Station Servo",
      "Positioning Accuracy: ±0.003mm"
    ],
    image: "/images/goodway_cnc.png"
  },
  {
    id: 3,
    name: "Hardinge CNC",
    type: "High-Precision Turning Center",
    capacity: "Ø200mm × 200mm",
    description: "World-renowned for exceptional thermal stability and accuracy, perfect for fine turning operations and tight tolerances.",
    specifications: [
      "Maximum Turning Diameter: 200mm",
      "Maximum Turning Length: 200mm",
      "High-Precision Collet System",
      "Ultra-Smooth Spindle Performance",
      "Ideal for Aerospace & Medical parts"
    ],
    image: "/images/hardinge_cnc.jpg"
  },
  {
    id: 4,
    name: "Ace Micromatic CNC",
    type: "Production CNC Turning Center",
    capacity: "Ø150mm × 300mm",
    description: "Versatile and reliable production machine, optimized for high-volume manufacturing of small to medium-sized components.",
    specifications: [
      "Maximum Turning Diameter: 150mm",
      "Maximum Turning Length: 300mm",
      "Rapid Traverse: 30 m/min",
      "Reliable Indian Engineering",
      "Excellent Repeatability"
    ],
    image: "/images/ace-micromatic.jpg"
  },
  {
    id: 5,
    name: "Takisawa CNC",
    type: "High-Speed CNC Lathe",
    capacity: "Ø200mm × 250mm",
    description: "Japanese precision engineering designed for rapid production with superior surface finish quality and minimal idle time.",
    specifications: [
      "Maximum Turning Diameter: 200mm",
      "Maximum Turning Length: 250mm",
      "High-Speed Spindle Technology",
      "Enhanced Vibration Dampening",
      "Precision Box-Way Design"
    ],
    image: "/images/takisawa.png"
  }
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedMachine, setSelectedMachine] = useState<number | null>(null);

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
              Our <span className="text-brand-400">Products</span>
            </h1>
            <p className="text-brand-300 text-lg">
              We specialize in manufacturing high-precision components for Automotive, Oil & Gas, Defence, and Industrial sectors.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ThreeDCard className="h-full flex flex-col group overflow-hidden bg-brand-900 border-brand-800 hover:border-brand-500">
                <div className="relative h-56 overflow-hidden bg-brand-950 flex justify-center items-center">
                  <div className="absolute inset-0 bg-brand-500/10 mix-blend-multiply group-hover:bg-transparent transition-all z-10" />

                  <div className="w-[85%] h-[85%] rounded-xl shadow-lg border-2 border-brand-800 p-1 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 rounded-lg group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute top-4 right-4 z-20 bg-brand-950/80 backdrop-blur text-brand-400 p-2 rounded-full border border-brand-800">
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-brand-300 text-sm mb-6 flex-1">
                    {product.shortDesc}
                  </p>
                  <button
                    onClick={() => setSelectedProduct(product.id)}
                    className="inline-flex items-center text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group-hover:underline mt-auto"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>

        {/* Machines Section */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Our <span className="text-brand-400">Machinery</span>
              </h2>
              <p className="text-brand-300 text-lg">
                State-of-the-art CNC machines and equipment for precision manufacturing.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machines.map((machine, index) => (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ThreeDCard className="h-full bg-brand-900 border-brand-800 hover:border-brand-500 overflow-hidden cursor-pointer" onClick={() => setSelectedMachine(machine.id)}>
                  <div className="relative h-64 overflow-hidden bg-brand-950 flex justify-center items-center">
                    <div className="w-[90%] h-[90%] rounded-xl shadow-lg border-2 border-brand-800 p-2 overflow-hidden">
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="h-full w-full object-cover rounded-lg opacity-90 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-brand-950/80 backdrop-blur text-brand-400 px-3 py-1 rounded-full text-sm font-medium">
                      {machine.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{machine.name}</h3>
                    <p className="text-brand-400 font-medium mb-2">{machine.capacity}</p>
                    <p className="text-brand-300 text-sm mb-4">{machine.description}</p>
                    <div className="space-y-1">
                      {machine.specifications.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="text-brand-200 text-xs flex items-center">
                          <span className="w-1 h-1 bg-brand-500 rounded-full mr-2"></span>
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </ThreeDCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-900 border border-brand-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-brand-800 text-brand-300 hover:text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {products.filter(p => p.id === selectedProduct).map(product => (
                <div key={product.id}>
                  <div className="h-64 rounded-xl overflow-hidden mb-6 relative group bg-brand-950 flex flex-col items-center justify-center">
                    <div className="w-full h-full p-4">
                      <div className="w-full h-full bg-brand-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-brand-700">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <div className="h-px w-full bg-brand-800 my-4" />
                  <p className="text-brand-200 leading-relaxed text-sm md:text-base mb-6">
                    {product.fullDesc}
                  </p>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-brand-300 mb-3">Technical Specifications</h4>
                    <ul className="space-y-2">
                      {product.specifications.map((spec, index) => (
                        <li key={index} className="text-brand-200 text-sm flex items-start">
                          <span className="text-brand-500 mr-2">•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-brand-300 mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-brand-200 text-sm">
                          <Settings className="w-4 h-4 text-brand-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="w-full bg-brand-700 hover:bg-brand-600 text-white py-3 rounded-lg font-medium transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Machine Modal */}
      <AnimatePresence>
        {selectedMachine !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-950/80 backdrop-blur-sm"
            onClick={() => setSelectedMachine(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-900 border border-brand-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedMachine(null)}
                className="absolute top-4 right-4 p-2 bg-brand-800 text-brand-300 hover:text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {machines.filter(m => m.id === selectedMachine).map(machine => (
                <div key={machine.id}>
                  <div className="h-64 rounded-xl overflow-hidden mb-6 relative group bg-brand-950 flex flex-col items-center justify-center">
                    <div className="w-full h-full p-4">
                      <div className="w-full h-full bg-brand-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-brand-700">
                        <img
                          src={machine.image}
                          alt={machine.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {machine.name}
                  </h3>
                  <p className="text-brand-400 font-medium mb-4">{machine.capacity}</p>
                  <div className="h-px w-full bg-brand-800 my-4" />
                  <p className="text-brand-200 leading-relaxed text-sm md:text-base mb-6">
                    {machine.description}
                  </p>

                  {/* Machine Specifications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-brand-300 mb-3">Technical Specifications</h4>
                    <ul className="space-y-2">
                      {machine.specifications.map((spec, index) => (
                        <li key={index} className="text-brand-200 text-sm flex items-start">
                          <span className="text-brand-500 mr-2">•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={() => setSelectedMachine(null)}
                      className="w-full bg-brand-700 hover:bg-brand-600 text-white py-3 rounded-lg font-medium transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
