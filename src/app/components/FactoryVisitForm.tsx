import { useState } from "react";
import { Factory, Send, Calendar, User, Mail, Phone, Building2, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { motion } from "motion/react";

export function FactoryVisitForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Factory Visit Request from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nPreferred Date: ${formData.date}\n\nMessage:\n${formData.message}`;

    // Gmail Web Compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=shrilaxmienterprises7@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open in new tab
    window.open(gmailUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-brand-900/50 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-brand-800 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/5 blur-[100px]" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-brand-800 rounded-2xl border border-brand-700 shadow-lg">
            <Factory className="w-8 h-8 text-yellow-500" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Schedule a Factory Visit</h2>
            <p className="text-brand-300">Request a facility tour to see our precision in action.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-brand-200 ml-1">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-4 h-4 text-brand-500" />
              <Input 
                id="name" 
                placeholder="John Doe" 
                required 
                className="pl-10 bg-brand-950/50 border-brand-800 focus:border-brand-500 text-white h-12 rounded-xl"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-brand-200 ml-1">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-brand-500" />
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                required 
                className="pl-10 bg-brand-950/50 border-brand-800 focus:border-brand-500 text-white h-12 rounded-xl"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-brand-200 ml-1">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-brand-500" />
              <Input 
                id="phone" 
                placeholder="+91 98765 43210" 
                required 
                className="pl-10 bg-brand-950/50 border-brand-800 focus:border-brand-500 text-white h-12 rounded-xl"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-brand-200 ml-1">Company Name</Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-3 w-4 h-4 text-brand-500" />
              <Input 
                id="company" 
                placeholder="Tech Solutions Ltd." 
                required 
                className="pl-10 bg-brand-950/50 border-brand-800 focus:border-brand-500 text-white h-12 rounded-xl"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-brand-200 ml-1">Preferred Visit Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-4 h-4 text-brand-500" />
              <Input 
                id="date" 
                type="date" 
                required 
                className="pl-10 bg-brand-950/50 border-brand-800 focus:border-brand-500 text-white h-12 rounded-xl"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="message" className="text-brand-200 ml-1">Message / Purpose of Visit</Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-brand-500" />
              <Textarea 
                id="message" 
                placeholder="I would like to discuss a potential project involving CNC turning..." 
                className="pl-10 bg-brand-950/50 border-brand-800 focus:border-brand-500 text-white min-h-[120px] rounded-xl"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="md:col-span-2 pt-4">
            <Button 
              type="submit" 
              className="w-full h-14 rounded-xl bg-yellow-600 hover:bg-yellow-500 text-white font-bold text-lg flex items-center gap-2 shadow-lg shadow-yellow-900/20 transition-all active:scale-[0.98]"
            >
              <Send className="w-5 h-5" />
              Send Visit Request
            </Button>
            <p className="text-center text-brand-400 text-sm mt-4">
              Clicking send will open your default email client with the request details.
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
