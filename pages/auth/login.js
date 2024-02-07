
import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { useSearchParams } from "next/navigation";

import Signin from "@/components/Auth/Signin";
import RootLayout from "../layout";
import Head from "next/head";

export default function Page({ providers }) {
  const errorParams = useSearchParams();

  const error = errorParams.get("error");
  return (
    <>
      <RootLayout>
      <Head>
        <title>Login to your account</title>
        <meta
          name="description"
          content="Login to your account on mystic leads and start your journey."
          key="desc"
        />
        <meta property="og:title" content="Login to your account" />
        <meta
          property="og:description"
          content="Login to your account on mystic leads and start your journey."
        />
        <meta property="og:image" content="/og-img.png" />
      </Head>
        <Signin providers={providers} error={error}/>
      </RootLayout>
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
