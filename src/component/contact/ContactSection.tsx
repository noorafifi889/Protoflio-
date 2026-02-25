"use client";

import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Container from "../Container";
import { FloatingIcons } from "../FloatingIcons";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";

const sectionStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 border-t border-emerald-400/10 dark:border-white/10"
    >
      <FloatingIcons />

      <Container>
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-10 text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-700 dark:text-emerald-200">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              GET IN TOUCH
            </div>

            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              Let’s Work Together
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-white/60 md:text-base">
              Have a project in mind? Let’s discuss how we can bring your ideas
              to life.
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div variants={fadeUp} className="rounded-3xl p-6 mt-5">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div variants={fadeUp}>
                <ContactForm />
              </motion.div>

              <motion.div variants={fadeUp}>
                <ContactInfo />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}