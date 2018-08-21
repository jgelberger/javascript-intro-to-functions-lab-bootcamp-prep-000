function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  
  if (string === "I love you, Grandma.") {
    return 'I love you, too.'
  } else {
    
    if (string.toUpperCase() === string) {
      return 'YES INDEED!'
    } else if (string.toLowerCase() === string) {
      return 'I can\'t hear you!'
    }
  }
=======
>>>>>>> e167cd2d6b0a81818adfc4e20fd539ece1b1d8e5
}