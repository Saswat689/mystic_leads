import { roboto, mont } from "@/config";
import SpeedIcon from "@mui/icons-material/Speed";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";

export default function StepsSection() {
  return (
    <div className="md:p-8 p-2" id="steps-sec">
      <p className="py-0 my-0 text-center">
        <SpeedIcon className="text-amber-500" style={{ fontSize: 60 }} />
      </p>
      <h2 className={"heading " + mont.className}>
        Fastest Way to Generate Leads <br /> For Your <span className="text-amber-500">Digital Agency</span>
      </h2>

      <p className={"leading-para "+mont.className}>
        Enter your niche or keyword and location and get instant access to
        hundreds of qualified leads <br /> to market your services. Generate SEO
        audit reports for them and market them on the basis of their pain
        points.
      </p>

      <div className="flex flex-col gap-4 md:p-8 p-3 mt-12 lg:flex-row rounded-xl bg-amber-100">
        <div data-aos="fade-up" className={"bg-white border-anim2 group hover:shadow-md cursor-pointer transition-all rounded-xl p-4 lg:w-1/3 " + roboto.className}>
          <div className="bg-amber-50 rounded-full group-hover:bg-blue-50 p-2 w-[100px] h-[100px] flex justify-center items-center mx-auto">
            <QueryStatsIcon
              className="group-hover:text-blue-500  text-amber-500 transition-all"
              style={{ fontSize: 60 }}
            />
          </div>
          <h3 className="font-semibold text-center">
            Generate qualified Leads based on categories and location
          </h3>
          <p className="text-sm leading-loose text-center text-gray-600">
            High quality leads can easily be searched for in the dashboard ready
            to be contacted
          </p>
          <p
            className={
              "mt-20 font-bold text-3xl text-center text-amber-500 " +
              mont.className
            }
          >
            Step 1
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="50"  className={"bg-white group border-anim2 hover:shadow-md cursor-pointer transition-all rounded-xl p-4 lg:w-1/3 " + roboto.className}>
          <div className="bg-amber-50 group-hover:bg-blue-50 transition-all rounded-full p-2 w-[100px] h-[100px] flex justify-center items-center mx-auto">
            <PictureAsPdfIcon
              className="group-hover:text-blue-500 text-amber-500 transition-all"
              style={{ fontSize: 60 }}
            />
          </div>
          <h3 className="font-semibold text-center">
            Create reports and find their painpoints
          </h3>
          <p className="text-sm leading-loose text-center text-gray-600">
            Generate a pdf report consisting of an SEO audit of their
            website/facebook url and further painpoints you can use to solve
            their problems.
          </p>
          <p
            className={
              "mt-20 font-bold text-3xl text-center text-amber-500 " +
              mont.className
            }
          >
            Step 2
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className={"bg-white group border-anim2 hover:shadow-md cursor-pointer transition-all rounded-xl p-4 lg:w-1/3 " + roboto.className}>
          <div className="bg-amber-50 group-hover:bg-blue-50 transition-all rounded-full p-2 w-[100px] h-[100px] flex justify-center items-center mx-auto">
            <MarkChatReadIcon
              className="group-hover:text-blue-500 text-amber-500 transition-all"
              style={{ fontSize: 60 }}
            />
          </div>
          <h3 className="font-semibold text-center">
            Contact the business owners with AI
          </h3>
          <p className="text-sm leading-loose text-center text-gray-600">
            Write High converting personalised emails with AI that highlight
            their painpoint and struggles. Let them know you've done your
            homework.
          </p>
          <p
            className={
              "mt-20 font-bold text-3xl text-center text-amber-500 " +
              mont.className
            }
          >
            Step 3
          </p>
        </div>
      </div>
    </div>
  );
}
