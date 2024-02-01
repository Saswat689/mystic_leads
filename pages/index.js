import HeroSection from "@/components/home/hero";
import ResponsiveAppBar from "@/components/home/navbar";
import Problems from "@/components/home/problem";
import StepsSection from "@/components/home/steps";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import Fact from "@/components/home/fact";
import Solution from "@/components/home/solution";
import Problem2 from "@/components/home/problem2";
import Services from "@/components/home/services";
import { useState } from "react";
import Testimonials from "@/components/home/testimonials";
import Website from "@/components/home/website";
import Leads from "@/components/home/leads";
import Performance from "@/components/home/performance";
import Price from "@/components/home/price";
import Footer from "@/components/home/footer";
import Head from "next/head";
import AIWriter from "@/components/home/aiwriter";
import Accordion from "@/components/home/accordian";
import WaitingFor from "@/components/home/waitingfor";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Page({ user }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const { data: session, status } = useSession();

  console.log(session, status);

  const [appBarActive, setAppBarActive] = useState(false);

  return (
    <>
      <Head>
        <title>Find Clients For Your Agency and Build Websites</title>
        <meta
          name="description"
          content="Your search for a lead generation and client closing tool ends here. Mystic Leads allows you to contact unlimited businesses and build websites with its special AI powered tools."
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
      <div className="bg-gradient-to-b from-[#11182a] via-[#1d2741] to-[#2e3a5e]">
        <ResponsiveAppBar
          user={user}
          active={appBarActive}
          setActive={setAppBarActive}
        />
        <HeroSection />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#2e3a5e" fillOpacity="1" d="M0,32L48,64C96,96,192,160,288,176C384,192,480,160,576,144C672,128,768,128,864,117.3C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <div className="bg-gray-50 md:mt-[-4rem] mt-28">
        <Price />
        <StepsSection />
        <Problems />
        <Fact />
        <Solution />
        <Problem2 />
        <Services />
        <Testimonials />
        <Website />
        <Leads />
        <Performance />
        <AIWriter />
        <Accordion />
        <WaitingFor />
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );

    console.log(session);

    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    if (session) {
      return { props: { user: session.user.email || null } };
    } else {
      return { props: { user: null } };
    }
  } catch (e) {
    console.log(e);
    return {
      props: {
        user: null,
      },
    };
  }
}
