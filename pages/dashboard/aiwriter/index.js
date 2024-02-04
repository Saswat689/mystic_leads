import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]";
import Layout from "../layout";
import { roboto } from "@/config";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import gemini from "@/components/gemini";
import axios from "axios";

export default function Page({ campaigns, username,freeTrial }) {
  const [pf, setPf] = useState("");
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [selectedLead, setSelectedLead] = useState("");
  const [loading, setLoading] = useState(false);
  const [postDescription, setPostDescription] = useState("");
  const [about, setAbout] = useState("");
  const [response, setResponse] = useState("");

  console.log(response);
  //state to track whether user has any active campaigns or not
  const [isNull, setIsNull] = useState(false);

  useEffect(() => {
    campaigns.map((c) => {
      if (c) {
        setIsNull(true);
      }
    });
  }, []);

  //use gemini api
  async function GenerateFBPost() {
    try {
      setLoading(true);
      const { bizName, phoneNo, address, website } = selectedLead;
      const data = await gemini(
        `create a facebook post for a business named ${bizName} with phone Number ${phoneNo} and website ${website}. Their address is ${address}. The post should be ${postDescription}. Here is some info about the business you need to use ${about}.`
      );
      setLoading(false);
      setResponse(data);
    } catch (e) {
      setLoading(false);
      alert("Error occured. Try later.");
      console.error(e);
    }
  }

  async function GenerateTwitterPost() {
    try {
      setLoading(true);
      const { bizName, phoneNo, address, website } = selectedLead;
      let res = await gemini(
        `Create a twitter thread for a business named ${bizName} with phone Number ${phoneNo} and website ${website}. Their address is ${address}. The post should be ${postDescription}. Here is some info about the business you need to use ${about}. Split the post into multiple threads. Keep it engaging.`
      );
      setLoading(false);
      setResponse(res);
    } catch (e) {
      setLoading(false);
      alert("Error occured. Try later.");
      console.error(e);
    }
  }

  async function GenerateColdEmail() {
    try {
      setLoading(true);
      const { bizName, phoneNo, address, website } = selectedLead;
      let res = await gemini(
        `Create a cold email to a business named ${bizName} with phone Number ${phoneNo} and website ${website}. Receiver's address is ${address}. The post should be ${postDescription}. Here is some info about the business you need to use ${about}. Use my name ${username} at the footer.`
      );
      setLoading(false);
      setResponse(res);
    } catch (e) {
      setLoading(false);
      alert("Error occured. Try later.");
      console.error(e);
    }
  }

  function copyText(entryText) {
    navigator.clipboard.writeText(entryText);
    alert("Text Copied Successfully");
  }

  console.log(selectedLead);

  return (
    <Layout freeTrial={freeTrial}>
      <div className={"w-full h-full py-8 " + roboto.className}>
        {!response && (
          <div className="flex py-8 pl-8 pr-0 text-white bg-blue-600 rounded-lg shadow-lg gap-x-4">
            <div>
              <h2>AI writing tools</h2>
              <p className="leading-loose">
                Want to write that high converting email but don't know how to
                get started? We've got you covered. Choose from pre made
                templates or use AI to write for you.
              </p>
            </div>
            <div>
              <img src="/undraw_ai.svg" className="w-3/4" />
            </div>
          </div>
        )}

        {!isNull ? (
          <>
            <div className="flex flex-col items-center py-12 gap-y-0">
              <h2 className="mb-2">No campaigns created Yet</h2>
              <p>Create campaigns to save your leads and export them</p>
            </div>
          </>
        ) : (
          <>
            {!pf ? (
              <div className="flex items-center justify-center px-12 py-12 mt-12 shadow-lg md:px-40 bg-gray-50">
                <FormControl fullWidth style={{ marginBottom: "1rem" }}>
                  <InputLabel id="pf-select">Select Your Platform</InputLabel>
                  <Select
                    labelId="pf-select"
                    value={pf}
                    label="Pf"
                    className="text-blue-500 border border-blue-400 border-solid"
                    onChange={(event) => setPf(event.target.value)}
                  >
                    <MenuItem value="facebook">Facebook</MenuItem>
                    <MenuItem value="twitter">Twitter</MenuItem>
                    <MenuItem value="email">Cold Email</MenuItem>
                  </Select>
                </FormControl>
              </div>
            ) : (
              <div className="mt-12 shadow-lg bg-gray-50">
                {loading && <LinearProgress />}

                {pf == "facebook" && (
                  <>
                    {!response ? (
                      <div className="md:px-20 px-12 py-12">
                        <h3 className="mb-8 text-2xl">
                          AI Facebook Post Generator
                        </h3>
                        <div className="flex items-center justify-center gap-x-4">
                          <FormControl
                            fullWidth
                            style={{ marginBottom: "1rem" }}
                          >
                            <InputLabel id="campaign-select">
                              Select Your Campaign
                            </InputLabel>
                            <Select
                              labelId="campaign-select"
                              value={selectedCampaign}
                              label="campaign"
                              className="border border-blue-400 border-solid"
                              onChange={(event) =>
                                setSelectedCampaign(event.target.value)
                              }
                            >
                              {campaigns.map((c) => (
                                <MenuItem value={c}>{c?.name}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          {selectedCampaign && (
                            <FormControl
                              fullWidth
                              style={{ marginBottom: "1rem" }}
                            >
                              <InputLabel id="lead-select">
                                Select Lead
                              </InputLabel>
                              <Select
                                labelId="lead-select"
                                value={selectedLead}
                                label="lead"
                                className="border border-blue-400 border-solid"
                                onChange={(event) =>
                                  setSelectedLead(event.target.value)
                                }
                              >
                                {selectedCampaign.leads.map((l) => (
                                  <MenuItem value={l}>{l.bizName}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        </div>
                        {selectedLead && (
                          <div className="flex flex-col items-center">
                            <TextField
                              fullWidth
                              multiline
                              id="outlined-basic"
                              label="Describe the post you wanna create..."
                              variant="outlined"
                              value={postDescription}
                              onChange={(event) =>
                                setPostDescription(event.target.value)
                              }
                            />
                            <TextField
                              fullWidth
                              style={{ marginTop: "1rem" }}
                              multiline
                              id="outlined-basic"
                              label="Describe the lead(about his business) or some unique points about him."
                              variant="outlined"
                              value={about}
                              onChange={(event) => setAbout(event.target.value)}
                            />
                            <Button
                              onClick={GenerateFBPost}
                              variant="contained"
                              style={{ marginTop: "1rem" }}
                            >
                              Generate Post
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-12">
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-2xl">Here's the result</h3>
                          <Button
                            onClick={() => copyText(response)}
                            variant="contained"
                            startIcon={<ContentCopyIcon />}
                          >
                            Copy Text
                          </Button>
                        </div>
                        <p style={{ whiteSpace: "pre-line" }}>{response}</p>
                      </div>
                    )}
                  </>
                )}

                {pf == "twitter" && (
                  <>
                    {!response ? (
                      <div className="md:px-20 px-12 py-12">
                        <h3 className="mb-8 text-2xl">
                          Twitter Post Generator
                        </h3>
                        <div className="flex items-center justify-center gap-x-4">
                          <FormControl
                            fullWidth
                            style={{ marginBottom: "1rem" }}
                          >
                            <InputLabel id="campaign-select">
                              Select Your Campaign
                            </InputLabel>
                            <Select
                              labelId="campaign-select"
                              value={selectedCampaign}
                              label="campaign"
                              className="border border-blue-400 border-solid"
                              onChange={(event) =>
                                setSelectedCampaign(event.target.value)
                              }
                            >
                              {campaigns.map((c) => (
                                <MenuItem value={c}>{c?.name}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          {selectedCampaign && (
                            <FormControl
                              fullWidth
                              style={{ marginBottom: "1rem" }}
                            >
                              <InputLabel id="lead-select">
                                Select Lead
                              </InputLabel>
                              <Select
                                labelId="lead-select"
                                value={selectedLead}
                                label="lead"
                                className="border border-blue-400 border-solid"
                                onChange={(event) =>
                                  setSelectedLead(event.target.value)
                                }
                              >
                                {selectedCampaign.leads.map((l) => (
                                  <MenuItem value={l}>{l.bizName}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        </div>
                        {selectedLead && (
                          <div className="flex flex-col items-center">
                            <TextField
                              fullWidth
                              className="mt-8"
                              multiline
                              id="outlined-basic"
                              label="Describe the post you wanna create..."
                              variant="outlined"
                              value={postDescription}
                              onChange={(event) =>
                                setPostDescription(event.target.value)
                              }
                            />
                            <TextField
                              fullWidth
                              className="mt-8"
                              multiline
                              id="outlined-basic"
                              label="Describe the lead(about his business) or some unique points about him."
                              variant="outlined"
                              value={about}
                              onChange={(event) => setAbout(event.target.value)}
                            />
                            <Button
                              onClick={GenerateTwitterPost}
                              variant="contained"
                              className="mt-8"
                            >
                              Generate Tweet
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-12">
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-2xl">Here's the result</h3>
                          <Button
                            onClick={() => copyText(response)}
                            variant="contained"
                            startIcon={<ContentCopyIcon />}
                          >
                            Copy Text
                          </Button>
                        </div>
                        <p style={{ whiteSpace: "pre-line" }}>{response}</p>
                      </div>
                    )}
                  </>
                )}
                {pf == "email" && (
                  <>
                    {!response ? (
                      <div className="md:px-20 px-12 py-12">
                        <h3 className="mb-8 text-2xl">Cold Email Generator</h3>
                        <div className="flex items-center justify-center gap-x-4">
                          <FormControl
                            fullWidth
                            style={{ marginBottom: "1rem" }}
                          >
                            <InputLabel id="campaign-select">
                              Select Your Campaign
                            </InputLabel>
                            <Select
                              labelId="campaign-select"
                              value={selectedCampaign}
                              label="campaign"
                              className="border border-blue-400 border-solid"
                              onChange={(event) =>
                                setSelectedCampaign(event.target.value)
                              }
                            >
                              {campaigns.map((c) => (
                                <MenuItem value={c}>{c?.name}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          {selectedCampaign && (
                            <FormControl
                              fullWidth
                              style={{ marginBottom: "1rem" }}
                            >
                              <InputLabel id="lead-select">
                                Select Lead
                              </InputLabel>
                              <Select
                                labelId="lead-select"
                                value={selectedLead}
                                label="lead"
                                className="border border-blue-400 border-solid"
                                onChange={(event) =>
                                  setSelectedLead(event.target.value)
                                }
                              >
                                {selectedCampaign.leads.map((l) => (
                                  <MenuItem value={l}>{l.bizName}</MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          )}
                        </div>
                        {selectedLead && (
                          <div className="flex flex-col items-center">
                            <TextField
                              fullWidth
                              className="mt-8"
                              multiline
                              id="outlined-basic"
                              label="Describe the post you wanna create..."
                              variant="outlined"
                              value={postDescription}
                              onChange={(event) =>
                                setPostDescription(event.target.value)
                              }
                            />
                            <TextField
                              fullWidth
                              className="mt-8"
                              multiline
                              id="outlined-basic"
                              label="Describe the lead(about his business) or some unique points about him."
                              variant="outlined"
                              value={about}
                              onChange={(event) => setAbout(event.target.value)}
                            />
                            <Button
                              onClick={GenerateColdEmail}
                              variant="contained"
                              className="mt-8"
                            >
                              Generate Cold Email
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="p-12">
                        <div className="flex items-center justify-between mb-8">
                          <h3 className="text-2xl">Here's the result</h3>
                          <Button
                            onClick={() => copyText(response)}
                            variant="contained"
                            startIcon={<ContentCopyIcon />}
                          >
                            Copy Text
                          </Button>
                        </div>
                        <p style={{ whiteSpace: "pre-line" }}>{response}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </>
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
    let { data } = await axios.post(
      `${process.env.MONGODB_URI}/findOne`,
      {
        dataSource: "cluster",
        database: "test",
        collection: "users",
        filter: {
          email: session.user.email,
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

    //if user not paid and free trial over(acc older than 1 day)
    let accAge = (new Date().getTime() - Number(data.document.createdAt))/(1000*60*24*60) //account age in days

    if (!data.document?.hasPaid) {
      if (accAge > 1) {
        //1 day free trial expired
        return { redirect: { destination: "/payment/new" } };
      } else {
        return {
          props: {
            freeTrial: true,
            email: session.user.email || null,
            username: data.document.username,
            campaigns: data.document?.campaigns || [],
          },
        };
      }
    } else {
      return {
        props: {
          freeTrial: false,
          email: session.user.email || null,
          username: data.document.username,
          campaigns: data.document?.campaigns || [],
        },
      };
    }
  } catch (e) {
    console.log(e);
    return {
      props: {
        freeTrial: true,
        email: null,
        username: "",
        campaigns: [],
      },
    };
  }
}