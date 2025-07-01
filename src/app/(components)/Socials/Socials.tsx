"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { href: "#", icon: FaFacebookF, hoverColor: "hover:bg-[#1877F2]" },
  { href: "#", icon: FaTwitter, hoverColor: "hover:bg-[#1DA1F2]" },
  { href: "#", icon: FaInstagram, hoverColor: "hover:bg-[#E4405F]" },
  { href: "#", icon: FaWhatsapp, hoverColor: "hover:bg-[#25D366]" },
  { href: "#", icon: FaLinkedinIn, hoverColor: "hover:bg-[#0A66C2]" },
  { href: "#", icon: FaTiktok, hoverColor: "hover:bg-[#010101]" }, // Using black for TikTok
  { href: "#", icon: FaYoutube, hoverColor: "hover:bg-[#FF0000]" },
];

export default function Socials() {
  return (
    <div className="relative z-10 w-full py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto flex flex-col items-center justify-center gap-8"
      >
        <motion.button
          className="cursor-pointer bg-black/30 px-5 py-2 text-sm font-semibold rounded-full border border-white/10 hover:bg-black/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Updates
        </motion.button>

        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          {socialLinks?.map((social, index) => (
            <Link
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className={`p-3 bg-white/10 rounded-lg ${social.hoverColor} transition-colors duration-300 cursor-pointer`}
                whileHover={{ y: -4, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <social.icon size={20} />
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
