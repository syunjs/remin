import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import menu from "../menu";

export default function DrawerContent({ closeDrawer }) {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);

    if (closeDrawer) {
      closeDrawer();
    }
  }

  return (
    <Box>
      {menu.map((menuItem) => {
        if (menuItem.subheader) {
          return (
            <ListSubheader key={menuItem.subheader}>
              {menuItem.subheader}
            </ListSubheader>
          );
        } else {
          if (menuItem.children) {
            return (
              <NestedList
                key={menuItem.path}
                menuItem={menuItem}
                navigateTo={navigateTo}
              />
            );
          } else {
            return (
              <ListItemButton
                key={menuItem.path}
                onClick={() => navigateTo(menuItem.path)}
                selected={pathname === "/" + menuItem.path}
                sx={{
                  "&.Mui-selected": {
                    "& .MuiListItemIcon-root": {
                      color: "primary.main",
                    },
                    "& .MuiListItemText-primary": {
                      color: "primary.main",
                      fontWeight: 500,
                    },
                  },
                }}
              >
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.label} />
              </ListItemButton>
            );
          }
        }
      })}
    </Box>
  );
}

function NestedList({ menuItem, navigateTo }) {
  const location = useLocation();
  const pathname = location.pathname;

  const isSelected = menuItem.children.some(
    (child) => pathname === "/" + menuItem.path + "/" + child.path,
  );

  const [open, setOpen] = useState(isSelected);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        selected={pathname.split("/")[1] === menuItem.path}
        sx={{
          "&.Mui-selected": {
            "& .MuiListItemIcon-root": {
              color: "primary.main",
            },
            "& .MuiListItemText-primary": {
              color: "primary.main",
              fontWeight: 500,
            },
          },
        }}
      >
        <ListItemIcon>{menuItem.icon}</ListItemIcon>
        <ListItemText primary={menuItem.label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open}>
        <List disablePadding>
          {menuItem.children.map((item) => {
            return (
              <ListItemButton
                key={item.path}
                onClick={() =>
                  navigateTo("/" + menuItem.path + "/" + item.path)
                }
                selected={pathname === "/" + menuItem.path + "/" + item.path}
                sx={{
                  paddingLeft: "40px",
                  "&.Mui-selected": {
                    "& .MuiListItemIcon-root": {
                      color: "primary.main",
                    },
                    "& .MuiListItemText-primary": {
                      color: "primary.main",
                      fontWeight: 500,
                    },
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}

DrawerContent.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
};

NestedList.propTypes = {
  menuItem: PropTypes.object.isRequired,
  navigateTo: PropTypes.func.isRequired,
};
