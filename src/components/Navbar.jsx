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

export default function Navbar() {
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
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-16 py-5 flex justify-between items-center transition-all duration-500 ${
        isHero ? "bg-transparent" : "bg-[#2D5644]/90 backdrop-blur-md shadow-lg"
      }`}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/logo/trust.webp" 
            alt="Aranya Logo" 
            className={`h-16 lg:h-20 w-auto transition-all duration-500 ${isHero ? "brightness-50" : "brightness-200"}`} 
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-inter text-xs font-medium tracking-[0.2em] hover:text-[#C9A44D] transition-colors duration-300 ${
                isHero ? "text-[#172018]" : "text-[#F8F3E7]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className={`lg:hidden transition-colors ${isHero ? "text-[#172018]" : "text-[#F8F3E7]"}`}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#2D5644] flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 text-[#F8F3E7] hover:text-[#C9A44D] transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col gap-8 text-center">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
