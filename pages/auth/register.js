import TextField from "@mui/material/TextField";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { useRouter } from "next/router";
import { mont } from "@/config";
import Footer from "@/components/home/footer";
import Head from "next/head";
import Divider from "@mui/material/Divider";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export default function Page({ providers }) {
  let router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setLoading(true)
    try {
      e.preventDefault();
      let { username, email, password } = e.target;

      let res = await axios.post("/api/auth/register", {
        username: username.value,
        email: email.value,
        password: password.value,
      });

      //sign the user upon successful registration
      console.log(res.data);
      if (res.status == 201) {
        signIn("credentials", {
          callbackUrl: "/payment/new",
          email: email.value,
          password: password.value,
        });
      }
    } catch (err) {
      setLoading(false)
      e.preventDefault()
      console.log(err);
      //user already exists
      if (err?.response?.status == 409) {
        router.push("/auth/login");
      }
      console.log(e);
    }
  }
  const errorParams = useSearchParams();

  const error = errorParams.get("error");
  return (
    <>
      <Head>
        <title>Get started by creating a new account</title>
        <meta
          name="description"
          content="Register an account on mystic leads and start your journey."
          key="desc"
        />
        <meta
          property="og:title"
          content="Get started by creating a new account"
        />
        <meta
          property="og:description"
          content="Create an account on mystic leads and start your journey."
        />
        <meta property="og:image" content="/og-img.png" />
      </Head>
      <div className={"w-full h-[100vh] py-8 relative " + mont.className}>
        <div className="w-full h-full flex justify-center items-center">
          <div className="md:w-[30%] w-[84%] rounded-md p-4 bg-gray-100 shadow-lg">
            <h1 className="text-bold text-3xl mb-4 text-center">Quick Start</h1>
            {providers && (
              <>
                <div className="flex gap-x-2 md:flex-row flex-col">
                  <button
                    variant="contained"
                    onClick={() => signIn(providers.discord.id)}
                    className="flex outline-none border-none hover:bg-[#587bfa] cursor-pointer items-center justify-between px-2 py-2 my-4 bg-[#7289da] text-white rounded-md mx-auto md:w-1/2 w-full"
                  >
                    {" "}
                    <Image
                      suppressHydrationWarning
                      src="/discord-white-icon.webp"
                      className="text-white"
                      width="24"
                      height="24"
                    />
                    <span className="mx-auto">
                      Sign in with {providers.discord.name}
                    </span>
                  </button>

                  <button
                    variant="contained"
                    onClick={() => signIn(providers.spotify.id)}
                    className="flex outline-none border-none hover:bg-[#268948] cursor-pointer items-center justify-between px-2 py-2 md:my-4 mb-4 bg-[#1DB954] text-white rounded-md mx-auto md:w-1/2 w-full"
                  >
                    {" "}
                    <Image
                      suppressHydrationWarning
                      src="/spotify-white-icon.webp"
                      className="text-white"
                      width="24"
                      height="24"
                    />
                    <span className="mx-auto">
                      Sign in with {providers.spotify.name}
                    </span>
                  </button>
                </div>
                <Divider>or</Divider>
              </>
            )}
            {error && (
              <div className="bg-red-100 py-4 my-2 border-red-300 border-solid rounded-md">
                <p className="text-center py-0 my-0">
                  Email or Password is wrong
                </p>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                type="text"
                autoComplete="username"
                autoFocus
                style={{ backgroundColor: "#fff" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                style={{ backgroundColor: "#fff" }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{ backgroundColor: "#fff" }}
              />
              <LoadingButton
                sx={{ mt: 3, mb: 2, py: 1.4 }}
                type="submit"
                loading={loading}
                fullWidth
                variant="contained"
              >
                <span>Quick SignUp</span>
              </LoadingButton>
            </form>
            <p className="mt-2 text-sm text-gray-800">
              Already have an account? <Link href="/auth/login">Sign In</Link>
            </p>
          </div>
        </div>
        <img
          src="/corner-cover.png"
          className="absolute bottom-0 left-0 w-[16rem] h-[16rem]"
        />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );

    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    if (session) {
      return { redirect: { destination: "/dashboard" } };
    }

    const providers = await getProviders();

    return {
      props: { providers, email: session?.user?.email || null },
    };
  } catch (err) {
    console.log(err);
    return {
      props: null,
    };
  }
}
