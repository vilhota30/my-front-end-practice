import React, { useState } from 'react';
import './App.css';
import background from './assets/gamebackground.jpg';

import Smiles from './components/Smiles/Smiles';
import VotingButton from './components/VotingButton/VotingButton';
import ResultButton from './components/ResultButton/ResultButton';

import { FaSmile, FaFrown, FaAngry } from 'react-icons/fa';
import { FaFaceSmileWink, FaFaceSmileBeam } from 'react-icons/fa6';


const App = () => {
  const [smilesData, setSmilesData] = useState([
    { icon: FaSmile, count: 0 },
    { icon: FaFrown, count: 0 },
    { icon: FaFaceSmileWink, count: 0 },
    { icon: FaFaceSmileBeam, count: 0 },
    { icon: FaAngry, count: 0 },
    { icon: FaFrown, count: 0 },
  ]);

  const [winner, setWinner] = useState(null);

  const handleVote = (smileyIndex) => {
    const updatedSmiles = smilesData.map((smiley, index) => {
      if (index === smileyIndex) {
        return { ...smiley, count: smiley.count + 1 };
      }
      return smiley;
    });
    setSmilesData(updatedSmiles);
  };

  const handleShowResults = () => {
    let maxVotes = -1;
    let winnerIcon = null;

    smilesData.forEach(smiley => {
      if (smiley.count > maxVotes) {
        maxVotes = smiley.count;
        winnerIcon = smiley;
      }
    });

    setWinner(winnerIcon);
  };

  const handleClearResults = () => {
    setWinner(null);
    const clearedSmiles = smilesData.map(smiley => ({ ...smiley, count: 0 }));
    setSmilesData(clearedSmiles);
  };

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundReapet: 'not-repeat', position: 'center', height: '100vh', backgroundSize: "cover", }}>
      <h1 className='title'>Голосування за смайликами</h1>
      <div className='smiles-group'>
        {smilesData.map((smiley, index) => (
          <div className='smiles' key={index}>
            <Smiles icon={smiley.icon} count={smiley.count} />
            <VotingButton className='btn-voite' onVote={() => handleVote(index)} />
          </div>
        ))}
      </div>
      <div className='btn-group'>
        <button className='btn-result' onClick={handleShowResults}>Show Results</button>
        <button className='delete-btn' onClick={handleClearResults}>Очистити результати</button>
      </div>
      {winner && <ResultButton winner={winner} />}
    </div>
  );
};

export default App;

