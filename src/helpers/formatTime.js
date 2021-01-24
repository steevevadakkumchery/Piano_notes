import _ from 'lodash'

const formatTime = (seconds) => {
  const printMinutes = Math.floor(seconds / 60);
  const printSeconds = seconds - printMinutes * 60;
  return `${_.padStart(printMinutes, 2, 0)}:${_.padStart(printSeconds, 2, 0)}`
}

export default formatTime