import React from "react";
import { useLanguage } from "../../../translate/LanguageProvider";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderButtons = () => {
  const { translations } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const buttonStyle = {
    color: "inherit",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
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

  const handleNavigation = (path) => {
    navigate(path);
    handleClose();
  };

  if (isMobile) {
    return (
      <Box>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <StyledMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={() => handleNavigation("/about")}>
            <Button sx={buttonStyle}>{translations.about}</Button>
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/projects")}>
            <Button sx={buttonStyle}>{translations.projects}</Button>
          </MenuItem>
          <MenuItem onClick={() => handleNavigation("/contact")}>
            <Button sx={buttonStyle}>{translations.contactButton}</Button>
          </MenuItem>
        </StyledMenu>
      </Box>
    );
  }

  return (
    <>
      <Button onClick={() => navigate("/about")} sx={buttonStyle}>
        {translations.about}
      </Button>
      <Button onClick={() => navigate("/projects")} sx={buttonStyle}>
        {translations.projects}
      </Button>
      <Button onClick={() => navigate("/contact")} sx={buttonStyle}>
        {translations.contactButton}
      </Button>
    </>
  );
};

export default HeaderButtons;
