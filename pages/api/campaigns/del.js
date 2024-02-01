// import { authOptions } from "../auth/[...nextauth]";
// import { getServerSession } from "next-auth";

// //delete a single lead from a campaign

// export default async function handler(req, res) {
//   console.log("yp hit");
//   try {
//     const session = await getServerSession(req, res, authOptions);

//     //user is logged in and secure
//     if (!session) {
//       return res.status(401).send("Access forbidden");
//     }

//     if (req.method !== "POST") {
//       return res.status(401).send("Only Post request authorised");
//     }

//     const { id, bizName } = req.body;

//     let resp = await axios.post(
//       `${process.env.MONGODB_URI}/updateOne`,
//       {
//         dataSource: "cluster",
//         database: "test",
//         collection: "users",
//         filter: {
//           email: session.user.email,
//           campaigns: {
//             $elemMatch: {
//               id,
//             },
//           },
//         },
//         update: {
//           $pull: {
//             "campaigns.$.leads": {
//               id,
//             },
//           },
//         },
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           apiKey: process.env.DATAAPI_KEY,
//         },
//       }
//     );

//     console.log(res.data);

//     res.status(200).send("Lead deleted from the campaign");
//   } catch (e) {
//     console.error(e);
//   }
// }
