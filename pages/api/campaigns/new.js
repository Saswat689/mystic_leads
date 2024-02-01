import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

//add a new campaign array by name in the campaigns field of user
//requires campaign name in body
export default async function handler(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);

    //user is logged in and secure
    if (!session) {
        return res.status(401).send("Access forbidden")
    }

    if (req.method !== 'POST') {
        return res.status(401).send("Only Post request authorised");
    }

    const { campaignname } = req.body;

    console.log(campaignname,session.user.email)
  
    let resp = await axios.post(
      `${process.env.MONGODB_URI}/updateOne`,
      {
        dataSource: "cluster",
        database: "test",
        collection: "users",
        filter: { email: session.user.email },
        update: { $push: { campaigns: { name: campaignname, leads: [], createdAt: Date.now(), id:  uuidv4()} } },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          apiKey: process.env.DATAAPI_KEY,
        },
      }
    );

    console.log(resp.data)

    res.status(201).send('Campaign created')

  } catch (e) {
    console.error(e);
  }
}
