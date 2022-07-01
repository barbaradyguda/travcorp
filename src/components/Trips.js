import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import axios from "axios";
import TripCard from "./TripCard";
import { styles } from "./styles";

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
    <Box sx={styles.mainContainer}>
      <Grid container spacing={1} sx={styles.gridContainer}>
        <Grid item xs={12}>
          <Typography variant="h1" sx={styles.pageTitle}>
            Recently viewed trips
          </Typography>
        </Grid>

        {trips &&
          trips.map((trip, index) => (
            <Grid
              item
              xl={4}
              lg={4}
              md={6}
              xs={12}
              key={index}
              sx={styles.gridItem}
            >
              <TripCard trip={trip} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Trips;
