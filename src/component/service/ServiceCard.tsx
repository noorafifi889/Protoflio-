"use client";

import React from "react";

export function ServiceCard({
  title,
  desc,
//   Icon,
}: {
  title: string;
  desc: string;
//   Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className=" overflow-hidden  ">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-8 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100">
        <div className="absolute left-1/3 top-1/3 h-48 w-48 rounded-full bg-emerald-500/15" />
      </div>

      
      {/* <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
        <Icon className="h-6 w-6 text-emerald-300" />
      </div> */}

      <h3 className="text-xl font-semibold dark:text-white transition group-hover:text-emerald-200">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-black/60 dark:text-white/60">{desc}</p>

      <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-emerald-400/40 transition-all duration-300 group-hover:w-full" />
    </div>
  );
}