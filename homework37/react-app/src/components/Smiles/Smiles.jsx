import React from 'react';
import './Smiles.scss';

const Smiles = ({ icon: Icon, count }) => {
  return (
    <div className='smiles'>
      <Icon size={32} style={{ color: 'yellow', border: '2px solid brown', borderRadius: '50%', backgroundColor: 'brown' }} />
      <p className='result-title'>Кількість голосів: <span className='digit-result'>{count}</span></p>
    </div>
  );
};

export default Smiles;

