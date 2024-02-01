import Image from "next/image";
import Button from "../primary-button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { mont, roboto } from "@/config";
import { useRouter } from "next/router";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const NavbarContent = ({ active,user }) => {
  return (
    <>
      {" "}
      <a
        href="/#steps-sec"
        className={`${
          !active ? "hidden" : "flex"
        } text-md text-white no-underline transition-all cursor-pointer md:block mt-8 md:mt-0 text-lg hover:text-amber-500`}
      >
        Find Clients
      </a>
      <a
        href="/#problem-sec"
        className={`${
          !active ? `hidden` : `flex`
        } text-md text-white no-underline transition-all cursor-pointer md:block mt-8 md:mt-0 text-lg hover:text-amber-500`}
      >
        Problem
      </a>
      <a
        href="/#solution-sec"
        className={`${
          !active ? `hidden` : `flex`
        } text-md text-white no-underline transition-all cursor-pointer md:block mt-8 md:mt-0 text-lg hover:text-amber-500`}
      >
        Solution
      </a>
      <a
        href="https://blog.mysticleads.com"
        className={`${
          !active ? `hidden` : `flex`
        } text-md text-white no-underline transition-all cursor-pointer md:block mt-8 md:mt-0 text-lg hover:text-amber-500`}
      >
        Blog
      </a>
      <a
        href="/dashboard"
        className={`${
          !active ? `hidden` : `flex`
        } text-md text-white no-underline md:hidden flex transition-all cursor-pointer mt-8 md:mt-0 text-lg hover:text-amber-500`}
      >
        Dashboard
      </a>
    </>
  );
};

export default function navbar({ user, active, setActive }) {
  const router = useRouter();
  return (
    <>
      <nav
        className={
          `flex justify-between overflow-hidden gap-10 items-center py-2 px-8 ` +
          roboto.className
        }
      >
        <img src="/logo2.jpeg" className="w-16 h-16 md:w-20 md:h-20" />

        <button
          className={`md:hidden flex items-center bg-transparent justify-center outline-none border-none rounded-xl`}
          onClick={() => {
            setActive(active ? false : true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width="30"
            height="30"
          >
            <path
              fill="#f59e0b"
              d="M0,3.5c0-.83,.67-1.5,1.5-1.5H17.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5H1.5c-.83,0-1.5-.67-1.5-1.5Zm17.5,14.5H1.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H17.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Zm5-8H6.5c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5H22.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5Z"
            />
          </svg>
        </button>

        <NavbarContent active={false} user={user}/>

        {!user && (
          <Link
            className="text-white hidden md:block no-underline transition-all cursor-pointer hover:text-amber-500"
            href="/auth/login"
          >
            Login
          </Link>
        )}

        {user ? (
          <Button
            text="Go to Dashboard"
            icon={ArrowOutwardIcon}
            className="hidden md:flex"
            onClick={() => router.push("/dashboard/")}
          />
        ) : (
          <Button
            text="Get Started"
            onClick={() => router.push("/auth/register")}
            className="hidden md:flex"
            icon={ShoppingCartIcon}
          />
        )}
      </nav>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
        className={`${
          active ? "flex w-full h-[100vh]" : "w-0"
        } flex-col items-center transition-all p-3 md:hidden gap-4`}
      >
        <NavbarContent active={active} user={user}/>
      </div>
    </>
  );
}
