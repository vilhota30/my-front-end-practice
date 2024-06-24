import React, { Component } from 'react';
import './App.css';
import Smiles from './components/Smiles/Smiles';
import VotingButton from './components/VotingButton/VotingButton';
import ResultButton from './components/ResultButton/ResultButton';

import { FaSmile, FaFrown, FaAngry } from 'react-icons/fa'; 
import { FaFaceSmileWink, FaFaceSmileBeam } from "react-icons/fa6";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smilesData: [
        { icon: FaSmile, count: 0 },
        { icon: FaFrown, count: 0 },
        { icon: FaFaceSmileWink, count: 0 },
        { icon: FaFaceSmileBeam, count: 0 },
        { icon: FaAngry, count: 0 },
        { icon: FaFrown, count: 0 },
      ],
      winner: null
    };
  }

  // componentDidMount() {
  //   // Завантаження даних з localStorage
  //   const storedSmiles = JSON.parse(localStorage.getItem('smilesData'));
  //   if (storedSmiles) {
  //     this.setState({ smilesData: storedSmiles });
  //   }
  // }

  // componentDidUpdate() {
  //   // Збереження даних у localStorage
  //   localStorage.setItem('smilesData', JSON.stringify(this.state.smilesData));
  // }

  handleVote = (smileyIndex) => {
    const updatedSmiles = [...this.state.smilesData];
    updatedSmiles[smileyIndex].count++;
    this.setState({ smilesData: updatedSmiles });
  };

  handleShowResults = () => {
    const { smilesData } = this.state;
    let maxVotes = -1;
    let winnerIcon = null;

    smilesData.forEach(smiley => {
      if (smiley.count > maxVotes) {
        maxVotes = smiley.count;
        winnerIcon = smiley;
      }
    });

    this.setState({ winner: winnerIcon });
  };

  handleClearResults = () => {
    this.setState({ winner: null });
    const clearedSmiles = this.state.smilesData.map(smiley => ({ ...smiley, count: 0 }));
    this.setState({ smilesData: clearedSmiles });
  };

  render() {
    const { smilesData, winner } = this.state;

    return (
      <div>
        <h1 className='title'>Голосування за смайликами</h1>
        <div className='smiles-group'>
        {smilesData.map((smiley, index) => (
          <div className='smiles' key={index}>
            <Smiles icon={smiley.icon} count={smiley.count} />
            <VotingButton className='btn-voite' onVote={() => this.handleVote(index)} />
          </div>
        ))}
        </div>
         <div className='btn-group'>
        <button className='btn-result' onClick={this.handleShowResults}>Show Results</button>
        <button className='delete-btn' onClick={this.handleClearResults}>Очистити результати</button>
        </div>
        {winner && <ResultButton winner={winner} />}
      </div>
    );
  }
}

export default App;



