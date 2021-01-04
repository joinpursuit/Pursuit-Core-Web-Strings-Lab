/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
function firstChar(str) {
  return str[0] || str
 
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
 return str[str.length-1] || str
}

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

function capitalizeLastLetter(str) {
  let str1 = ""
 
  if(str.length !== 0) {
    let str1 = str.slice(0, str.length-1) + str[str.length-1].toUpperCase()
   return str1 
  }
 return str
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

  if (num < 1000000) {
    return `${num} dollars`
  } else {
    return `${num} dollars (pinky)`
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
  if(string.length >= 3 && string.slice(string.length-3) !== "ing") {
return string + "ing"
  } else if (string.length >= 3 && string.slice(string.length-3) === "ing") {
    return string + "ly"
  }
  else {return string}
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord(string) {
  let words = []
  words = string.split(" ")
  words.pop()
  string = words.join(" ")
  return string
}

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter(str) {
  let stringEven = ""
  for(let i = 0; i < str.length; i += 2) {
    stringEven += str[i]
  }
  return stringEven
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel(str) {
  let str2 = ""
  if (str.length === 0) {
    return str
  } else {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "a" && str[i] !== 'e' && str[i] !== 'i' && str[i] !== "o" && str[i] !== "u" && str[i] !== "A" && str[i] !== "E" && str[i] !== "I" && str[i] !== "O" && str[i] !== "U")
    str2 += str[i]
  }
}
  return str2
}


/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

 function disemvowelLongWords(str){
   let words = []
   let str1 = ""
   let str2
   words = str.split(" ")

   for (let i = 0; i < words.length; i++) {
    str1 = ""
     
   if(words[i].length >= 5) {
     str2 = words[i]
     
    for (let j = 0; j < str2.length; j++) {
      if (str2[j] !== "a" && str2[j] !== 'e' && str2[j] !== 'i' && str2[j] !== "o" && str2[j] !== "u" && str2[j] !== "A" && str2[j] !== "E" && str2[j] !== "I" && str2[j] !== "O" && str2[j] !== "U") {
         str1 += str2[j]
      }
    }
    words[i] = str1
  }
     
    }
   str1 = words.join(" ")

   
  return str1
    }

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
function middleCharacter(string) {
  if(string.length % 2 === 0) {
   let middle = string.slice((string.length/2)-1, (string.length/2) + 1)
return middle
  }
  else if (string.length % 2 !== 0) {
    return string[Math.floor(string.length/2)]
    
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
