"use client";

import Layout from "../../layout";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useRef } from "react";
import { roboto } from "@/config";
import SkeletonLoad from "@/components/dashboard/skeleton";
import CreateIcon from "@mui/icons-material/Create";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import axios from "axios";
import SearchCard from "@/components/dashboard/searchCard";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import AddLeadsToCampaignModal from "@/components/dashboard/addToCampaignModal";
import { Button } from "@mui/material";
import NewCampaignModal from "@/components/dashboard/newCampaignModal";

export default function Page({ campaigns }) {
  const myRef = useRef(null);

  const [addModal, setAddModal] = useState(false);

  const [radius, setRadius] = useState(10);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [nextToken, setNextToken] = useState("");
  const [isAllLeadsSelected, setIsAllLeadsSelected] = useState(false);

  const [selectedLeads, setSelectedLeads] = useState([]);

  const [newCampaign, setNewCampaign] = useState(false);

  console.log(selectedLeads);

  const [allLeadsSelected, setAllLeadsSelected] = useState([]);

  async function searchLeads() {
    try {
      //scroll to loading view
      setTimeout(() => {
        myRef.current.scrollIntoView();
      }, 500);

      if (!radius || !keyword || !location) {
        return alert("Missing input values");
      }

      setSearching(true);

      //axios request
      let res = await axios.get(
        `/api/search/gmb?keyword=${keyword}&location=${location}&radius=${
          radius * 1000
        }`
      );

      setResults(res.data.results);
      setNextToken(res.data.next_page_token);

      console.log(res.data, "here");

      setSearching(false);
    } catch (e) {
      setSearching(false);
      console.log(e);
    }
  }

  async function showNextPage() {
    try {
      setTimeout(() => {
        myRef.current.scrollIntoView();
      }, 500);
      //scroll to loading view

      if (!radius || !keyword || !location) {
        return alert("Missing input values");
      }
      setSearching(true);

      //axios request
      let res = await axios.get(
        `/api/search/gmb?keyword=${keyword}&location=${location}&radius=${
          radius * 1000
        }&pagetoken=${nextToken}`
      );

      setResults((results) => results.concat(res.data.results));

      console.log(res.data, "here hon");

      setSearching(false);
    } catch (e) {
      setSearching(false);
      console.log(e);
    }
  }

  return (
    <Layout>
      <div className={"w-full h-full " + roboto.className}>
        <div className="p-1 my-12 bg-white md:p-8 rounded-xl">
          <h1 className="flex items-center mb-8 gap-x-4">
            <div className="flex items-center justify-center p-2 border-4 border-solid rounded-full border-amber-500">
              <Image src="/google-logo.svg" width={35} height={35} />
            </div>
            <span>Search Leads on Google</span>
          </h1>
          <p className="leading-relaxed">
            Search google leads with their phone numbers and names. Filter out
            leads by exact location and radius. Great for precise location
            leads.
          </p>
          <div className="px-8 py-3 mt-8 rounded-xl bg-amber-100">
            <h2 className="text-2xl font-semibold ">
              Search Active Business Leads on Google and contact them instantly.
            </h2>
            <div className="flex flex-col items-center py-4 mb-8 md:flex-row gap-x-4 gap-y-4">
              <TextField
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                fullWidth
                style={{ backgroundColor: "white" }}
                placeholder="Enter keyword"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreateIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              <TextField
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ backgroundColor: "white" }}
                placeholder="Enter Location"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FmdGoodIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel id="radius">Radius</InputLabel>
                <Select
                  labelId="radius"
                  value={radius}
                  label="Radius"
                  style={{ backgroundColor: "white" }}
                  onChange={(e) => setRadius(e.target.value)}
                >
                  <MenuItem value={10}>10 km</MenuItem>
                  <MenuItem value={20}>20 km</MenuItem>
                  <MenuItem value={30}>30 km</MenuItem>
                  <MenuItem value={50}>50 km</MenuItem>
                </Select>
              </FormControl>
            </div>
            <button
              onClick={searchLeads}
              className="px-8 py-2 mb-4 text-sm text-white transition-all border-none outline-none cursor-pointer bg-amber-500 rounded-2xl hover:bg-amber-600"
            >
              Search Leads
            </button>
          </div>
        </div>

        <AddLeadsToCampaignModal
          open={addModal}
          setOpen={setAddModal}
          campaigns={campaigns}
          selectedLeads={selectedLeads}
          setNewCampaign={setNewCampaign}
        />

        <NewCampaignModal open={newCampaign} setOpen={setNewCampaign} />

        {(results?.length > 0 || searching) && (
          <div className="p-8 my-12 bg-white" ref={myRef}>
            <div className="mb-12">
              <h2>
                Search Results for {keyword} in {location}
              </h2>
              <div className="flex items-center gap-x-4">
                <Button
                  variant="contained"
                  style={{ padding: "8px 14px" }}
                  startIcon={<AddIcon />}
                  onClick={() => setAddModal(true)}
                >
                  Add Selected Leads
                </Button>

                <Button
                  style={{ padding: "8px 14px" }}
                  variant="outlined"
                  onClick={() => {
                    if (isAllLeadsSelected) {
                      setIsAllLeadsSelected(false);
                    } else {
                      setIsAllLeadsSelected(true);
                    }
                    setSelectedLeads(allLeadsSelected);
                  }}
                >
                  {isAllLeadsSelected ? (
                    <span>Deselect All Leads</span>
                  ) : (
                    <span>Select All Leads</span>
                  )}
                </Button>
              </div>
            </div>

            <div>
              {searching ? (
                <SkeletonLoad />
              ) : (
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                  {results.map((biz, i) => (
                    <SearchCard
                      latitude={biz.geometry.location.lat}
                      longitude={biz.geometry.location.lng}
                      selectedLeads={selectedLeads}
                      setSelectedLeads={setSelectedLeads}
                      key={i}
                      name={biz.name}
                      profileImg={biz.icon}
                      ratings={biz.rating}
                      placeId={biz.place_id}
                      type="google"
                      ratingsCount={biz.user_ratings_total}
                      setAllLeadsSelected={setAllLeadsSelected}
                      isAllLeadsSelected={isAllLeadsSelected}
                      setIsAllLeadsSelected={setIsAllLeadsSelected}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-center w-full">
              <button
                onClick={showNextPage}
                className="flex items-center px-4 py-2 font-normal text-white no-underline transition-all border-none rounded-lg cursor-pointer gap-x-4 bg-amber-500 hover:bg-amber-600"
              >
                <AddIcon />
                <span>View more profiles</span>
              </button>
            </div>
          </div>
        )}
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
