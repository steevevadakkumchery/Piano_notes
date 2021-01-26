import React, { useState } from 'react'
import { GAME_MODE, CLEF_TYPE } from '../../const'

const MainMenu = ({ setTrainType, handleHighScores }) => {
  const [ gameMode, setGameMode ] = useState(null)
  const [ clefType, setClefType ] = useState(null)

  const { TIME_CHALLENGE, PRACTICE } = GAME_MODE
  const { TREBLE_CLEF, BASS_CLEF, BOTH } = CLEF_TYPE

  const handleGameOption = (mode) => {
    setGameMode(mode);
    setClefType(null);
  }

  const handleClefOption = (clef) => {
    setClefType(clef)
    setTrainType(`${gameMode}__${clef}`)
  }

  let gameOptions = null;
  let clefOptions = null;
  let highScores = null;

  if(!gameMode) {
    gameOptions = (
      <div className='list'>
        {[TIME_CHALLENGE, PRACTICE,].map((mode) => (
          <button key={mode} onClick={() => handleGameOption(mode)}>{mode}</button>
        ))}
      </div>
    )
  }

  if(gameMode && !clefType) {
    clefOptions = (
      <div className='list'>
        {[TREBLE_CLEF, BASS_CLEF, BOTH].map((clef) => (
          <button key={clef} onClick={() => handleClefOption(clef)}>{clef}</button>
        ))}
      </div>
    )
  }

  if(!gameMode) {
    highScores = (
      <div className='list'>
        <button onClick={handleHighScores}>High Scores</button>
      </div>
    )
  }

  return (
    <div className='main-menu'>
      <h1>Sheet reading trainer</h1>
      {gameOptions}
      {clefOptions}
      {highScores}
    </div>
  )
}

export default MainMenu