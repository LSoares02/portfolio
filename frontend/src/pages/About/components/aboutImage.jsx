import React from 'react';

const AboutImage = ({ frontImage, backImage }) => {
  return (
    <div className="flip-container">
      <div className="flipper">
        <div className="front">
          <img src={frontImage} alt="Front Image" className="flip-image" />
        </div>
        <div className="back">
          <img src={backImage} alt="Back Image" className="flip-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutImage;