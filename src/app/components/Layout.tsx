import { Link, Outlet, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "./ThreeDCard";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Quality Assurance", path: "/quality" },
  { name: "Products", path: "/products" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-brand-950 text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-brand-800 bg-brand-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-xl font-bold tracking-tight">
              <img src="/image.png" alt="Shri Laxmi Enterprise Logo" className="h-10 w-auto object-contain rounded bg-white p-0.5" />
              <div className="flex flex-col hidden sm:flex">
                <span className="leading-none text-white text-lg">Shri Laxmi</span>
                <span className="leading-tight bg-gradient-to-r from-brand-100 to-brand-400 bg-clip-text text-transparent text-sm">Enterprise</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-brand-300",
                    location.pathname === link.path
                      ? "text-brand-300"
                      : "text-brand-100/70"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 top-full h-[2px] w-full rounded-t-full bg-brand-400"
                    />
                  )}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-brand-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-16 z-40 w-full border-b border-brand-800 bg-brand-950 p-4 shadow-lg md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium",
                    location.pathname === link.path
                      ? "text-brand-300"
                      : "text-brand-100/70"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-brand-800 bg-brand-900 py-12">
        <div className="container mx-auto px-4 md:px-6 mb-12 border-b border-brand-800 pb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-brand-950 to-brand-800 rounded-3xl p-8 border border-brand-700 shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white md:w-1/2">
              Building the Future with <span className="text-brand-400">Trust, Reliability, and Quality.</span>
            </h2>
            <p className="text-brand-200 md:w-1/2 text-lg">
              Partner with a certified industry leader committed to zero-defect manufacturing and long-lasting industrial relationships.
            </p>
          </div>
        </div>

        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3 md:px-6">
          <div>
            <Link to="/" className="flex items-center gap-3 text-xl font-bold tracking-tight mb-4">
              <img src="/image.png" alt="Shri Laxmi Enterprise Logo" className="h-14 w-auto object-contain rounded-xl bg-white p-1" />
              <div className="flex flex-col">
                <span className="leading-tight text-white">Shri Laxmi</span>
                <span className="leading-tight text-brand-400 text-sm">Enterprise</span>
              </div>
            </Link>
            <p className="text-sm text-brand-300">
              Precision CNC Turning & Machining Solutions since 1999. Delivering robust, defect-free, and high-quality parts for your industrial needs.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-brand-300">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-100 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-400">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-brand-300">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>E-55, Sanjay Colony, Sec-23, Faridabad 121005 Haryana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+918887373451" className="hover:text-brand-100">
                  +91 8887373451
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:shrilaxmienterprises7@gmail.com" className="hover:text-brand-100">
                  shrilaxmienterprises7@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-12 border-t border-brand-800 px-4 pt-6 text-center text-sm text-brand-400 md:px-6">
          © {new Date().getFullYear()} Shri Laxmi Enterprise. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
