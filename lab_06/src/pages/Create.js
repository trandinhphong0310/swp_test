import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { createOrchid } from "../api/orchids-api";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [orchids, setOrchids] = useState({
    name: "",
    image: "",
    rating: 0,
    isSpecial: false,
    origin: "",
    category: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      ...orchids,
      rating: Number(orchids.rating)
    };

    createOrchid(dataToSend)
      .then((data) => {
        if (data) {
          alert("Orchid created successfully");
          navigate("/");
        } else {
          alert("Orchid creation failed");
        }
      });
  };

  return (
    <div>
      <h1>Create Orchids</h1>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            label="Orchid Name"
            name="name"
            value={orchids.name}
            onChange={(e) => setOrchids({ ...orchids, name: e.target.value })}
            required
          />
          <TextField
            label="Orchid Image URL"
            name="image"
            value={orchids.image}
            onChange={(e) => setOrchids({ ...orchids, image: e.target.value })}
            required
          />
          <TextField
            label="Orchid Rating"
            name="rating"
            type="number"
            value={orchids.rating}
            onChange={(e) => setOrchids({ ...orchids, rating: Number(e.target.value) })}
            required
          />
          <TextField
            label="Orchid Country"
            name="origin"
            value={orchids.origin}
            onChange={(e) => setOrchids({ ...orchids, origin: e.target.value })}
            required
          />
          <TextField
            label="Orchid Category"
            name="category"
            value={orchids.category}
            onChange={(e) => setOrchids({ ...orchids, category: e.target.value })}
            required
          />
          <TextField
            select
            label="Is Special"
            name="isSpecial"
            value={orchids.isSpecial.toString()}
            onChange={(e) =>
              setOrchids({ ...orchids, isSpecial: e.target.value === "true" })
            }
            required
          >
            <MenuItem value="true">Yes</MenuItem>
            <MenuItem value="false">No</MenuItem>
          </TextField>
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            style={{ marginTop: "20px" }}
          >
            Create
          </Button>
        </div>
      </Box>
    </div>
  );
}
