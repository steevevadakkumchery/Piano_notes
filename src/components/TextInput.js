import React from 'react'
import { trebleClefNotes } from '../const'
import generateQuestion from '../helpers/generateQuestion'

const TextInput = ({ answer, note, setNote, setAnswer, inputTextBoxRef, setScore, handleCorrectAnswer }) => {
  return (
    <input
      ref={inputTextBoxRef}
      maxLength={1}
      className="answer-input"
      type='text'
      value={answer.text}
      onChange={(e) => {
        const text = e.target.value
        setAnswer({ correct: false, text })
        setTimeout(() => {
          if(text.toLowerCase() === note.name.toLowerCase()) {
            handleCorrectAnswer()
          }
        }, 100); // so that user can see the answer typed in
      }}
    />
  )
}

export default TextInput