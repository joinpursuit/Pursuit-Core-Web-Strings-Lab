/**
 * Takes a word and replaces all the vowels with an asterisk.
 * @param {string}
 * @returns {string}
 */
function replaceVowels(string) {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    if ("aeiou".includes(string[i].toLowerCase())) {
      newStr += string[i].replace(/[aeiou]/gi, "*");
    } else {
      newStr += string[i];
    }
  }
  return newStr;
}

/**
 * Takes in a string and adds "#" if the string has
 * an odd number of characters.
 * @param {string}
 * @returns {string}
 */
function makeStringEvenLength(string) {
  if (string.length % 2 === 1) {
    return string + "#";
  } else {
    return string;
  }
}

/**
 * Takes in a string and returns the last three
 * letters of the string. If the string is less than
 * three characters put the code: throw Error("Input less than three characters")
 * @param {string}
 * @returns {string}
 */

function lastThreeLetters(string) {
  let newStr = string.slice(-3);
  if (string.length < 3) {
    throw Error("Input less than three characters");
  }

  return newStr;
}

/**
 * Takes in a string and returns whether or not that string starts with a vowel.
 * @param {string}
 * @returns {boolean}
 */
function doesStartWithVowel(string) {
  if ("aeiou".includes(string[0])) {
    return true;
  } else {
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
  let newStr = "";
  let splitArr = str1.split("");
  splitArr.splice(Math.floor(splitArr.length / 2), 0, str2);
  return newStr + splitArr.join("");
}
/**
 * Takes in a string and returns whether or not is includes a vowel.
 * Don't use the || (OR) operator,  use the includes method and make it
 * case insensitive https://en.wikipedia.org/wiki/Case_sensitivity.
 * @param {string}
 * @returns {boolean}
 */
function includesVowel(string) {
  for (let i = 0; i < string.length; i++) {
    if ("aeiou".includes(string[i])) {
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
  let number = 0;
  for(let i = 0; i < string.length; i++) {
    if ("aeiou".includes(string[i].toLowerCase())) {
      number += 1
    }
  }
  return number;
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
