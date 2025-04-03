import React, { useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import defaultImage from "../../images/default.jpg";

const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));

const StyledImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  borderRadius: theme.shape.borderRadius,
  transition: "transform 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const StyledCaption = styled("div")(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
  fontWeight: "bold",
}));

const ModalImage = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  margin: "auto",
}));

const TextImage = ({ imageSrc, caption }) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (imageSrc) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledContainer>
        <StyledImage
          src={imageSrc ?? defaultImage}
          alt={caption}
          onClick={handleClick}
        />
        <StyledCaption>{caption}</StyledCaption>
      </StyledContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent>
          <ModalImage src={imageSrc} alt={caption} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TextImage;
