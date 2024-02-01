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
  const loadRef = useRef(null);

  const [addModal, setAddModal] = useState(false);

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [isAllLeadsSelected, setIsAllLeadsSelected] = useState(false);
  const [limit, setLimit] = useState(10);

  const [selectedLeads, setSelectedLeads] = useState([]);

  const [newCampaign, setNewCampaign] = useState(false);

  const [allLeadsSelected, setAllLeadsSelected] = useState([]);

  async function searchLeads() {
    try {
      setTimeout(() => {
        console.log(loadRef);
        loadRef.current.scrollIntoView();
      }, 500);

      //scroll to loading view
      setSearching(true);

      if (!keyword || !location) {
        return alert("Missing input values");
      }

      //axios request
      let res = await axios.get(
        `/api/search/yelp?keyword=${keyword}&location=${location}&limit=${limit}`
      );

      setResults(res.data);

      console.log(res.data, "here");

      setSearching(false);
    } catch (e) {
      setSearching(false);
      console.log(e);
      alert(e.response.data);
    }
  }

  return (
    <Layout>
      <div className={"w-full h-full " + roboto.className}>
        <div className="p-4 my-12 bg-white md:p-8 rounded-xl">
          <h1 className="flex items-center mb-8 gap-x-4">
            <div className="flex items-center justify-center p-2 border-4 border-red-500 border-solid rounded-full">
              <Image src="/yelp-logo.svg" width={35} height={35} />
            </div>
            <span>Search Leads on Yelp</span>
          </h1>
          <p className="leading-relaxed">
            Get all businesses in a given area from yelp. Fetch important
            details like phone numbers, addresses and statuses. Save them and
            enjoy.
          </p>
          <div className="px-4 py-3 pb-8 mt-8 bg-red-100 md:px-8 rounded-xl">
            <h2 className="font-semibold text-1xl ">
              Search Active Business Leads on Yelp and contact them instantly.
            </h2>
            <div className="flex flex-col items-center py-4 mb-4 md:flex-row gap-x-4 gap-y-4">
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
                <InputLabel id="results">Results</InputLabel>
                <Select
                  labelId="results"
                  value={limit}
                  label="Results"
                  style={{ backgroundColor: "white" }}
                  onChange={(e) => setLimit(e.target.value)}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={40}>40</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex items-center justify-center w-full md:block">
              <button
                onClick={searchLeads}
                className="primary-btn py-3 px-8 text-[18px]"
              >
                Search Leads
              </button>
            </div>
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
          <div className="p-8 my-12 bg-white" ref={loadRef}>
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
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                  {results.map((biz, i) => (
                    <SearchCard
                      selectedLeads={selectedLeads}
                      latitude={biz.coordinates.latitude}
                      longitude={biz.coordinates.longitude}
                      setSelectedLeads={setSelectedLeads}
                      key={i}
                      name={biz.name}
                      profileImg={biz.image_url}
                      ratings={biz.rating}
                      placeId={biz.place_id}
                      type="yelp"
                      categories={biz.categories}
                      ratingsCount={biz.review_count}
                      phone={biz.phone}
                      address={biz.location.address1}
                      profileLink={biz.url}
                      setAllLeadsSelected={setAllLeadsSelected}
                      isAllLeadsSelected={isAllLeadsSelected}
                      setIsAllLeadsSelected={setIsAllLeadsSelected}
                    />
                  ))}
                </div>
              )}
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
        return { props: {
      email: '',
      username: '',
      campaigns: []
    } };
  }
}
