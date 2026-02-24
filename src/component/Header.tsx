"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
 <header className="sticky top-0 z-50 py-4 ">
  <div className="absolute inset-0 -z-10 bg-white dark:bg-black/40 backdrop-blur border-b border-black/10 dark:border-white/10" />
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-emerald-400 drop-shadow-[0_0_10px_#22c55e]">
              {`< />`}
            </span>
            <span className="text-emerald-400">Noor</span>
          </a>

          {/* Desktop Links */}
<nav className="hidden md:flex items-center gap-8 text-black/60 dark:text-white/70 ">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition hover:text-black dark:hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          
          <div className="flex items-center gap-3">
              <ThemeToggle />

<button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="hidden md:inline-flex rounded-full px-5 py-2 font-medium
  bg-emerald-400 text-black hover:brightness-110 transition"
>
  Hire Me
</button>

            {/* Burger Button */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 bg-white transition ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 bg-white transition ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 bg-white transition ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
              <ThemeToggle />

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-4">
            <nav className="flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-gray-200 hover:bg-white/10 hover:text-white transition"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full bg-white text-black py-2 rounded-xl font-medium"
            >
              Hire Me
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}