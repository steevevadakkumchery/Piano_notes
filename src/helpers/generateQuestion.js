import { CLEF_TYPE } from '../const'

const generateQuestion = ({ note, clefType }) => {
  let noteNumber;
  let min = 0
  let max = 12

  switch(clefType) {
    case CLEF_TYPE.TREBLE_CLEF:
      min = 0;
      max = 12;
      break;
    case CLEF_TYPE.BASS_CLEF:
      min = 13;
      max = 25;
      break;
    case CLEF_TYPE.BOTH:
      min = 0;
      max = 25;
  }

  do {
    noteNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while(noteNumber === note.position)

  return noteNumber
}

export default generateQuestion