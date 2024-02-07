import PersonIcon from "@mui/icons-material/Person";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import axios from "axios";
import { useState, useEffect } from "react";
import GradeIcon from "@mui/icons-material/Grade";
import HomeIcon from "@mui/icons-material/Home";
import Checkbox from "@mui/material/Checkbox";
import { v4 as uuidv4 } from "uuid";

export default function SearchCard({
  name,
  address,
  phone,
  email,
  profileLink,
  profileImg,
  type,
  ratings,
  ratingsCount,
  placeId,
  selectedLeads,
  setSelectedLeads,
  setAllLeadsSelected,
  isAllLeadsSelected,
  categories,
  latitude,
  longitude,
}) {
  let [checked, setChecked] = useState(false);
  let [data, setData] = useState({});

  useEffect(() => {
    if (isAllLeadsSelected) {
      setChecked(true);
    } else {
      setSelectedLeads([]);
      setChecked(false);
    }
  }, [isAllLeadsSelected]);

  function removeBusiness() {
    setSelectedLeads((leads) => {
      return leads.filter((lead) => {
        return lead.bizName !== name;
      });
    });
  }

  function handleChecked() {
    if (type == "google") {
      //checked: false ? add the data
      if (!checked) {
        let leadObj = {
          id: uuidv4(),
          type: "google",
          bizName: name,
          phoneNo: data.formatted_phone_number,
          website: data.website,
          url: data.url,
          address: data.formatted_address,
          ratings: ratings + "" + ratingsCount,
        };

        //first obj
        if (selectedLeads.length == 0) {
          setSelectedLeads([leadObj]);
        } else {
          setSelectedLeads((exLeads) => {
            if (!exLeads) return [];
            return [...exLeads, leadObj];
          });
        }

        setChecked(true);
      } else {
        //checked: true ? remove the data
        removeBusiness();

        setChecked(false);
      }
    } else {
      //checked: false ? add the data
      if (!checked) {
        let leadObj = {
          id: uuidv4(),
          bizName: name,
          type: "yelp",
          profileImg,
          phoneNo: phone,
          url: profileLink,
          address: address,
          ratings: ratings + "" + ratingsCount,
        };

        //first obj
        if (selectedLeads.length == 0) {
          setSelectedLeads([leadObj]);
        } else {
          setSelectedLeads((exLeads) => {
            if (!exLeads) return [];
            return [...exLeads, leadObj];
          });
        }

        setChecked(true);
      } else {
        console.log(selectedLeads, "removing");
        //checked: true ? remove the data
        removeBusiness();

        setChecked(false);
      }
    }
  }

  async function extractPlaceDetails(place_id) {
    try {
      let leadObj = {
        id: uuidv4(),
        type: "yelp",
        bizName: name,
        profileImg,
        phoneNo: phone,
        url: profileLink,
        address: address,
        ratings: ratings + "" + ratingsCount,
      };

      if (type == "yelp") {
        //keep track of all data fetched
        setAllLeadsSelected((old) => {
          let newArr = [...old, leadObj];

          //prevent duplicate values
          return newArr.filter(
            (value, index, self) =>
              index === self.findIndex((t) => t.phoneNo === value.phoneNo)
          );
        });

        return;
      }

      let res = await axios.get("/api/search/gmb/details?placeId=" + place_id);

      let data = res.data.result;

      setData(data);

      //keep track of all data fetched
      setAllLeadsSelected((old) => {
        let leadObj = {
          id: uuidv4(),
          type: "google",
          bizName: name,
          phoneNo: data.formatted_phone_number,
          website: data.website,
          url: data.url,
          address: data.formatted_address,
          ratings: ratings + "" + ratingsCount,
        };

        let newArr = [...old, leadObj];

        //prevent duplicate values
        return newArr.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.phoneNo === value.phoneNo)
        );
      });
    } catch (e) {
      console.error(e);
    }
  }

  //for gleads
  useEffect(() => {
    if (placeId || type == "yelp") {
      extractPlaceDetails(placeId);
    }
  }, []);

  if (type == "yelp") {
    return (
      <div className="p-8 rounded-lg bg-gray-50 overflow-hidden relative shadow-md">
        <div className="flex items-center justify-between z-[4] relative">
          <a
            className="text-gray-900 no-underline hover:underline text-lg font-semibold hover:text-amber-500 transition-all"
            href={profileLink}
            target="_blank"
          >
            {name}
          </a>
          <Checkbox
            checked={checked}
            onChange={handleChecked}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <img src={profileImg} className="w-full h-[200px] bg-cover my-4"/>
        <iframe
          className="absolute top-0 left-0 w-full h-full z-[2] opacity-10 mb-6"
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=14&amp&output=embed`}
        ></iframe>
        <div className="z-[4] relative">
          {phone && (
            <div className="flex gap-x-4 items-start mb-4">
              <p className="flex items-center gap-x-2">
                <LocalPhoneIcon
                  className="text-amber-500"
                  style={{ fontSize: 30 }}
                />
                <span className="text-sm font-semibold">Phone</span>
              </p>
              <p className="text-sm text-gray-700 leading-loose">{phone}</p>
            </div>
          )}

          {email && (
            <div className="flex gap-x-4 items-center mb-4">
              <p className="flex items-center gap-x-2">
                <EmailIcon
                  className="text-amber-500"
                  style={{ fontSize: 30 }}
                />
                <span className="text-sm font-semibold">Email</span>
              </p>
              <p className="text-sm text-gray-700 leading-loose">{email}</p>
            </div>
          )}

          {address && (
            <div className="flex gap-x-4 items-start mb-4">
              <p className="flex items-center gap-x-2">
                <HomeIcon className="text-amber-500" style={{ fontSize: 30 }} />
                <span className="text-sm font-semibold">Address</span>
              </p>
              <p className="text-sm text-gray-700 leading-loose">{address}</p>
            </div>
          )}

          {categories.length > 0 && (
            <div className="flex gap-x-4 items-center overflow-auto mb-4">
              <p className="flex items-center gap-x-2">
                <PersonIcon
                  className="text-amber-500"
                  style={{ fontSize: 30 }}
                />
                <span className="text-sm font-semibold">Categories</span>
              </p>
              {categories.map((c) => (
                <span className="text-sm text-gray-700 leading-loose">
                  {c.alias}
                </span>
              ))}
            </div>
          )}

          <div className="flex justify-center pt-8 z-[4]">
            <a
              href={profileLink}
              target="_blank"
              className="flex items-center py-2 px-4 rounded-lg text-white font-normal cursor-pointer gap-x-4 bg-blue-500 hover:bg-blue-600 transition-all border-none no-underline"
            >
              <TelegramIcon />
              <span>Send a message</span>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      // profileLink,name,profileImg,website,phone,ratings,vicinity
      <div className="p-8 rounded-lg bg-gray-50 overflow-auto shadow-md">
        <div className="flex items-center justify-between mb-4">
          <a
            className="text-gray-900 no-underline hover:underline text-lg font-semibold hover:text-amber-500 transition-all"
            href={profileLink}
            target="_blank"
          >
            {name}
          </a>
          <Checkbox
            checked={checked}
            onChange={handleChecked}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <iframe
          className="w-full h-auto my-7"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=14&amp&output=embed`}
        ></iframe>
        <div>
          {data.website && (
            <div className="flex gap-x-4 items-center mb-4">
              <p className="flex items-center gap-x-2">
                <LaptopChromebookIcon
                  className="text-amber-500"
                  style={{ fontSize: 30 }}
                />
                <span className="text-sm font-semibold">Website</span>
              </p>
              <a className="link" href={data.website} target="_blank">
                {data.website.includes("facebook")
                  ? "Go to Facebook Profile"
                  : "Go to Website"}
              </a>
            </div>
          )}

          {data.formatted_phone_number && (
            <div className="flex gap-x-4 items-start mb-4">
              <p className="flex items-center gap-x-2">
                <LocalPhoneIcon
                  className="text-amber-500"
                  style={{ fontSize: 30 }}
                />
                <span className="text-sm font-semibold">Phone</span>
              </p>
              <p className="text-sm text-gray-700 leading-loose">
                {data.formatted_phone_number}
              </p>
            </div>
          )}

          {ratings && (
            <div className="flex gap-x-4 items-start mb-4">
              <p className="flex items-center gap-x-2">
                <GradeIcon
                  className="text-amber-500"
                  style={{ fontSize: 30 }}
                />
                <span className="text-sm font-semibold">Ratings</span>
              </p>
              <p className="text-sm text-gray-700 leading-loose">
                {ratings} by {ratingsCount} people
              </p>
            </div>
          )}

          <div className="flex gap-x-4 items-start">
            <p className="flex items-center gap-x-2">
              <HomeIcon className="text-amber-500" style={{ fontSize: 30 }} />
              <span className="text-sm font-semibold">Address</span>
            </p>
            <p className="text-sm text-gray-700 leading-loose">
              {data.formatted_address}
            </p>
          </div>

          <div className="flex justify-center pt-8">
            <a
              href={data.url}
              target="_blank"
              className="flex items-center py-2 px-4 rounded-lg text-white font-normal cursor-pointer gap-x-4 bg-blue-500 hover:bg-blue-600 transition-all border-none no-underline"
            >
              <TelegramIcon />
              <span>View Full Profile</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
