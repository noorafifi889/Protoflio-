"use client";

import React from "react";
import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { FaEnvelope, FaGithub, FaGlassMartiniAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between gap-6">
      <div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          Let’s Connect
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/60">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
        </p>
      </div>

      <div className="grid gap-4">
        <InfoRow
          icon={<HiOutlineEnvelope className="h-5 w-5" />}
          label="Email"
          value="noorelafifi889@gmail.com"
        />
         <InfoRow
          icon={<HiOutlineEnvelope className="h-5 w-5" />}
          label="Phone"
          value="+970567186633"
        />
        <InfoRow
          icon={<HiOutlineMapPin className="h-5 w-5" />}
          label="Location"
          value="Palestine"
        />
      </div>

      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          Connect with me
        </p>
 <div className="mt-3 flex gap-3">
  <a href="https://github.com/noorafifi889" target="_blank" rel="noopener noreferrer">
    <SocialIcon Icon={FaGithub} />
  </a>

  <a href="https://www.linkedin.com/in/noor-al-afifi-168483399" target="_blank" rel="noopener noreferrer">
    <SocialIcon Icon={FaLinkedinIn} />
  </a>

  <a href="https://twitter.com/noor-afifi" target="_blank" rel="noopener noreferrer">
    <SocialIcon Icon={FaTwitter} />
  </a>

  <a href="mailto:noorelafifi889@gmail.com">
    <SocialIcon Icon={FaEnvelope} />
  </a>
</div>
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl  p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-700 dark:text-emerald-200">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-slate-500 dark:text-white/50">
          {label}
        </p>
        <p className="text-sm font-medium text-slate-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

function SocialIcon({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <button
      type="button"
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/5 bg-white/60 text-slate-700 transition hover:-translate-y-0.5 hover:border-emerald-400/30 hover:text-emerald-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70 dark:hover:text-emerald-200"
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}