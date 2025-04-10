import { Drawer, Toolbar } from "@mui/material";
import PropTypes from "prop-types";

import DrawerContent from "./drawer-content";

export default function SideDrawer({ drawerOpen, isMobile, closeDrawer }) {
  const drawerWidth = 240;

  return (
    <Drawer
      onClose={isMobile ? closeDrawer : undefined}
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
      <DrawerContent closeDrawer={closeDrawer}></DrawerContent>
    </Drawer>
  );
}

SideDrawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};
