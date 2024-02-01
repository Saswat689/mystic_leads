import { mont, roboto } from "@/config";
import CheckIcon from "@mui/icons-material/Check";

export default function Fact() {

  return (
    <div className={"px-4 pb-12 md:pb-0 " + mont.className}>
        <div className="md:px-20 px-4">
      <p className="text-center my-0 py-0 font-[900] uppercase mb-4 tracking-wider md:text-[12rem] text-[5rem] bg-gradient-to-b from-amber-600 via-amber-400 to-amber-100 opacity-20 text-transparent bg-clip-text">
        FACT
      </p>
      <h2 className="heading mt-[-2rem] pt-0">
        45% Business Owners <br /> are NOT running <span className="text-amber-500">AD campaigns</span>
      </h2>
      <p className="md:px-20 md:text-lg text-sm md:text-center">Most business owners are not taking advantage of new forms of advertisement and revenue generation activities and hence miss out on a TON of sales. Can you help them?</p>
      </div>
      <div className="flex flex-col justify-between w-full mt-8 md:ml-4 lg:flex-row">
        <div data-aos="fade-right">
          <ul
            className={
              "list-none flex flex-col gap-y-8 text-lg p-0 m-0 " + mont.className
            }
          >
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                <CheckIcon className="font-bold text-blue-500" />
              </span>
              Most Businesses don't have a professional website
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                <CheckIcon className="font-bold text-blue-500" />
              </span>
              Most businesses are not actively running ad campaigns and reaching out.
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                <CheckIcon className="font-bold text-blue-500" />
              </span>
              They are missing out on newer forms of advertising and targeting like google ads.
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                <CheckIcon className="font-bold text-blue-500" />
              </span>
              Increasing brand awareness is challenging and many don't even have a social presence
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                <CheckIcon className="font-bold text-blue-500" />
              </span>
              They don't respond to negative reviews which only hurts them
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                <CheckIcon className="font-bold text-blue-500" />
              </span>
              They don't know how to create an email list and keep customers in the loop
            </li>
            <li className="flex items-center gap-x-2">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                <CheckIcon className="font-bold text-blue-500" />
              </span>
              They are not using videos/reels to grow their audience
            </li>
          </ul>
        </div>
        <img src="/illus1.svg" data-aos="fade-left" className="md:flex hidden items-center justify-center w-full lg:w-1/2"/>
      </div>
    </div>
  );
}
