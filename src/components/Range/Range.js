import React from 'react';

const Range = ({ amount }) => {

  return (
    <div className="range">
      <div className="range__amount">{amount[0]}</div>
      <div className="range-line">
        <div className="range-line__position" style={{left: `${amount[2]}%`}}/>
      </div>
      <div className="range__amount">{amount[1]}</div>
    </div>
  );
};

export default Range;
