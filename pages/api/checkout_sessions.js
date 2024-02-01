import Stripe from "stripe";
import axios from "axios";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//change live mode price key to test mode

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          customer_email: req.body.email,
          ui_mode: "embedded",
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: process.env.PRICE_ID,
              quantity: 1,
            },
          ],
          mode: "subscription",
          return_url: `${req.headers.origin}/payment/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        return res.send({ clientSecret: session.client_secret });
      } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json(err.message);
      }
    case "GET":
      try {
        const session = await stripe.checkout.sessions.retrieve(
          req.query.session_id
        );

        //if session complete then update value in db
        if (session.status == "complete") {

          let updated = await axios.post(
            `${process.env.MONGODB_URI}/updateOne`,
            {
              dataSource: "cluster",
              database: "test",
              collection: "users",
              filter: { email: session.customer_details.email },
              update: {
                $set: { hasPaid: true },
              }
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                apiKey: process.env.DATAAPI_KEY,
              },
            }
          );

          console.log(updated.data)

          if (updated) {
            return res.send({
              status: session.status,
              customer_email: session.customer_details.email,
            });
          }
        } else {
          return res.send({
            status: session.status,
            customer_email: session.customer_details.email,
          });
        }
      } catch (err) {
        console.log(err);
        return res.status(err.statusCode || 500).json(err.message);
      }
    default:
      res.setHeader("Allow", req.method);
      return res.status(405).end("Method Not Allowed");
  }
}
