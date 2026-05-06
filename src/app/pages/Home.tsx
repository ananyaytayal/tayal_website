import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Settings, CheckCircle2, Users, Award, Cuboid } from "lucide-react";
import { ThreeDCard } from "../components/ThreeDCard";
import { AutoRotating3D } from "../components/AutoRotating3D";
import { CNC3DEffects } from "../components/CNC3DEffects";
import { HeroCNCVisual } from "../components/HeroCNCVisual";
import { FactoryVisitForm } from "../components/FactoryVisitForm";

const FloatingShape = ({ delay, duration, className, size }: any) => (
  <motion.div
    initial={{ y: 0, rotate: 0, scale: 0.8, opacity: 0 }}
    animate={{ y: [0, -40, 0], rotate: [0, 90, 180, 270, 360], scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.6, 0.3] }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute rounded-2xl bg-gradient-to-br from-brand-500/10 to-transparent backdrop-blur-3xl border border-brand-500/20 shadow-[0_0_50px_rgba(74,117,143,0.1)] ${className}`}
    style={{ width: size, height: size }}
  />
);

const HexagonGrid = () => (
  <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none opacity-[0.03]">
    <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0yMCAwbDIwIDExLjV2MjNMMjAgNDAgMCAyOC41di0yM3oiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] [background-size:40px_40px]" />
  </div>
);

export function Home() {
  return (
    <div className="relative overflow-hidden bg-brand-950">
      <HexagonGrid />
      <CNC3DEffects />
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-400/5 blur-[120px]" />
        <FloatingShape delay={0} duration={25} size={300} className="top-[10%] left-[5%]" />
        <FloatingShape delay={2} duration={30} size={250} className="top-[40%] right-[5%]" />
        <FloatingShape delay={1} duration={20} size={400} className="-bottom-[10%] left-[30%]" />
      </div>

      <section className="relative z-10 flex min-h-[90vh] flex-col justify-center px-4 pt-16 text-center md:px-6 md:pt-24 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16"
        >
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-700 bg-brand-800/50 px-4 py-2 text-sm font-medium text-brand-300">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
              Established in 1999
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Precision CNC <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
                Machining & Turning
              </span>
            </h1>

            <p className="mt-6 text-lg text-brand-200 leading-normal sm:text-xl sm:leading-8">
              Shri Laxmi Enterprise is a Faridabad-based precision engineering expert, delivering top-tier components with innovative capabilities and zero-defect focus.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link
                to="/gallery"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-500 px-8 text-sm font-medium text-white shadow-lg transition-colors hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:pointer-events-none disabled:opacity-50"
              >
                Explore our Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-brand-700 bg-brand-900/50 backdrop-blur-sm px-8 text-sm font-medium text-brand-100 shadow-sm transition-colors hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-xl">
            <div className="relative rounded-[2.5rem] border border-brand-700/50 bg-brand-950/90 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-x-10 top-8 h-14 rounded-full bg-brand-500/10 blur-2xl" />
              <div className="absolute bottom-6 right-6 h-28 w-28 rounded-full border border-brand-500/20 bg-brand-500/10 blur-2xl" />

              <div className="relative mx-auto h-[420px] w-full overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_35%),linear-gradient(135deg,rgba(59,130,246,0.08),rgba(15,23,42,0.92))] shadow-[inset_0_0_80px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),transparent_55%)]" />
                <HeroCNCVisual />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Strengths Section using 3D Cards */}
      <section className="relative z-10 py-24 bg-brand-900/40 border-t border-brand-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-100 sm:text-4xl mb-4">
              Our Core Strengths
            </h2>
            <p className="text-brand-300 max-w-[600px]">
              Combining legacy craftsmanship with the latest CNC technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ThreeDCard className="p-8">
              <div className="h-full flex flex-col items-start gap-4 p-2">
                <div className="p-3 bg-brand-800 rounded-lg">
                  <Settings className="w-8 h-8 text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Precision Expertise</h3>
                <p className="text-brand-300">
                  Specialized turning and machining components with ultra-tight tolerances. Decades of proven industrial experience.
                </p>
              </div>
            </ThreeDCard>
            <ThreeDCard className="p-8">
              <div className="h-full flex flex-col items-start gap-4 p-2">
                <div className="p-3 bg-brand-800 rounded-lg">
                  <Cuboid className="w-8 h-8 text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Innovative Design</h3>
                <p className="text-brand-300">
                  Leveraging advanced CAM software and 3D modeling for rapid prototyping, complex geometries, and efficient production.
                </p>
              </div>
            </ThreeDCard>
            <ThreeDCard className="p-8">
              <div className="h-full flex flex-col items-start gap-4 p-2">
                <div className="p-3 bg-brand-800 rounded-lg">
                  <CheckCircle2 className="w-8 h-8 text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Quality Assurance</h3>
                <p className="text-brand-300">
                  Committed to Zero Defect manufacturing. ISO 9001:2015 certified rigorous quality control processes.
                </p>
              </div>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* Credibility & Team Section */}
      <section className="relative z-10 py-24 bg-brand-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <AutoRotating3D duration={40} className="col-span-1 aspect-[4/5] mt-12">
                  <img
                    src="https://images.unsplash.com/photo-1545262722-9e0d80a0bc01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGVuZ2luZWVycyUyMGZhY3Rvcnl8ZW58MXx8fHwxNzc3Mzc1MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Dedicated Engineers"
                    className="w-full h-full object-cover rounded-2xl border-4 border-brand-800 shadow-2xl"
                  />
                </AutoRotating3D>
                <div className="col-span-1 gap-4 flex flex-col">
                  <AutoRotating3D duration={30} className="aspect-square w-full">
                    <img
                      src="https://images.unsplash.com/photo-1711418235199-171c8ecb9d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbmMlMjBtYWNoaW5pbmclMjBwcm9jZXNzfGVufDF8fHx8MTc3NzM3NTI1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="CNC Machining"
                      className="w-full h-full object-cover rounded-2xl border-4 border-brand-800 shadow-2xl"
                    />
                  </AutoRotating3D>
                  <AutoRotating3D duration={28} className="aspect-square w-full max-h-[430px]">
                    <img
                      src="https://images.unsplash.com/photo-1772351721310-0aa6b2d5ee49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzc3Mzc1MjU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Quality Control"
                      className="w-full h-full object-cover rounded-2xl border border-brand-800 shadow-xl"
                    />
                  </AutoRotating3D>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-900/90 backdrop-blur-md p-6 rounded-2xl border border-brand-700 shadow-[0_0_50px_rgba(74,117,143,0.3)] text-center">
                <h4 className="text-4xl font-bold text-white mb-1">20+</h4>
                <p className="text-brand-300 text-sm font-semibold uppercase">Years of Trust</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                A Legacy of <span className="text-brand-400">Credibility</span> and Dedicated Expertise
              </h2>
              <p className="text-brand-200 text-lg mb-8 leading-relaxed">
                Behind every precision component is a dedicated team of passionate engineers and technicians. Our workforce is the heart of Shri Laxmi Enterprise—happy, skilled, and fully equipped to tackle complex industrial challenges. We believe that a positive work environment translates directly to reliable and high-quality manufacturing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-800 rounded-lg">
                    <Users className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Expert Team</h4>
                    <p className="text-brand-300 text-sm">Highly trained professionals driving our success.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-800 rounded-lg">
                    <Award className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Certified Trust</h4>
                    <p className="text-brand-300 text-sm">ISO 9001:2015 recognized quality standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Factory Visit Form Section */}
      <section id="factory-visit" className="relative z-10 py-24 bg-brand-900 border-t border-brand-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FactoryVisitForm />
          </div>
        </div>
      </section>
    </div>
  );
}
