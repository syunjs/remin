import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import screenfull from "screenfull";
import { useSnapshot } from "valtio";

import uiState from "../state/ui";

export default function Header({ drawerOpen, toggleDrawer }) {
  const logoSrc = new URL("logo-full.png", import.meta.url);
  const uiSnap = useSnapshot(uiState);

  function toggleFullscreen() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
      uiState.fullScreen = !uiState.fullScreen;
    } else {
      console.log("Fullscreen is not supported");
    }
  }

  return (
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

        <IconButton color="inherit" onClick={toggleDrawer}>
          {drawerOpen ? (
            <FormatIndentDecreaseIcon />
          ) : (
            <FormatIndentIncreaseIcon />
          )}
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton color="inherit" size="large">
            <SearchIcon></SearchIcon>
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsNoneIcon></NotificationsNoneIcon>
            </Badge>
          </IconButton>

          <IconButton color="inherit">
            <LanguageIcon></LanguageIcon>
          </IconButton>

          <IconButton color="inherit" onClick={toggleFullscreen}>
            {uiSnap.fullScreen ? (
              <FullscreenExitIcon></FullscreenExitIcon>
            ) : (
              <FullscreenIcon></FullscreenIcon>
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
