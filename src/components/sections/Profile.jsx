"use client";
import Image from "next/image";
import Container from "../ui/Container";
import PersonSVG from "@/assets/icons/Person.svg";
import LocationSVG from "@/assets/icons/Location.svg";
import Logo1 from "@/assets/icons/Logo.svg";
import Logo2 from "@/assets/icons/Logo-1.svg";
import Logo3 from "@/assets/icons/Logo-2.svg";
import Logo4 from "@/assets/icons/Logo-3.svg";
import Logo5 from "@/assets/icons/Logo-4.svg";
import ScrollReveal from "../ui/ScrollReveal";
import { motion } from "framer-motion";
import ScrollRevealVariant from "../ui/ScrollRevealVariant";

const logos = [
  { Component: Logo1 },
  { Component: Logo2 },
  { Component: Logo3 },
  { Component: Logo4 },
  { Component: Logo5, hideOnMobile: true },
];

const animateVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Profile() {
  return (
    <section id="profile" className="pt-[96px]">
      <Container>
        {/* Top area  */}

        <div className="grid grid-cols-1 gap-3 md:grid-cols-8">
          {/* Image  */}
          <ScrollRevealVariant
            variants={animateVariant}
            className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-[#ededee] bg-white md:col-span-3 md:h-full"
          >
            <Image
              alt="Portait"
              src="/portrait.webp"
              fill
              className="object-cover object-center"
            />
          </ScrollRevealVariant>
          <ScrollRevealVariant
            variants={animateVariant}
            className="flex flex-col gap-12 rounded-2xl border border-[#ededee] bg-white px-6 pb-8 pt-6 md:col-span-5"
          >
            {/* Icon  */}
            <div className="flex w-fit items-center justify-center rounded-xl border border-[#ededee] bg-[#f6f6f6] p-[14px]">
              <PersonSVG className="h-6 w-6" />
            </div>

            {/* Content  */}
            <div>
              <h2 className="text-[21px] font-medium leading-[1.2] tracking-[-0.63px] text-[#1d1d26]">
                Professional Profile
              </h2>
              <p className="pb-6 pt-3 text-sm font-medium leading-[1.4] tracking-[-0.28px] text-[#77777d]">
                Accomplished Senior Data Scientist & Business Consultant with a
                proven track record of leveraging advanced analytics to drive
                strategic decision-making and optimize business processes.
                Demonstrated expertise in developing innovative solutions to
                complex problems, coupled with exceptional communication skills
                to effectively convey insights to stakeholders at all levels.
              </p>
              <address className="flex items-center gap-[6px] not-italic text-[#77777D]">
                <LocationSVG className="h-[14px] w-[14px]" />
                <span className="block text-xs font-medium leading-[140%] tracking-[-0.12px]">
                  Based in Phoenix, Arizona, USA.
                </span>
              </address>
            </div>
          </ScrollRevealVariant>
        </div>

        {/* Logos area  */}
        <ScrollReveal>
          <div className="mt-[13px] rounded-2xl border border-[#ededee] bg-white">
            {/* Label  */}
            <p className="border-b border-[#ededee] py-5 text-center text-sm font-medium leading-[1.4] tracking-[-0.28px] text-[#77777d]">
              Worked With
            </p>
            {/* Logos grid  */}
            <div className="grid grid-cols-2 items-center gap-6 px-6 py-8 md:flex md:justify-around md:px-[37px]">
              {logos.map((logo, index) => (
                <a
                  key={index}
                  href="#"
                  className={`items-center justify-center opacity-50 transition-opacity duration-[250ms] ease-in-out hover:opacity-100 ${logo.hideOnMobile ? "hidden md:flex" : "flex"}`}
                >
                  <logo.Component className="h-[23px] w-[108px]" />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
