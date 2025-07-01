"use client";

import { useState } from "react";
import { ShoppingBag, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
        className="sticky top-0 left-0 right-0 z-50 flex items-center justify-center"
      >
        <nav
          className="
    flex sm:h-[56px] sm:w-[482px] h-[40px] w-[325px] items-center justify-center rounded-[100px]
    backdrop-blur border border-white/5 bg-white/10
  "
        >
          <div className="flex items-center justify-between w-full p-2 rounded-full">
            <Link href="/careers" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                <Image src="/images/logo.png" width={30} height={24} alt="Kinefelo Logo" className="align-middle" />
              </div>
              <span>
                <span className="text-base font-bold text-white">Kine</span>
                <span className="text-base font-normal text-white">Felo</span>
              </span>
            </Link>
            <Link
              href="/careers"
              className="hidden sm:inline-block w-[83px] h-[29px] font-normal text-white/70 rounded-[100px] text-base leading-[100%] tracking-[0%] py-[5px] px-[16px] transition-all duration-300 ease-out
hover:text-white hover:bg-white/10"
            >
              Career
            </Link>
            <Link
              href="/login"
              className="flex items-center justify-center w-[103px] h-[29px] sm:w-[113px] sm:h-[39px] px-[16px] py-[10px] sm:leading-[100%] sm:tracking-[0%]
              leading-[9px] tracking-[0%] font-normal lg:font-medium flex items-center justify-center
bg-gradient-to-r from-[rgba(102,22,66,1)] to-[rgba(110,31,75,1)] 
text-white sm:text-base text-sm text-center rounded-[100px] 
border border-[rgba(255,255,255,0.1)]
transition duration-300 ease-in-out
shadow-[inset_1px_1px_5px_2px_rgba(187,40,102,1)]
hover:bg-gradient-to-b hover:from-[#B82173] hover:to-[#6E1F4B]
hover:shadow-[inset_0px_4px_4px_0px_rgba(255,36,157,1),inset_0px_-4px_4px_0px_rgba(162,40,108,1)]"
            >
              Login Now
            </Link>
          </div>
        </nav>
      </motion.header>
    </>
  );
}
