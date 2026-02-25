"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import ProjectsGrid from "./ProjectsGrid";
import Container from "../Container";
import ProjectFilters from "./ProjectFilters";

const categories = ["All",  "Vanila js", "React js", "Full Stack"] as const;
type Category = (typeof categories)[number];

type Project = {
  id: string;
  title: string;
  desc: string;
  category: Exclude<Category, "All">;
  image: string;
  live?: string;
  repo?: string;
  stack: string[];
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Scheduler AI Content",
    desc: " AI-powered platform designed to help users create, organize, and schedule social media posts",
    category: "Full Stack",
    image: "/ai-contant.jpg",
    live: "https://ai-content-scheduler.vercel.app/",
    repo: "https://github.com/khaledabosaeed/AI-Content-Scheduler",
    stack: ["Next.js", "TypeScript", "Tailwind" ,"subabase" ,"React"] ,
  },
  {
    id: "p2",
    title: "SaaS for Clinics",
    desc: "cloud-based platform designed to help clinics manage their daily operations efficiently.",
    category: "Full Stack",
    image: "/saas-clinic.jpg",
    live: "https://palestine-saas-clinics-application.vercel.app/",
    repo: "https://github.com/afnanfayez/Saas-for-clinics",
    stack: ["React", "Tailwind", "Next js ", "PHP -laravel" ,"mysql"],
  },
  {
    id: "p3",
    title: "Personal Finance and Bill Splitting",
    desc: "Auth, database, billing-ready structure and scalable architecture.",
    category: "Full Stack",
    image: "/final8.jpg",
    live: "https://personal-finance-and-bill-splitting.vercel.app/",
    repo: "https://github.com/Seraj-Omar/Personal-Finance-and-Bill-Splitting-Assistant",
    stack: ["Next.js", "Supabase", "TypeScript" , "Nest js" ,"Tailwind CSS"],
  },
    {
    id: "p4",
    title: "React Job Platform",
    desc: "A modern, fast, and responsive web application designed to connect React developers with the best career opportunities",
    category: "React js",
    image: "/react-job.jpg",
    live: "https://react-job-project-git-main-noorafifi889s-projects.vercel.app/",
    repo: "https://github.com/noorafifi889/React-jobProject-",
    stack: ["React.js", "JavaStripe","Bootstrap","CSS"],
  },
      {
    id: "p5",
    title: "Al-Aqsa University home page",
    desc: "designed to reflect professionalism and clarity. It welcomes visitors with a clean, modern layout that highlights academic programs",
    category: "Vanila js",
    image: "/alaqsa-universty.jpg",
    live: "https://al-aqsa-university-home-4hxu4bbdx-noorafifi889s-projects.vercel.app/",
    repo: "https://github.com/noorafifi889/Al-Aqsa-University-home-page",
    stack: ["HTML", "Bootstrap", "JavaStripe","CSS"],
  },
        {
    id: "p6",
    title: " Ecommerce Clothes Shop",
    desc: "A responsive e-commerce website for selling clothes with a modern UI and smooth user experience.",
    category: "React js",
    image: "/ecomerce.jpg",
    live: "https://gsg-react-pro-full-e-commerce-react-nine.vercel.app/",
    repo: "https://github.com/noorafifi889/GSG-ReactPro--full-e-commerce-react1",
    stack: ["React", "Tailwind CSS", "JavaStripe","CSS" ,"Mock API"],
  },
];

export default function ProjectSection() {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="relative py-24 ">
      {/* background glows */}
   <div className="pointer-events-none absolute inset-0 -z-10">
  {/* base */}
  <div className="absolute inset-0 bg-white dark:bg-[#0c0710]" />

  {/* soft emerald radial */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.08),transparent_55%)] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.12),transparent_55%)]" />
</div>
      <Container>
        <div className="mx-auto  px-6">
          {/* heading */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-4 py-2 text-sm text-zinc-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-100/90"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(34,197,94,0.8)]" />
              My Work
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
            >
              Featured Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-3 text-zinc-600 dark:text-white/60"
            >
              Showcasing my best work and achievements
            </motion.p>
          </div>

          {/* filters component */}
          <ProjectFilters categories={categories} active={active} onChange={setActive} />

          {/* grid component */}
          <ProjectsGrid projects={filtered} activeKey={active} />
        </div>
      </Container>
    </section>
  );
}