import { mont, roboto } from "@/config";
import CheckIcon from "@mui/icons-material/Check";

export default function AIWriter() {
  let vidContainerChild = {
    position: "relative",
    paddingTop: "25px",
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
    <div className={"pb-20 lg:px-12 px-4 relative " + mont.className}>
      <h2 className="heading">
        Did you Forget Our{" "}
        <span className="text-amber-500">AI writing tools</span> ?
      </h2>
      <div
        className={
          "flex flex-col justify-between w-[98%] mx-auto mt-8 lg:flex-row " +
          roboto.className
        }
      >
        <div className={"md:w-1/2 w-full "+mont.className} data-aos="slide-right">
          <p className="leading-loose text-lg mb-8">
            Create High converting FB posts, twitter threads and cold emails for your leads using our market leading AI writing tools which use efficient prompt engineering to give you highly efficient results.
          </p>
          <ul
            className={
              "list-none flex flex-col gap-y-8 text-lg p-0 m-0 " + mont.className
            }
          >
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              Create High converting FB Posts
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              High converting emails for selected leads
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              Create twitter threads for increased engagement
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 w-full" data-aos="zoom-in">
          <div style={vidContainerChild}>
            <video autoPlay loop muted style={video}>
              <source src="/writer-demo.mp4" />
            </video>
          </div>
        </div>
      </div>
      <img
        src="/corner-cover.png"
        className="absolute bottom-0 left-0 w-40 h-40"
      />
    </div>
  );
}
