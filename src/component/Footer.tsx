"use client";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/80 dark:bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-3">
        {/* LEFT */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-400">Noor</h3>
          <p className="mt-3 text-sm text-white/60">
            Crafting seamless digital experiences with modern web technologies.
          </p>

          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-3">
              <FaEnvelope className="text-emerald-400" />
              <span className="text-sm">noorelafifi889@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-3">
              <FaMapMarkerAlt className="text-emerald-400" />
              <span className="text-sm">Palestine</span>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#about" className="hover:text-emerald-400">About</a></li>
            <li><a href="#skills" className="hover:text-emerald-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-emerald-400">Projects</a></li>
            <li><a href="#services" className="hover:text-emerald-400">Services</a></li>
            <li><a href="#contact" className="hover:text-emerald-400">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h4 className="font-semibold mb-3">Connect With Me</h4>
          <p className="text-sm text-white/60 mb-4">
            Let’s connect and create something amazing together.
          </p>

          <div className="flex gap-3">
            <a href="https://github.com/" target="_blank">
              <div className="p-3 rounded-xl bg-white/[0.05] hover:bg-emerald-400/20 transition">
                <FaGithub />
              </div>
            </a>

            <a href="https://linkedin.com/" target="_blank">
              <div className="p-3 rounded-xl bg-white/[0.05] hover:bg-emerald-400/20 transition">
                <FaLinkedinIn />
              </div>
            </a>

            <a href="https://twitter.com/" target="_blank">
              <div className="p-3 rounded-xl bg-white/[0.05] hover:bg-emerald-400/20 transition">
                <FaTwitter />
              </div>
            </a>

            <a href="mailto:noorelafifi889@gmail.com">
              <div className="p-3 rounded-xl bg-white/[0.05] hover:bg-emerald-400/20 transition">
                <FaEnvelope />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Noor. All rights reserved.
      </div>
    </footer>
  );
}