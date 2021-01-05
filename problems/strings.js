/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
function firstChar(str) {
  if (str === "") {
    return ""
  } else {
    return str[0]
  }
}
//console.log(firstChar(""))
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
  if (str === "") {
    return ""
  } else {
    return str[str.length - 1]
  }
}
//console.log(lastLetter("silly thing"))

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

function capitalizeLastLetter(str) {
  if (str === "") {
    return ""
  } else {
    let lastCap = str.slice(0, (str.length - 1)) + str[str.length - 1].toUpperCase()
    return lastCap
  }
}
//console.log(capitalizeLastLetter(""))

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
    str = num.toString() + " dollars"
  } else {
    str = num.toString() + " dollars (pinky)"
  }
  return str
}
//console.log(drEvil(10000000))
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
    return str
  } else if (str.length >= 3 && str.slice(str.length - 3) != "ing") {
    return str + "ing"
  } else if (str.slice(str.length - 3) === "ing") {
    return str + "ly"

  }
}
// console.log(verbing("cating"))

// let test = "apple"
// console.log(test.slice(test.length - 3))

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord(str) {
  arr = str.split(" ")
  popArr = arr.pop()
  newStr = arr.join(" ")


  return newStr
}
//console.log(removeLastWord("Hi how are you!"))

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter(str) {
  let newStr = []
  for (i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr.push(str[i])
    }
  }
  return newStr.join("")
}
//console.log(everyOtherLetter("aabbccddeeff"))
/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel(str) {
  let arr = []
  for (i = 0; i < str.length; i++) {
    if (str[i] === "A" || str[i] === "a"|| str[i] === "E"|| str[i] === "e"|| str[i] === "I"|| str[i] === "i"|| str[i] === "O"|| str[i] === "o"|| str[i] === "U"|| str[i] === "u") {
      arr.push("")
    } else {
      arr.push(str[i])
    }
    
  }
  return arr.join("")
}
//console.log(disemvowel("Hello World! Apple"))

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

function disemvowelLongWords(str) {
  newArr = []
  arr = str.split(" ")
  for(i = 0; i < arr.length; i++){
    if (arr[i].length >= 5){
      newArr.push(disemvowel(arr[i]))
    }else{
      newArr.push(arr[i])
    }
  }
  return newArr

}
//console.log(disemvowelLongWords("Hippo is my friend"))
/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
function middleCharacter(str) {
  char = ""
  if((str.length % 2) === 1 ){
    char = str[(str.length - 1)/2] 
  }else{
    char = str[((str.length)/2)-1] + str[(str.length)/2]
  }
  return char
 }
 console.log(middleCharacter("moindd"))

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

function reverseString() { }

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

function reverseSentenceWords() { }

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
