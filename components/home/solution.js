import { mont, roboto } from "@/config";
import CheckIcon from "@mui/icons-material/Check";

export default function Solution() {
  return (
    <div
      className={"rounded-2xl md:w-[90%] w-[97%] bg-blue-50 mx-auto " + roboto.className}
    >
      <div className="flex justify-center w-full py-8 text-white px-2 md:px-0 bg-blue-500 rounded-t-2xl">
        <h2 className="heading mb-0 md:text-[2.7rem] text-[1.7rem] tracking-wider">
          Here's why its bad for them but great for you
        </h2>
      </div>
      <div className="flex flex-col justify-between p-8 lg:flex-row flex-r gap-x-8">
        <p className={"text-lg leading-8 "+mont.className} data-aos="fade-right">
          The current economic climate has opened up new opportunities for
          people just like you. Earlier it was harder to reach these businesses
          and pitch them your services, now you're just a few clicks away with
          mystic leads. These businesses are eager to get more customers or
          build their credibility if they find someone they can trust.
          <br />
          Most local businesses are tied up with day to day tasks, they might
          not even know the benefits of online marketing or video creation or
          website conversions. You can use this to your advantage and help those
          businesses while building a great business yourself.
        </p>
        <img src="/using-laptop.jpg" data-aos="fade-left" className="flex items-center justify-center w-full rounded-md lg:w-1/2" />
      </div>
      <div className="p-8">
        <h3 className={"heading text-3xl mb-8 " + mont.className}>
          Here's a snippet of the types of services these businesses are looking
          for:
        </h3>
        <ul
          className={
            "list-none grid-rows-2 grid-cols-1 grid lg:grid-rows-3 lg:grid-cols-2 text-lg gap-[2rem] " + mont.className
          }
          id="snippets"
        >
          <li className="flex items-center gap-x-2" data-aos="fade-up" data-aos-delay="50">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
              <CheckIcon className="font-bold text-blue-500" />
            </span>
            Digital Marketing/Ads
          </li>
          <li className="flex items-center gap-x-2" data-aos="fade-up" data-aos-delay="100">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
              <CheckIcon className="font-bold text-blue-500" />
            </span>
            Website Creation and SEO
          </li>
          <li className="flex items-center gap-x-2" data-aos="fade-up" data-aos-delay="120">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
              <CheckIcon className="font-bold text-blue-500" />
            </span>
            Video Creation
          </li>
          <li className="flex items-center gap-x-2" data-aos="fade-up" data-aos-delay="150">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
              <CheckIcon className="font-bold text-blue-500" />
            </span>
            Email Marketing and automation
          </li>
          <li className="flex items-center gap-x-2" data-aos="fade-up" data-aos-delay="200">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
              <CheckIcon className="font-bold text-blue-500" />
            </span>
            Facebook Business Management
          </li>
          <li className="flex items-center gap-x-2" data-aos="fade-up" data-aos-delay="250">
            <span className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
              <CheckIcon className="font-bold text-blue-500" />
            </span>
            Graphic Design/Brand Design
          </li>
        </ul>
      </div>
    </div>
  );
}
