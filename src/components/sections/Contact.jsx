"use client";

import LinkedInSVG from "@/assets/icons/LinkedIn.svg";
import FacebookSVG from "@/assets/icons/Facebook.svg";
import TelegramSVG from "@/assets/icons/Telegram.svg";
import TwitterSVG from "@/assets/icons/Twitter.svg";
import Image from "next/image";
import MailSVG from "@/assets/icons/Mail.svg";
import Container from "../ui/Container";
import SectionCard from "../ui/SectionCard";
import PenSVG from "@/assets/icons/PenDark.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CheckSVG from "@/assets/icons/Checkmarklight.svg";
import ScrollReveal from "../ui/ScrollReveal";

const socialLinks = [
  {
    id: 1,
    href: "https://linkedin.com/",
    icon: LinkedInSVG,
    label: "LinkedIn",
  },
  {
    id: 2,
    href: "https://facebook.com/",
    icon: FacebookSVG,
    label: "Facebook",
  },
  {
    id: 3,
    href: "https://t.me/",
    icon: TelegramSVG,
    label: "Telegram",
  },
  {
    id: 4,
    href: "https://x.com/",
    icon: TwitterSVG,
    label: "Twitter (X)",
  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("submitting");

    try {
      const formData = new FormData(e.target);

      const response = await fetch("https://formspree.io/f/mjgqlvzy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }
  return (
    <section id="contact" className="pb-24 pt-[88px]">
      <Container>
        <div className="flex flex-col gap-10">
          <ScrollReveal>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-center gap-6 text-center">
                <Image
                  className="h-20 w-20 rounded-xl border border-[#bb576c] transition-transform duration-[250ms] ease-in-out hover:scale-110"
                  src="/profile-image.webp"
                  alt="Kunwar Singh Gujral"
                  width={1000}
                  height={1000}
                />
                <div>
                  <h2 className="mb-1 text-[21px] font-medium leading-[1.2] tracking-[-0.63px] text-[#1d1d26]">
                    Feel Free to Reach Out
                  </h2>
                  <p className="text-lg font-medium leading-[1.4] tracking-[-0.36px] text-[#77777d]">
                    Let&apos;s start a productive conversation
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6">
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
                  href="mailto:thomasscott@example.com"
                  className="btn btn-dark mx-auto inline-flex w-full py-6 xs:w-auto xs:px-12"
                >
                  <MailSVG className="h-6 w-6" />
                  <span className="text-lg font-medium leading-[1.4] tracking-[-0.36px]">
                    Send Email
                  </span>
                </motion.a>
                <ul className="flex items-center justify-center gap-2">
                  {socialLinks.map((link) => (
                    <li
                      key={link.id}
                      className="p-2 opacity-50 duration-300 ease-in-out hover:opacity-100"
                    >
                      <a href={link.href} aria-label={link.label}>
                        <link.icon className="h-6 w-6" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <SectionCard
              icon={PenSVG}
              heading="Get in Touch with Me!"
              description="Have a question, feedback, or just want to say hello? I'd love to hear from you! Your communication matters to me!"
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="flex flex-col items-center gap-6 rounded-2xl border border-[#ededee] bg-[#f9f9f9] px-6 py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.15,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="flex items-center justify-center rounded-xl bg-[#1d1d26] p-[14px]"
                    >
                      <CheckSVG className="h-6 w-6" />
                    </motion.div>

                    <div className="flex max-w-[280px] flex-col gap-2">
                      <h3 className="text-[18px] font-medium leading-[140%] tracking-[-0.36px] text-[#1d1d26]">
                        Your Message Has Been Sent
                      </h3>

                      <p className="text-[14px] font-medium leading-[19.6px] tracking-[-0.28px] text-[#77777D]">
                        You can expect a response within 24 hours. Stay tuned
                        for some fantastic news!
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex flex-col gap-6"
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Name
                        </label>

                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-input"
                          placeholder="Full Name"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>

                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-input"
                          placeholder="Email"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="sr-only">
                          Message
                        </label>

                        <input
                          type="text"
                          id="message"
                          name="message"
                          className="form-input"
                          placeholder="Message"
                          required
                        />
                      </div>
                    </div>

                    <motion.button
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
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn btn-dark xs:self-start"
                    >
                      {status === "submitting"
                        ? "Please wait..."
                        : "Send a Message"}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: [0, -4, 4, -4, 4, 0],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.2 },
                      x: { duration: 0.4 },
                    }}
                    className="mt-6 rounded-xl border border-[#e3e3e4] bg-[#ededee] px-6 py-4 text-sm font-medium leading-[1.4] tracking-[-0.28px] text-[#77777d]"
                  >
                    Oops, something went wrong! Please double-check your
                    submission and try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </SectionCard>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
