import React from 'react';
import './ResultButton.scss';
const ResultButton = ({ winner }) => {
  return (
    <div className='winner-container'>
      <h2>Переможець:</h2>
      {winner && <winner.icon size={64} style={{color: "brown", border: "2px solid darkbrown"}} />}
    </div>
  );
};

export default ResultButton;

