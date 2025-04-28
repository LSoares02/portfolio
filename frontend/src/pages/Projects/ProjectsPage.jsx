import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../translate/LanguageProvider";
import TextImage from "../../layoutComponents/TextImage/TextImage";

import { useTheme } from "../../theme/ThemeProvider";

import commissioning from "../../images/commissioning.png";
import curator from "../../images/curator.png";
import colorc from "../../images/colorc.png";
import videoImpact from "../../images/videoImpact.png";
import speechAnalytics from "../../images/speechAnalytics.png";
import dt from "../../images/dt.jpg";
import poc from "../../images/poc.jpg";

import "./style.css";

const ProjectsPage = () => {
  const { translations } = useLanguage();
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(0);
  const projectsContainerRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const containerRect =
        projectsContainerRef.current.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const itemRect = ref.getBoundingClientRect();
          const distance = Math.abs(
            itemRect.top + itemRect.height / 2 - containerCenter
          );

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setSelectedProject(closestIndex);
    };

    projectsContainerRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      projectsContainerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = translations?.projectsExamples || [];

  const [projectImages, setProjectImages] = useState([
    commissioning,
    colorc,
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
          ref={projectsContainerRef}
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
                ref={(el) => (projectRefs.current[index] = el)}
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
