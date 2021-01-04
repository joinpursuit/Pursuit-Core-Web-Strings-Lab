/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
function firstChar(str) {
  return str.slice(0, 1);
}

/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

function stringLength(str) {
  let number = str.length;
  return number;
}

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

function lastLetter(str) {
  return str.slice(str.length - 1);
}

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

function capitalizeLastLetter(str) {
  if (str.length < 1) {
    return str;
  } else {
    let copy = str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase();
    return copy;
  }
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
function drEvil(num) {
  if (num >= 1000000) {
    return num + " dollars (pinky)";
  } else {
    return num + " dollars";
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

function verbing(str) {
  if (str.length < 3) {
    return str;
  } else if (str.slice(str.length - 3, str.length) === "ing") {
    return str + "ly";
  } else str.length >= 3;
  return str + "ing";
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord(str) {
  let splitStr = str.split(" ");
  let lastWord = splitStr.pop(splitStr.length - 1);
  let copy = splitStr.join(" ");
  if (splitStr.length < 1) {
    return "";
  } else {
    return copy;
  }
}

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter(str) {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      output += str[i];
    }
  }
  return output;
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel(str) {
  let output = "";
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toLowerCase();
    if (!vowels[letter]) {
      output += str[i];
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

function disemvowelLongWords(str) {
  let output = [];
  let splitStr = str.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    let word = splitStr[i];
    output.push(
      word.length <= 4 ? word : disemvowel(word)
      )
  }
  return output.join(" ");
}
/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
function middleCharacter(str) {
  let midChar = (str.length-1/2)
  let midChar2 = (str.length-1/2 - 1)

  if(str.length % 2 !== 0) {
    return  str[midChar] + str[midChar2]
  } else {
    return  str[midChar]
  }
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
