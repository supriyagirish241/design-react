import React from 'react';
import './TxtImg.css'; // Import the CSS file for styling

const TextImg = ({ image, title, description, flexDirection, Width, MarginRight }) => {
  return (
    <div className="TxtImg-container" style={{  flexDirection:flexDirection }}>
      <img src={image} alt="" className="TxtImg-image" style={{MarginRight:MarginRight}}/>
      <div className="TxtImg-content">
        <h2 className="TxtImg-title" >{title}</h2>
        <p className="TxtImg-description" style={{width:Width}}>{description}</p>
     </div>
   </div>
  );
};
export default TextImg;