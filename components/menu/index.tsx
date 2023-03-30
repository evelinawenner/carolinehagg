"use client";
import React, { useState, MouseEvent } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Typography, Stack } from "@mui/material";

interface IMenuItem {
  name: string;
  url: string;
}

interface IMenu {
  name: string;
  menuItems?: IMenuItem[];
  url?: string;
}

export const TopMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menu: IMenu[] = [
    {
      name: "Film",
      menuItems: [
        { name: "Music videos & visuals", url: "/pages/film/ngt" },
        { name: "Dance", url: "/pages/film/ngt" },
        { name: "Documentaries", url: "/pages/film/ngt" },
      ],
    },
    {
      name: "Stills",
      menuItems: [
        { name: "Portraits", url: "/pages/film/ngt" },
        { name: "Artwork", url: "/pages/film/ngt" },
        { name: "Nature & people", url: "/pages/film/ngt" },
      ],
    },
    { name: "Poetry", url: "/pages/poetry" },
    { name: "About me", url: "/pages/about" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "6rem",
        px: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>Caroline Hägg</Typography>
      <Stack direction="row" spacing={3}>
        {menu.map((menu, index) => (
          <Box key={index}>
            <Button
              id={`basic-button-${index}`}
              aria-controls={open ? `basic-menu-${index}` : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {menu.name}
            </Button>
            {menu.menuItems && (
              <Menu
                id={`basic-menu-${index}`}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": `basic-button-${index}`,
                }}
              >
                {menu.menuItems.map((item, index) => (
                  <MenuItem onClick={handleClose} key={index}>
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
export const SideMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
