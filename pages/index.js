import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <CTA />
      <Testimonial />
      <FAQ />
      <Pricing />
  </RootLayout>
  );
}
