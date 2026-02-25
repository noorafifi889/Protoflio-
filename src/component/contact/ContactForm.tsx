"use client";

import React, { useRef, useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { Field } from "./Field";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!formRef.current) return;

  setLoading(true);

  const promise = emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    formRef.current,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );

  toast.promise(promise, {
    loading: "Sending message...",
    success: "Message sent successfully ✅",
    error: "Something went wrong ❌",
  });

  try {
    await promise;
    formRef.current.reset();
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="rounded-2xl p-5 bg-emerald-400/10  dark:bg-gray-400/20 ">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 ">
        <Field label="Name" placeholder="Your name" type="text" name="from_name" />
        <Field label="Email" placeholder="your.email@example.com" type="email" name="reply_to" />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-800 dark:text-white">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-400/60 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/35"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold shadow-lg transition hover:brightness-110 disabled:opacity-60
                     bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 text-white"
        >
          {loading ? "Sending..." : "Send Message"}
          <FaTelegramPlane className="transition group-hover:translate-x-0.5" />
        </button>
      </form>
    </div>
  );
}