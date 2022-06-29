import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import axios from "axios";
import TripCard from "./TripCard"

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const url = "http://localhost:3333/";

  const getData = async () => {
    await axios
      .get(`${url}trips`)
      .then(async (response) => {
        const allTrips = response.data;
        setTrips(allTrips);
      })
      .catch((err) => console.debug(err));
  };

  useEffect(() => {
    getData();
    const interval = setInterval(getData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid container spacing={1} sx={{ width: { lg: "59%", xs: "90%" } }}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            sx={{ fontWeight: "900", fontSize: 20, pt: 6, pb: 4 }}
          >
            Recently viewed trips
          </Typography>
        </Grid>

        {trips &&
          trips.map((trip) => (
            <Grid item xs={4} style={{}}>
             <TripCard trip={trip}/>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Trips;
