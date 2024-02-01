"use client";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { mont } from "@/config";

export default function Page(props) {
  const router = useRouter();

  //console.log(router.query.email)

  let [email, setEmail] = useState(router.query.email);

  console.log(email);

  async function handleSubmit(e) {
    e.preventDefault();
    signIn("email", { callbackUrl: "/dashboard", email });
  }
  return (
    <div className={"w-full h-[100vh] flex relative "+mont.className}>
      <div className="w-full h-full flex justify-center items-center">
        <div className="md:w-[30%] w-[90%] rounded-md p-4 bg-gray-100 shadow-lg">
          <h1 className="text-semibold text-2xl mb-4 text-center">
            Sign In with just email
          </h1>
          <form onSubmit={handleSubmit}>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Verification Link
            </Button>
          </form>
          <p className="mt-2 text-sm text-gray-800">
            Remember your password ? <Link href="/auth/login">Sign In</Link>
          </p>
        </div>
      </div>
      <img
          src="/corner-cover.png"
          className="absolute bottom-0 left-0 w-[16rem] h-[16rem]"
        />
    </div>
  );
}


export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/dashboard/home" } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers },
  };
}