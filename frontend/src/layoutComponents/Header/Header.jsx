import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { useLanguage } from "../../translate/LanguageProvider";
import { useTheme } from "../../theme/ThemeProvider";

import HeaderButtons from "./components/HeaderButtons";
import LanguageAndTheme from "./components/LanguageAndTheme";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  position: "sticky",
  top: 0,
  zIndex: 1000,
}));

const Header = () => {
  const { language, translations, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {translations.title}
        </Typography>
        <HeaderButtons />
        <LanguageAndTheme
          language={language}
          changeLanguage={changeLanguage}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
