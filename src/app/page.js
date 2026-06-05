import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ThreeFeatures from "@/components/ThreeFeatures";


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
