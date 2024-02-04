import Sidebar from "@/components/dashboard/sidebar";
import { useState } from "react";
import Head from "next/head";
import { roboto } from "@/config";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Layout({ children, freeTrial }) {
  const [activeSideBar, setActiveSideBar] = useState(false);
  const [activeNotification, setActiveNotification] = useState(true);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Head>
        <title>Dashboard</title>
      </Head>
      <button
        className={`absolute left-0 ${
          activeSideBar ? "hidden" : "block"
        } p-3 sm:hidden top-[10%] outline-none border-none bg-[#11182a] rounded-tr-xl rounded-br-xl`}
        onClick={() => {
          setActiveSideBar(activeSideBar ? false : true);
          console.log(activeSideBar);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#f59e0b"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M0,3.5c0-.83,.67-1.5,1.5-1.5H17.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5Zm17.5,14.5H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H17.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Zm5-8H6.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H22.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z" />
        </svg>
      </button>
      <Sidebar active={activeSideBar} setActiveSideBar={setActiveSideBar} />
      <main className="w-full h-screen md:px-12 px-4 overflow-hidden overflow-y-scroll bg-gray-100">
        {freeTrial && (
          <div
            className={`bg-green-50 flex justify-between items-center border-solid border-green-500 text-bold px-4 transition-all rounded-md text-sm text-green-600 mt-2 ${
              roboto.className
            } ${activeNotification ? "h-auto opacity-1" : "h-0 opacity-0"}`}
          >
            <p>Free Trial Activated for 1 Day. Enjoy!</p>
            <CancelIcon
              fontSize="small"
              className="text-red-400 cursor-pointer"
              onClick={() => setActiveNotification(false)}
            />
          </div>
        )}

        {children}
      </main>
    </div>
  );
}
