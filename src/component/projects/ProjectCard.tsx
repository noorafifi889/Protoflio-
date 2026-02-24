"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

type ProjectCardProps = {
  title: string;
  desc: string;
  category: string;
  image: string;
  live?: string;
  repo?: string;
  stack: string[];
};

const cardVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

export default function ProjectCard({
  title,
  desc,
  category,
  image,
  live,
  repo,
  stack,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/10 bg-white/70 shadow-sm backdrop-blur
        dark:bg-white/5 dark:shadow-none
      "
    >
      {/* category tag */}
      <div className="absolute left-4 top-4 z-10">
        <span className="rounded-full bg-black/60 px-3 py-1 text-xs text-white/90 backdrop-blur dark:bg-white/10">
          {category}
        </span>
      </div>

      {/* image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-70" />
      </div>

      {/* content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-zinc-600 dark:text-white/60">
          {desc}
        </p>

        {/* stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-black/5 px-3 py-1 text-xs text-zinc-700 dark:bg-white/5 dark:text-white/70"
            >
              {s}
            </span>
          ))}
        </div>

        {/* buttons */}
        <div className="mt-5 flex items-center gap-3">
          {live && (
            <a
              href={live}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-black hover:brightness-110"
            >
              Live <HiOutlineExternalLink />
            </a>
          )}

          {repo && (
            <a
              href={repo}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-white/80 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Code <SiGithub />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}