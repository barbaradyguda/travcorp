import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { styles } from "./styles";

const TripCard = ({ trip }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        alt={trip.imageAlt ? trip.imageAlt : "Picture from an exotic place"}
        height="240"
        image={trip.image && trip.image}
      />
      <CardContent sx={styles.cardContent}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={styles.descriptionText}
        >
          {trip.description ? trip.description : " "}
        </Typography>
        <Typography
          gutterBottom
          variant="h2"
          component="div"
          sx={styles.nameText}
        >
          {trip.name ? trip.name : " "}
        </Typography>
        <Box sx={styles.ratingBox}>
          {trip.rate && (
            <>
              <Rating
                name="read-only"
                value={trip.rate}
                precision={0.1}
                readOnly
                size="small"
                emptyIcon={
                  <StarIcon sx={styles.emptyStar} fontSize="inherit" />
                }
                sx={styles.fullStar}
              />
              <Typography
                variant="body2"
                color="text.primary"
                sx={styles.rateNumber}
              >
                {trip.rate}
              </Typography>
            </>
          )}
        </Box>
        <Box sx={styles.priceBox}>
          {trip.price && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={styles.priceText}
            >
              From {"€" + trip.price}
            </Typography>
          )}
          {trip.price && trip.oldPrice && <Typography>•</Typography>}
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              textDecoration: trip.price && "line-through",
              color: trip.price ? "#767676" : "#000",
            }}
            sx={styles.oldPriceText}
          >
            {trip.oldPrice && "Price €" + trip.oldPrice}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TripCard;
