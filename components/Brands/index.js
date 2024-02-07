"use client";
import React from "react";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 text-lg">
          <div className="grid grid-cols-4 items-center justify-center gap-7.5 lg:gap-12.5 xl:gap-29">
            <div className="flex items-center flex-col"><span className="font-bold">100k+ </span><p className="text-center">Leads Extracted</p></div>
            <div className="flex items-center flex-col"><span className="font-bold">1000+ </span><p className="text-center">Happy Users</p></div>
            <div className="flex items-center flex-col"><span className="font-bold">100+ </span><p className="text-center">websites built with AI</p></div>
            <div className="flex items-center flex-col"><span className="font-bold">#1 </span><p className="text-center">Lead Generation Tool</p></div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
