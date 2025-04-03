import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Fab } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../layoutComponents/Header/Header";
import background from "../images/background.png";
import WelcomeModal from "../layoutComponents/WelcomeModal/WelcomeModal";
import HelpIcon from "@mui/icons-material/Help";
import { Info } from "@mui/icons-material";

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}));

const Background = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  filter: "blur(50px)",
  opacity: 1,
  zIndex: 0,
}));

const MainContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  p: 3,
  position: "relative",
  zIndex: 1,
}));

const OutletComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledBox>
      <Header />
      <Background />
      <MainContent>
        <Outlet />
      </MainContent>
      <Fab
        color="secondary"
        aria-label="info"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 2,
        }}
        onClick={() => setOpen(true)}
      >
        <Info />
      </Fab>
      <WelcomeModal open={open} setOpen={setOpen} />
    </StyledBox>
  );
};

export default OutletComponent;
