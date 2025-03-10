import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Styles from "@/components/Styles";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Styles />
      <Features />
      <Reviews />
      <Pricing />
      <Faqs />
      <Footer />

    </div>
  );
}
