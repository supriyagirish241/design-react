import React from 'react';
import './button.css'; 
function Button ({onClick}){
const calendlyUrl = "https://calendly.com/supriyagowda241/30min";



  const handleButtonClick = (e) => {

    e.preventDefault();

    window.open(calendlyUrl, "_blank");

    onClick();

  };

  return (
    <button className="button-container" onClick={handleButtonClick}>
      Schedule meeting with us
    </button>
  );
}

export default Button;