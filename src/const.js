import note from './assets/note.jpg'
import noteStrike from './assets/note-strike.jpg'

export const clefNotes =  [
  // Treble Clef
  { name: 'C', top: '115px', noteType: noteStrike, position: 0 }, // 0
  { name: 'D', top: '97px', noteType: note, position: 1 }, // 1
  { name: 'E', top: '79px', noteType: noteStrike, position: 2 }, // 2
  { name: 'F', top: '63px', noteType: note, position: 3 }, // 3
  { name: 'G', top: '44px', noteType: noteStrike, position: 4 }, // 4
  { name: 'A', top: '29px', noteType: note, position: 5 }, // 5
  { name: 'B', top: '10px', noteType: noteStrike, position: 6 }, // 6
  { name: 'C', top: '-6px', noteType: note, position: 7 }, // 7
  { name: 'D', top: '-25px', noteType: noteStrike, position: 8 }, // 8
  { name: 'E', top: '-41px', noteType: note, position: 9 }, // 9
  { name: 'F', top: '-60px', noteType: noteStrike, position: 10 }, // 10
  { name: 'G', top: '-76px', noteType: note, position: 11 }, // 11
  { name: 'A', top: '-92px', noteType: noteStrike, position: 12 }, // 12
  
  // Bass Clef
  { name: 'C', top: '146px', noteType: noteStrike, position: 13 }, // 0
  { name: 'B', top: '164px', noteType: note, position: 14 }, // 1
  { name: 'A', top: '180px', noteType: noteStrike, position: 15 }, // 2
  { name: 'G', top: '199px', noteType: note, position: 16 }, // 3
  { name: 'F', top: '215px', noteType: noteStrike, position: 17 }, // 4
  { name: 'E', top: '234px', noteType: note, position: 18 }, // 5
  { name: 'D', top: '250px', noteType: noteStrike, position: 19 }, // 6
  { name: 'C', top: '268px', noteType: note, position: 20 }, // 7
  { name: 'B', top: '284px', noteType: noteStrike, position: 21 }, // 8
  { name: 'A', top: '303px', noteType: note, position: 22 }, // 9
  { name: 'G', top: '319px', noteType: noteStrike, position: 23 }, // 10
  { name: 'F', top: '338px', noteType: note, position: 24 }, // 11
  { name: 'E', top: '353px', noteType: noteStrike, position: 25 }, // 12
 ]

 export const buttons = [['C', 'D', 'E', 'F'], ['G', 'A', 'B']]

 export const INPUT_TYPE = {
   BUTTON: 'Buttons',
   TEXT: 'Textbox'
 }

 export const GAME_MODE = {
  TIME_CHALLENGE: 'Timed Challenge',
  PRACTICE: 'Practice'
}

export const CLEF_TYPE = {
  TREBLE_CLEF: 'Treble Clef',
  BASS_CLEF: 'Bass Clef',
  BOTH: 'Both'
}
