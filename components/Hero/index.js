import Link from "next/link";
import { Player } from "video-react";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥Mystic Leads - Find Clients and Close More Deals
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Lead Generation For {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Digital Agencies
                </span>
              </h1>
              <p>
                The All in one tool for lead generation, website building and
                client closing built into the cloud. Grow your digital agency
                with our lead generation and client closing tools, build
                websites with AI and much more.
              </p>

              <div className="mt-4">
              <Link
                  href="/auth/register"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Quick Start (Free)
                </Link>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block relative">
              <img src="/images/shape/shape-01.png" className="w-20 h-full absolute top-0 left-[-5rem]"/>
              <Player poster="/demo-cover.png">
                <source src="/demo.mp4" />
              </Player>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
