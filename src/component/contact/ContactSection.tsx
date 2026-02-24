"use client";

import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Container from "../Container";
import { FloatingIcons } from "../FloatingIcons";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 ">
    

        <FloatingIcons />
      


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