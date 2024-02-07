
import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import Signup from "@/components/Auth/Signup";
import RootLayout from "../layout";
import { useSearchParams } from "next/navigation";
import Head from "next/head";

export default function Page({ providers }) {

  const errorParams = useSearchParams();

  const error = errorParams.get("error");

  return (
    <>
      <RootLayout>
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
        <Signup providers={providers} error={error}/>
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
