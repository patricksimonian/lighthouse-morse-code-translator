var args = process.argv.slice(2);
const string = args.join(" ").toLowerCase();
//enter any amount of arguments in terminal window

function morseConverter(stringIn, morseCallback) {
  convertedString = "";
  for(let i = 0; i < stringIn.length; i++){
    let currentChar = stringIn.charAt(i);
    convertedString += morseCallback(currentChar);
  }
  return convertedString;
}

function findMorseMatch(charIn) {
  const morseLib = require('./morse-library');
  //check to see if morseLib currently contains that character
  //return morse equivalent if true
  if (morseLib.hasOwnProperty(charIn)) {
    return morseLib[charIn];
  }
  //else return an unsupported char
  return charIn;
}

console.log(morseConverter(string, findMorseMatch));