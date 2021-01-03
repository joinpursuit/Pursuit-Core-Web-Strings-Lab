/**
 * Takes a word and replaces all the vowels with an asterisk.
 * @param {string}
 * @returns {string}
 */
function replaceVowels(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "a" || string[i].toLowerCase() === "e" || string[i].toLowerCase() === "i" || string[i].toLowerCase() === "o" || string[i].toLowerCase() === "u") {
      newString += "*";
    } else {
      newString += string[i]
    }
  }
  return newString;

}

/**
 * Takes in a string and adds "#" if the string has
 * an odd number of characters.
 * @param {string}
 * @returns {string}
 */
function makeStringEvenLength(string) {
  if (string.length % 2 === 1) {
    string += "#"
  }
  return string;

}

/**
 * Takes in a string and returns the last three
 * letters of the string. If the string is less than
 * three characters put the code: throw Error("Input less than three characters")
 * @param {string}
 * @returns {string}
 */

function lastThreeLetters(string) {
  if (string.length < 3) {
    throw Error("Input less than three characters")
  } else {
    return string.slice(string.length - 3)
  }
}

/**
 * Takes in a string and returns whether or not that string starts with a vowel.
 * @param {string}
 * @returns {boolean}
 */
function doesStartWithVowel(string) {
  switch (string[0]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
}

/**
 * Takes in two strings and returns a new string
 * with the two strings separated by a space.
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function combineStrings(str1, str2) {
  return str1 + " " + str2;

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
  return str1.slice(0, ((str1.length) / 2)) + str2 + str1.slice(((str1.length) / 2))

}
/**
 * Takes in a string and returns whether or not is includes a vowel.
 * Don't use the || (OR) operator,  use the includes method and make it
 * case insensitive https://en.wikipedia.org/wiki/Case_sensitivity.
 * @param {string}
 * @returns {boolean}
 */
const includesVowel = string => {
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      return true;
    }
  }
  return false;

}

/**
 * Takes in a string and returns the number of vowels that it contains.
 * You may use loops for this.
 * @param {string}
 * @returns {number} number of vowels
 */

function vowelCount(string) {
  let vowels = "aeiouAEIOU"
  let total = 0

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      total++
    }
  }
  return total;


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
