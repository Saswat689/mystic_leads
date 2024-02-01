import { mont, roboto } from "@/config";
import CheckIcon from "@mui/icons-material/Check";

export default function Website() {
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
    <div className={"py-12 lg:px-12 px-4 " + mont.className}>
      <h2 className="heading">
        And Then There's Our{" "}
        <span className="text-amber-500">Website Builder</span> <br />
        Which Can Build Sites within{" "}
        <span className="text-blue-500">minutes.</span>
      </h2>
      <div
        className={
          "flex flex-col justify-between w-[98%] mx-auto mt-8 lg:flex-row " +
          roboto.className
        }
      >
        <div className={"md:w-1/2 w-full "+mont.className} data-aos="fade-right">
          <p className="leading-loose text-lg mb-8">
            Get access to a modern AI responsive website builder which can
            magically build websites in seconds and export them. You can drag
            and drop entire pre made components for you and customize it in any
            way you want.
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
              Create components with AI
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              Drag and Drop Pre Made Components
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              Customize any way you want
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              Edit Layers, Styles and resize it to see responsiveness
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 w-full" data-aos="zoom-in">
          <div style={vidContainerChild}>
            <video autoPlay loop muted style={video}>
              <source src="/builder-demo.mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
