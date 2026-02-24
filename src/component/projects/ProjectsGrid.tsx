"use client";

import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

type Project = {
  id: string;
  title: string;
  desc: string;
  category: string;
  image: string;
  live?: string;
  repo?: string;
  stack: string[];
};

const grid = {
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export default function ProjectsGrid({
  projects,
  activeKey,
}: {
  projects: Project[];
  activeKey: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeKey}
        variants={grid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}