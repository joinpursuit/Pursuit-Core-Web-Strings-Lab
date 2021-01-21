/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
function firstChar (str) {
  return str[0] || ''

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
  return str[str.length -1] || '' 
}

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */
function capitalizeLastLetter(str) {
let myStr = ''
for (let i = 0; i < str.length; i += 1){
  if (str[i] === str[str.length - 1]) {
    myStr = myStr + str[i].toUpperCase()
  } else {
    myStr = myStr + str[i]
  }
}
 return myStr
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
    return `${num} dollars (pinky)`
 } 
   return `${num} dollars`
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
 let s = str.slice((str.length - 3), (str.length))
 if (str.length >= 3 && s === 'ing') {
   return str + 'ly'
 } else if (str.length >= 3 && s != 'ing') {
   return str + 'ing'
 }
 return str
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord(str) {
let s = str.split(' ')
s.pop()
let newS = s.join(' ')
return newS
}

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter(str) {
  let s = ''
  for (let i = 0; i < str.length; i += 2) {
    s = s + str[i]
  }
  return s
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel(str) {
  let s = ''
  let noConst = 'aeiouAEIOU'
  for (let i = 0; i < str.length; i += 1) {
    if (!noConst.includes(str[i])) {
      s = s + str[i]
    } else {
      s = s + ''
    }
  }
  return s
}

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

 function disemvowelLongWords(str){
  let newS = ''
  let s = str.split(' ')
  for (let i = 0; i < s.length; i += 1) {
    if (s[i].length >= 5) {
      newS = newS + disemvowel(s[i]) + ' '
    } else {
      newS = newS + s[i] + ' '
    }
  }
    return newS.trim()
 }

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
function middleCharacter(str) {
  if (str.length % 2 === 0) {
    return str[(str.length / 2) - 1] + str[(str.length / 2)]
  } else {
    return str[(str.length - 1) / 2]
  }
}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

function reverseString(str) {
let s = ''
for (let i = str.length - 1; i >= 0; i -= 1) {
 s = s + str[i]
}
return s
}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

function reverseSentenceWords(str) {
  let revWord = ''
  let s = str.split(' ')
  for (let i = 0; i < s.length; i += 1) {
    revWord = revWord + reverseString(s[i]) + ' '
  }
  return revWord.trim()
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
