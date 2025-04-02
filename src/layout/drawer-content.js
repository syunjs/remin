import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useState } from "react";

import menu from "../../config/menu";

export default function DrawerContent() {
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
            return <NestedList key={menuItem.path} menuItem={menuItem} />;
          } else {
            return (
              <ListItem dense key={menuItem.path}>
                <ListItemButton>
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  <ListItemText primary={menuItem.label} />
                </ListItemButton>
              </ListItem>
            );
          }
        }
      })}
    </Box>
  );
}

function NestedList({ menuItem }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <ListItem dense>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>{menuItem.icon}</ListItemIcon>
          <ListItemText primary={menuItem.label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open}>
        <List component="div" dense>
          {menuItem.children.map((item) => {
            return (
              <ListItem key={item.path}>
                <ListItemButton sx={{ paddingLeft: "40px" }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
