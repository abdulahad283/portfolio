"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import MailSVG from "../../assets/icons/Mail.svg";
import DownloadSVG from "../../assets/icons/Download.svg";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="pt-20">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            role="status"
            className="chips gap-2 self-center text-center"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative m-auto inline-flex h-1.5 w-1.5 rounded-full bg-[#2ede7f]" />
            </span>

            <span>Available for Work</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="py-2 text-4xl font-medium leading-[1.2] tracking-[-1.08px] text-[#1d1d26] md:text-5xl md:leading-[1.2] md:tracking-[-1.44px]"
          >
            Kunwar Singh Gujral
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-lg font-medium leading-[1.4] tracking-[-0.36px] text-[#77777d]"
          >
            Senior Data Scientist & Business Consultant
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="w-full pt-6">
            <div className="flex flex-col gap-2 xs:flex-row xs:justify-center">
              <motion.a
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.2,
                }}
                href="mailto:mail@gmail.com?subject=Hello!"
                className="btn btn-dark w-full xs:w-auto"
              >
                <MailSVG className="h-4 w-4" />
                <span>Send Email</span>
              </motion.a>

              <motion.a
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.2,
                }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light w-full xs:w-auto"
              >
                <DownloadSVG className="h-4 w-4" />
                <span>Download CV</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
