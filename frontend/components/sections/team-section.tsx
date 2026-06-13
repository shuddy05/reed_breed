"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
  DribbbleLogo,
} from "phosphor-react";
import { StrokedText } from "@/components/ui/stroked-text";

const team = [
  {
    name: "Ifeany Reed",
    role: "Head of Design",
    image: "/director.jpg",
    socials: [true, true, true, true, true],
  },
  {
    name: "Ibrahim Moshood ",
    role: " Head of Development",
    image: "/development.jpg",
    socials: [true, true, true, true, true],
  },
  {
    name: "Juliana Lene",
    role: "Head of Marketing",
    image: "/pass2.jpeg",
    socials: [true, true, true, true, true],
  },
  {
    name: "Olalekan Hammed",
    role: "Head of Legal",
    image: "/pass3.jpeg",
    socials: [true, true, true, true, true],
  },
];

export const TeamSection = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-48 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span
              className="text-[12vw] md:text-[8vw] font-black text-white leading-none tracking-tighter"
              style={{ WebkitTextStroke: "0.5px #ffffff" }}
            >
              Our
            </span>
            <div className="flex items-center -mt-[1vw] md:-mt-[2vw]">
              <StrokedText
                text="Team"
                viewBox="0 0 350 120"
                height="clamp(5rem, 10vw, 8rem)"
                strokeWidth={2}
                letterSpacing="-0.05em"
              />
            </div>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              {/* Member Image */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-8 overflow-hidden rounded-full border border-white/5 bg-white/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                {member.name}
              </h3>
              <p className="text-white/60 text-lg font-medium mb-6">
                {member.role}
              </p>

              {/* Socials */}
              <div className="flex items-center gap-4 text-white/40">
                <motion.a
                  whileHover={{ color: "#ffffff", scale: 1.1 }}
                  href="#"
                  className="transition-colors"
                >
                  <LinkedinLogo size={20} weight="fill" />
                </motion.a>
                <motion.a
                  whileHover={{ color: "#ffffff", scale: 1.1 }}
                  href="#"
                  className="transition-colors"
                >
                  <InstagramLogo size={20} weight="fill" />
                </motion.a>
                <motion.a
                  whileHover={{ color: "#ffffff", scale: 1.1 }}
                  href="#"
                  className="transition-colors"
                >
                  <FacebookLogo size={20} weight="fill" />
                </motion.a>
                <motion.a
                  whileHover={{ color: "#ffffff", scale: 1.1 }}
                  href="#"
                  className="transition-colors"
                >
                  <TwitterLogo size={20} weight="fill" />
                </motion.a>
                <motion.a
                  whileHover={{ color: "#ffffff", scale: 1.1 }}
                  href="#"
                  className="transition-colors"
                >
                  <DribbbleLogo size={20} weight="fill" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
