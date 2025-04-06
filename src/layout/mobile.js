import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";

import DrawerContent from "./drawer-content";

export default function MobileLayout() {
  const drawerWidth = 240;
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleDrawerToggle() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <>
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

      <Drawer
        onClose={handleDrawerToggle}
        open={drawerOpen}
        slotProps={{
          root: {
            keepMounted: true, // Better open performance on mobile.
          },
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        variant="temporary"
      >
        <DrawerContent />
      </Drawer>
    </>
  );
}
