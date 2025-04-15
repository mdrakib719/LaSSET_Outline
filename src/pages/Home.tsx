
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { ResearchHighlights } from "@/components/home/ResearchHighlights";
import { QuickLinks } from "@/components/home/QuickLinks";
import { LatestNews } from "@/components/home/LatestNews";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Introduction />
      <ResearchHighlights />
      <QuickLinks />
      <LatestNews />
    </div>
  );
}
