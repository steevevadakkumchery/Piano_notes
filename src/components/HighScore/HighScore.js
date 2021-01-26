import React from 'react'

const HighScore = ({ handleMainMenuClick, highScores }) => {
  return (
    <div>
      <div className='backButton-container'>
        <button onClick={handleMainMenuClick}>Main Menu</button>
      </div>
      <h1>High Scores</h1>
      {highScores.map((submission) => {
        return <p className="score-line">{submission.name}  <b>{submission.score}</b></p>
      })}
    </div>
  )
}

export default HighScore