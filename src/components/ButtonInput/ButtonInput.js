import React from 'react'
import { buttons } from '../../const'
import './ButtonInput.css'

const ButtonInput = ({ note, handleCorrectAnswer }) => {
  return (
  <div className="input-buttons">
    {buttons.map((row, indx) => {
      return (
        <div key={indx}>
          {row.map((notekey) => (
            <button
              key={notekey}
              onClick={() => {
                if(notekey === note.name) {
                  handleCorrectAnswer() 
                }
              }}
            >
              {notekey}
            </button>
          ))}
        </div>
      )
    })}
  </div>)
}

export default ButtonInput