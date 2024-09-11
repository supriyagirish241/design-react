import React from 'react';
import './about.css'; // Import the CSS file for styling

const About = ({ image, title, description}) => {
  return (
    <div className="image-with-text-container">
      <img src={image} alt="" className="image-with-text-image" />
      <div className="image-with-text-content">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <p className='by'><b>—Yanni Fikaris</b>, Verified Indpro Landing Page User</p>
      </div>
    </div>
  );
};

export default About;