import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const MainLayout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)"); // It returns a bool value if the screen is min than 600px
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId); //This line will grap the userID from the ReduxToolkit not ReduxToolkit Query

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar isNonMobile={isNonMobile} drawerWidth="250px" />
      <Box flexGrow={1}>
        <Navbar />
        {/* We added these two lines here to add the fonction to the button added on the NavBar */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
