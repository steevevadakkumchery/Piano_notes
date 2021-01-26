import React, { useState } from 'react'
import Trainer from './components/Trainer'
import MainMenu from './components/MainMenu'
import HighScore from './components/HighScore'
import './App.css';

function App() {
  const [trainType, setTrainType] = useState()
  const [highScorePage, setHighScorePage] = useState(false)
  const [highScores, setHighScores] = useState([])
  const [usernameInProgress, setUsernameInProgress] = useState("")
  const [username, setUsername] = useState("")

  const handleMainMenuClick = () => {
    setTrainType(null)
    setHighScorePage(false)
  }

  const handleHighScores = () => {
    let data;
    (async () => {
      data = await fetch('http://testapi-steeve.herokuapp.com/get-highscore')
      data = await data.json()
      setHighScores(data.highScores)
    })()

    setHighScorePage(true)
  }

  return (
    <div className="App">
      <div className="App-container">
        {!trainType && !highScorePage && <MainMenu {...{ setTrainType , handleHighScores}}/>}
        {trainType && !username && (
          <div className="name-field">
            <input className="name-box" type="text" value={usernameInProgress} placeholder="Enter Name" onChange={(e) => { setUsernameInProgress(e.target.value) }}/>
            <button onClick={() => {setUsername(usernameInProgress)}}>Enter</button>
          </div>)}
        {trainType && username && <Trainer {...{trainType, setTrainType, handleMainMenuClick, username}}/>}
        {highScorePage && <HighScore {...{ handleMainMenuClick, highScores }}/>}
      </div>
    </div>
  );
}

export default App;
