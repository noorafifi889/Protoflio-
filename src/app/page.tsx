import About from "@/component/About";
import Header from "@/component/Header";
import HeroSection from "@/component/HereSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Header />
    <HeroSection />
    <About />
   </div>
  );
}
