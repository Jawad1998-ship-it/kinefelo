"use client";

import { motion } from "framer-motion";
import { UsersRound } from "lucide-react";

export default function CareersPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Optional: Add the same background glow effects for consistency */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <main className="relative z-10 container mx-auto max-w-4xl px-4 py-24 sm:py-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants}>
            <UsersRound
              size={60}
              className="text-pink-300/80 mx-auto"
              strokeWidth={1.5}
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            We are Hiring
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-16 w-full">
            <h2 className="text-2xl font-bold text-white">
              Build the Future with KineFelo
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-purple-200/80 leading-relaxed">
              At KineFelo, we believe great things happen when passionate people
              come together. We're building more than just an ecommerce
              platform; we're creating a movement powered by innovation, trust,
              and community. If you're someone who dreams big, works smart, and
              wants to make an impact in the digital future of online commerce
              of Bangladesh, this is your place. <br /> Join us, and let's grow
              together.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              className="cursor-pointer mt-10 px-8 py-3 bg-pink-600 font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-[#1a0b2e] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
