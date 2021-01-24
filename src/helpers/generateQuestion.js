import { CLEF_TYPE } from '../const'

const generateQuestion = ({ note, clefType }) => {
  let noteNumber;
  let min;
  let max;

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
      break
    default:
      min = 0
      max = 12
  }

  do {
    noteNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while(noteNumber === note.position)

  return noteNumber
}

export default generateQuestion