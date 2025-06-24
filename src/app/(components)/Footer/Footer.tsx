"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, ShoppingBag, Apple } from "lucide-react";

const PlayStoreIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    {...props}
  >
    <path d="M7 4v16l13 -8z"></path>
  </svg>
);

export default function Footer() {
  const contactDetails = [
    { icon: Phone, text: "(+880) 1575374809", href: "tel:+8801575374809" },
    {
      icon: Mail,
      text: "info@kinefelo.store",
      href: "mailto:info@kinefelo.store",
    },
    {
      icon: MapPin,
      text: "Kemal Ataturk Avenue, Banani, Dhaka, Bangladesh",
      href: "#",
    },
  ];

  return (
    <footer className="relative z-10 w-full bg-[#160a2c]/70 backdrop-blur-xl border-t border-white/10 py-12 mt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-white/90 tracking-wider">
              Connect with us
            </h3>
            <ul className="space-y-3">
              {contactDetails.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex items-start gap-3.5 group p-2 -m-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <item.icon
                      className="text-pink-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                      size={18}
                    />
                    <span className="text-white/70 group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-white/15 to-white/5 p-3 rounded-2xl border border-white/10">
                <ShoppingBag size={32} className="text-pink-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">KineFelo</h2>
                <p className="text-purple-300/80 italic">
                  Jeta Lagbe, KineFelo!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full md:w-auto">
              <Link
                href="#"
                className="group flex-1 flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <Apple
                  size={28}
                  className="transition-transform group-hover:scale-110"
                />
                <div className="whitespace-nowrap">
                  <p className="text-xs text-white/70">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </Link>
              <Link
                href="#"
                className="group flex-1 flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <PlayStoreIcon
                  className="text-white transition-transform group-hover:scale-110"
                  size={24}
                />
                <div>
                  <p className="text-xs text-white/70">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/10 text-center text-sm text-white/70">
          <p>KineFelo. All rights reserved &copy; {new Date().getFullYear()}</p>
        </div>
      </motion.div>
    </footer>
  );
}
