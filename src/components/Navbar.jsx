import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#experience" },
  { name: "Amenities", href: "#amenities" },
  { name: "Location", href: "#location" },
  { name: "Plans", href: "#plans" },
  { name: "Walkthrough", href: "#walkthrough" },
  { name: "Gallery", href: "#gallery" }
];

export default function Navbar({ isHidden, onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // If we scroll past the first viewport (Hero), switch to dark theme
      if (window.scrollY > window.innerHeight - 80) {
        setIsHero(false);
      } else {
        setIsHero(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- Navigation --- */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-16 py-3 flex justify-between items-center transition-all duration-500 ${
          isHero ? "bg-transparent" : "bg-[#407266]/90 backdrop-blur-md shadow-lg"
        }`}
        style={{
          transform: isHidden ? "translateY(-100%)" : "translateY(0)",
          opacity: isHidden ? 0 : 1,
          pointerEvents: isHidden ? "none" : "auto"
        }}
      >

        {/* Left: Logo */}
        <div className="flex-1 flex justify-start items-center">
          <img 
            src="/logo/trust.webp" 
            alt="Aranya Logo" 
            className={`h-12 lg:h-14 w-auto transition-all duration-500 object-contain ${isHero ? "brightness-50" : "brightness-200"}`} 
          />
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-sans text-[11px] font-medium tracking-[0.2em] hover:text-[#C9A44D] transition-colors duration-300 whitespace-nowrap ${
                  isHero ? "text-[#172018]" : "text-[#F8F3E7]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right: CTA + Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-8">
          <button 
            onClick={onOpenModal}
            className="hidden lg:block bg-[#C9A44D] text-[#172018] px-6 py-2 rounded-full font-sans text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#a98b39] transition-all duration-300 shadow-lg hover:shadow-[#C9A44D]/20 whitespace-nowrap"
          >
            Download Brochure
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden transition-colors ${isHero ? "text-[#172018]" : "text-[#F8F3E7]"}`}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#407266] flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 text-[#F8F3E7] hover:text-[#C9A44D] transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col gap-8 text-center items-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl text-[#F8F3E7] hover:text-[#C9A44D] transition-colors uppercase"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="mt-4 bg-[#C9A44D] text-[#172018] px-10 py-4 rounded-full font-sans text-sm font-bold uppercase tracking-[0.2em] whitespace-nowrap"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
