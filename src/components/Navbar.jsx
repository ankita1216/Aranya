import React, { useState } from "react";
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

  return (
    <>
      {/* --- Navigation --- */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-16 py-5 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo/trust.png" alt="Aranya Logo" className="h-16 lg:h-20 w-auto brightness-200" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-inter text-[#F8F3E7] text-xs font-medium tracking-[0.2em] hover:text-[#C9A44D] transition-colors duration-300 drop-shadow-md"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden text-[#F8F3E7] hover:text-[#C9A44D] transition-colors drop-shadow-md"
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
