import { roboto, mont } from "@/config";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SpeedIcon from "@mui/icons-material/Speed";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GroupsIcon from "@mui/icons-material/Groups";
import Price from "./price";

export default function Services() {
  return (
    <>
    <div className="md:p-8 p-4 py-20 bg-blue-50" id="solution-sec">
      <h2 className={"heading " + mont.className}>
        Here's How Mystic Leads <br />{" "}
        <span className="text-amber-500">Solves Your Problem</span>
      </h2>

      <p className={"text-center leading-para "+mont.className}>
        From finding high quality, verified leads to building websites with the
        power of AI, Mystic Leads is <br /> everything a local marketor or
        agency owner would ever need.
      </p>

      <div className="grid gap-4 md:p-8 p-3 mt-12 lg:grid-cols-3 rounded-xl bg-amber-100">
        <div data-aos="fade-up" data-aos-delay="50" className={"bg-white group border-anim2 hover:shadow-md cursor-pointer transition-all rounded-xl p-4 " + roboto.className}>
          <div className="bg-amber-50 group-hover:bg-blue-50 transition-all rounded-full p-2 w-[100px] h-[100px] flex justify-center items-center mx-auto">
            <QueryStatsIcon
              className="group-hover:text-blue-500 transition-all text-amber-500"
              style={{ fontSize: 60 }}
            />
          </div>
          <h3 className="font-semibold text-center">Find Qualified Leads</h3>
          <p className="text-sm leading-loose text-center text-gray-600">
            Find hundreds of qualified leads with contact details and save them
            or later export them.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className={"bg-white group border-anim2 hover:shadow-md cursor-pointer transition-all rounded-xl p-4 " + roboto.className}>
          <div className="bg-amber-50 group-hover:bg-blue-50 transition-all rounded-full p-2 w-[100px] h-[100px] flex justify-center items-center mx-auto">
            <WebAssetIcon className="group-hover:text-blue-500 transition-all text-amber-500" style={{ fontSize: 60 }} />
          </div>
          <h3 className="font-semibold text-center">
            Create websites with the power of AI
          </h3>
          <p className="text-sm leading-loose text-center text-gray-600">
            Easily create websites for your clients inside our platform. No code
            drag and drop website builder included for free.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="150" className={"bg-white group border-anim2 hover:shadow-md cursor-pointer transition-all rounded-xl p-4 " + roboto.className}>
          <div className="bg-amber-50 group-hover:bg-blue-50 transition-all rounded-full p-2 w-[100px] h-[100px] flex justify-center items-center mx-auto">
            <SpeedIcon className="group-hover:text-blue-500 transition-all text-amber-500" style={{ fontSize: 60 }} />
          </div>
          <h3 className="font-semibold text-center">
            SEO and performance reports
          </h3>
          <p className="text-sm leading-loose text-center text-gray-600">
            Quickly generate full length SEO and performance report for any
            website that includes AI based scores and SEO improvements.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="50" className={"bg-white group border-anim2 hover:shadow-md cursor-pointer transition-all rounded-xl p-4 " + roboto.className}>
          <div className="bg-amber-50 group-hover:bg-blue-50 transition-all rounded-full p-2 w-[100px] h-[100px] flex justify-center items-center mx-auto">
            <EmailIcon className="group-hover:text-blue-500 transition-all text-amber-500" style={{ fontSize: 60 }} />
          </div>
          <h3 className="font-semibold text-center">AI Cold Email Creation</h3>
          <p className="text-sm leading-loose text-center text-gray-600">
            Select your saved prospect and your service and quickly write a high
            converting email for him with the power of AI
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className={"bg-white group border-anim2 hover:shadow-md cursor-pointer transition-all rounded-xl p-4 " + roboto.className}>
          <div className="bg-amber-50 group-hover:bg-blue-50 transition-all rounded-full p-2 w-[100px] h-[100px] flex justify-center items-center mx-auto">
            <FacebookIcon className="group-hover:text-blue-500 transition-all text-amber-500" style={{ fontSize: 60 }} />
          </div>
          <h3 className="font-semibold text-center">
            Create FB and Twitter Posts with AI
          </h3>
          <p className="text-sm leading-loose text-center text-gray-600">
            Create engaging Facebook and Twitter posts for leads to boost
            conversions with the power of AI
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="150" className={"bg-white group border-anim2 hover:shadow-md cursor-pointer transition-all rounded-xl p-4 " + roboto.className}>
          <div className="bg-amber-50 group-hover:bg-blue-50 transition-all rounded-full p-2 w-[100px] h-[100px] flex justify-center items-center mx-auto">
            <GroupsIcon className="group-hover:text-blue-500 transition-all text-amber-500" style={{ fontSize: 60 }} />
          </div>
          <h3 className="font-semibold text-center">
            Effortlessly Save Your Leads
          </h3>
          <p className="text-sm leading-loose text-center text-gray-600">
            Save your leads to campaigns and export them. Find the lead's
            painpoints and offer your services accordingly
          </p>
        </div>
      </div>
    </div>
    <Price />
    </>
  );
}
