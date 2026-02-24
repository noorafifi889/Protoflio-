"use client";

import React from "react";
import {
  HiOutlineCodeBracket,
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
  HiOutlinePuzzlePiece,
  HiOutlineBolt,
  HiOutlineChatBubbleLeftRight,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";
import { InfoCard } from "../about-me/infoCard";
import { FaBolt, FaCode, FaFigma, FaMobileAlt, FaPhone, FaRocket, FaShieldAlt, FaTachometerAlt, FaTelegram } from "react-icons/fa";
import { StatItem } from "../about-me/StatItem";
import { FaRegFontAwesome } from "react-icons/fa6";
import Container from "../Container";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};

const floaty = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

const services = [
  {
    title: "Frontend Development",
desc: "Crafting scalable React and Next.js applications with optimized performance, reusable components, seamless user experience, and modern UI patterns that ensure maintainability and long-term project growth.",  },
  {
    title: "Responsive Design",
    desc: "Creating mobile-first, responsive interfaces that work seamlessly across all devices and screen sizes with exceptional user experience.",
    Icon: HiOutlineDevicePhoneMobile,
  },
  {
    title: "Implementation UI/UX Design",
    desc: "Designing intuitive and visually appealing user interfaces with a focus on usability, accessibility, and modern layouts.",
    Icon: HiOutlinePaintBrush,
  },
  {
    title: "Custom Components",
    desc: "Developing reusable, scalable component libraries and design systems that maintain consistency across projects.",
    Icon: HiOutlinePuzzlePiece,
  },
  {
    title: "Performance Optimization",
    desc: "Optimizing web applications for speed and efficiency through code splitting, lazy loading, and best practices.",
    Icon: HiOutlineBolt,
  },
  {
    title: "Code Review & Consulting",
    desc: "Providing expert code reviews, and technical guidance to improve your product quality.",
    Icon: HiOutlineChatBubbleLeftRight,
  },
    {
    title: "Scalable Frontend Solutions",
    desc: "Creating scalable, maintainable frontend applications that grow with your business needs.",
    Icon: HiOutlineChatBubbleLeftRight,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-30">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-[#050807] text-black" />

        <div className="absolute -left-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-white dark:bg-emerald-500/12 blur-3xl" />
        <div className="absolute left-[140px] top-[120px] h-[620px] w-[620px] rounded-full dark:bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-[-220px] top-[-140px] h-[700px] w-[700px] rounded-full dark:bg-emerald-500/12 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(16,185,129,0.20),transparent_55%),radial-gradient(circle_at_78%_35%,rgba(16,185,129,0.14),transparent_55%)]" />

        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="absolute inset-0 opacity-[0.07] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')]" />
      </div>

    <Container >
        {/* header */}
        <div className="mb-10 text-center pb-5">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold tracking-wide dark:text-emerald-400">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
            WHAT I OFFER
          </div>

          <h2 className="mt-6 text-3xl font-semibold dark:text-white md:text-4xl">
            Built for innovation. Designed for results.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm dark:text-white/60 dark:text-black/60 md:text-base mb-5">
            Comprehensive solutions to transform your ideas into exceptional
            digital experiences.
          </p>
        </div>

        <div className="grid gap-5 mt-40 dark:text-white/60  text-black/70" style ={{marginTop:"50px"}}>
       
     <div className="grid gap-5 sm:grid-cols-2 dark:text-white  text-black" >
             <motion.div
            variants={fadeUp}
            custom={2}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="rounded-2xl dark:border  dark:border-white/10 dark:bg-white/[0.04] bg-white p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl"
          >
            <div className="flex items-start  flex-col gap-4">
              <motion.div
                {...floaty}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300"
              >
                <FaCode  size={25}/>
              </motion.div>

              <ServiceCard title={services[0].title} desc={services[0].desc} />
            </div>
          </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="rounded-2xl dark:border  dark:border-white/10 dark:bg-white/[0.04] bg-white p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl"
            >
              <div className="flex items-start  flex-col gap-4">
                <motion.div
                  {...floaty}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300"
                >
                 <HiOutlineSquares2X2 size={25}/>
                </motion.div>

                <ServiceCard
                  title={services[6].title}
                  desc={services[6].desc}
                />
              </div>
            </motion.div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2" >
            <motion.div
              variants={fadeUp}
              custom={3}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="rounded-2xl dark:border  dark:border-white/10 dark:bg-white/[0.04] bg-white p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl"
            >
              <div className="flex items-start  flex-col gap-4">
                <motion.div
                  {...floaty}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300"
                >
               <FaMobileAlt size={25}/>

                </motion.div>

                <ServiceCard
                  title={services[1].title}
                  desc={services[1].desc}
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="rounded-2xl dark:border  dark:border-white/10 dark:bg-white/[0.04] bg-white p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl"
            >
              <div className="flex items-start  flex-col gap-4">
                <motion.div
                  {...floaty}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300"
                >
                 <FaFigma size={25}/>
                </motion.div>

                <ServiceCard
                  title={services[2].title}
                  desc={services[2].desc}
                />
              </div>
            </motion.div>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <motion.div
              variants={fadeUp}
              custom={3}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="rounded-2xl dark:border  dark:border-white/10 dark:bg-white/[0.04] bg-white p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl"
            >
              <div className="flex items-start  flex-col gap-4">
                <motion.div
                  {...floaty}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300"
                >
<HiOutlinePuzzlePiece size={25}/>
                </motion.div>

                <ServiceCard
                  title={services[3].title}
                  desc={services[3].desc}
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={3}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="rounded-2xl dark:border  dark:border-white/10 dark:bg-white/[0.04] bg-white p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl"
            >
              <div className="flex items-start  flex-col gap-4">
                <motion.div
                  {...floaty}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300"
                >
  <FaTachometerAlt size={25}/>

                </motion.div>

                <ServiceCard
                  title={services[4].title}
                  desc={services[4].desc}
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              custom={4}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="rounded-2xl dark:border  dark:border-white/10 dark:bg-white/[0.04] bg-white p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl"
            >
              <div className="flex items-start  flex-col gap-4">
                <motion.div
                  {...floaty}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300"
                >
                  <FaCode size={25}/>
                </motion.div>

                <ServiceCard
                  title={services[5].title}
                  desc={services[5].desc}
                />
              </div>
            </motion.div>
          </div>
        </div>
</Container>
    </section>
  );
}
