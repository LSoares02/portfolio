import React, { useState } from "react";
import { useLanguage } from "../../translate/LanguageProvider";
import TextImage from "../../layoutComponents/TextImage/TextImage";

import { useTheme } from "../../theme/ThemeProvider";

import commissioning from "../../images/commissioning.png";
import curator from "../../images/curator.png";
import videoImpact from "../../images/videoImpact.png";
import speechAnalytics from "../../images/speechAnalytics.png";
import dt from "../../images/dt.jpg";
import poc from "../../images/poc.jpg";

import "./style.css";

const ProjectsPage = () => {
  const { translations } = useLanguage();
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = translations?.projectsExamples || [];

  const [projectImages, setProjectImages] = useState([
    commissioning,
    curator,
    videoImpact,
    speechAnalytics,
    dt,
    poc,
  ]);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  const getProjectImage = (index) => {
    return projectImages[index];
  };

  return (
    <div className="projects-container">
      <div className="projects-grid">
        <div
          className="projects-list-container fadeIn"
          style={{
            backgroundColor: theme === "light" ? "white" : "black",
            color: theme === "light" ? "#333" : "#f5f5f5",
          }}
        >
          <h1 style={{ color: theme === "light" ? "#2c3e50" : "#e0e0e0" }}>
            {translations?.projects}
          </h1>
          <p>{translations?.projectsPageIntro}</p>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-item ${
                  index === selectedProject ? "selected" : ""
                }`}
                onClick={() => handleProjectClick(index)}
              >
                <h2 className="project-title">{project.title}</h2>
                <p
                  className="project-description"
                  style={{ color: theme === "light" ? "#333" : "#f5f5f5" }}
                >
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="project-image-container">
          <TextImage
            imageSrc={getProjectImage(selectedProject)}
            caption={
              selectedProject !== null
                ? projects[selectedProject]?.title
                : translations?.clickOnAProject
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
