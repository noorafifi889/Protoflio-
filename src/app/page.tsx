import About from "@/component/About";
import Header from "@/component/Header";
import HeroSection from "@/component/HereSection";
import SkillsSection from "@/component/SkillsSection";
import ProjectSection from "@/component/projects/ProjectSection";
import ServicesSection from "@/component/service/Services";

import Image from "next/image";

export default function Home() {
  return (
   <div   className="  ">
    <Header />
    <HeroSection />
    <About />
<SkillsSection />
<ProjectSection />
<ServicesSection />
   </div>
  );
}
