"use client";

import React from "react";
import {
  HiOutlinePuzzlePiece,
  HiOutlineChatBubbleLeftRight,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

import { ServiceCard } from "./ServiceCard";
import { motion, easeInOut, easeOut } from "framer-motion";
import { FaCode, FaFigma, FaMobileAlt, FaTachometerAlt } from "react-icons/fa";
import Container from "../Container";

const services = [
  {
    title: "Frontend Development",
    desc: "Crafting scalable React and Next.js applications with optimized performance and reusable components.",
  },
  {
    title: "Responsive Design",
    desc: "Creating mobile-first, responsive interfaces across all devices.",
  },
  {
    title: "Implementation UI/UX Design",
    desc: "Designing intuitive and visually appealing interfaces.",
  },
  {
    title: "Custom Components",
    desc: "Developing reusable component libraries and design systems.",
  },
  {
    title: "Performance Optimization",
    desc: "Optimizing apps with lazy loading and best practices.",
  },
  {
    title: "Code Review & Consulting",
    desc: "Providing expert code reviews and technical guidance.",
  },
  {
    title: "Scalable Frontend Solutions",
    desc: "Building scalable frontend apps that grow with your business.",
  },
];

const sectionStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 md:py-30 border-t border-emerald-400/10 dark:border-white/10"
    >
      <Container>
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* header */}
          <motion.div variants={fadeUp} className="mb-10 text-center pb-5">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold tracking-wide dark:text-emerald-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
              WHAT I OFFER
            </div>

            <h2 className="mt-6 text-3xl font-semibold dark:text-white md:text-4xl">
              Built for innovation. Designed for results.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-black/60 dark:text-white/60 md:text-base mb-5">
              Comprehensive solutions to transform your ideas into exceptional
              digital experiences.
            </p>
          </motion.div>

          {/* grid */}
          <div className="grid gap-5 mt-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <Card icon={<FaCode size={25} />} title={services[0].title} desc={services[0].desc} />
              <Card icon={<HiOutlineSquares2X2 size={25} />} title={services[6].title} desc={services[6].desc} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card icon={<FaMobileAlt size={25} />} title={services[1].title} desc={services[1].desc} />
              <Card icon={<FaFigma size={25} />} title={services[2].title} desc={services[2].desc} />
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <Card icon={<HiOutlinePuzzlePiece size={25} />} title={services[3].title} desc={services[3].desc} />
              <Card icon={<FaTachometerAlt size={25} />} title={services[4].title} desc={services[4].desc} />
              <Card icon={<HiOutlineChatBubbleLeftRight size={25} />} title={services[5].title} desc={services[5].desc} />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/* reusable card */
function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6 backdrop-blur-xl
        shadow-[0_8px_24px_rgba(0,0,0,0.05)]
        hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]
        dark:border-white/12 dark:bg-white/[0.05]
        dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)]
        dark:hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)]
        transition
      "
    >
      <div className="flex flex-col gap-4">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
          className="
            inline-flex h-11 w-11 items-center justify-center rounded-xl
            border border-emerald-400/25 bg-emerald-400/10 text-emerald-600
            dark:border-white/10 dark:bg-white/[0.06] dark:text-emerald-300
          "
        >
          {icon}
        </motion.div>

        <ServiceCard title={title} desc={desc} />
      </div>
    </motion.div>
  );
}