import React, { useEffect, useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";
import { useLanguage } from "../../translate/LanguageProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AboutImage from "./components/aboutImage";
import TextImage from "../../layoutComponents/TextImage/TextImage";

import bear from "../../images/bear.jpg";
import lucas from "../../images/lucas.png";
import gitDark from "../../images/gitDark.png";
import gitLight from "../../images/gitLight.png";
import commissioning from "../../images/commissioning.png";
import presenting from "../../images/presenting.jpg";

import "./style.css";

const AboutPage = () => {
  const { theme } = useTheme();
  const { translations } = useLanguage();
  const navigate = useNavigate();

  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      { img: null, caption: "" },
      { img: null, caption: "" },
      { img: theme === "light" ? gitLight : gitDark, caption: "GitHub" },
      { img: null, caption: "" },
      { img: commissioning, caption: "Commissioning" },
      { img: presenting, caption: "Presenting" },
    ]);
  }, [theme]);

  return (
    <div
      className="about-container fadeIn"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "#333" : "#f5f5f5",
      }}
    >
      <AboutImage frontImage={bear} backImage={lucas} />
      <h1 style={{ color: theme === "light" ? "#2c3e50" : "#e0e0e0" }}>
        {translations?.about}
      </h1>
      {translations?.aboutParagraphs?.map((paragraph, index) => (
        <>
          {images[index]?.img && (
            <TextImage
              imageSrc={images[index]?.img}
              caption={images[index]?.caption}
            />
          )}
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        </>
      ))}
      <div className="about-buttons">
        <Button
          variant="contained"
          onClick={() => navigate("/projects")}
          style={{ flexGrow: 1 }}
        >
          {translations?.projects}
        </Button>
        <Button
          variant="outlined"
          onClick={() => navigate("/contact")}
          style={{ flexGrow: 1 }}
        >
          {translations?.contactButton}
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;
