import { mont } from "@/config";
import Link from "next/link";

export default function WaitingFor() {
  return (
    <div
      className={
        "md:w-[90%] w-full rounded-md md:p-8 py-8 bg-blue-50 mx-auto my-12 " +
        mont.className
      }
    >
      <h2 className="heading pb-4">What Are You Waiting For?</h2>
      <p className="leading-para font-semibold text-sm md:text-lg leading-[2rem] mb-4 text-center">
        You've scrolled this far only to find out how mystic leads can help you
        find more clients for your agency. <br /> And you are probably wondering
        if the investment's worth it? Well we shouldn't answer that question but
        our 1000+ users spread across 15 countries globally could. <br /> Sign
        up now for mystic leads and get a straight{" "}
        <span className="text-amber-500">47% discount</span> on a HUGE value
        monthly deal that you would never regret. <br /> Get your{" "}
        <span className="text-amber-500">money back within 24 hrs</span> if you
        aren't satisfied.
      </p>
      <div className="w-full flex justify-center">
        <Link
          className="primary-btn mt-4 md:text-lg text-sm px-8 py-3 rounded-full md:px-16 md:py-2 uppercase mx-auto"
          href="/auth/register"
        >
          Quick Start
        </Link>
      </div>
    </div>
  );
}
