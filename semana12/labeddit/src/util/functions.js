export const getFirstLetters = (text) => {
  if ( text.includes(" ")) {
      const splitedText = text.split(" ")
      const firstWord = splitedText[0]
      const secondWord = splitedText[1]
      const firstWordFirstLetter = firstWord[0]
      const secondWordFirstLetter = secondWord[0]
      return { firstWordFirstLetter, secondWordFirstLetter }
  }else {
      const splitedText = text.split("")
      const firstWordFirstLetter = splitedText[0]
      return { firstWordFirstLetter }
  }
}

export const timestampToDateString = (timestamp) => {
  const dateObj = new Date(timestamp)
  const date = dateObj.toLocaleDateString("pt-BR")
  const time = dateObj.toLocaleTimeString("pt-BR")
  const formatedTime = timeFormat(time)
  return { date, formatedTime }
}

export const timeFormat = (localeTimeString) => {
  const timeArray = localeTimeString.split("")
  timeArray.splice(5, 3)
  const hours = `${timeArray[0]}${timeArray[1]}`
  const minutes = `${timeArray[3]}${timeArray[4]}`
  const timeString = `${hours}:${minutes}`
  return timeString
}

export const checkUserVote = (isUpVote, userVoteDirection) => {
  let upVote = undefined
  let downVote = undefined
  let finalDirection = undefined

  switch (userVoteDirection) {
    case 0:
      upVote = 1
      downVote = -1
      break;
    case 1:
      upVote = 1
      downVote = 0
      break;  
    case -1:
      upVote = 0
      downVote = -1
      break;  
    default:
      break;
  }

  isUpVote ? finalDirection = upVote : finalDirection = downVote
  
  return finalDirection
}