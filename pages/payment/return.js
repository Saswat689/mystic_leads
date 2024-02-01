import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { mont } from "@/config";
import Head from "next/head";

export default function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    fetch(`/api/checkout_sessions?session_id=${sessionId}`, {
      method: "GET",
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <>
        <Head>
          <title>Thank You</title>
        </Head>
        <section className="flex flex-col justify-center items-center py-20">
          <h1
            className={
              "heading py-0 my-0 mb-4 text-amber-500 " + mont.className
            }
          >
            Thank You!
          </h1>
          <p className="text-center py-0 my-0 leading-loose text-xl">
            We appreciate your business! A confirmation email will be sent to{" "}
            {customerEmail}. <br />
            You can now start using <Link href="/dashboard/">Mystic Leads</Link>
            .
          </p>
        </section>
      </>
    );
  }

  return null;
}
