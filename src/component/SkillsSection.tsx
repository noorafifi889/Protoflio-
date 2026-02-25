"use client";

import { motion, type Variants } from "framer-motion";
import Container from "./Container";

import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiSupabase,
  SiJavascript,
  SiGithub,
  SiGit,
  SiFigma,
  SiRedux,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiVercel,
  SiFirebase,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skills = [
  { icon: FaReact, name: "React.js" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiCss3, name: "CSS3" },

  { icon: SiRedux, name: "Redux Toolkit" },
  { icon: SiReactquery, name: "React Query" },

  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiVercel, name: "Vercel" },

  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiSupabase, name: "Supabase" },

  { icon: SiPostman, name: "Postman" },

  { icon: SiFigma, name: "Figma" },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function SkillsSection() {
  return (
<section
  id="skills"
  className="
    relative
    mt-20 mb-20
    bg-white text-black
    dark:bg-black dark:text-white
    py-2
  border-t border-emerald-400/10 dark:border-white/10
  "
>
      <Container>
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="text-center">
                <motion.div
                            variants={fadeUp}
                            custom={0}
                            className="inline-flex items-center gap-2 mb-5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold tracking-wide text-black dark:text-emerald-200"
                          >
                            <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
                          My Skills
                          </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold text-zinc-900 dark:text-white"
            >
              Tech Stack & Expertise
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mt-3 text-zinc-600 dark:text-white/60"
            >
              Technologies I use to build fast, modern, and scalable web apps.
            </motion.p>
          </div>

          {/* grid */}
       <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6 justify-center py-3  "
          >
            {skills.map((skill, i) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  className="
                    group relative
                    w-full
                    rounded-2xl
                    p-6
                    border shadow-sm
                    backdrop-blur
                    bg-white border-zinc-200
                    dark:bg-white/5 dark:border-white/10
                    hover:shadow-md
                    transition
                    border-emerald-300
                  "
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-100 bg-emerald-400/20" />

                  <div className="relative flex flex-col items-center justify-center gap-3">
                    <Icon className="text-3xl text-emerald-500" />
                    <span className="text-sm text-zinc-700 dark:text-white/70">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

      
        </div>
      </Container>
    </section>
  );
}