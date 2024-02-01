import { mont, roboto } from "@/config";
import Image from "next/image";

export default function Testimonials() {

  return (
    <div className={"py-20 px-4 " + mont.className}>
      <p className="text-center my-0 py-0 font-[900] uppercase mb-4 md:text-2xl text-lg text-blue-500">
        Testimonials
      </p>
      <h2 className="heading">
        We <span className="text-amber-500">Fixed</span> The Above Problems and <br />
        Our Users Saw <span className="text-amber-500">Success</span>
      </h2>
      <div className="mt-12 flex justify-center">
        <img src={'/testimonials.jpg'} className="w-full rounded-2xl"/>
      </div>
    </div>
  );
}
