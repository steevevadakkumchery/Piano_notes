import React, { useState, useEffect, useRef } from 'react'
import { clefNotes, INPUT_TYPE, GAME_MODE, CLEF_TYPE } from '../../const'
import TextInput from '../TextInput'
import ButtonInput from '../ButtonInput'
import InputTypeOption from '../InputTypeOptions'
import formatTime from '../../helpers/formatTime'
import generateQuestion from '../../helpers/generateQuestion'
import './Trainer.css'

const Trainer = ({ trainType, handleMainMenuClick, username }) => {
  const timerType = trainType.includes(GAME_MODE.TIME_CHALLENGE)
  let initialNote = clefNotes[0]
  let clefType = CLEF_TYPE.TREBLE_CLEF
  if (trainType.includes(CLEF_TYPE.BASS_CLEF)) {
    clefType = CLEF_TYPE.BASS_CLEF
    initialNote = clefNotes[13]
  } else if (trainType.includes(CLEF_TYPE.BOTH)){
    clefType = CLEF_TYPE.BOTH
  }

  const [note, setNote] = useState(initialNote)
  const [answer, setAnswer] = useState({ correct: false, text: ''})
  const [inputType, setInputType] = useState(INPUT_TYPE.TEXT)
  const [timerStarted, setTimerStarted] = useState(false)
  const [time, setTime] = useState(10)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  let timerId;
  const inputTextBoxRef = useRef()

  async function postHighScore(url = '', data = {}) {
    // Default options are marked with *
    const newdata = JSON.stringify(data)
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: newdata // body data type must match "Content-Type" header
    });
  }

  const handleNewHighScore = (score) => {
    postHighScore('http://testapi-steeve.herokuapp.com/save-highscore', {
      newHighScore: [{
        name: username,
        score: score
      }]
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setAnswer({ correct: false, text: '' })
    }, 200)
  }, [answer.correct])

  useEffect(() => {
    let timerId = null
    if(timerStarted && time > 0) {
      timerId = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
      if (inputTextBoxRef.current){
        inputTextBoxRef.current.focus()
      }
    } else if(!timerStarted || time === 0) {
      clearInterval(timerId)
      setTimerStarted(false)

      if(score > highScore) {
        setHighScore(score)
        handleNewHighScore(score)
      }
    }
    return () => {
      clearInterval(timerId)
    }
  }, [timerStarted, time, highScore, score])

  const toggleTimer = () => {
    if(timerStarted) {
      clearTimeout(timerId)
    } else { 
      setTime(10)
      setScore(0)
    }
    setTimerStarted((prev) => !prev)
  }

  const handleCorrectAnswer = () => {
    setAnswer({ correct: true, text: '' })
    setScore((score) => score + 1)
    setNote(clefNotes[generateQuestion({ note, clefType })])
  }

  let timerComponent = null
  if(timerType){
    timerComponent = (
      <div className='timer-container'>
        <p>{formatTime(time)}</p>
      </div>
    )
  }

  let inputComponent = null
  if((timerComponent && timerStarted) || !timerType) {
    inputComponent = inputType === INPUT_TYPE.TEXT ?
      <TextInput {...{answer, note, setAnswer, inputTextBoxRef, handleCorrectAnswer}}/>
      : <ButtonInput {...{answer, note, handleCorrectAnswer}}/>
  }

  let scoreComponent;
  let highScoreComponent;

  if(timerType){
    scoreComponent = <b>Score: {score}</b>
    highScoreComponent = <b>High Score: {highScore}</b>
  }

  return (
    <div className='container'>
      <div className='nav-timer'>
        <div className='backButton-container'>
          <button onClick={handleMainMenuClick}>Main Menu</button>
        </div>
        {timerComponent}
      </div>
      <div className="staff" style={{ borderColor: answer.correct ? '#75FF33': '' }}>
        <div className="staff-body">
          <img alt="staff" src={note.noteType} style={{top: note.top}}/>
        </div>
      </div>
      {!timerStarted && timerType && (<button onClick={toggleTimer}>Start Timer</button>)}
      {inputComponent}
      {scoreComponent}
      {highScoreComponent}
      <InputTypeOption {...{ setInputType, inputType }} />
    </div>
  )
}

export default Trainer