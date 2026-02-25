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
    <footer className="border-t border-black/10 bg-emerald-50 text-black/80 dark:border-white/10 dark:bg-black dark:text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        {/* LEFT */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-500">Noor</h3>

          <p className="mt-3 text-sm text-black/60 dark:text-white/60">
            Crafting seamless digital experiences with modern web technologies.
          </p>

          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/60 px-4 py-3 backdrop-blur
                            dark:border-white/10 dark:bg-white/[0.04]">
              <FaEnvelope className="text-emerald-500" />
              <span className="text-sm text-black/70 dark:text-white/70">
                noorelafifi889@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/60 px-4 py-3 backdrop-blur
                            dark:border-white/10 dark:bg-white/[0.04]">
              <FaMapMarkerAlt className="text-emerald-500" />
              <span className="text-sm text-black/70 dark:text-white/70">
                Palestine
              </span>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div>
          <h4 className="mb-3 font-semibold text-black/80 dark:text-white/80">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-black/60 dark:text-white/60">
            <li>
              <a
                href="#about"
                className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h4 className="mb-3 font-semibold text-black/80 dark:text-white/80">
            Connect With Me
          </h4>

          <p className="mb-4 text-sm text-black/60 dark:text-white/60">
            Let’s connect and create something amazing together.
          </p>

          <div className="flex gap-3">
            {[
              { href: "https://github.com/", Icon: FaGithub },
              { href: "https://linkedin.com/", Icon: FaLinkedinIn },
              { href: "https://twitter.com/", Icon: FaTwitter },
              { href: "mailto:noorelafifi889@gmail.com", Icon: FaEnvelope },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer">
                <div
                  className="rounded-xl border border-black/10 bg-white/60 p-3 text-black/70 backdrop-blur
                             hover:bg-emerald-400/15 hover:text-emerald-700 transition
                             dark:border-white/10 dark:bg-white/[0.05] dark:text-white/80
                             dark:hover:bg-emerald-400/20 dark:hover:text-emerald-200"
                >
                  <Icon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-black/10 py-5 text-center text-sm text-black/50 dark:border-white/10 dark:text-white/50">
        © {new Date().getFullYear()} Noor. All rights reserved.
      </div>
    </footer>
  );
}