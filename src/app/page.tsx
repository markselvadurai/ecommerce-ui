import Image from "next/image";
import { SectionHeader } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { HotSection } from "./sections/HotSection";
import { Tape } from "./sections/Tape";
import { ProductSection } from "./sections/ProductSection";
export default function Home() {
  return (
    <div>
      
      <HeroSection />
      <SectionHeader />
      <HotSection />
      <Tape />
      <ProductSection />
    </div>
  );
}
