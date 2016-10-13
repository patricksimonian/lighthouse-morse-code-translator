var args = process.argv.slice(2);
const argsArray = args.join(" ").split("");

//takes in array of values and converts valid characters into their respective morse
//code, if no valid character exists the original character is returned
function morseConverter(arrayIn) {
  const morseLib = require('./morse-library');
    convertedStringArray = arrayIn.map((charIn) => {
      if (morseLib.hasOwnProperty(charIn)) {
        return morseLib[charIn];
      }
      return charIn
    });
    return convertedStringArray.join("");
}

console.log(morseConverter(argsArray));