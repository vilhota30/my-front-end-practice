import React from 'react';
import './VotingButton.scss';

const VotingButton = ({ onVote }) => {
  return (
    <button className='btn-voite' onClick={onVote}>Проголосувати</button>
  );
};

export default VotingButton;

