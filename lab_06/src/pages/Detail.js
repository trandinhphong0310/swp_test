import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOrchidById } from '../api/orchids-api';
import {
    Card, CardContent, CardMedia, Typography, Grid, Chip, Box
} from "@mui/material";

export default function Detail() {
    const [orchids, setOrchids] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getOrchidById(id)
                .then(data => {
                    if (data)
                        setOrchids(data)
                })
        }
    }, [id])

    if (!orchids) {
        return <Typography align="center">Loading...</Typography>;
    }

    return (
        <Box sx={{ flexGrow: 1, padding: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Orchid Detail
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Card sx={{ maxWidth: "350px", height: '100%', display: 'flex', flexDirection: "column" }}>
                        <CardMedia
                            component="img"
                            alt={orchids.name}
                            height="180"
                            image={orchids.image}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h6" component="div">
                                {orchids.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Country:</strong> {orchids.origin}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Category:</strong> {orchids.category}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <strong>Rating:</strong> {orchids.rating}
                            </Typography>
                            {orchids.isSpecial && (
                                <Chip label="Special" color="error" size="small" sx={{ mt: 1 }} />
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
