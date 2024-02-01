import { roboto } from "@/config";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import GroupsIcon from "@mui/icons-material/Groups";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Link from "next/link";
import BrushIcon from "@mui/icons-material/Brush";
import { useRouter } from "next/router";
import { useState } from "react";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const bgGradient = {
  background: "#0F2027" /* fallback for old browsers */,
  background:
    "-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)" /* Chrome 10-25, Safari 5.1-6 */,
  background:
    "linear-gradient(to right, #2C5364, #203A43, #0F2027)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
};

const textClassNameResponsive = `hidden md:block text-start flex items-center justify-center w-full h-full`;

export default function Sidebar({ active, setActiveSideBar }) {
  let router = useRouter();
  return (
    <nav
      className={
        `h-full bg-[#11182a] ${
          active ? "navbar__open" : "navbar__hide"
        } overflow-y-scroll min-w-fit md:w-[25%] px-0 pl-0 py-4 text-white ` +
        roboto.className
      }
    >
      <div className="hidden lg:flex items-start justify-center w-full">
        <img
          src="/logo2.jpeg"
          className="w-[110px] cursor-pointer"
          onClick={() => router.push("/dashboard")}
        />
      </div>
      <ul className="flex flex-col items-start justify-center pb-8 p-2 lg:pr-12 lg:pl-8 ml-0 text-sm list-none gap-y-8">
        <button
          className={`${
            active ? "block" : "hidden"
          } p-3 sm:hidden aspect-square flex items-start justify-center outline-none border-none bg-[#11182a]`}
          onClick={() => {
            setActiveSideBar(active ? false : true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#f59e0b"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path d="M0,3.5c0-.83,.67-1.5,1.5-1.5H17.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5Zm17.5,14.5H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H17.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Zm5-8H6.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H22.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z" />
          </svg>
        </button>
        <Link
          href="/dashboard/leads/yelp"
          className="flex items-center justify-center py-2 pr-0 text-white no-underline transition-all cursor-pointer w-full md:pr-2 lg:pr-2 gap-x-4 group hover:text-gray-200"
        >
          <TravelExploreIcon
            style={{ fontSize: 30 }}
            className="transition-all text-amber-400 group-hover:text-gray-200"
          />
          <span className={textClassNameResponsive}>Find Yelp Leads</span>
        </Link>

        <Link
          href="/dashboard/leads/google"
          className="flex items-center justify-center py-2 pr-0 text-white no-underline transition-all cursor-pointer w-full md:pr-2 lg:pr-2 gap-x-4 group hover:text-gray-200"
        >
          <ImageSearchIcon
            style={{ fontSize: 30 }}
            className="transition-all text-amber-400 group-hover:text-gray-200"
          />
          <span className={textClassNameResponsive}>Find Google Leads</span>
        </Link>

        <Link
          href="/dashboard/campaigns"
          className="flex items-center justify-center py-2 pr-0 text-white no-underline transition-all cursor-pointer w-full md:pr-2 lg:pr-2 gap-x-4 group hover:text-gray-200"
        >
          <GroupsIcon
            style={{ fontSize: 30 }}
            className="transition-all text-amber-400 group-hover:text-gray-200"
          />
          <span className={textClassNameResponsive}>Lead Campaigns</span>
        </Link>

        <Link
          href="/dashboard/report"
          className="flex items-center justify-center py-2 pr-0 text-white no-underline transition-all cursor-pointer w-full md:pr-2 lg:pr-2 gap-x-4 group hover:text-gray-200"
        >
          <TextSnippetIcon
            style={{ fontSize: 30 }}
            className="transition-all text-amber-400 group-hover:text-gray-200"
          />
          <span className={textClassNameResponsive}>Generate SEO Report</span>
        </Link>
        <Link
          href="/dashboard/website-builder"
          className="flex items-center justify-center py-2 pr-0 text-white no-underline transition-all cursor-pointer w-full md:pr-2 lg:pr-2 gap-x-4 group hover:text-gray-200"
        >
          <BrushIcon
            style={{ fontSize: 30 }}
            className="transition-all text-amber-400 group-hover:text-gray-200"
          />
          <span className={textClassNameResponsive}>AI website builder</span>
        </Link>
        <Link
          href="/dashboard/aiwriter"
          className="flex items-center justify-center py-2 pr-0 text-white no-underline transition-all cursor-pointer w-full md:pr-2 lg:pr-2 gap-x-4 group hover:text-gray-200"
        >
          <AutoFixHighIcon
            style={{ fontSize: 30 }}
            className="transition-all text-amber-400 group-hover:text-gray-200"
          />
          <span className={textClassNameResponsive}>AI Writer</span>
        </Link>
      </ul>
    </nav>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}
