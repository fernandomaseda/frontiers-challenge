import { Logo } from "@/components/Logo";
import { AppBanner } from "@/modules/AppBanner";
import { Hero } from "@/modules/Hero";
import { HowToStart } from "@/modules/HowToStart";
import { SearchBlock } from "@/modules/SearchBlock";
import { WhoWeAre } from "@/modules/WhoWeAre";
import { WhyFrontiers } from "@/modules/WhyFrontiers";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col justify-center pt-2 gap-8 md:gap-16 lg:gap-20">
      <Hero />
      <WhyFrontiers />
      <SearchBlock />
      <HowToStart />
      <WhoWeAre />
      <Logo />
      <AppBanner />
    </main>
  );
}
