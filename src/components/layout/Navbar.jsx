"use client";
import { motion, AnimatePresence } from "framer-motion";
import PenSVG from "@/assets/icons/CalligraphyPen.svg";
import HamburgerIcon from "@/assets/icons/HamburgerMenu.svg";
import CloseIcon from "@/assets/icons/Close.svg";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Container from "../ui/Container";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  const navRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-base pt-6 rounded-b-2xl">
      {/* Container  */}
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative flex items-center justify-between rounded-2xl border border-[#ededee] bg-white p-[6px] shadow-[0_6px_12px_0_rgba(29,29,38,0.04)]"
        >
          {/* Logo  */}
          <Link
            href="#home"
            className="block overflow-hidden rounded-xl border border-[#bb576c]"
          >
            <Image
              className="h-10 w-10 object-cover transition-transform duration-200 hover:scale-110"
              src="/profile-image.webp"
              alt="Kunwar Singh Gujral"
              width={1000}
              height={1000}
            />
          </Link>

          {/*Desktop  NavLinks  */}
          <NavLinks className="hidden md:flex" exclude={true} />

          {/* mobile menu panel  */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-[calc(100%+4px)] w-full rounded-2xl border border-[#ededee] bg-white p-[14px_12px] shadow-[0_6px_12px_rgba(29,29,38,0.04)] md:hidden"
              >
                <NavLinks className="flex flex-col" onLinkClick={toggleMenu} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button  */}
          <a href="#contact" className="btn btn-dark hidden md:flex">
            <PenSVG className="h-4 w-4" />
            <span>Contact Me</span>
          </a>

          {/* The hamburger/X button */}
          <button
            onClick={toggleMenu}
            className="rounded-xl bg-[#1d1d26] p-[10px] text-[#fff] transition-colors duration-200 ease-in-out hover:bg-[#33333b] hover:outline-none md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-5 w-5">
              <HamburgerIcon
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                  isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <CloseIcon
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                  isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </span>
          </button>
        </motion.div>
      </Container>
    </header>
  );
}
