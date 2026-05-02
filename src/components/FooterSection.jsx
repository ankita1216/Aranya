import { ArrowUpRight, Mail, MapPin, Phone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import DecorativeElements from "./DecorativeElements";

const navLinks = [
  { name: "About", href: "#experience" },
  { name: "Amenities", href: "#amenities" },
  { name: "Location", href: "#location" },
  { name: "Plans", href: "#plans" },
  { name: "Gallery", href: "#gallery" }
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B2117] pt-20 pb-10 px-8 md:px-16 lg:px-24 overflow-hidden text-[#F8F3E7]">
      <DecorativeElements type="organic" position="left-top" color="#C9A44D" opacity={0.04} size="w-64" />
      <DecorativeElements type="leaf" position="right-center" color="#C9A44D" opacity={0.03} size="w-72" />
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A44D]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-2 rounded-lg self-start">
              <img 
                src="/images/RANG HOMES-New1.webp" 
                alt="Rang Homes Logo" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-sm leading-relaxed text-[#F8F3E7]/60 max-w-xs font-light">
              INDOTECH INFRACON PRIVATE LIMITED is a trusted developer with over 8 years of experience, known for delivering high-quality residential projects with a focus on modern living and long-term value.
            </p>
            <div className="flex gap-4">
              {[Globe, Globe, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C9A44D] hover:text-[#C9A44D] transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-8">
            <h4 className="font-serif text-xl text-[#C9A44D] font-light">Quick Links</h4>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm text-[#F8F3E7]/60 hover:text-[#C9A44D] transition-all flex items-center gap-2 group w-fit"
                >
                  <span className="w-0 group-hover:w-4 h-[1px] bg-[#C9A44D] transition-all duration-300"></span>
                  {link.name}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Site Address */}
          <div className="flex flex-col gap-8">
            <h4 className="font-serif text-xl text-[#C9A44D] font-light">Site Address</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin size={16} className="text-[#C9A44D]" />
                </div>
                <p className="text-sm leading-relaxed text-[#F8F3E7]/60 font-light">
                  RH Aerocity, Dharapur,<br />
                  Palashbari Road, Assam – 781017
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Phone size={16} className="text-[#C9A44D]" />
                </div>
                <p className="text-sm text-[#F8F3E7]/60 font-light">
                  1800 12012 5555
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Corporate Office */}
          <div className="flex flex-col gap-8">
            <h4 className="font-serif text-xl text-[#C9A44D] font-light">Corporate Office</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin size={16} className="text-[#C9A44D]" />
                </div>
                <p className="text-sm leading-relaxed text-[#F8F3E7]/60 font-light">
                  12 C & D, 2nd Floor, Vasant Square Mall, B-5, Vasant Kunj, New Delhi – 110070
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Phone size={16} className="text-[#C9A44D]" />
                </div>
                <p className="text-sm text-[#F8F3E7]/60 font-light">
                  011-71834410/11
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Mail size={16} className="text-[#C9A44D]" />
                </div>
                <a href="mailto:info@indogroup.in" className="text-sm text-[#F8F3E7]/60 hover:text-[#C9A44D] transition-colors font-light">
                  info@indogroup.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#F8F3E7]/30">
            © {currentYear} Aranya by Ranghomes. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#F8F3E7]/30">
              www.indogroup.in
            </p>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#F8F3E7]/30 italic font-serif">
              Designed for Excellence
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

