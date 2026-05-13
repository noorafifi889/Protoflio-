"use client";
import { useTyping } from "@/Hook/useTyping";
import Container from "./Container";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import SocialFloatingMenu from "./SocialFloatingMenu.";
import { FloatingIcons } from "./FloatingIcons";
import Link from "next/link";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: easeOut } },
};

export default function HeroSection() {
  const typed = useTyping(["Web Developer","Front end developer","Next Js Developer"], 100, 2000);

  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white dark:bg-[#120b13]" />
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/12" />
        <div className="absolute right-[-260px] top-[-180px] h-[640px] w-[640px] rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-400/12" />
        <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.12),transparent_55%)]" />
      </div>

      <FloatingIcons />

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="grid items-center gap-10 md:grid-cols-2 md:gap-14 mt-6"
        >
          {/* Left Side */}
          <motion.div variants={item}>
            <motion.div variants={item} className="inline-block">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-4 py-2 text-sm text-zinc-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-100/90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(34,197,94,0.8)]"
                  animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.18, 1] }}
                  transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-zinc-800 dark:text-emerald-100/90">
                  Web Developer - Front End Developer Based Palestine 
                </span>
              </motion.div>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-semibold tracking-tight text-black dark:text-white md:text-6xl"
            >
              Noor Al Afifi, <br />
              <span className="text-emerald-400">{typed}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-lg text-emerald-500 dark:text-emerald-200"
            >
              Stop losing customers to a slow website. Let’s build one that sells.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 max-w-xl text-sm leading-7 text-black/50 dark:text-white/50 md:text-base"
            >
              Building modern, scalable web applications with React, Next.js,
              and cutting-edge technologies. Transforming ideas into exceptional digital experiences.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex items-center gap-4">
              <Link href="#contact">
                <motion.button
                  className="h-12 rounded-full px-8 text-sm font-medium bg-emerald-400 text-black hover:brightness-110 transition"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                </motion.button>
              </Link>
              <Link href="#projects">
                <motion.button
                  className="h-12 rounded-full px-8 text-sm font-medium border border-black/10 bg-white/60 text-black backdrop-blur hover:bg-white/80 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.12] transition"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side (Image Card) */}
          <motion.div
            variants={item}
            className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur md:ml-auto"
          >
            {/* Animated Border Line */}
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.rect
                x="0.5" y="0.5" width="99" height="99" rx="4"
                fill="transparent" stroke="rgb(16 185 129)" strokeWidth="0.3"
                strokeDasharray="20 10"
                animate={{ strokeDashoffset: [0, -100] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            <div className="relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/photo_2026-05-12_20-24-43.jpg"
                  alt="Noor Al Afifi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-3 rounded-full border border-emerald-400/20 bg-black/60 px-4 py-2 backdrop-blur-md">
                   <SocialFloatingMenu />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}