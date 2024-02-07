import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { mont } from "@/config";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PaymentPage(props) {
  const [clientSecret, setClientSecret] = useState("");

  console.log(props)

  useEffect(() => {
    fetch("/api/checkout_sessions" ,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: props.email})
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch(e => console.log(e))
  }, []);

  return (
    <div className="flex w-full h-full">
      <div className="bg-gray-100 w-1/2 hidden md:block p-4">
        <h1 className={"text-xl font-[900] text-center mb-4 "+mont.className}>Don't Pay <span className="line-through text-amber-500">$65/monthly</span> <br/>Instead Get unlimited leads for just $37/monthly</h1>
        <p className={"leading-loose mb-4 "+mont.className}>
          Get access to thousands of high quality verified leads and close them
          with the help of our built in AI tools. Create entire business audits in seconds with Mystic Leads AI website and facebook audit. Mystic Leads is available at an <span className="text-amber-500 font-semibold">ALL TIME LOW PRICE OF $37/month</span>. Cancel Anytime.
        </p>
        <ul className={"list-none flex flex-col gap-y-4 pt-4 "+mont.className}>
          <li className="flex items-center gap-x-2"><CheckCircleOutlineIcon className="text-amber-500"/><span>Generate Unlimited Google Leads</span></li>
          <li className="flex items-center gap-x-2"><CheckCircleOutlineIcon className="text-amber-500"/><span>Generate Unlimited Yelp Leads</span></li>
          <li className="flex items-center gap-x-2"><CheckCircleOutlineIcon className="text-amber-500"/><span>No API keys required. Everything included</span></li>
          <li className="flex items-center gap-x-2"><CheckCircleOutlineIcon className="text-amber-500"/><span>Create Websites with the power of AI</span></li>
          <li className="flex items-center gap-x-2"><CheckCircleOutlineIcon className="text-amber-500"/><span>Drag and Drop Instant Website Builder</span></li>
          <li className="flex items-center gap-x-2"><CheckCircleOutlineIcon className="text-amber-500"/><span>Save and export all your leads(unlimited)</span></li>
          <li className="flex items-center gap-x-2"><CheckCircleOutlineIcon className="text-amber-500"/><span>Generate Facebook posts,Twitter threads and AI cold emails</span></li>
          <li className="flex items-center gap-x-2"><CheckCircleOutlineIcon className="text-amber-500"/><span>State of the art SEO and speed optimization tools</span></li>
          <li className="flex items-center gap-x-2"><CheckCircleOutlineIcon className="text-amber-500"/><span>And much more...</span></li>

        </ul>
      </div>

      <div className="md:w-1/2 w-full h-[100vh] overflow-auto">
        <div id="checkout" className="w-full">
          {clientSecret && (
            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If user is not logged before purchasing then log him in
  if (!session) {
    return { redirect: { destination: "/auth/register" } };
  }

  console.log(session)

  return {
    props: { email: session.user?.email || null },
  };
}
