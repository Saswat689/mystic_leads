import { mont } from "@/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={
        "bg-[#11182a] text-white flex justify-between items-center p-4 " +
        mont.className
      }
    >
      <div className="flex items-center gap-x-2">
        <Link href={"/"}>
          <img
            src="/logo2.jpeg"
            className="md:w-16 md:h-16 h-12 w-12 rounded-full"
          />
        </Link>
        <Link href={"/terms-of-service"} className="text-white hover:no-underline">Terms of Service</Link>
        <Link href={"/privacy-policy"} className="text-white hover:no-underline">Privacy Policy</Link>
        </div>
      <span className="md:text-lg text-sm hidden md:block">
        Copyright @MysticLeads - All rights reserved
      </span>
    </footer>
  );
}
