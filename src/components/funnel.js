import React from 'react';
import './funnel.css';
import img from '../Assets/funnel.png';

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="grid-row1">
        {Array.from({ length: 4}, (_, index) => (
          <div key={index} className={`grid-item1 ${index === 3 ? 'last-item' : ''}`}>
          {/* <div key={index} className={`grid-item1 ${index === 3 ? 'last-item' : ''}`} style={index === 3 ? { paddingTop: '1px' } : {}}> */}

            <img src={img} className="imge" alt="svelte" />
            {/* <i className="fas fa-filter" style={{ fontSize:'45px', color : '#1c4038', transform: 'scaleX(-1)' }}></i> */}
            <h3><b>Sales Funnel</b></h3>
            <p style={{marginTop:'-6px'}}>convert your online vectors into <br/> actual paying customers</p>
          </div>
        ))}
      </div>
      <div className="grid-row2">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index + 4} className={`grid-item2 ${index === 3 ? 'last-item' : ''}`}>
           
            <img src={img} className="imge" alt="svelte" />
            {/* <i className="fas fa-filter" style={{ fontSize:'45px', color : '#1c4038', transform: 'scaleX(-1)' }}></i> */}
            <h3><b>Sales Funnel</b></h3>
            <p style={{marginTop:'-6px'}}>convert your online vectors into <br/> actual paying customers</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
