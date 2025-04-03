import React, { useState } from "react";
import { IconButton, Menu, MenuItem, styled } from "@mui/material";
import {
  Language as LanguageIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from "@mui/icons-material";

export default function LanguageAndTheme({
  language,
  changeLanguage,
  theme,
  toggleTheme,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = styled(Menu)(({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
    "& .MuiMenuItem-root": {
      color: "white",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
    },
  }));

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        size="large"
        edge="end"
        aria-label="language"
        sx={{
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        <LanguageIcon />
      </IconButton>
      <IconButton color="inherit" onClick={() => toggleTheme()} size="large">
        {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            changeLanguage("en");
            handleClose();
          }}
          selected={language === "en"}
        >
          English 🇺🇸
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeLanguage("pt");
            handleClose();
          }}
          selected={language === "pt"}
        >
          Português 🇧🇷
        </MenuItem>
        <MenuItem
          onClick={() => {
            changeLanguage("es");
            handleClose();
          }}
          selected={language === "es"}
        >
          Español 🇪🇸
        </MenuItem>
      </StyledMenu>
    </>
  );
}
