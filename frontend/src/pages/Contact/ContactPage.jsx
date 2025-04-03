import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "../../theme/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../../translate/LanguageProvider";
import DescriptionIcon from "@mui/icons-material/Description";
import lucas from "../../images/lucas.png";

import "./style.css";

const buttonStyles = {
  width: "100%",
  mb: 2,
  textTransform: "none",
  borderRadius: 2,
  fontSize: "1rem",
  fontWeight: 500,
};

const ContactPage = () => {
  const { theme } = useTheme();
  const { translations } = useLanguage();

  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/documents/lucas_soares_cv.pdf";
    link.download = "lucas_soares_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="contact-container">
      <div
        className="contact-content fadeIn"
        style={{ backgroundColor: theme === "light" ? "white" : "black" }}
      >
        <div className="profile-image">
          <img src={lucas} alt="Profile" />
        </div>
        <div className="contact-info">
          <div>
            <h2>{translations.contact?.title}</h2>
            <p>{translations.contact?.description}</p>
          </div>
          <div className="contact-links">
            <Button
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faGoogle} />}
              onClick={() =>
                (window.location.href = "mailto:lucashlsoares@gmail.com")
              }
              sx={buttonStyles}
            >
              Email
            </Button>
            <Button
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faLinkedin} />}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/lucas-soares-6663ab197/",
                  "_blank"
                )
              }
              sx={buttonStyles}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<FontAwesomeIcon icon={faGithub} />}
              onClick={() =>
                window.open("https://github.com/LSoares02", "_blank")
              }
              sx={buttonStyles}
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<DescriptionIcon />}
              onClick={handleCvDownload}
              sx={buttonStyles}
            >
              CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
