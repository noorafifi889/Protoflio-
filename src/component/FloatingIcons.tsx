
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaGithub, FaGlobe, FaLinkedinIn } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";
export function FloatingIcons() {
  const className ="text-black/20 dark:text-white/20"
  const icons = [
    { Icon: FaFacebookF, className: className, style: { top: "60px", left: "30%" }, delay: 0.0 },
    { Icon: FaGlobe, className: className, style: { top: "120px", left: "40%" }, delay: 0.3 },
    { Icon: FaInstagram, className: className, style: { top: "60px", left: "50%" }, delay: 0.6 },
    { Icon: FaGithub, className: className, style: { top: "110px", left: "20%" }, delay: 0.9 },
        { Icon: FaLinkedinIn, className: className, style: { top: "120px", left: "10%" }, delay: 0.9 },

  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {icons.map(({ Icon, className, style, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={style as React.CSSProperties}
          // initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            // opacity: [0.2, 0.75, 0.2],
            y: [0, -18, 0],
            x: [0, 10, 0],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon className={`text-[22px] drop-shadow ${className}`} />
        </motion.div>
      ))}
    </div>
  );
}