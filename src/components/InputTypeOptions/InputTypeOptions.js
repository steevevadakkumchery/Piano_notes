import React from 'react'
import { INPUT_TYPE } from '../../const'
import './InputTypeOptions.css'

const InputTypeOption = ({ setInputType, inputType }) => {
  return (
    <div className='container'>
      {[INPUT_TYPE.BUTTON, INPUT_TYPE.TEXT].map((type) => (
        <div key={type}>
          <label>
            <input
              type='radio'
              value={type}
              checked={inputType === type}
              onChange={() => { setInputType(type) }}
            />
            {type}
           </label>
        </div>
      ))}
    </div>
  )
}

export default InputTypeOption