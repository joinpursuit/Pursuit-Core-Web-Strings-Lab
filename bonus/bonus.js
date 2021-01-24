/**
 * Takes a word and replaces all the vowels with an asterisk.
 * @param {string}
 * @returns {string}
 */
const replaceVowels = (word) => {
  let vowel = 'aeiouAEIOU'
  let newStr=''
  for (let char of word){
    if (vowel.includes(char)){
      char = '*'
      newStr += char
    } else {
      newStr +=  char
    }
  }
  return newStr
}

/**
 * Takes in a string and adds "#" if the string has
 * an odd number of characters.
 * @param {string}
 * @returns {string}
 */
function makeStringEvenLength(string) {
  if (string.length % 2 === 1){
    string += "#"
  }
  return string
}

/**
 * Takes in a string and returns the last three
 * letters of the string. If the string is less than
 * three characters put the code: throw Error("Input less than three characters")
 * @param {string}
 * @returns {string}
 */

function lastThreeLetters(str) {
  if (str.length >= 3){
    return str.slice(-3)
  } else if (str.length < 3) {
    return "Input less than three characters"
  }
}

 console.log(lastThreeLetters("Hi"))

/**
 * Takes in a string and returns whether or not that string starts with a vowel.
 * @param {string}
 * @returns {boolean}
 */
function doesStartWithVowel(str) {
  let vowel = 'aeiou'
  return vowel.includes(str[0].toLowerCase())
}

/**
 * Takes in two strings and returns a new string
 * with the two strings separated by a space.
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function combineStrings(str1,str2) {
  return str1.concat(" ", str2)

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
function mashUp(str1,str2) {

let middleIndex = Math.floor(str1.length/2)
let newString = str1.slice(0,middleIndex) + str2 + str1.slice(middleIndex,str1.length)
return newString

}

console.log(mashUp('help', 'me'))
/**
 * Takes in a string and returns whether or not is includes a vowel.
 * Don't use the || (OR) operator,  use the includes method and make it
 * case insensitive https://en.wikipedia.org/wiki/Case_sensitivity.
 * @param {string}
 * @returns {boolean}
 */
const includesVowel = (str) => {
  let vowel ="aeiouAEIOU"
  for (let char of str){
      if(vowel.includes(char)){
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
  let vowel = 'aeiou'
  let count = 0
  for(let char of str){
    if(vowel.includes(char.toLowerCase())){
      count ++
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
