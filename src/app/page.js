import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ThreeFeatures from "@/components/ThreeFeatures";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">

    <HeroSection></HeroSection>
    <FeaturesSection></FeaturesSection>
    <ThreeFeatures></ThreeFeatures>
    {/* <StatsSection></StatsSection> */}

    </div>
  );
}
