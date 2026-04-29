import { ArrowUpRight, Mail, MapPin, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Experience", href: "#experience" },
  { name: "Residences", href: "#residences" },
  { name: "Amenities", href: "#amenities" },
  { name: "Location", href: "#location" },
  { name: "Gallery", href: "#gallery" }
];

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-deep-green py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgba(201,164,77,0.02)] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgba(18,56,42,0.3)] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* The Bento Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 mb-20">
          
          {/* Card 1: Branding & Intro (Large) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 lg:col-span-3 p-8 md:p-12 rounded-[2.5rem] bg-[rgba(255,255,255,0.02)] border border-white/5 flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <img src="/logo/trust.png" alt="Aranya Logo" className="w-44 mb-10 opacity-90" />
              <h3 className="leading-tight mb-8">
                A sanctuary designed <br /> for <span className="text-gold italic">eternal living.</span>
              </h3>
            </div>
            <p className="text-white/40 max-w-sm">
              Aranya brings open green spaces, crafted arrival experiences, and everyday leisure into one composed residential address.
            </p>
          </motion.div>

          {/* Card 2: Quick Links */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 lg:col-span-1 p-8 rounded-[2.5rem] bg-[rgba(255,255,255,0.02)] border border-white/5 flex flex-col backdrop-blur-sm"
          >
            <p className="uppercase-track mb-8 text-gold">Explore</p>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-white/60 hover:text-gold transition-all uppercase-track flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Card 3: Social & Legal (Stacked vertically) */}
          <div className="md:col-span-2 lg:col-span-2 grid grid-rows-2 gap-6">
            {/* Socials */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-[rgba(201,164,77,0.03)] border border-[rgba(201,164,77,0.1)] flex items-center justify-between backdrop-blur-sm"
            >
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-gold hover:text-deep-green transition-all duration-500">
                  <Globe size={20} />
                </a>
              </div>
              <p className="uppercase-track text-gold">Follow Us</p>
            </motion.div>

            {/* Legal / Enquiry */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-[rgba(255,255,255,0.02)] border border-white/5 flex flex-col justify-center backdrop-blur-sm"
            >
              <a href="mailto:hello@aranya.com" className="text-xl md:text-2xl font-light hover:text-gold transition-colors mb-2">
                hello@aranya.com
              </a>
              <p className="uppercase-track text-white/30">Get in touch with us</p>
            </motion.div>
          </div>

          {/* Card 4: Detailed Address (Large spanning) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 lg:col-span-6 p-8 md:p-12 rounded-[2.5rem] bg-[rgba(255,255,255,0.02)] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gold/5 flex items-center justify-center border border-gold/10">
                <MapPin size={24} className="text-gold" />
              </div>
              <div>
                <p className="uppercase-track text-gold mb-1">Location</p>
                <p className="text-lg md:text-xl font-light">
                  Near Airport Corridor, Rang Homes, Aranya.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gold/5 flex items-center justify-center border border-gold/10">
                <Phone size={24} className="text-gold" />
              </div>
              <div>
                <p className="uppercase-track text-gold mb-1">Call Us</p>
                <p className="text-lg md:text-xl font-light">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <button 
              onClick={scrollToTop}
              className="px-8 py-4 rounded-2xl border border-gold/30 text-gold uppercase-track hover:bg-gold hover:text-deep-green transition-all duration-500 whitespace-nowrap"
            >
              Back To Top
            </button>
          </motion.div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 uppercase-track text-white/20">
          <p>© 2026 Aranya by Rang Homes. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Use</a>
          </div>
          <p>Designed for Excellence</p>
        </div>

      </div>
    </footer>
  );
}
