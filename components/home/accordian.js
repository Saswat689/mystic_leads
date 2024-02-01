"use client";
import { mont } from "@/config";
import { useState } from "react";

export default function Accordion() {
  return (
    <section
      className={
        "relative z-20 overflow-hidden py-20 lg:pb-[90px] lg:pt-12 " +
        mont.className
      }
    >
      <p className="text-center my-0 py-0 font-[900] uppercase mb-4 tracking-wider md:text-[5rem] text-[3rem] bg-gradient-to-b from-amber-600 via-amber-400 to-amber-100 opacity-[0.5] text-transparent bg-clip-text">
        FAQ
      </p>
      <h2 className="heading pt-0 md:mt-[-2.4rem] mt-[-1.8rem]">Frequently Asked Questions</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-y-3 gap-x-4 w-full mt-12 px-4 md:px-0">
        <AccordionItem
          header="Is 10 Day Money Back Guarantee True? Is it a fad?"
          text="Yes the guarantee's true. We are so confident in our tool that if you don't like it then you can instantly contact our support and we'll get your money back within 24 hrs."
        />
        <AccordionItem
          header={`What does "AI" website builder mean?`}
          text="It means you can generate components and build websites with just a few AI prompts. Drag and drop them to your workarea and then export your websites."
        />
        <AccordionItem
          header="How many leads can I generate?"
          text="Technically you can generate unlimited number of leads but there are systems in place to help prevent spam."
        />
        <AccordionItem
          header="Can I export unlimited leads?"
          text="Yes there is no limit to the number of leads you can export. Just create a campaign, save leads and export them in a convenient excel format."
        />
        <AccordionItem
          header="What do I get in performance reports?"
          text="Our tool has the power to generate a detailed SEO report based on a large number of criteria such as meta tags, keywords, speed, FCP, LCP, scripts and file optimizations and much more. Everything you need to improve your site."
        />
        <AccordionItem
          header="Can you send SMS and generate emails?"
          text="Right now you can't. But we are working on the updates and it should be automatically added to the tool within a month and you don't even have to pay for anything!"
        />
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1000"
          height="800"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="rounded-lg py-2 px-4 shadow-md bg-white cursor-pointer hover:shadow-xl transition-all">
      <button
        className={`flex w-full items-center gap-x-12 bg-transparent text-gray-800 border-none outline-none`}
        onClick={handleToggle}
      >
        <svg
          className={`text-amber-600 duration-200 ease-in-out ${
            active ? "rotate-180" : ""
          }`}
          width="17"
          height="10"
          viewBox="0 0 17 10"
          fill="rgb(217,119,6)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
            fill=""
            stroke=""
          />
        </svg>

        <h3 className="text-lg font-semibold">{header}</h3>
      </button>

      <div
        className={`md:pl-[62px] duration-200 transition-all ${
          active ? "h-auto opacity-1" : "h-0 opacity-0"
        }`}
      >
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
