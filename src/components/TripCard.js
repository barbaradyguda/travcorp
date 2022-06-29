import React from 'react'
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Rating
  } from "@mui/material";
  import StarIcon from "@mui/icons-material/Star";

const TripCard = ({trip}) => {
  return (
    <Card sx={{ maxWidth: 360, boxShadow: "1px 2px 3px d7d7d7" }}>
    <CardMedia
      component="img"
      alt="green iguana"
      height="240"
      image={trip.image}
    />
    <CardContent style={{ textAlign: "left" }}>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontWeight: 600 }}
      >
        {trip.description}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontWeight: 900 }}
      >
        {trip.name}
      </Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Rating
          name="read-only"
          value={trip.rate}
          precision={0.1}
          readOnly
          size="small"
          emptyIcon={
            <StarIcon
              style={{ color: "#fff" }}
              fontSize="inherit"
            />
          }
          sx={{ color: "#ffeb0b", mb: 1 }}
        />
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            color: "#000",
            lineHeight: "24px",
            fontWeight: 700,
            fontSize: 14,
            ml: 1,
          }}
        >
          {trip.rate}
        </Typography>
      </div>
      <div style={{ display: "flex" }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: "#000",
            lineHeight: "24px",
            fontWeight: 700,
            fontSize: 16,
            mr: 1,
          }}
        >
          From {"€" + trip.price}
        </Typography>
        <Typography>•</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textDecoration: "line-through",
            color: "#767676",
            lineHeight: "24px",
            fontWeight: 700,
            fontSize: 16,
            ml: 1,
          }}
        >
          {"Price €" + trip.oldPrice}
        </Typography>
      </div>
    </CardContent>
  </Card>
  )
}

export default TripCard