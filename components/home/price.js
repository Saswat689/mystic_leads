import { mont } from "@/config";
import Link from "next/link";

export default function Price() {
  console.log(mont.className);
  return (
    <div
      className={
        "bg-[#fffbeb] border-solid border-blue-500 flex md:flex-row overflow-hidden flex-col justify-between md:mt-12 mx-auto md:w-3/4 w-[92%] p-8 rounded-2xl " +
        mont.className
      }
    >
      <img src="/pricing-cover.png" className="md:w-1/2 w-full h-auto" />
      <div
        className={
          "text-center w-full text-lg mt-8 md:mt-0 font-[700] text-gray-700"
        }
      >
        <p className="text-amber-500 font-[900] py-0 my-0 pb-1">Mystic Leads</p>
        <p className="py-0 my-0 line-through pb-1">Normal Price: <span className="text-blue-400">$67/monthly</span></p>
        <p className=" py-0 my-0 pb-3 text-amber-400 md:text-2xl text-lg">
          45% discount Full Edition
        </p>
        <h3 className="py-0 font-[900] pb-2 my-0 text-amber-500">
          <span className="md:text-5xl text-2xl">ONLY $37</span>
          <span>/month</span>
        </h3>
        <p className="text-gray-500 pb-4 mb-4">
          <span className="text-blue-400">Limited Time Free Access</span> | No card required
        </p>
        <Link
          className="cursor-pointer glow-on-hover border-anim bg-blue-400 hover:text-white hover:bg-blue-500 hover:font-[900] transition-all text-slate-100 font-semibold no-underline mt-4 md:text-xl text-sm px-12 py-3 md:px-20 md:py-4 uppercase"
          href="/auth/register"
        >
          Start Free
        </Link>
      </div>
    </div>
  );
}
