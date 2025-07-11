import { use, useEffect, useState } from "react";
import {
  Card, CardActions, CardContent, CardMedia,
  Button, Typography, Grid, Chip, Box
} from "@mui/material";
import { deleteOrchidById, getAllOrchids } from "../api/orchids-api";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [orchids, setOrchids] = useState([]);
  const [deleteOrchids, setDeleteOrchids] = useState(null)
  const [updateOrchids, setUpdateOrchids] = useState(null)

  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`detail/${id}`)
  }

  const handleDelete = (id) => {
    setDeleteOrchids(id)
      if(window.confirm("Are you want to delete?")) {
        setOrchids(orchids.filter(orchid => orchid.id !== id))
        deleteOrchidById(id)
          .then(data => {
            if(data)
              alert(`Delete ${deleteOrchids} successfully`)
            else
              alert(`Delete ${deleteOrchids} failed`)
          })
      }
  }

  const handleUpdate = (id) => {
    navigate(`/update/${id}`)
    setUpdateOrchids(id)
  }

  useEffect(() => {
    getAllOrchids()
      .then(data => {
        if (data) setOrchids(data);
      });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Orchid Collection
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {orchids.map(orchid => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={orchid.id}>
            <Card sx={{maxWidth:"350px", height: '100%', display: 'flex', flexDirection:"column" }}>
              <CardMedia
                component="img"
                alt={orchid.name}
                height="180"
                image={orchid.image}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {orchid.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Country:</strong> {orchid.origin}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Category:</strong> {orchid.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Rating:</strong> {orchid.rating}
                </Typography>
                {orchid.isSpecial && (
                  <Chip label="Special" color="error" size="small" sx={{ mt: 1 }} />
                )}
              </CardContent>
              <CardActions style={{margin: '0 auto'}}>
                <Button size="small" variant="contained" onClick={() => handleDetail(orchid.id)}>Detail</Button>
                <Button size="small" variant="contained" onClick={() => handleDelete(orchid.id)}>Delete</Button>
                <Button size="small" variant="contained" onClick={() => handleUpdate(orchid.id)}>Update</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
