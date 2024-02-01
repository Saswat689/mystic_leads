"use client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import Layout from "../layout";
import { roboto } from "@/config";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useState } from "react";
import InnerHTML from "dangerously-set-html-content";
import LinearProgress from "@mui/material/LinearProgress";

export default function Page() {
  let [link, setLink] = useState("");
  let [reportHtml, setReportHtml] = useState(null);
  let [loading, setLoading] = useState(false);

  async function generateReport() {
    setLoading(true);
    try {
      let res = await axios.post("/api/seo/report?link=" + link);
      setReportHtml(res.data.html);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <>
      {reportHtml ? (
        <div>
          <InnerHTML html={reportHtml} />
        </div>
      ) : (
        <Layout>
          <div className={"w-full h-full py-8 " + roboto.className}>
            <div className="flex p-8 pb-2 text-white bg-blue-600 rounded-lg gap-x-8">
              <div>
                <h2>Generate Optimisation Report</h2>
                <p className="leading-loose">
                  Find faults in your website with our AI driven SEO report
                  generator. It includes all optimisation parameters you should
                  be taking into consideration such as speed,meta tags,FCP etc
                </p>
              </div>
              <div>
                <img src="/undraw_report.svg" className="w-full" />
              </div>
            </div>

            <div className="mt-12 bg-gray-200 rounded-lg">
              {loading && <LinearProgress />}
              <div className="flex flex-col items-center p-8">
                <h1 className="pb-0 mb-0">Get Instant Performance Report</h1>
                <p>
                  Just enter a link and see how this tool magically generates
                  performance report for you on autopilot
                </p>

                <div className="flex flex-col items-center mx-auto w-full justify-center mt-8 md:flex-row gap-x-4 gap-y-4">
                  <TextField
                    id="outlined-basic"
                    label="https://example.com"
                    variant="outlined"
                    className="bg-white"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                  <Button
                    style={{padding: '0.8rem 2rem'}}
                    variant="contained"
                    startIcon={<SearchIcon />}
                    onClick={generateReport}
                  >
                    Search Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
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
        email: null,
        username: "",
        campaigns: [],
      },
    };
  }
}
