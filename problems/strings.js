/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
function firstChar(str) {
  return str.length > 0 ? str[0] : ""
}

/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

function stringLength(str) {
  return str.length
}

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

function lastLetter(str) {
  return str.length > 0 ? str[str.length - 1] : ""
}

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

function capitalizeLastLetter(str) {
  return str.slice(0, str.length - 1) + lastLetter(str).toUpperCase()
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
function drEvil(n) {
  return `${n} dollars${n >= 1000000 ? " (pinky)" : ""}`
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
  const lastThreeLetters = str.slice(str.length - 3, str.length)
  if (str.length < 3) {
    return str
  } else if (lastThreeLetters === "ing") {
    return str + "ly"
  } else {
    return str + "ing"
  }
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord(str) {
  return str.split(' ').slice(0, str.split(' ').length - 1).join(' ')
}

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter(str) {
  let finalStr = ""
  for (let i = 0; i < str.length; i = i + 2) {
    finalStr += str[i]
  }
  return finalStr
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel(str) {
  let finalStr = ""
  for (let i = 0; i < str.length; i++) {
     finalStr += !"aeiouAEIOU".includes(str[i]) ? str[i] : ""
  }
  return finalStr
}

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

 function disemvowelLongWords(str) {
   return str.split(' ').map(n => n.length >= 5 ? disemvowel(n) : n).join(' ')
 }

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
function middleCharacter(str) {
  if (str.length % 2 === 1) {
    return str[Math.floor(str.length / 2)]
  } else {
    return str[(str.length / 2) - 1] + str[str.length / 2]
  }
}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

function reverseString(str) {
  let reversedStr = ""
  for (let i = str.length - 1; i>=0; i--) {
    reversedStr += str[i]
  }
  return reversedStr
}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

function reverseSentenceWords(str) {
  return str.split(' ').map(n => reverseString(n)).join(' ')
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
