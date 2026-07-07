"use client";

import { motion } from "framer-motion";
import MailSVG from "@/assets/icons/Mail.svg";

export default function FloatingContactButton() {
  return (
    <motion.a
      href="mailto:mail@gmail.com?subject=Hello!"
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        opacity: {
          duration: 0.4,
        },
        scale: {
          duration: 0.4,
        },
        y: {
          duration: 3,

          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="lg-nav:flex fixed bottom-6 right-8 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#1d1d26] p-4 shadow-lg"
      aria-label="Contact Me"
    >
      <MailSVG className="h-6 w-6 text-white" />
    </motion.a>
  );
}
