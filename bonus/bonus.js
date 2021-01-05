const { reverseSentenceWords } = require("../problems/strings")

/**
 * Takes a word and replaces all the vowels with an asterisk.
 * @param {string}
 * @returns {string}
 */
function replaceVowels(str = '') {
  newstr = ''

  for (let i = 0; i < str.length; i += 1) {
    if (
      str[i].toLowerCase() != 'a' &&
      str[i].toLowerCase() != 'e' &&
      str[i].toLowerCase() != 'i' &&
      str[i].toLowerCase() != 'o' &&
      str[i].toLowerCase() != 'u'
    ) {
      newstr = newstr + str[i]
    }else{
      newstr = newstr + '*'
    }

  }

  return newstr
}

/**
 * Takes in a string and adds "#" if the string has
 * an odd number of characters.
 * @param {string}
 * @returns {string}
 */
function makeStringEvenLength(str = '') {
  if ((str.length % 2) !== 0){
    return str += '#'
  }else{
    return str
  }
}

makeStringEvenLength()

/**
 * Takes in a string and returns the last three
 * letters of the string. If the string is less than
 * three characters put the code: throw Error("Input less than three characters")
 * @param {string}
 * @returns {string}
 */

function lastThreeLetters(str = '') {
  
  if( str.length < 3){
    return 'Input less than three characters'
  }else if (str.length === 2 ){
    return str
  }else
  {
    for (let i = 1; i <=3; i +=1){
        newstr= newstr + str[str.length-i]
    }
    console.log(newstr)
    return newstr
  }
}

lastThreeLetters('catalpa')


/**
 * Takes in a string and returns whether or not that string starts with a vowel.
 * @param {string}
 * @returns {boolean}
 */
function doesStartWithVowel(str = '') {
  if (
    str.charAt(0).toLowerCase() != 'a' &&
    str.charAt(0).toLowerCase() != 'e' &&
    str.charAt(0).toLowerCase() != 'i' &&
    str.charAt(0).toLowerCase() != 'o' &&
    str.charAt(0).toLowerCase() != 'u'
  ) {
    return false  
  }else{
    return true
  }
}

doesStartWithVowel()

/**
 * Takes in two strings and returns a new string
 * with the two strings separated by a space.
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function combineStrings(str1 = "", str2 = "") {
return newstr = str1 + ' ' + str2
}

combineStrings()

/**
 * Write a function that takes in two strings, `str1` and `str2`,
 * return a new string with `str2` mashed into the middle of `str1`
 * Exp str1 = 'help' str2 = 'me' returns 'hemelp'.
 * Exp str1 = 'hello' str2 = 'world' returns 'heworldllo.'
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function mashUp(str1= '', str2 ='') {

  middle = Math.floor(str1.length/2)
  newstr = str1.slice(0,middle) + str2 + str1.slice(middle)
  return newstr

}

mashUp()
/**
 * Takes in a string and returns whether or not is includes a vowel.
 * Don't use the || (OR) operator,  use the includes method and make it
 * case insensitive https://en.wikipedia.org/wiki/Case_sensitivity.
 * @param {string}
 * @returns {boolean}
 */
function includesVowel(str = '') {
  positive = 0
  for (let i = 0; i < str.length; i += 1){

    if (
      str.charAt(i).toLowerCase() != 'a' &&
      str.charAt(i).toLowerCase() != 'e' &&
      str.charAt(i).toLowerCase() != 'i' &&
      str.charAt(i).toLowerCase() != 'o' &&
      str.charAt(i).toLowerCase() != 'u'
    ) {
      positive += 1
    }else{
      return true
    }
  }
    if(positive !== 0){
      return false
    }
  
}

includesVowel()
/**
 * Takes in a string and returns the number of vowels that it contains.
 * You may use loops for this.
 * @param {string}
 * @returns {number} number of vowels
 */

function vowelCount(str = '') {
  count = 0
  for (let i = 0; i < str.length; i += 1){

    if (
      str.charAt(i).toLowerCase() != 'a' &&
      str.charAt(i).toLowerCase() != 'e' &&
      str.charAt(i).toLowerCase() != 'i' &&
      str.charAt(i).toLowerCase() != 'o' &&
      str.charAt(i).toLowerCase() != 'u'
    ) {
      count += 0 
    }else{
      count += 1
    }
  }
    return count
}

vowelCount()

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
