import React, { useEffect, useState } from 'react'
import { getAllArtTool } from '../api/artTool-api'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, ListItem, Typography } from '@mui/material'

export default function HomePage() {
  const [artTool, setArtTool] = useState([])

  useEffect(() => {
    getAllArtTool()
      .then(data => {
        if (data)
          setArtTool(data)
      })
  }, [])

  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {artTool
          .filter(art => art.limitedTimeDeal === 0)
          .map((art) => (
            <Grid key={art.id} size={{ xs: 2, sm: 4, md: 4 }}>
              <ListItem>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={art.image}
                    title={art.artName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Name: {art.artName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Description: {art.description}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Price: {art.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Brand: {art.brand}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </ListItem>
            </Grid>
          ))}
      </Grid>
    </div>
  )
}
