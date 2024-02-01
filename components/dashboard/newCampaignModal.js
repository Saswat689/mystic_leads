import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { roboto } from "@/config";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 2,
};

export default function NewCampaignModal({ open, setOpen }) {
  let router = useRouter();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");

  async function createCampaign() {
    try {
      if (!name) {
        return alert("Name required");
      }
      let res = await axios.post("/api/campaigns/new", {
        campaignname: name,
      });

      if (res.status == 201) {
        alert("Campaign created");
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
          <h1>Create A New Campaign</h1>

          <p className="mb-8">
            Create a new campaign to store all your leads that are similar and
            then export them conveniently.
          </p>

          <TextField
            id="outlined-basic"
            style={{marginBottom: '1rem'}}
            label="Enter Name of the Campaign"
            variant="outlined"
            placeholder="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={createCampaign}
          >
            Add Campaign
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
