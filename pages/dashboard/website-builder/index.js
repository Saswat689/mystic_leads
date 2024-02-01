import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import Layout from "../layout";
import { roboto } from "@/config";
import Link from "next/link";
import axios from "axios";

export default function Page() {
  return (
    <Layout>
      <div className={"w-full h-full py-8 " + roboto.className}>
        <div className="bg-blue-600 text-white flex p-8 pb-12 gap-x-8 rounded-lg">
          <div>
            <h2>Try out the website builder</h2>
            <p className="leading-loose mb-8">
              Create full fledged responsive websites in seconds using simple
              drag and drop techniques. Powerful customization features and
              tools to make it into anything you want
            </p>
            <Link
              className="primary-btn text-white bg-amber-600 rounded-none py-3 px-8"
              href="/dashboard/website-builder/new"
            >
              Go to website builder
            </Link>
          </div>
          <div>
            <img src="/undraw_website.svg" className="w-full" />
          </div>
        </div>

        <div className="bg-gray-200 rounded-lg mt-12"></div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );

    // If user is not logged before purchasing then log him in
    if (!session) {
      return { redirect: { destination: "/auth/register" } };
    }

    //check if it is a paid user
    let {data} = await axios.post(
      `${process.env.MONGODB_URI}/findOne`,
      {
        dataSource: "cluster",
        database: "test",
        collection: "users",
        filter: {
          email: session.user.email
        },
        projection: {},
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          apiKey: process.env.DATAAPI_KEY,
        },
      }
    );

    //unpaid user don't allow access
    if (!data.document?.hasPaid) {
      return { redirect: { destination: "/payment/new" } };
    }

    return {
      props: {
        email: session.user.email || null,
        username: data.document.username,
        campaigns: data.document?.campaigns || [],
      },
    };
  } catch (e) {
    console.log(e);
        return {
          props: {
            email: "",
            username: "",
            campaigns: [],
          },
        };
  }
}
