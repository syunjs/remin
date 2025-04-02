import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";

import DrawerContent from "./drawer-content";

export default function DesktopLayout() {
  const drawerWidth = 240;
  const [drawerOpen, setDrawerOpen] = useState(true);
  // const logo = new URL("logo-full.png", import.meta.url);

  return (
    <>
      <AppBar
        color="white"
        elevation={0}
        open={drawerOpen}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          {/* <Box
            sx={{
              height: 48,
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              marginRight: 2,
            }}
          >
            <img
              alt="logo"
              src={logo}
              style={{
                height: "auto",
                width: 120,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box> */}

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
          width: drawerWidth,
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
    </>
  );
}
