import { authOptions } from "../../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import axios from "axios";

//delete all leads from a campaign, make leads array empty[]
export default async function handler(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);

    //user is logged in and secure
    if (!session) {
      return res.status(401).send("Access forbidden");
    }

    let { location,keyword,limit } = req.query;

    let result = await axios.get(
      `https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=${limit}&location=${location}&term=${keyword}`,
      { headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` } }
    );

    console.log(result.data.businesses.length)

    res.status(200).json(result.data.businesses);
  } catch (e) {
    console.error(e.response.data.error);
    res.status(400).send(e.response.data.error.description)
  }
}
