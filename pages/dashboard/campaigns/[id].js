"use client";
import { useRouter } from "next/router";
import Layout from "../layout";
import { roboto } from "@/config";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { useRef } from "react";
import { utils, writeFile } from "xlsx";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

export default function Page({ campaigns }) {
  let [campaign, setCampaign] = useState(null);
  let [selectedLeads, setSelectedLeads] = useState([]);
  const tbl = useRef(null);

  console.log(selectedLeads);

  function selectLead(checked, lead) {
    //if box selected add lead otherwise remove it from state
    console.log(lead.id);
    if (checked) {
      setSelectedLeads((leads) => [...leads, lead]);
    } else {
      setSelectedLeads((leads) => leads.filter((l) => l.id !== lead.id));
    }
  }

  function exportToXl() {
    console.log(selectedLeads);

    if (!selectedLeads || selectedLeads.length == 0) {
      return alert('No leads selected')
    }

    const worksheet = utils.json_to_sheet(selectedLeads);

    const max_width = selectedLeads.reduce(
      (w, r) => Math.max(w, r.address.length),
      10
    );
    worksheet["!cols"] = [{ wch: max_width }];

    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Leads");

    writeFile(workbook, `${campaign.name}.xlsx`, { compression: true });
  }

  let router = useRouter();

  console.log(router.query.id, "id");

  useEffect(() => {
    console.log(campaigns, "all");
    let camp = campaigns.filter((c) => c?.id == router.query.id);
    console.log(camp, "camp");
    setCampaign(camp[0]);
  }, []);

  return (
    <Layout>
      <div className={"w-full h-full overflow-x-hidden " + roboto.className}>
        <div className="flex justify-between items-center">
          <h1>{campaign?.name}</h1>
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={exportToXl}
          >
            Export Leads to Excel
          </Button>
        </div>

        <div className="overflow-x-scroll h-[80vh] overflow-y-scroll">
          <table
            className="w-full h-full mt-4 shadow-xl rounded-lg text-center p-2"
            style={{ borderTop: "2px solid #f59e0b" }}
            ref={tbl}
          >
            <tbody>
              <tr>
                <th>
                  #
                  <Checkbox
                    onClick={(event) => {
                      if (event.target.checked) {
                        setSelectedLeads(campaign.leads);
                        alert("All Leads Selected");
                      } else {
                        setSelectedLeads([]);
                      }
                    }}
                  />
                </th>
                <th className="p-4">Name</th>
                <th className="p-4">Phone No.</th>
                <th className="p-4">Website</th>
                <th className="p-4">Address</th>
                <th className="p-4">Url</th>
                <th className="p-4">Source/Type</th>
              </tr>
              {campaign?.leads.map((lead, i) => (
                <tr key={i} className="even:bg-blue-100">
                  <td
                    className="p-4"
                    style={{ minWidth: "10rem" }}
                    onChange={(event) => selectLead(event.target.checked, lead)}
                  >
                    #{i + 1} <Checkbox />
                  </td>
                  <td className="p-4" style={{ minWidth: "10rem" }}>
                    {lead.bizName}
                  </td>
                  <td className="p-4" style={{ minWidth: "10rem" }}>
                    {lead.phoneNo}
                  </td>
                  <td className="p-4" style={{ minWidth: "10rem" }}>
                    <a href={lead.website} className="link">
                      {lead.website}
                    </a>
                  </td>
                  <td className="p-4" style={{ minWidth: "10rem" }}>
                    {lead.address}
                  </td>
                  <td className="p-4" style={{ minWidth: "10rem" }}>
                    <a href={lead.url} className="link">
                      {lead.url}
                    </a>
                  </td>
                  <td className="p-4" style={{ minWidth: "10rem" }}>
                    {lead.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

    console.log(data)

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
    console.log(e,'err');
    return {
      props: {
        email: "",
        username: "",
        campaigns: [],
      },
    };
  }
}
