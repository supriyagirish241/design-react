import React from 'react';
import './description.css';

function Description() {
  return (
    <div>
    <div className='description-container'>
      <h2>Why Do I Need Landing Pages?</h2>
    </div>
    <div className='content-container'>
      <p>
        Everyone wants more leads and more customers and Landing Pages help you get both.
        <br />
        Landing Pages work well because they focus your prospect’s attention on one single goal —
        <br />
        as opposed to a website where they could get lost or distracted.
        <br />
        And the good news is that now you can get unlimited landing pages with Indpro Landing
        <br />
        Pages. This means that you can build campaign-specific landing pages or test different
        <br />
        versions of your landing pages to see which one converts better.
        <br />
      </p>
      <div className='text-container'>
        <h1 style={{fontStyle:'italic', color : '#2a5b51', fontWeight : 'lighter', fontFamily: 'Purisa'}}>And this is how it works!</h1>
      </div>
    </div>
  </div>
  
  );
}

export default Description;
