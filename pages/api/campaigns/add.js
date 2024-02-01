import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import axios from "axios";

//add leads to a particular user campaign

//lead obj {
// bizName: string,
// phoneNo: string,
// email: string,
// fbProfileUrl: string,
// googleUrl: string
// type: fb/google
//}

export default async function handler(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);

    //user is logged in and secure
    if (!session) {
      return res.status(401).send("Access forbidden");
    }

    if (req.method !== "POST") {
      return res.status(401).send("Only Post request authorised");
    }

    const { id, leads } = req.body;

    let resp = await axios.post(
      `${process.env.MONGODB_URI}/updateOne`,
      {
        dataSource: "cluster",
        database: "test",
        collection: "users",
        filter: {
          email: session.user.email,
          campaigns: {
            $elemMatch: {
              id
            },
          },
        },
        update: {
          $push: {
            "campaigns.$.leads": {
              $each: [...leads],
            },
          },
        },
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

    res.status(200).send("Leads successfully added to the campaign");
  } catch (e) {
    console.error(e);
  }
}
