"use client";

import { memo } from "react";
import { motion } from "framer-motion";

type Props<T extends string> = {
  categories: readonly T[];
  active: T;
  onChange: (value: T) => void;
};

function ProjectFiltersInner<T extends string>({
  categories,
  active,
  onChange,
}: Props<T>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: 0.18 }}
      className="mt-10 flex flex-wrap items-center justify-center gap-3"
    >
      {categories.map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={[
              "rounded-full px-4 py-2 text-sm transition",
              "border backdrop-blur",
              isActive
                ? "border-emerald-400/30 bg-emerald-400/15 text-emerald-700 dark:text-emerald-200"
                : "border-white/10 bg-black/5 text-zinc-700 hover:bg-black/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10",
            ].join(" ")}
          >
            {c}
          </button>
        );
      })}
    </motion.div>
  );
}

const ProjectFilters = memo(ProjectFiltersInner) as typeof ProjectFiltersInner;
export default ProjectFilters;
