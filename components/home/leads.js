import { mont, roboto } from "@/config";

export default function Leads() {
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
    <div
    id="tool"
      className={
        "md:p-12 p-8 bg-blue-50 rounded-2xl mb-8 md:mx-8 mx-2 relative " +
        mont.className
      }
    >
      <h2 className="heading">
        Don't Forget you can generate{" "}
        <span className="text-amber-500">Unlimited</span> <br />
        <span className="text-amber-500">Google Leads</span> and{" "}
        <span className="text-amber-500">Yelp Leads</span> lightning fast.
      </h2>
      <div
        className={
          "flex flex-col justify-between gap-x-8 w-full mt-8 lg:flex-row " +
          roboto.className
        }
      >
        <div className="md:w-1/2 w-full">
          <div style={vidContainerChild}>
            <video autoPlay loop muted style={video}>
              <source src="/leads-demo.mp4" />
            </video>
          </div>
        </div>

        <div className="md:w-1/2 w-full">
          <p className={"leading-loose text-lg mb-8 " + mont.className}>
            Lightning Fast unlimited lead generation. That's right! No other
            software guarantees you <span className="font-bold">unlimited leads</span> for one time subscriptions.
            Wanna know how? <br />
            We started Mystic Leads as a way to solve all problems a common
            agency owner might face such as finding clients, creating auto AI
            posts and generating performance reports. <br />
            We wanted it to be free so be built a business model that sustains
            on such a system. <br />
            We published it and people loved it and our purpose was fulfilled.{" "}
            <br />
          </p>
        </div>
      </div>
      <img
        src="/corner-cover.png"
        className="absolute bottom-0 left-0 md:w-40 md:h-40 w-20 h-20"
      />
    </div>
  );
}
