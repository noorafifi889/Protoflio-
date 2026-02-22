import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
  </svg>
);

export default function SocialFloatingMenu() {
  return (
    <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-5 rounded-full border border-emerald-400/20 bg-black/40 px-6 py-3 backdrop-blur-md transition-all">
      
      {/* GitHub */}
      <Link 
        href="https://github.com/noorafifi889" 
        target="_blank" 
        className="text-white/70 hover:text-white hover:scale-110 transition-all"
      >
        <Github size={20} />
      </Link>

      {/* LinkedIn */}
      <Link 
        href="https://www.linkedin.com/in/noor-al-afifi-168483399/" 
        target="_blank" 
        className="text-white/70 hover:text-blue-400 hover:scale-110 transition-all"
      >
        <Linkedin size={20} />
      </Link>

      {/* X (Twitter) */}
      <Link 
        href="https://x.com/your-username" 
        target="_blank" 
        className="text-white/70 hover:text-white hover:scale-110 transition-all"
      >
        <XIcon />
      </Link>

      {/* Instagram */}
      <Link 
        href="https://instagram.com/your-username" 
        target="_blank" 
        className="text-white/70 hover:text-pink-500 hover:scale-110 transition-all"
      >
        <Instagram size={20} />
      </Link>

    </div>
  );
}