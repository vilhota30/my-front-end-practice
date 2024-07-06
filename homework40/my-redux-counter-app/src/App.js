import React from 'react';
import Counter from '../src/components/Counter.js';
import './App.scss';
import nature from '../src/assets/nature.jpg';

const App = () => {
  return (
    <div className="app" style={{ backgroundImage: `url(${nature})`, width: "900px", height: "600px", backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover", }}>
      <Counter />
    </div>
  );
};

export default App;
