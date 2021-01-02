/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
function firstChar(string) {
  if (string.length === 0) {
    return "";
  }
  return string[0];
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
  if (string.length === 0) return "";
  return string[string.length - 1];
}

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

function capitalizeLastLetter(string) {
  if (string.length === 0) return "";

  let lastLetter = string[string.length - 1].toUpperCase();
  return string.slice(0, string.length - 1) + lastLetter;
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
  if (number < 1000000) {
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
  if (string.length < 3) {
    return string;
  } else if (string.slice(string.length - 3) === "ing") {
    return string + "ly";
  } else {
    return string + "ing";
  }
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord(string) {
  let newString = string.split(" ");
  newString.pop();
  return newString.join(" ");
}
/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter(string) {
  let newString = "";
  for (let i = 0; i < string.length; i += 1) {
    if (i % 2 === 0) newString += string[i];
  }
  return newString;
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel(string) {
  let newString = "";
  for (let i = 0; i < string.length; i += 1) {
    if (
      string[i].toLowerCase() !== "a" &&
      string[i].toLowerCase() !== "e" &&
      string[i].toLowerCase() !== "o" &&
      string[i].toLowerCase() !== "i" &&
      string[i].toLowerCase() !== "u"
    )
    newString += string[i];
  }
  return newString
}
console.log(disemvowel("sentence"))

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

function disemvowelLongWords(string) {
  let arr=string.split(" ")
  for (let i=0; i<arr.length; i+=1){
    if (arr[i].length > 4)
    arr[i]=disemvowel(arr[i])
  }
  return (arr.join(" "))
}

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
function middleCharacter(string) {
  
}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

function reverseString() {}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

function reverseSentenceWords() {}

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
