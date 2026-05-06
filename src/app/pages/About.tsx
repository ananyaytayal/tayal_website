import { motion } from "motion/react";
import { CheckCircle, Clock, Target, Users } from "lucide-react";

export function About() {
  return (
    <div className="bg-brand-950 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block rounded-lg bg-brand-800 px-3 py-1 text-sm text-brand-300 font-medium mb-4">
              About Our Company
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Engineering Excellence Since <span className="text-brand-400">1999</span>
            </h1>
            <p className="text-brand-200 text-lg mb-8 leading-relaxed">
              Shri Laxmi Enterprise is a Faridabad-based CNC machining company specializing in precision turning components. We provide reliable and cost-effective machining solutions with a strong focus on quality and timely delivery.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-brand-800 p-2 rounded-lg h-fit">
                  <Target className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-brand-300">
                    To deliver unmatched precision and quality in every component we manufacture, fostering long-term partnerships with leading industries.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-brand-800 p-2 rounded-lg h-fit">
                  <Clock className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                  <p className="text-brand-300">
                    To be the global benchmark in CNC machining and turning solutions through continuous innovation and defect-free production.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-brand-800"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5fGVufDF8fHx8MTc3NzM3NDU2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern CNC Factory Floor" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-brand-900/80 backdrop-blur-md p-6 rounded-xl border border-brand-700">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-500 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Expert Team</h4>
                    <p className="text-brand-300 text-sm">Decades of industrial experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
