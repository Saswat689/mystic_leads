import axios from "axios";

async function retrievePlaceDetails(placeId) {
  try {
    let params = new URLSearchParams({
      place_id: placeId,
      key: process.env.G_API_KEY,
      fields: "formatted_phone_number,website,url,formatted_address",
    });
    console.log(params.toString());
    let res = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`
    );
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export default async function handler(req, res) {
  try {
    console.log("hit");
    let data = await retrievePlaceDetails(req.query.placeId);
    res.status(200).json(data);
    console.log(data,'yo')
  } catch (e) {
    console.error(e);
  }
}
