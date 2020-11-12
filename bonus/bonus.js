/**
 * Takes a word and replaces all the vowels with an asterisk.
 * @param {string}
 * @returns {string}
 */
function replaceVowels(str) {
  let newStr = ""
  for (let i = 0; i < str.length; i++) {
    newStr += "AEIOUaeiou".includes(str[i]) ? "*" : str[i]
  }
  return newStr
}

/**
 * Takes in a string and adds "#" if the string has
 * an odd number of characters.
 * @param {string}
 * @returns {string}
 */
function makeStringEvenLength(str) {
  return str.length % 2 === 0 ? str : str + "#"
}

/**
 * Takes in a string and returns the last three
 * letters of the string. If the string is less than
 * three characters put the code: throw Error("Input less than three characters")
 * @param {string}
 * @returns {string}
 */

function lastThreeLetters(str) {
  if (str.length < 3) {
    throw Error("Input less than three characters")
  }
  return str.substring(str.length - 3,str.length)
}

/**
 * Takes in a string and returns whether or not that string starts with a vowel.
 * @param {string}
 * @returns {boolean}
 */
function doesStartWithVowel(str) {
  return "AEIOUaeiou".includes(str[0])
}

/**
 * Takes in two strings and returns a new string
 * with the two strings separated by a space.
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function combineStrings(str1, str2) {
  return str1 + " " + str2
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
  let firstHalf = str1.substring(0, str1.length / 2)
  let secondHalf = str1.substring((str1.length / 2), str1.length)
  return firstHalf + str2 + secondHalf
}
/**
 * Takes in a string and returns whether or not is includes a vowel.
 * Don't use the || (OR) operator,  use the includes method and make it
 * case insensitive https://en.wikipedia.org/wiki/Case_sensitivity.
 * @param {string}
 * @returns {boolean}
 */
function includesVowel(str) {
  for (let letter of str) {
    if ("AEIOUaeiou".includes(letter)) {
      return true
    }
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
  for (let letter of str) {
    count += includesVowel(letter) ? 1 : 0
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
