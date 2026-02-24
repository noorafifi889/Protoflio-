"use client";

import React from "react";
import Container from "./Container";
import { InfoCard } from "./about-me/infoCard";
import { StatItem } from "./about-me/StatItem";
import { FaCode, FaBolt, FaShieldAlt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = ["React", "Next.js", "TypeScript", "Tailwind", "REST API"];

const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i },
  }),
};

const floaty: any = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 6, repeat: Infinity },
  },
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-39 md:py-40">
      {/* ✅ Background (Green glow + subtle grid/noise) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-[#050807] text-black" />

        <div className="absolute -left-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-white dark:bg-emerald-500/12 blur-3xl" />
        <div className="absolute left-[140px] top-[120px] h-[620px] w-[620px] rounded-full dark:bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-[-220px] top-[-140px] h-[700px] w-[700px] rounded-full dark:bg-emerald-500/12 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(16,185,129,0.20),transparent_55%),radial-gradient(circle_at_78%_35%,rgba(16,185,129,0.14),transparent_55%)]" />

        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="absolute inset-0 opacity-[0.07] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')]" />
      </div>

      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto w-full"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left */}
            <div>
              <motion.div
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-2 rounded-full border text-black border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-smd dark:text-emerald-200"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-300 text-black" />
                About Me
              </motion.div>

              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-6 text-2xl leading-tight text-black dark:text-white md:text-5xl"
              >
                Turning complex ideas into{" "}
                <span className="text-emerald-500">seamless experiences</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-5 max-w-xl text-base leading-7 dark:text-white/70 text-black/70"
              >
                I’m a passionate Front-End / React developer focused on building clean
                user interfaces, high performance experiences, and scalable component-based
                applications. I enjoy transforming complex ideas into simple, smooth, and
                modern digital products that feel intuitive and professional.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={3}
                className="mt-4 max-w-xl text-base leading-7 dark:text-white/70 text-black/70"
              >
                My expertise covers the modern frontend ecosystem including React, Next.js,
                TypeScript, REST APIs, and advanced CSS solutions. I’m committed to writing
                maintainable code, creating reusable patterns, and delivering pixel-perfect
                interfaces that balance design and functionality.
              </motion.p>

              <motion.div variants={fadeUp} custom={4} className="mt-8 flex flex-wrap gap-3">
                {skills.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm dark:text-white/70 text-black/70"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} custom={5} className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/noor-CV.pdf"
                  className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                >
                  Download Ruseme
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white dark:bg-white/[0.02] px-6 py-3 text-sm font-semibold dark:text-white text-black  transition hover:bg-white/[0.06]"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>

            {/* Right */}
            <div className="grid gap-5">
              <motion.div
                variants={fadeUp}
                custom={2}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="rounded-2xl dark:border  dark:border-white/10 dark:bg-white/[0.04] bg-white p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    {...floaty}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300"
                  >
                    <FaCode />
                  </motion.div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Expertise
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/65">
                      Specialized in building modern web apps with clean architecture,
                      accessible UI, and best practices.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2">
                <motion.div
                  variants={fadeUp}
                  custom={3}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <InfoCard
                    icon={<FaShieldAlt />}
                    title="Clean Code"
                    desc="Reusable components, readable structure, and maintainable patterns."
                  />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  custom={4}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <InfoCard
                    icon={<FaBolt />}
                    title="Performance"
                    desc="Optimized rendering, fast load time, and best UX practices."
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeUp} custom={5} className="grid gap-5 sm:grid-cols-3">
                <StatItem value="100%" label="Client Satisfaction" />
                <StatItem value="24/7" label="Support Available" />
                <StatItem value="Fast" label="Delivery Time" />
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={6}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="rounded-2xl  dark:border-emerald-400/15 dark:bg-emerald-400/5 bg-white text-black p-5 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 text-black  dark:text-white">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <FaRocket />
                  </span>
                  <div>
                    <p className="text-sm font-semibold ">Ready to collaborate?</p>
                    <p className="text-sm  text-black/50 dark:text-white/65 ">
                      Let’s build something sleek and powerful.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div> {/* ✅ close grid */}
        </motion.div> {/* ✅ close motion wrapper */}
      </Container>
    </section>
  );
}