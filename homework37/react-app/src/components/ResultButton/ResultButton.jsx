import React from 'react';
import './ResultButton.scss';

const ResultButton = ({ winner }) => {
  const WinnerIcon = winner.icon;
  return (
    <div className='winner-container'>
      <h2>Переможець:</h2>
      {winner && <WinnerIcon size={64} style={{ color: 'brown', border: '2px solid darkbrown' }} />}
    </div>
  );
};

export default ResultButton;


