import { mont } from "@/config";

export default function Problem2() {

  return (
    <div className={"pt-20 px-4 " + mont.className}>
      <h2 className="mb-12 heading">
        <span className="text-amber-500">Here's the #1 Problem</span>
        <br />
        Those Struggling Businesses are Looking For{" "}
        <br className="hidden lg:block" /> Your Help{" "}
        <span className="text-blue-500">But They Don't Know You Exist.</span>
      </h2>
      <div className="flex flex-col md:px-12 lg:flex-row gap-x-8">
        <div>
          <p className="text-lg leading-[2.5rem]">
            If it happens that you're offering any of the services above (or
            even the ones not mentioned) You're in the right place at the right
            time!
            <br />
            Right now, there is a business owner somewhere <span className="font-bold">desperately hoping
            for someone</span> to come in and handle the very same thing that you offer
            as a service. The only problem? They don't know how to find you.
            <br /> As such, it only puts you in the category of local agencies
            or local marketers that continue to struggle for success. What you
            need is a solution that will SEAMLESSLY let you connect with these
            businesses without much hassle.
          </p>
        </div>
        <img src="/search.svg" className="md:w-[45%] w-full mx-auto" />
      </div>
    </div>
  );
}
