import { motion } from "motion/react";
import { CheckCircle, Medal } from "lucide-react";
import { ThreeDCard } from "../components/ThreeDCard";

const certifications = [
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description: "Certified for consistent quality and precision in CNC machining and turning. We adhere to strict global standards to ensure customer satisfaction.",
    icon: <Medal className="w-12 h-12 text-yellow-500" />,
    image: "https://images.unsplash.com/photo-1761178334144-9715e83bf64b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMHF1YWxpdHl8ZW58MXx8fHwxNzc3Mzc2MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://www.iso.org/iso-9001-quality-management.html"
  }
];

export function Quality() {
  return (
    <div className="bg-brand-950 min-h-screen py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-400/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-700 bg-brand-800/50 px-4 py-2 text-sm font-medium text-brand-300 mb-6">
              <CheckCircle className="w-4 h-4 text-brand-400" />
              Uncompromising Standards
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Quality <span className="text-brand-400">Assurance</span>
            </h1>
            <p className="text-brand-200 text-lg md:text-xl leading-relaxed">
              At Shri Laxmi Enterprise, quality is not just a department—it's ingrained in our engineering culture. Our certifications reflect our commitment to excellence.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="max-w-md w-full"
            >
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <ThreeDCard className="h-full bg-gradient-to-br from-brand-900 to-brand-950 p-8 border-brand-800 group-hover:border-brand-500 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-screen pointer-events-none">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-6 p-4 bg-brand-950 rounded-2xl border border-brand-800 shadow-[0_0_20px_rgba(74,117,143,0.15)]">
                      {cert.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                    <h4 className="text-sm font-semibold text-brand-400 uppercase tracking-wider mb-4">
                      {cert.subtitle}
                    </h4>
                    <div className="h-px w-12 bg-brand-700 mb-6" />
                    <p className="text-brand-300 leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="mt-8 text-brand-400 text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Certification Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </ThreeDCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
