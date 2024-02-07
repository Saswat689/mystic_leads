import { mont } from "@/config";
import Head from "next/head";

export default function Page() {
  return (
    <>
    <div className={mont.className + " py-12 px-8"}>
      <Head>
        <title>Terms of Service</title>
      </Head>
      <h1>Policies and Procedures</h1>
      <p className="leading-loose font-[600] text-gray-700">
        Hours of Operation
        <br />
        * Mystic Leads's office is open Monday – Friday 9a.m. – 5p.m. EST
        <br />
        * We close for all government observed holidays
        <br />
        These policies and procedures apply to all products and/or services
        from:
        <br />
        Mystic Leads (mysticleads.com)
      </p>
      <h2>Returns</h2>
      <p className="leading-loose font-[600] text-gray-700">
        * All refunds will be processed within 7 days.
        <br />
        * 100% money back guarantee covers price of product only.
        <br />
        * Customers must contact our support department with their order
        information to request a refund.
        <br />
        * Once a valid refund request is submitted, the refund process will take
        no more than 30 days. All refunds will be returned to the original
        credit card and PayPal orders will be credited back to the PayPal
        account.
        <br />
        * You have (30) Days from the date of the original purchase to return
        the product to receive your refund. Any return received after the (30)
        DAY time limit will not be processed.
        <br />
        * If we receive excessive or repeated refund requests from you, we
        reserve the right to add you to our “blacklist” to prevent future
        purchases of our products by you and we reserve the right to refuse your
        business at our sole discretion for any other reason we deem necessary.
        We also reserve the right to deny future refunds to you if we feel you
        are taking advantage of our money back guarantee.
        <br />
        Personal Checks
        <br />* Checks or “e-checks” will not be accepted.
      </p>
      <h2>Customer Service</h2>
      <p className="leading-loose font-[600] text-gray-700">
        Please do not spam using our software
        <br />
        If you have questions or comments regarding our products, please contact
        us here: support@mysticleads.com
      </p>
    </div>
    </>
  );
}
