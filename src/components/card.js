import React from 'react';
import './card.css'; 

const LandingPage = () => {
  const handleClick = () => {
    window.location.href = 'https://www.landingfolio.com'; // Replace with your desired website URL
  };
 
  return (
    <div className="page">
      <p className="h">Try Indpro Landing Pages For Free!</p>
      <div className="content">
        <p>Join 100,000+ creators and entrepreneurs who are actively using Indpro to easily get their products and their message out to the world!</p>
        <button className="b" onClick={handleClick} style={{ marginLeft: '10px' }}>
        Get Your Free Design Today 
        </button>
        
      </div>
    </div>
  );
}

export default LandingPage;