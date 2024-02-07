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
import Head from "next/head";

export default function Home() {
  return (
    <RootLayout>
       <Head>
        <title>Find Clients For Your Agency and Build Websites</title>
        <meta
          name="description"
          content="Your search for a lead generation and client closing tool ends here. Mystic Leads allows you to contact unlimited businesses and websites with its special AI powered tools."
          key="desc"
        />
        <meta
          property="og:title"
          content="The Only Tool You Need to Grow your agency in 2024"
        />
        <meta
          property="og:description"
          content="Your search for a lead generation and client closing tool ends here. Mystic Leads allows you to contact unlimited businesses and websites with its special AI powered tools."
        />
        <meta property="og:image" content="/og-img.png" />
      </Head>
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
