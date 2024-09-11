import React from 'react';
import './TextImg.css'; // Import the CSS file for styling

const TextImg = ({ image, title, description }) => {
  return (
    <div className="image-with-text-container" style={{ flexDirection:"row-reverse"}}>
      <img src={image} alt="" className="image-with-text-image" />
      <div className="image-with-text-content">
        <h2 className="title">{title}</h2>
        <p className="description" style={{ marginTop:"87px"}}>{description}</p>
      </div>
    </div>
  );
};
export default TextImg;
