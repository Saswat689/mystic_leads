import Layout from "../layout";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import axios from "axios";
import { roboto } from "@/config";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import NewCampaignModal from "@/components/dashboard/newCampaignModal";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useRouter } from "next/router";
import dateFormat from "dateformat";

export default function Page({ campaigns,freeTrial }) {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  //state to track whether user has any active campaigns or not
  const [isNull, setIsNull] = useState(false);

  useEffect(() => {
    campaigns.map((c) => {
      if (c) {
        setIsNull(true);
      }
    });
  }, []);

  async function delLead() {
    let res = await axios.post("/api/campaigns/del", {
      campaignname: "custom campaign",
      bizName: "test2",
    });
    console.log(res.data);
  }

  async function delEntireCampaign(id) {
    let res = await axios.post("/api/campaigns/delAll", {
      id,
    });

    router.reload();
  }

  return (
    <Layout freeTrial={freeTrial}>
      <main className={"py-8 w-full h-full " + roboto.className}>
        <div className="flex p-8 text-white bg-blue-600 rounded-lg">
          <div>
            <h2 className="text-2xl mb-4 font-bold">Organise your Leads into Campaigns</h2>
            <p className="leading-loose">
              Instantly group and organise your leads into campaigns. Sort them,
              search in them and save your data. Export them in excel sheets and
              use them in your business.
            </p>
          </div>
          <div>
            <img src="/undraw_teamwork.svg" className="w-full" />
          </div>
        </div>

        <div className="flex mt-4">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            style={{ padding: "14px 12px" }}
            className="bg-blue-500"
            onClick={() => setOpenModal(true)}
          >
            Add New Campaign
          </Button>

          {/* <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
            <OutlinedInput
              id="outlined-adornment-search"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="search" edge="end">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl> */}

          <NewCampaignModal open={openModal} setOpen={setOpenModal} />
        </div>

        {isNull ? (
          <table
            className="w-full p-2 mt-4 text-center rounded-lg shadow-xl"
            style={{ borderTop: "2px solid #f59e0b" }}
          >
            <tbody>
              <tr>
                <th className="p-4">Name of campaign</th>
                <th className="p-4">Saved Leads</th>
                <th className="p-4">Date created</th>
                <th className="p-4">Actions</th>
              </tr>
              {campaigns.map((campaign) => {
                if (!campaign) return;
                else {
                  return (
                    <tr className="even:bg-blue-100">
                      <td className="p-4">{campaign.name}</td>
                      <td className="p-4">{campaign.leads.length}</td>
                      <td className="p-4">
                        {dateFormat(campaign.createdAt, "mediumDate")}
                      </td>
                      <td className="flex items-center justify-center p-4">
                        <IconButton
                          onClick={() =>
                            router.push("/dashboard/campaigns/" + campaign.id)
                          }
                        >
                          <ArrowOutwardIcon className="text-green-500" />
                        </IconButton>
                        <IconButton
                          onClick={() => delEntireCampaign(campaign.id)}
                        >
                          <DeleteIcon className="text-red-400" />
                        </IconButton>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center py-12 gap-y-0">
            <h2 className="mb-2 text-2xl font-bold">No campaigns created Yet</h2>
            <p>Create campaigns to save your leads and export them</p>
          </div>
        )}
      </main>
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