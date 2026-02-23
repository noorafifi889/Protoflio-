"use client";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiSupabase } from "react-icons/si";
import { motion } from "framer-motion";
import Container from "./Container";

const skills = [
  { icon: FaReact, name: "React.js" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiMongodb, name: "MongoDB" },
    { icon: SiSupabase, name: "Supabase" },

];

export default function SkillsSection() {
  return (
    <section className=" py-20 bg-white dark:bg-black dark:text-white">
      {/* glow background */}
        <Container >


      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
          Tech Stack & Expertise
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-white/60">
          Technologies I work with to build amazing products
        </p>

        {/* grid */}
        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                className="
                  group relative rounded-2xl p-6
                  border shadow-sm backdrop-blur
                  bg-white border-zinc-200
                  dark:bg-white/5 dark:border-white/10
                  hover:shadow-md transition
                "
              >
                {/* glow border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-100 bg-emerald-400/20" />

                <div className="relative flex flex-col items-center gap-3">
                  <Icon className="text-3xl text-emerald-500" />
                  <span className="text-sm text-zinc-700 dark:text-white/70">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      </Container>
    </section>
  );
}