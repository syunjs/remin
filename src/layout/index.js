import { Box, Toolbar, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import Header from "./header";
import SideDrawer from "./side-drawer";

export default function Layout() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = useState(!isMobile); // By default, the drawer is open on desktop and closed on mobile.

  // change drawer open state when the screen size changes
  useEffect(() => {
    setDrawerOpen(!isMobile);
  }, [isMobile]);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  function handleDrawerClose() {
    setDrawerOpen(false);
  }

  return (
    <Box className="flex h-screen">
      <Header drawerOpen={drawerOpen} toggleDrawer={toggleDrawer}></Header>

      <SideDrawer
        drawerOpen={drawerOpen}
        handleDrawerClose={handleDrawerClose}
        isMobile={isMobile}
      ></SideDrawer>

      <Box className="grow p-[20px]" component="main">
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
