import Layout from "./layout";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import axios from "axios";
import { mont, roboto } from "@/config";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function Page({ username, campaigns,freeTrial }) {
  const router = useRouter();
  console.log(campaigns);

  //state to track whether user has any active campaigns or not
  const [isNull, setIsNull] = useState(true);

  useEffect(() => {
    campaigns.map((c) => {
      if (c) {
        setIsNull(false);
      }
    });
  }, []);

  return (
    <Layout freeTrial={freeTrial}>
      <div className={"w-full h-full py-8 " + roboto.className}>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="p-8 rounded-md shadow-sm bg-amber-100">
            <h3 className={"font-[800] text-2xl " + mont.className}>
              Make 2024 your year!
            </h3>
            <p className="leading-loose">
              Small businesses are in need of marketing services more than ever
              as economies continue to rise and fall.
            </p>
          </div>
          <div className="p-8 bg-blue-100 rounded-md shadow-sm">
            <h3 className={"font-[800] text-2xl " + mont.className}>
              Welcome {username}!
            </h3>
            <p className="leading-loose">
              Start using Mystic Leads for all your agency needs - from creating
              websites to finding clients to writing high converting emails,
              everything's unlocked for you.
            </p>
          </div>
        </div>

        {!isNull ? (
          <div className="mt-16">
            <div className="flex gap-x-12 md:flex-row flex-col gap-y-4">
              <div className="md:w-1/2 w-full">
                <div className="flex items-center gap-x-8">
                  <h3 className="text-2xl">Latest Campaigns</h3>
                  <Button
                    onClick={() => router.push("/dashboard/campaigns")}
                    variant="contained"
                  >
                    View All
                  </Button>
                </div>

                <table
                  className="w-full p-2 text-center rounded-lg shadow-xl"
                  style={{ borderTop: "2px solid #f59e0b" }}
                >
                  <tbody>
                    <tr>
                      <th className="p-4">Name of campaign</th>
                      <th className="p-4">Saved Leads</th>
                    </tr>
                    {campaigns.map((campaign) => {
                      if (!campaign) return;
                      else {
                        return (
                          <tr className="even:bg-blue-100">
                            <td className="p-4">{campaign?.name}</td>
                            <td className="p-4">{campaign?.leads?.length}</td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>

              <div className="md:w-1/2 w-full">
                <div className="flex items-center gap-x-8">
                  <h3 className="text-2xl">Latest Saved Leads</h3>
                  <Button
                    onClick={() => router.push("/dashboard/campaigns")}
                    variant="contained"
                  >
                    View All
                  </Button>
                </div>
                <table
                  className="w-full p-2 text-center rounded-lg shadow-xl"
                  style={{ borderTop: "2px solid #f59e0b" }}
                >
                  <tbody>
                    <tr>
                      <th className="p-4">Name of lead</th>
                      <th className="p-4">Phone Number</th>
                    </tr>
                    {campaigns.map((campaign) => {
                      if (!campaign) return;
                      else {
                        return campaign.leads.splice(0, 4).map((lead) => {
                          if (!lead) return;
                          else {
                            return (
                              <tr className="even:bg-blue-100">
                                <td className="p-4">{lead.bizName}</td>
                                <td className="p-4">{lead.phoneNo}</td>
                              </tr>
                            );
                          }
                        });
                      }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center py-12 gap-y-0">
            <h2 className="mb-2">No campaigns created Yet</h2>
            <p>Create campaigns to save your leads and export them</p>
          </div>
        )}

        <div className="py-4 my-12 text-center bg-blue-100 rounded-lg">
          <h3 className="pb-0 mb-0 md:text-2xl text-xl font-bold">
            Try Out The Website Builder Today!
          </h3>
          <p>
            Create websites with simple drag and drop. Responsive and SEO
            friendly.
          </p>
          <Button
            onClick={() => router.push("/dashboard/website-builder")}
            variant="contained"
          >
            Create Now!
          </Button>
        </div>
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
    let { data } = await axios.post(
      `${process.env.MONGODB_URI}/findOne`,
      {
        dataSource: "cluster",
        database: "test",
        collection: "users",
        filter: {
          email: session.user.email,
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

    //if user not paid and free trial over(acc older than 1 day)
    let accAge = (new Date().getTime() - Number(data.document.createdAt))/(1000*60*24*60) //account age in days

    console.log(accAge)

    if (!data.document?.hasPaid) {
      if (accAge > 1) {
        //1 day free trial expired
        return { redirect: { destination: "/payment/new" } };
      } else {
        return {
          props: {
            freeTrial: true,
            email: session.user.email || null,
            username: data.document.username,
            campaigns: data.document?.campaigns || [],
          },
        };
      }
    } else {
      return {
        props: {
          freeTrial: false,
          email: session.user.email || null,
          username: data.document.username,
          campaigns: data.document?.campaigns || [],
        },
      };
    }
  } catch (e) {
    console.log(e);
    return {
      props: {
        freeTrial: true,
        email: null,
        username: "",
        campaigns: [],
      },
    };
  }
}
