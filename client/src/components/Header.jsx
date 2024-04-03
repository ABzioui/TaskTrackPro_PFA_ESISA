import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box textAlign="center">
        <Typography
          variant="h1"
          fontWeight="bold"
          color={theme.palette.secondary.main}
          marginTop="20px
          "
        >
          TaskTrack Pro
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
