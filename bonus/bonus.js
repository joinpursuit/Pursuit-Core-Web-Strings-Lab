/**
 * Takes a word and replaces all the vowels with an asterisk.
 * @param {string}
 * @returns {string}
 */
function replaceVowels(str) {
  let res = ""
  let vowels = "aeiouAEIOU"
  for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
      res += "*"
    } else {
      res += str[i]
    }
  }
  return res
}
replaceVowels("string")
/**
 * Takes in a string and adds "#" if the string has
 * an odd number of characters.
 * @param {string}
 * @returns {string}
 */
function makeStringEvenLength(str) {
  if(str.length % 2 !== 0){
    return `${str}#`
  } else {
    return str
  }
}
makeStringEvenLength("string")
/**
 * Takes in a string and returns the last three
 * letters of the string. If the string is less than
 * three characters put the code: throw Error("Input less than three characters")
 * @param {string}
 * @returns {string}
 */

function lastThreeLetters(str) {
  if(str.length < 3){
   throw Error("Input less than three characters")
  } else {
    return newStr = str.slice(-3)
  }
}
lastThreeLetters("string")
/**
 * Takes in a string and returns whether or not that string starts with a vowel.
 * @param {string}
 * @returns {boolean}
 */
function doesStartWithVowel(str) {
  let vowels = "aeiouAEIOU"
  if (vowels.includes(str[0])) {
    return true
  } else {
    return false
  }
}
doesStartWithVowel(`string`)
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
combineStrings("string1", "string2")
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

}
/**
 * Takes in a string and returns whether or not is includes a vowel.
 * Don't use the || (OR) operator,  use the includes method and make it
 * case insensitive https://en.wikipedia.org/wiki/Case_sensitivity.
 * @param {string}
 * @returns {boolean}
 */
function includesVowel(str) {}

/**
 * Takes in a string and returns the number of vowels that it contains.
 * You may use loops for this.
 * @param {string}
 * @returns {number} number of vowels
 */

function vowelCount(str) {
  let numOfVowels = 0
  let vowels ="AEIOUaeiou"
  for(let i = 0; i < str.length; i++){
    if(vowels.includes(str[i])){
      numOfVowels++
    }
  }
  return numOfVowels
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
