/**
 * Takes a word and replaces all the vowels with an asterisk.
 * @param {string}
 * @returns {string}
 */
function replaceVowels(str) {
  let str2 = ""
  for(let i = 0; i < str.length; i++){
    if(str[i] === "a" || str[i] === "A" || str[i] === "e" || str[i] === "E" || str[i] === "i" || str[i] === "I" || str[i] === "o" || str[i] === "O" || str[i] === "u" || str[i] === "U"){
      str2 += "*"
    } else {
      str2 += str[i]
    }
  }
  return str2
}

/**
 * Takes in a string and adds "#" if the string has
 * an odd number of characters.
 * @param {string}
 * @returns {string}
 */
function makeStringEvenLength(str) {
  let str2 = ""
  if(str.length % 2 === 1){
    str2 = str + "#"
    return str2
  } else {
    return str
  }
}

/**
 * Takes in a string and returns the last three
 * letters of the string. If the string is less than
 * three characters put the code: throw Error("Input less than three characters")
 * @param {string}
 * @returns {string}
 */

function lastThreeLetters(str) {
  if(str.length < 3){
    throw "Input less than three characters"
  } else {
    return str.slice(str.length - 3)
  }
}

/**
 * Takes in a string and returns whether or not that string starts with a vowel.
 * @param {string}
 * @returns {boolean}
 */
function doesStartWithVowel(str) {
  if(str[0] === "a" || str[0] === "A" || str[0] === "e" || str[0] === "E" || str[0] === "i" || str[0] === "I" || str[0] === "o" || str[0] === "O" || str[0] === "u" || str[0] === "U"){
    return true
  }
  return false
}

/**
 * Takes in two strings and returns a new string
 * with the two strings separated by a space.
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function combineStrings(str1, str2) {
  return `${str1} ${str2}`
}
/**
 * Write a function that takes in two strings, `str1` and `str2`,
 * return a new string with `str2` mashed into the middle of `str1`
 * Exp str1 = 'help' str2 = 'me' returns 'hemelp'.
 * Exp str1 = 'hello' str2 = 'world' returns 'heworldllo.'
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function mashUp(str1, str2) {
  if(str1 % 2 === 0){
    return str1.slice(0, str1.length / 2) + str2 + str1.slice(str1.length / 2)
  } else {
    return str1.slice(0, Math.floor(str1.length / 2)) + str2 + str1.slice(Math.floor(str1.length / 2))
  }
}
/**
 * Takes in a string and returns whether or not is includes a vowel.
 * Don't use the || (OR) operator,  use the includes method and make it
 * case insensitive https://en.wikipedia.org/wiki/Case_sensitivity.
 * @param {string}
 * @returns {boolean}
 */
function includesVowel(str) {
  if(str.includes("a")){ //didn't use ternary, preferred vertical over horizontal
    return true
  }
  if(str.includes("A")){
    return true
  }
  if(str.includes("e")){
    return true
  }
  if(str.includes("E")){
    return true
  }
  if(str.includes("i")){
    return true
  }
  if(str.includes("I")){
    return true
  }
  if(str.includes("o")){
    return true
  }
  if(str.includes("O")){
    return true
  }
  if(str.includes("u")){
    return true
  }
  if(str.includes("U")){
    return true
  }
  return false
}

/**
 * Takes in a string and returns the number of vowels that it contains.
 * You may use loops for this.
 * @param {string}
 * @returns {number} number of vowels
 */

function vowelCount(str) {
  let count = 0
  for(let i = 0; i < str.length; i++){
    if(str[i] === "a" || str[i] === "A" || str[i] === "e" || str[i] === "E" || str[i] === "i" || str[i] === "I" || str[i] === "o" || str[i] === "O" || str[i] === "u" || str[i] === "U"){
      count++
    }
  }
  return count
}

module.exports = {
  replaceVowels,
  makeStringEvenLength,
  lastThreeLetters,
  doesStartWithVowel,
  combineStrings,
  mashUp,
  includesVowel,
  vowelCount,
};
