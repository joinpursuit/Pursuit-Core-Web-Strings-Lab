/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
function firstChar(string) {
  return string.slice(0, 1);
}

/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

function stringLength(string) {
  return string.length;
}

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

function lastLetter(string) {
  return string.slice(string.length - 1);
}

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

function capitalizeLastLetter(string) {
  string =
    string.slice(0, string.length - 1) +
    string.slice([string.length - 1]).toUpperCase();
  return string;
}

/**
 *  Create a drEvil function that will take a single number variable, and log the '<variableAmount> dollars',
and should add '(pinky)' at the end of the amount if it's 1 million or more. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```
* @param {number}
* @returns {string}
 */
function drEvil(number) {
  if (number < 1_000_000) {
    return number + " dollars";
  } else {
    return number + " dollars (pinky)";
  }
}

/**
 * 
 * Create a `verbing` function.
 * It should take a single string variable. 
 * If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', 
 * in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 
 * @param {string}
 * @returns {string}
For example:

```js
verbing('box')
// => 'boxing'
verbing('train')
// => 'training'
verbing('swimming')
// =>  'swimmingly'
verbing('go')
// =>  'go'
```
 
 */

function verbing(string) {
  if (string.length >= 3) {
    if (string.slice(string.length - 3) === "ing") {
      return (string += "ly");
    } else {
      return (string += "ing");
    }
  } else if (string.length < 3) {
    return string;
  }
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord(string) {
  let stringResult = string.split(" ");
  stringResult.pop();
  stringResult = stringResult.join(" ");
  return stringResult;
}

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter(string) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      output += string[i];
    }
  }
  return output;
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel(string) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u" ||
      string[i] === "A" ||
      string[i] === "E" ||
      string[i] === "I" ||
      string[i] === "O" ||
      string[i] === "U") {
        string.slice(i, i + 1)
      } else {
        output += string[i]
      }
  }
  return output;
}

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

function disemvowelLongWords(string) {
  let output = string.split(" ");
  for(i = 0; i < output.length; i++){

    if(output[i].length >= 5){
      output[i] = disemvowel(output[i])
    }
}
return output.join(" ")
}

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
function middleCharacter(string) {
  if ( string.length % 2 !== 0){
    let middleElement = Math.floor( string.length / 2);
      return string[ middleElement ];
  } else{
      let lowMiddleElement = ((string.length / 2 ) -1)      
      let highMiddleElement = (string.length / 2 )         
      let middleValues = [string[lowMiddleElement], string[highMiddleElement]];
      return middleValues.join("");   
  }
}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

function reverseString(string) {
   let str = '';
    for ( i = string.length - 1; i >= 0; i--)
      str += string[i];
    return str;
  }

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

function reverseSentenceWords(string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ")
}

module.exports = {
  firstChar,
  stringLength,
  lastLetter,
  capitalizeLastLetter,
  drEvil,
  verbing,
  removeLastWord,
  everyOtherLetter,
  disemvowel,
  disemvowelLongWords,
  middleCharacter,
  reverseString,
  reverseSentenceWords,
};

