"use strict"
/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
const firstChar = (str) => {
  if (str === "") {
    return ""
  } else {
    return str[0]
  }
}
/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

function stringLength(str) {
  return str.length;
}

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

function lastLetter(str) {
  if (str === "") {
    return ""
  } else {
    return str[str.length - 1]
  }
}

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

// function capitalizeLastLetter(str) {
  const capitalizeLastLetter = (str) => {
    if (str === "") {
      return "";
    } else {
      return str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase();
    }
  
  
    //   return str.toLowerCase().split(" ").map(function(str) {
  //     return str.slice(0, -1) + str.slice(-1).toUpperCase();
  // }).join(" ");
};

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
// function drEvil(number) {}
const drEvil = (number) => {
  if(number >= 1000000){
    return number + " dollars " +`(pinky)`
  } else {
    return number + " dollars"
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

// function verbing() {}
const verbing = (string) => {
  if(string.length >= 3) {
    if(string.slice(string.length-3) === 'ing'){
      return string + 'ly'
    } else {
    return string + 'ing'
    }
  } else {
    return string
  }
  
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

// function removeLastWord() {}
const removeLastWord = (string) => {
  let lastIndex = string.lastIndexOf(" ")
  string = string.substring(0, lastIndex)
  return string
}

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

// function everyOtherLetter() {}
const everyOtherLetter = (string) => {
  let newString = ""
  for(let i = 0; i <= string.length; i += 1) {
    if(i % 2 === 0) {
      newString += string[i]
    }
  }
  return newString
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
// function disemvowel() {}
const disemvowel = (string) => {
  return string.replace(/[aeiouAEIOU]/g,"")
}


/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */
// function disemvowelLongWords(){}
const disemvowelLongWords = (string) => {
  let wordsArray = string.split(" ")
  for(let i = 0; i < wordsArray.length; i += 1) {
    let word = wordsArray[i]
    if(word.length >= 5) {
      wordsArray[i] = disemvowel(word)
    }
  } return wordsArray.join(" ")
}
/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
// function middleCharacter() {}
const middleCharacter = (string) => {
  if(string.length % 2 !== 0) {
    let index = Math.floor(string.length / 2)
    let c = string.charAt(index)
    return c
  } else {
    let index1 = (string.length / 2) - 1
    let index2 = string.length / 2
    return string.charAt(index1) + string.charAt(index2)
  }
}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

// function reverseString() {}
const reverseString = (string) => {
  let newString = ""
  for(let i = string.length-1; i>=0; i -= 1) {
    newString += string.charAt(i)
  }
  return newString
}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

const reverseSentenceWords = (string) => {
  let splitSentenceArray = string.split(""); //string becomes an array
  console.log(splitSentenceArray)
  let reverseSentenceArray = splitSentenceArray.reverse()
  console.log(reverseSentenceArray)
  let joinReverseArray = reverseSentenceArray.join("") //array becomes a string (at element level which takes spaces into account)
  console.log(joinReverseArray)
  let splitWordArray = joinReverseArray.split(" ") //string becomes an array (again)
  console.log(splitWordArray)
  let reverseWordArray = splitWordArray.reverse()
  console.log(reverseWordArray)
  let joinArray = reverseWordArray.join(" ")
  console.log(joinArray)
  return joinArray
}
reverseSentenceWords("cats are the best")



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
