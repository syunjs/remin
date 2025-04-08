import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import DrawerContent from "./drawer-content";

export default function Layout() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = useState(!isMobile); // By default, the drawer is open on desktop and closed on mobile.
  const logoSrc = new URL("logo-full.png", import.meta.url);
  const drawerWidth = 240;
  // change drawer open state when the screen size changes
  useEffect(() => {
    setDrawerOpen(!isMobile);
  }, [isMobile]);

  function handleDrawerClose() {
    setDrawerOpen(false);
  }

  return (
    <Box className="flex h-screen">
      <AppBar
        color="white"
        elevation={0}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Box className="mr-[24px] flex h-[64px] items-center overflow-hidden">
            <img
              alt="logo"
              className="h-[64px] w-[128px] object-cover object-center"
              src={logoSrc}
            />
          </Box>

          <IconButton
            color="inherit"
            onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}
          >
            {drawerOpen ? (
              <FormatIndentDecreaseIcon />
            ) : (
              <FormatIndentIncreaseIcon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        onClose={isMobile ? handleDrawerClose : undefined}
        open={drawerOpen}
        sx={{
          width: drawerOpen ? drawerWidth : 0,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={isMobile ? "temporary" : "persistent"}
      >
        <Toolbar></Toolbar>
        <DrawerContent></DrawerContent>
      </Drawer>

      <Box className="grow p-[20px]" component="main">
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
