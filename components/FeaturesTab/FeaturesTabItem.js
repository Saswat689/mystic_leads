import Link from "next/link";
import React from "react";

const FeaturesTabItem = ({ featureTab }) => {
  const { title, desc1, desc2, image } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12 mb-8">{desc2}</p>
          <Link
            href="/auth/register"
            className="inline-flex items-center gap-2.5 rounded-full bg-black px-8 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
          >
            Quick Start
          </Link>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <img src={image} className="w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
