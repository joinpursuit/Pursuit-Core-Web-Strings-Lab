/**
 * Takes a word and replaces all the vowels with an asterisk.
 * @param {string}
 * @returns {string}
 */
function replaceVowels(str) {
  let newStr = "";

  let vowelsArray = ["a", "e", "i", "o", "u"]

  for (let i = 0; i < str.length ; i += 1) {
    if (vowelsArray.includes(str[i].toLowerCase())) {
      newStr += "*";
    }else{
      newStr += str[i];
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
function makeStringEvenLength(str) {
  if(str.length % 2 === 0){
    return str;
  }else{
    return `${str}\#`
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
    throw Error("Input less than three characters")
  }else{
    return str.slice(-3)
  }
}

/**
 * Takes in a string and returns whether or not that string starts with a vowel.
 * @param {string}
 * @returns {boolean}
 */
function doesStartWithVowel(str) {
  let vowelsArray = ["a", "e", "i", "o", "u"]
  if(vowelsArray.includes(str[0])){
    return true;
  }else{
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
  return `${str1} ${str2}`;
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
  let firstHalf = ""
  let secondHalf = ""
  let mashedUpWord = ""

  if(str1.length % 2 == 0) {
    firstHalf = str1.slice(0, (str1.length/2))
    secondHalf = str1.slice(str1.length/2)
    mashedUpWord = `${firstHalf}${str2}${secondHalf}`
  }else{
    firstHalf = str1.slice(0, Math.floor((str1.length/2)))
    secondHalf = str1.slice(Math.floor((str1.length/2)))
    mashedUpWord = `${firstHalf}${str2}${secondHalf}`
  }
  return mashedUpWord
}

/**
 * Takes in a string and returns whether or not is includes a vowel.
 * Don't use the || (OR) operator,  use the includes method and make it
 * case insensitive https://en.wikipedia.org/wiki/Case_sensitivity.
 * @param {string}
 * @returns {boolean}
 */
function includesVowel(str) {
  let vowelsArray = ["a", "e", "i", "o", "u"]

  for(let i = 0; i < str.length; i += 1){
    if(vowelsArray.includes(str[i])){
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

function vowelCount(str) {
  let vowelsArray = ["a", "e", "i", "o", "u"]
  let count = 0;
  for(let i = 0; i < str.length; i += 1){
    if(vowelsArray.includes(str[i].toLowerCase())){
      count += 1;
    }
  }
  return count;
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
