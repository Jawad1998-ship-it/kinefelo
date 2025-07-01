import React from "react";
import { Facebook, Twitter, Linkedin, Whatsapp, Youtube } from "lucide-react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="bg-[#190B12] text-white">
      <div className="flex flex-col items-center text-center">
        {/* Logo and Brand Name */}
        <Image
          height={169}
          width={184}
          src="/images/logo2.png"
          alt="Logo Icon"
          className="mb-[38px] mt-[105px]"
        />
        {/* Social Media Icons */}
        <div className="flex space-x-[16px] mb-[60px]">
          <Link
            href="#"
            className="flex items-center justify-center w-[40px] h-[40px] bg-white/10 p-3 rounded-full hover:bg-gradient-to-r from-[rgba(102,22,66,1)] to-[rgba(110,31,75,1)] transition-colors duration-300"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center w-[40px] h-[40px] bg-white/10 p-3 rounded-full hover:bg-gradient-to-r from-[rgba(102,22,66,1)] to-[rgba(110,31,75,1)] transition-colors duration-300"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center w-[40px] h-[40px] bg-white/10 p-3 rounded-full hover:bg-gradient-to-r from-[rgba(102,22,66,1)] to-[rgba(110,31,75,1)] transition-colors duration-300"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center w-[40px] h-[40px] bg-white/10 p-3 rounded-full hover:bg-gradient-to-r from-[rgba(102,22,66,1)] to-[rgba(110,31,75,1)] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center w-[40px] h-[40px] bg-white/10 p-3 rounded-full hover:bg-gradient-to-r from-[rgba(102,22,66,1)] to-[rgba(110,31,75,1)] transition-colors duration-300"
          >
            <Youtube size={20} />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-[rgba(25, 11, 18, 1)] flex flex-col md:flex-row justify-around items-center text-sm text-gray-400">
        <p
          className={`py-[24px] 2xl:text-sm font-normal leading-[16px] tracking-[0%] tracking-[0px]`}
        >
          &copy; 2025 KineFelo. All rights reserved.
        </p>
        <div className="py-[24px] flex space-x-6">
          <a
            href="/privacy-policy"
            className="2xl:text-sm font-normal leading-[16px] hover:text-white transition-colors duration-300 tracking-[0px]"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="2xl:text-sm font-normal leading-[16px] hover:text-white transition-colors duration-300 tracking-[0px]"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
