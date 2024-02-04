import { authOptions } from "../../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import axios from "axios";

import rateLimit from "@/lib/rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

async function fetchGMB(keyword, location, radius, pagetoken) {
  try {
    //convert location to coordinates
    const coordinateparams = new URLSearchParams({
      address: location,
      key: process.env.G_API_KEY,
    });
    console.log(coordinateparams.toString());

    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?${coordinateparams.toString()}`
    );

    let coordinates = data;

    console.log(coordinates);

    let searchParams;
    if (pagetoken) {
      searchParams = new URLSearchParams({
        pagetoken,
        key: process.env.G_API_KEY,
      });
    } else {
      searchParams = new URLSearchParams({
        keyword,
        location:
          coordinates.results[0].geometry.location.lat +
          "," +
          coordinates.results[0].geometry.location.lng,
        key: process.env.G_API_KEY,
        radius: radius,
      });
    }

    console.log(searchParams.toString());

    //search for data
    const searchRes = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${searchParams.toString()}`
    );

    return searchRes.data;
  } catch (e) {
    console.error(e);
  }
}

//delete all leads from a campaign, make leads array empty[]
export default async function handler(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);

    //user is logged in and secure
    if (!session) {
      return res.status(401).send("Access forbidden");
    }

    if (req.method !== "GET") {
      return res.status(401).send("Only Post request authorised");
    }

    await limiter.check(res, 10, "CACHE_TOKEN"); // 10 requests per minute 

    let { keyword, location, radius, pagetoken } = req.query;

    if (!keyword || !location || !radius) {
      return res.status(401).send("Fields missing");
    }

    let data = await fetchGMB(keyword, location, radius, pagetoken);

    res.status(200).json(data);
  } catch (e) {
    res.status(429).json([]);
  }
}
