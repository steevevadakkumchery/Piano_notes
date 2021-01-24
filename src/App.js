import React, { useState } from 'react'
import Trainer from './components/Trainer'
import MainMenu from './components/MainMenu'
import './App.css';

function App() {
  const [trainType, setTrainType] = useState()

  return (
    <div className="App">
      <div className="App-container">
        {trainType ? 
          <Trainer {...{trainType, setTrainType}}/>
          : <MainMenu {...{ setTrainType , trainType}}/>
        }
      </div>
    </div>
  );
}

export default App;
