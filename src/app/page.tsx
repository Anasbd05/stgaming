import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Pricing />
      <Faqs />

    </div>
  );
}
