import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router";

import DrawerContent from "./drawer-content";

export default function MobileLayout() {
  const drawerWidth = 240;
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleDrawerToggle() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <Box className="flex h-screen">
      <AppBar color="white" elevation={0} position="fixed">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          onClose={handleDrawerToggle}
          open={drawerOpen}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          variant="temporary"
        >
          <DrawerContent closeDrawer={() => setDrawerOpen(false)} />
        </Drawer>
      </Box>

      <Box className="grow p-[20px]" component="main">
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
