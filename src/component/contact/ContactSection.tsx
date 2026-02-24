"use client";

import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Container from "../Container";
import { FloatingIcons } from "../FloatingIcons";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 ">
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* base */}
        <div className="absolute inset-0 bg-white dark:bg-[#050807]" />

        <div className="absolute -left-40 top-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-500/15 dark:bg-emerald-500/10 blur-3xl" />
        <div className="absolute left-[140px] top-[120px] h-[620px] w-[620px] rounded-full bg-emerald-400/15 dark:bg-emerald-400/10 blur-3xl" />
        <div className="absolute right-[-220px] top-[-140px] h-[700px] w-[700px] rounded-full bg-emerald-500/15 dark:bg-emerald-500/10 blur-3xl" />

        <div className="absolute -left-24 top-24 h-[560px] w-[760px] rounded-[999px] bg-emerald-500/12 dark:bg-emerald-500/10 blur-2xl rotate-[-14deg]" />
        <div className="absolute left-40 top-[-40px] h-[560px] w-[860px] rounded-[999px] bg-emerald-400/12 dark:bg-emerald-400/10 blur-2xl rotate-[18deg]" />
        <div className="absolute right-[-180px] bottom-[-120px] h-[560px] w-[860px] rounded-[999px] bg-emerald-500/12 dark:bg-emerald-500/10 blur-2xl rotate-[-10deg]" />

        <div
          className="absolute inset-0
    bg-[radial-gradient(circle_at_18%_30%,rgba(16,185,129,0.10),transparent_52%),radial-gradient(circle_at_70%_35%,rgba(16,185,129,0.08),transparent_55%)]
    dark:bg-[radial-gradient(circle_at_18%_30%,rgba(16,185,129,0.18),transparent_52%),radial-gradient(circle_at_70%_35%,rgba(16,185,129,0.14),transparent_55%)]"
        />

        <div
          className="absolute inset-0
    bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.55)_40%,rgba(255,255,255,0)_72%)]
    dark:bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.85)_75%)]"
        />

        <FloatingIcons />
      </div>


<Container>   {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-700 dark:text-emerald-200">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            GET IN TOUCH
          </div>

          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-5xl">
            Let’s Work Together
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-white/60 md:text-base">
            Have a project in mind? Let’s discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl  bg-white/70 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]  mt-15" style={{marginTop:"20px"}}>
          <div className="grid gap-8 md:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
   </Container>     
    </section>
  );
}