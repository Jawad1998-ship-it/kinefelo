"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, CircleDollarSign } from "lucide-react";

export default function JobDetails() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const keyResponsibilities = [
    "Design and animate engaging motion graphics for social media, ads, product launches, and promotional videos",
    "Create visual assets that align with our brand identity and marketing goals",
    "Work with the content and marketing team to develop ideas, storyboards, and animations",
    "Edit and enhance existing footage with animations, transitions, and effects",
    "Adapt content for various platforms (Facebook, Instagram, YouTube, etc.)",
    "Create eye-catching short-form video content for social media campaigns, and ads",
    "Edit and animate product promos, brand reels, and explainer videos",
    "Add transitions, sound effects, music, text, and motion graphics to enhance storytelling",
    "Collaborate with the marketing and content teams to align visuals with the brand voice",
    "Work with raw footage to produce clean, polished videos on time",
    "Stay updated with trends in video editing, all of Social Media ex, TikTok/Instagram Reels, and storytelling styles",
  ];

  const requirements = [
    "Proficiency in After Effects, Adobe Illustrator, Premiere Pro, or other motion design tools",
    "Strong sense of design, composition, timing, and storytelling",
    "Ability to create clean, modern, and engaging animations",
    "A portfolio showcasing motion graphics work (must be provided)",
    "Creative, detail-oriented, and able to meet deadlines independently",
  ];

  return (
    <main className="w-full relative z-10">
      <div className="container mx-auto max-w-4xl py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-2"
        >
          <motion.div
            variants={itemVariants}
            className="bg-[#21103A]/70 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-2xl text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent py-2">
              Motion Graphics Designer
            </h1>
            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-2 text-white/60">
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Remote / Dhaka (Flexible)
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> Full-Time
              </span>
            </div>
            <p className="mt-3 text-white/60 flex items-center justify-center gap-2">
              <CircleDollarSign size={16} /> Salary: BDT 10,000 - 20,000 (Based
              on experience and skill)
            </p>
            <motion.button
              className="mt-8 px-8 py-3 bg-pink-600 font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-[#1a0b2e] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#21103A]/70 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Key Responsibilities
            </h2>
            <ul className="space-y-2.5 list-disc pl-5 marker:text-pink-400 text-white/70">
              {keyResponsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-white mt-10 mb-4">
              Requirements
            </h2>
            <ul className="space-y-2.5 list-disc pl-5 marker:text-pink-400 text-white/70">
              {requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-[#21103A]/70 backdrop-blur-md border border-white/10 p-8 sm:p-10 rounded-2xl text-center"
          >
            <p className="text-xl italic text-white/80">
              Let your creativity drive impact. Join KineFelo and help shape the
              future of e-commerce content in Bangladesh.
            </p>
            <p className="mt-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              "Jeta lagbe, KineFelo!"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
