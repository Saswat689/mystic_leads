import { mont } from "@/config";
import CheckIcon from "@mui/icons-material/Check";

export default function Problems() {

  return (
    <div className={"py-20 px-4 bg-blue-50 " + mont.className} id="problem-sec">
      <p className="text-center my-0 py-0 font-[900] uppercase mb-4 md:text-2xl text-lg text-amber-500">
        Mystic Leads
      </p>
      <h2 className="heading">
        Solves All Of These Problems For Every Digital <br />
        Agency, Local Marketer, and Entrepreneur:
      </h2>
      <div className="flex flex-col gap-12 justify-between w-full mt-8 lg:flex-row">
        <img src="/book-mock.png" data-aos="fade-right" className="md:w-[40%] w-full bg-cover bg-blue-50 bg-center"/>
        <div data-aos="fade-left">
          <ul
            className={
              "list-none flex flex-col gap-y-8 text-lg m-0 p-0 " + mont.className
            }
          >
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              Generate High Quality Leads with phone numbers and emails with our
              AI technology
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              Unlimited Lead Generation
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              Create websites in seconds with the power of AI
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              Generate SEO and performance reports with the click of a button.
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              Unlimited AI writing tools (FB Posts, Twitter Posts, Cold Emails)
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              Generate High Converting Emails tailored to your lead's painpoints
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                <CheckIcon className="font-bold text-amber-500" />
              </span>
              And much more...
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
