"use client";
import { useTyping } from "@/Hook/useTyping";
import Container from "./Container";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import SocialFloatingMenu from "./SocialFloatingMenu.";
import { FloatingIcons } from "./FloatingIcons";
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: easeOut } },
};

export default function HeroSection() {
      const typed = useTyping(["Front end developer"]);

  return (
    <section className="relative overflow-hidden pt-10 md:pt-14">

   {/* Background blobs like the screenshot */}
<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  {/* base */}
  <div className="absolute inset-0 bg-[#050807]" />

  {/* big soft blobs */}
  <div className="absolute -left-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" />
  <div className="absolute left-[140px] top-[120px] h-[620px] w-[620px] rounded-full bg-emerald-400/10 blur-3xl" />
  <div className="absolute right-[-220px] top-[-140px] h-[700px] w-[700px] rounded-full bg-emerald-500/10 blur-3xl" />

  <div className="absolute -left-24 top-24 h-[560px] w-[760px] rounded-[999px] bg-emerald-500/10 blur-2xl rotate-[-14deg]" />
  <div className="absolute left-40 top-[-40px] h-[560px] w-[860px] rounded-[999px] bg-emerald-400/10 blur-2xl rotate-[18deg]" />
  <div className="absolute right-[-180px] bottom-[-120px] h-[560px] w-[860px] rounded-[999px] bg-emerald-500/10 blur-2xl rotate-[-10deg]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(16,185,129,0.18),transparent_52%),radial-gradient(circle_at_70%_35%,rgba(16,185,129,0.14),transparent_55%)]" />

  {/* vignette */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.85)_75%)]" />
   <FloatingIcons />
</div>

      <Container>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            {/* Left */}
            <motion.div variants={item}>
            {/* pill */}
            <motion.div variants={item} className="inline-block">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100/90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
           
                <motion.span
                  className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(34,197,94,0.8)]"
                  animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.18, 1] }}
                  transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
                />
                Web Developer - Next & React js Developer
              </motion.div>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-8xl font-semibold tracking-tight text-white md:text-6xl"
            >
              Noor Al Afifi, <br />
              <span className="text-emerald-400">{` ${typed} `}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-base"
            >
              Building modern, scalable web applications with React, Next.js, and
              cutting-edge technologies. Transforming ideas into exceptional
              digital experiences.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex items-center gap-4">
              <motion.button
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                Get in Touch
              </motion.button>

              <motion.button
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
              >
                View Projects
              </motion.button>
            </motion.div>

            {/* stats */}
            <motion.div
              variants={item}
              className="mt-10 grid grid-cols-4 gap-4 border-t border-white/10 pt-6"
            >
              <Stat value="9+" label="Projects" />
              <Stat value="15+" label="Technologies" />
              <Stat value="98%" label="Satisfaction" />
            </motion.div>
          </motion.div>
       {/* Card */}
<motion.div
  variants={item}
  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 m-10 backdrop-blur"
>
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <motion.rect
      x="1"
      y="1"
      width="98"
      height="98"
 
      fill="transparent"
      stroke="rgb(16 185 129)"
      strokeWidth="0.5"
      strokeDasharray="100 100" // ⬅️ نص بوردر
      animate={{ strokeDashoffset: [0, -660] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      style={{ filter: "drop-shadow(0 0 8px rgba(16,185,129,0.6))" }}
    />
  </svg>

  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
      <Image
        src="/unnamed.jpg"
        alt="Noor Al Afifi"
        fill
        className="w-full rounded-2xl object-cover"
        priority
      />

      {/* overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-black/50 to-transparent" />
    </div>

    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-emerald-400/20 bg-black/40 px-4 py-2 backdrop-blur">
      <SocialFloatingMenu />
    </div>
  </div>
</motion.div>
    </motion.div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xl font-semibold text-emerald-400">{value}</div>
      <div className="mt-1 text-xs text-white/55">{label}</div>
    </div>
  );
}

function Dot() {
  return (
    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 shadow-[0_0_14px_rgba(34,197,94,0.8)]" />
  );
}