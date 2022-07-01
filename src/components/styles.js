export const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
  },
  gridContainer: {
    width: { xl: "59%", lg: "70%", md: "78%", xs: "90%" },
  },
  pageTitle: {
    fontWeight: "900",
    fontSize: 20,
    pt: 6,
    pb: 4,
  },
  gridItem: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    maxWidth: 360,
    border: "1px solid #E8E8E8",
    boxShadow: "1px 2px 2px #F9F9F9",
    width: "100%",
    mb: 1,
  },
  cardContent: {
    textAlign: "left",
  },
  descriptionText: {
    fontWeight: 600,
  },
  nameText: {
    fontWeight: 900,
    fontSize: 22,
  },
  ratingBox: {
    display: "flex",
    alignItems: "center",
  },
  emptyStar: { color: "#fff" },
  fullStar: { color: "#ffeb0b", mb: 1 },
  rateNumber: {
    color: "#000",
    lineHeight: "24px",
    fontWeight: 700,
    fontSize: 14,
    ml: 1,
  },
  priceBox: { display: "flex" },
  priceText: {
    color: "#000",
    lineHeight: "24px",
    fontWeight: 700,
    fontSize: 16,
    mr: 1,
  },
  oldPriceText: {
    lineHeight: "24px",
    fontWeight: 700,
    fontSize: 16,
    ml: 1,
  },
};
