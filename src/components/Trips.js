import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Grid,
} from "@mui/material";
import trips from "../data";

const Trips = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center"}}>
      <Grid container spacing={2} sx={{width: {lg: "64%", xs: "90%"}}}>
        <Grid item xs={12}>
          <Typography>Recently viewed trips</Typography>
        </Grid>

        {trips &&
          trips.map((trip) => (
            <Grid item xs={4} style={{}}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="180"
                  image={trip.image}
                />
                <CardContent style={{ textAlign: "left" }}>
                  <Typography variant="body2" color="text.secondary">
                    {trip.description}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {trip.name}
                  </Typography>
                  <div style={{ display: "flex" }}>
                    <Rating
                      name="read-only"
                      value={trip.rate}
                      precision={0.1}
                      readOnly
                    />
                    <Typography variant="body2" color="text.primary">
                      {trip.rate}
                    </Typography>
                  </div>
                  <div style={{ display: "flex" }}>
                    <Typography variant="body2" color="text.secondary">
                      From {trip.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {trip.oldPrice}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Trips;
