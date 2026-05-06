import { motion } from "motion/react";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { ThreeDCard } from "../components/ThreeDCard";
import { FactoryVisitForm } from "../components/FactoryVisitForm";

export function Contact() {
  const email = "shrilaxmienterprises7@gmail.com";
  const phone = "8887373451";
  const whatsappMsg = "Greetings to Shri Laxmi Enterprise! We'd like to inquire about your CNC machining services.";

  const whatsappUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(whatsappMsg)}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent("Inquiry for CNC Machining Services")}`;

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
              Get in <span className="text-brand-400">Touch</span>
            </h1>
            <p className="text-brand-300 text-lg">
              Have a project in mind? Contact us today to discuss how our precision CNC machining capabilities can meet your requirements.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <ThreeDCard className="p-8 bg-brand-900 border-brand-800">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-brand-800 text-brand-400 rounded-xl mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-brand-300">
                    E-55, Sanjay Colony, Sec-23<br />
                    Faridabad 121005 Haryana<br />
                    India
                  </p>
                </div>
              </div>

              <div className="h-px bg-brand-800 w-full mb-8" />

              <div className="flex flex-col gap-6">
                <a
                  href={`tel:+91${phone}`}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 bg-brand-800 text-brand-400 rounded-xl group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-400 font-semibold uppercase tracking-wider">Phone</p>
                    <p className="text-lg text-white font-medium group-hover:text-brand-300 transition-colors">+91 {phone}</p>
                  </div>
                </a>

                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-3 bg-brand-800 text-brand-400 rounded-xl group-hover:bg-brand-500 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-400 font-semibold uppercase tracking-wider">Email</p>
                    <p className="text-lg text-white font-medium group-hover:text-brand-300 transition-colors">{email}</p>
                  </div>
                </a>
              </div>
            </ThreeDCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-brand-900 rounded-2xl p-8 border border-brand-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl" />
              <h3 className="text-2xl font-bold text-white mb-2">Chat with us instantly</h3>
              <p className="text-brand-300 mb-8">
                Click below to start a conversation with our team on WhatsApp. We typically reply within minutes during business hours.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full h-14 items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-6 h-6" />
                Connect on WhatsApp
              </a>
            </div>

            <div className="bg-brand-900 rounded-2xl p-8 border border-brand-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-3xl" />
              <h3 className="text-2xl font-bold text-white mb-2">Send an Email</h3>
              <p className="text-brand-300 mb-8">
                Prefer email? Send us your technical drawings or RFQs directly.
              </p>

              <a
                href={gmailUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full h-14 items-center justify-center gap-3 rounded-xl bg-brand-500 px-8 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 hover:bg-brand-400"
              >
                <Mail className="w-6 h-6" />
                Email our Sales Team
              </a>
            </div>
          </motion.div>
        </div>

        {/* Factory Visit Form Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <FactoryVisitForm />
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-800 bg-brand-900"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3511.2003371663995!2d77.2987851!3d28.3527922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIxJzEwLjEiTiA3N8KwMTcnNTUuNiJF!5e0!3m2!1sen!2sin!4v1778011044735!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
        </motion.div>
      </div>
    </div>
  );
}
