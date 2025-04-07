import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";

import DrawerContent from "./drawer-content";

export default function DesktopLayout() {
  const drawerWidth = 240;
  const [drawerOpen, setDrawerOpen] = useState(true);
  const logoSrc = new URL("logo-full.png", import.meta.url);

  return (
    <Box className="flex h-screen">
      <AppBar
        color="white"
        elevation={0}
        open={drawerOpen}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Box className="flex h-[64px] items-center overflow-hidden">
            <img
              alt="logo"
              className="mr-[20px] h-[64px] w-[128px] object-cover object-center"
              src={logoSrc}
            />
          </Box>

          <IconButton
            aria-label="menu"
            color="inherit"
            onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={drawerOpen}
        sx={{
          width: drawerOpen ? drawerWidth : 0,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
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
