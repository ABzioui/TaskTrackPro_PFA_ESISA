const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

// styled is a way to re use css stylr in a componenets
// material UI has this component Box that allow you to pass properties as if they're CSS properties.
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
