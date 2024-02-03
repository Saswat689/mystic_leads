import { mont, roboto } from "@/config";
import Price from "./price";

export default function Performance() {
  let vidContainerChild = {
    position: "relative",
    paddingBottom: "67.5%",
    height: 0,
  };

  let video = {
    boxSizing: "border-box",
    background:
      "url(http://i.stack.imgur.com/zZNgk.png) center center no-repeat",
    backgroundSize: "contain",
    padding: "11.9% 15.5% 14.8%",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className={"md:py-20 lg:px-12 py-8 md:my-0 " + mont.className}>
      <div className={`md:py-20 bg-[url('/blob-scene-haikei.svg')] bg-cover rounded-lg bg-center bg-no-repeat`}>
        <h2 className="heading">
          Full <span className="text-amber-500">SEO</span> and{" "}
          <span className="text-amber-500">Performance</span> Optimization Tools
        </h2>
        <p
          className={
            "w-[90%] leading-loose text-center mx-auto " + mont.className
          }
        >
          Get detailed SEO analysis and performance/speed reports with mystic
          leads easy to use seo optimization tool. Never worry about spending a
          lot of money on SEO experts ever again
        </p>
        <div
          className={
            "flex flex-col justify-between gap-x-8 w-full lg:flex-row " +
            roboto.className
          }
        >
          <div className="md:w-3/4 w-full mx-auto" data-aos="zoom-in">
            <div style={vidContainerChild}>
              <video autoPlay loop muted style={video}>
                <source src="/performance-demo.mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
      <Price />
      </div>
    </div>
  );
}
