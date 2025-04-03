import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, Button, styled } from "@mui/material";
import { useLanguage } from "../../translate/LanguageProvider";

import "./style.css";
import { useNavigate } from "react-router-dom";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(2px)",
  outline: "none",
  "&:focus": {
    outline: "none",
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "space-between",
  borderRadius: 8,
  padding: "2rem",
  maxWidth: 800,
  minHeight: 400,
  width: "90%",
  boxShadow: theme.shadows[5],
  outline: "none",
  "&:focus": {
    outline: "none",
  },
}));

const WelcomeModal = ({ open, setOpen }) => {
  const { translations } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const today = new Date().toISOString().split("T")[0];

    if (!lastVisit || lastVisit !== today) {
      setOpen(true);
      localStorage.setItem("lastVisit", today);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalContent>
        <Typography variant="h4" component="h2" align="left">
          {translations?.welcome}
        </Typography>
        <div className="modal-text">
          {translations?.welcomeText?.map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </div>
        <div className="modal-buttons">
          <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
            {translations?.close}
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/portfolio/contact");
              setOpen(false);
            }}
            sx={{ mt: 2 }}
          >
            {translations?.contactButton}
          </Button>
        </div>
      </ModalContent>
    </StyledModal>
  );
};

export default WelcomeModal;
