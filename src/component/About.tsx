"use client";

import React from "react";
import Container from "./Container";
import { InfoCard } from "./about-me/infoCard";
import { StatItem } from "./about-me/StatItem";
import { FaCode, FaBolt, FaShieldAlt, FaRocket } from "react-icons/fa";
import { motion, easeInOut } from "framer-motion";
import { StatLine } from "./about-me/StatLine";

const skills = ["React", "Next.js", "TypeScript", "Tailwind", "REST API"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i },
  }),
};

const floaty = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 6, repeat: Infinity, ease: easeInOut },
};

// ✅ نفس شكل الكارد (glass + بوردر واضح) بدون تغيير الديزاين
const cardGlass =
  "rounded-2xl border border-emerald-200/50 bg-white/10 p-6 backdrop-blur-xl " +
  "shadow-[0_12px_40px_rgba(0,0,0,0.06)] " +
  "dark:border-white/20 dark:bg-white/[0.04]  bg-emerald-200  dark:shadow-[0_18px_60px_rgba(0,0,0,0.35)]";

const iconBox =
  "inline-flex h-11 w-11 items-center justify-center rounded-xl " +
  "bg-white/10 border border-white/15 text-emerald-400 " +
  "dark:bg-white/[0.06] dark:border-white/15 dark:text-emerald-300";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 md:py-40 border-t border-emerald-400/10 dark:border-white/10"
    >
 

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
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold tracking-wide text-black dark:text-emerald-200"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
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
                className="mt-5 max-w-xl text-base leading-7 text-black/70 dark:text-white/70"
              >
                I’m a passionate Front-End / React developer focused on building clean
                user interfaces, high performance experiences, and scalable component-based
                applications. I enjoy transforming complex ideas into simple, smooth, and
                modern digital products that feel intuitive and professional.
              </motion.p>

              <motion.p
                variants={fadeUp}
                custom={3}
                className="mt-4 max-w-xl text-base leading-7 text-black/70 dark:text-white/70"
              >
                My expertise covers the modern frontend ecosystem including React, Next.js,
                TypeScript, REST APIs, and advanced CSS solutions. I’m committed to writing
                maintainable code, creating reusable patterns, and delivering pixel-perfect
                interfaces that balance design and functionality.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-8 flex flex-wrap gap-3"
              >
                <div className="grid gap-6 sm:grid-cols-3">
  <StatLine value="10+" label="Projects Completed" />
  <StatLine value="10+" label="Skills Mastered" />
  <StatLine value="50+" label="Code Commits" />
</div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={5}
                className="mt-10 flex flex-wrap gap-3"
              >
                <a
                  href="/noor-CV.pdf"
                  className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                >
                  Download Resume
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-black/10 bg-white/50 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5
                             dark:border-white/15 dark:bg-white/[0.02] dark:text-white dark:hover:bg-white/[0.06]"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>

            {/* Right */}
            <div className="grid gap-5">
              {/* ✅ Expertise card */}
              <motion.div
                variants={fadeUp}
                custom={2}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={cardGlass}
              >
                <div className="flex items-start gap-4">
                  <motion.div {...floaty}   className="
        bg-emerald-400/10 border border-emerald-400/25 text-emerald-600 inline-flex h-12 w-12 items-center justify-center rounded-xl
          " >
                    <FaCode />
                  </motion.div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Expertise
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70">
                      Specialized in building responsive and accessible web applications using React.js and TypeScript.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ✅ 2 cards */}
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

              {/* ✅ stats (نفس اللي عندك) */}
              <motion.div variants={fadeUp} custom={5} className="grid gap-5 sm:grid-cols-3">
                <StatItem value="100%" label="Client Satisfaction" />
                <StatItem value="24/7" label="Support Available" />
                <StatItem value="Fast" label="Delivery Time" />
              </motion.div>

              {/* ✅ CTA card */}
              <motion.div
                variants={fadeUp}
                custom={6}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={cardGlass}
              >
                <div className="flex items-center gap-3">
                  <span className={iconBox}>
                    <FaRocket />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Ready to collaborate?
                    </p>
                    <p className="text-sm text-slate-600 dark:text-white/70">
                      Let’s build something sleek and powerful.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}