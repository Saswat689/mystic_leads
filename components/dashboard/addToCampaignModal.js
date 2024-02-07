import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { roboto } from "@/config";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export default function AddLeadsToCampaignModal({
  open,
  setOpen,
  campaigns,
  selectedLeads,
  setNewCampaign,
}) {
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const [isNull, setIsNull] = useState(false);

  useEffect(() => {
    campaigns.map((c) => {
      if (c) {
        setIsNull(true);
      }
    });
  }, []);

  const [id, setId] = useState("");

  async function addLeadsToCampaign() {
    try {
      if (selectedLeads.length == 0) {
        return alert("No Leads Selected");
      }
      let res = await axios.post("/api/campaigns/add", {
        id,
        leads: selectedLeads,
      });

      if (res.status == 200) {
        alert("Leads added successfully");
        router.reload();
        handleClose();
      }
    } catch (e) {
      console.error(e);
      alert("Error in creating campaign");
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={roboto.className}>
          <h1 className="font-bold text-2xl mb-4">Add Leads to Campaign</h1>

          <p className="mb-8">
            Select your campaign and add leads to it so that you can save them
            and export them.
          </p>

          {!isNull ? (
            <>
              <div className="flex flex-col items-center gap-y-0">
                <h2 className="pb-0 mb-4 text-2xl font-bold">No campaigns created Yet</h2>
                <p>Create campaigns to save your leads and export them</p>
                <Button
                  variant="contained"
                  onClick={() => setNewCampaign(true)}
                  style={{ marginTop: "0.8rem" }}
                  className="bg-blue-500"
                >
                  Create A New Campaign
                </Button>
              </div>
            </>
          ) : (
            <>
              <FormControl fullWidth style={{ marginBottom: "1rem" }}>
                <InputLabel id="demo-simple-select-label">
                  Select Campaign Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                >
                  {campaigns.map((campaign) => {
                    if (!campaign) return;
                    else
                      return (
                        <MenuItem value={campaign.id}>{campaign.name}</MenuItem>
                      );
                  })}
                </Select>
              </FormControl>

              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={addLeadsToCampaign}
                className="bg-blue-500"
              >
                Add Selected Leads
              </Button>
              <Button
                variant="contained"
                onClick={() => setNewCampaign(true)}
                style={{ marginLeft: "0.8rem" }}
                className="bg-blue-500"
              >
                Create A New Campaign
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
