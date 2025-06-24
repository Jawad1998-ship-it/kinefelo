"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, Box, Tag } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div ref={heroRef} className="relative w-full overflow-hidden">
      <div
        className={`absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-pink-500/20 rounded-full filter blur-3xl opacity-50 ${
          isInView ? "animate-blob" : ""
        }`}
      ></div>
      <div
        className={`absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-600/20 rounded-full filter blur-3xl opacity-50 ${
          isInView ? "animate-blob animation-delay-4000" : ""
        }`}
      ></div>

      <main className="w-full relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-90px)]">
        <motion.div
          className="w-full lg:max-w-sm flex justify-center items-center p-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm h-64 md:h-80">
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-1/4"
            >
              <ShoppingBag
                size={100}
                className="text-white/80 opacity-70"
                strokeWidth={1.5}
              />
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-0 right-1/4"
            >
              <Box
                size={120}
                className="text-white/80 opacity-70"
                strokeWidth={1.5}
              />
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5], rotate: [5, 0, 5] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-1/2 left-1/3"
            >
              <Tag
                size={80}
                className="text-pink-400/80 opacity-90"
                strokeWidth={1.5}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            <span className="block drop-shadow-lg">KineFelo</span>
            <span className="block text-pink-300 drop-shadow-lg lg:whitespace-nowrap">
              Is Coming Soon!
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-md mx-auto lg:mx-0 text-lg text-purple-200/80"
          >
            Your ultimate online shopping experience is about to launch. Sign up
            for exclusive early access.
          </motion.p>

          <motion.form
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 max-w-md mx-auto lg:mx-0"
            id="notify-form"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-grow px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none placeholder:text-purple-200/60 transition-all"
              aria-label="Email address"
            />
            <motion.button
              type="submit"
              className="w-full sm:w-50 px-6 py-3 bg-pink-600 font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-[#1a0b2e] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Notify Me
            </motion.button>
          </motion.form>
        </motion.div>
      </main>
    </div>
  );
}
