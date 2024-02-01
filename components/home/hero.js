import { mont } from "@/config";
import SpeedIcon from "@mui/icons-material/Speed";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Player } from "video-react";

export default function HeroSection() {
  return (
    <div
      className={`text-white flex flex-col items-center text-xl ${mont.className}`}
    >
      <h1
        className={`text-amber-400 text-center ${mont.className} md:text-[3rem] text-3xl font-[900] tracking-wide uppercase`}
      >
        Find New Clients for your Agency
      </h1>
      <h2
        className={`mb-2 text-center ${mont.className} uppercase my-0 mb-8 font-[900] md:text-[2.3rem] text-2xl tracking-wide`}
      >
        With our AI powered Lead Finder
      </h2>
      <p className="text-yellow-500 tracking-[0.5rem] py-0 font-bold my-0 mb-4 text-sm md:text-xl uppercase flex items-center gap-x-4">
        <span className="flex items-center justify-center text-center">
          <SpeedIcon
            fontSize="large"
            className="flex items-center justify-center p-2"
          />
          In under 60 seconds
        </span>
      </p>
      <div className="grid grid-cols-1 py-0 mx-auto my-0 text-center text-sm md:text-lg lg:grid-cols-2 gap-y-1 lg:flex-row rounded-xl">
        <p className={`flex items-center gap-x-2 justify-center mb-0 pb-0`}>
          <CheckCircleOutlineIcon
            fontSize="large"
            className="text-yellow-500"
          />{" "}
          <span>Find Qualified/untapped Leads</span>
        </p>
        <p className="flex items-center justify-center gap-x-2 mb-0 pb-0">
          <CheckCircleOutlineIcon
            fontSize="large"
            className="text-yellow-500"
          />{" "}
          <span>Build Websites With AI</span>
        </p>
        <p className="flex items-center justify-center gap-x-2 mb-0 pb-0">
          <CheckCircleOutlineIcon
            fontSize="large"
            className="text-yellow-500"
          />{" "}
          <span>Write AI cold emails and proposals on autopilot</span>
        </p>
        <p className="flex items-center justify-center gap-x-2 mb-0 pb-0">
          <CheckCircleOutlineIcon
            fontSize="large"
            className="text-yellow-500"
          />{" "}
          <span>Generate SEO reports and export leads(unlimited)</span>
        </p>
      </div>
      <div className="md:w-[70%] w-[95%] rounded-lg h-auto mb-[-12rem] mt-8">
        <Player poster="/demo-cover.png">
          <source src="/demo.mp4" />
        </Player>
      </div>
    </div>
  );
}
