"use client";

import { useState } from "react";
import { ShoppingBag, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Careers", href: "/careers" },
    { title: "Registration", href: "/registration", isPrimary: true },
    { title: "Log In", href: "/login", isSecondary: true },
  ];

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-0 left-0 right-0 z-50 flex items-center h-[90px] px-6 bg-[#1a0b2e]/80 backdrop-blur-sm"
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <ShoppingBag size={32} className="text-pink-400" />
            <span className="text-2xl font-bold tracking-wider">KineFelo</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  link.isPrimary
                    ? "font-semibold bg-pink-500 text-white hover:bg-pink-600"
                    : link.isSecondary
                    ? "font-medium bg-white/10 border border-white/20 hover:bg-white/20"
                    : "font-medium hover:bg-white/10"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#1a0b2e]/95 backdrop-blur-sm md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`text-2xl ${
                    link.isPrimary
                      ? "font-bold text-pink-300"
                      : "font-medium text-white/80"
                  } hover:text-white transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
