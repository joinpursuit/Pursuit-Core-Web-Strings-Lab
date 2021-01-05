/**
 * Returns the first character of a string passed in.
 * @param {string} str - an input string
 * @returns {string} - first char of str
 *
 * example: firstChar("banana") returns "b"
 * example: firstChar("pinapple") returns "p"
 * example: firstChar("") returns ""
 */
function firstChar (str = '') {
  return str.charAt(0)
}

firstChar()

/**
 * Returns the length of a string
 * @param {string} str - an input string
 * @returns {number} - length of str
 *
 * example: stringLength("what") returns 4
 * example: stringLength("sixteen") returns 7
 */
function stringLength (str = '') {
  let number = str.length
  return number
}

stringLength()

/**
 * Returns the last character of any string
 * @param {string} - an input string
 * @returns {string} - last letter of the input string
 *
 * example: lastLetter("zappa") returns "a"
 * example: lastLetter("sit on a potato pan otis") returns "s"
 * example: lastLetter("") returns ""
 */

function lastLetter (str = '') {
  if (str.length === 0) {
    return ''
  } else {
    return str[str.length - 1]
  }
}

lastLetter()

/**
 * Takes a string and returns a copy of the string with the last
 * letter capitalized.
 * @param {string} str - an input string
 * @returns {string} - the input string with the last letter capitalized
 *
 * example: capitalizeLastLetter("jimmy") returns "jimmY"
 * example: capitalizeLastLetter("what is the meaning of life") returns "what is the meaning of lifE"
 */
function capitalizeLastLetter (str = '') {
  {
    if (str.length === 0) {
      return ''
    } else {
      return str.slice(0, -1) + str.slice(-1).toUpperCase() // The group solution is better
      // let    newstring = str.slice(0,-1)
      // console.log(`str : ${newstring}`)
      //              str = str[str.length-1]
      //              str = str.toUpperCase()
      // console.log(`str : ${str}`)
      //       newstring += str
      //console.log(`str : ${newstring}`)
      // return newstring
    }
  }
}
capitalizeLastLetter('jimmy')

/**
 * Create a drEvil function that takes in a number
 * and returns "${number} dollars"
 * if the number is greater than 1 million, add (pinky) at the end
 *
 * @param {number} num
 * @returns {string}
 * example: drEvil(10) returns "10 dollars"
 * example: drEvil(100000000) returns "100000000 dollars (pinky)"
 */
function drEvil (num = 0) {
  let str = ''

  if (num >= 0 && num < 1000000) {
    str = `${num} dollars`
  } else if (num >= 1000000) {
    str = `${num} dollars (pinky)`
  }
  return str
}

drEvil()

/**
 * verbing() should take a string.
 * If its length is >= 3, it should add 'ing' to its end, unless it already ends in 'ing',
 * in which case it should add 'ly' instead.
 * If the string length is less than 3, it should leave it unchanged.
 * @param {string} str
 * @returns {string}
 * verbing('box') returns 'boxing'
 * verbing('swimming') returns  'swimmingly'
 * verbing('go') returns  'go'
 */
function verbing (str = '') {
  if (str.length >= 3 && str.slice(-3) === 'ing') {
    return str + 'ly'
  } else if (str.length >= 3) {
    return str + 'ing'
  } else if (str === '') {
    return ''
  } else {
    return str
  }
}

verbing()

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string} str - an input string
 * @returns {string} - the return value missing the last word
 *
 * example: removeLastWord("Hello!") returns ""
 * example: removeLastWord("I eat cake") returns "I eat"
 */
function removeLastWord (str = '') {
  let newstring = ''
  str = str.split(' ')
  numwords = Number(str.length)
  console.log(str)
  console.log(numwords)

  if (numwords <= 1) {
    return ''
  } else {
    for (let i = 0; i < numwords - 1; i += 1) {
      newstring = newstring + (str[i] + ' ')
    }
    newstring = newstring.slice(0, -1)
    console.log(newstring)
    return newstring
  }
}

removeLastWord('I drink coffee everyday')

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string} str - an input string
 * @returns {string} - the return value containing even indexed characters
 *
 * example: everyOtherLetter("Corey") returns "Cry"
 * example: everyOtherLetter("Skull candy") returns "Sulcny"
 */
function everyOtherLetter (str = '') {
  let newstr = ''
  for (let i = 0; i < str.length; i += 2) {
    newstr = newstr + str[i]
  }
  return newstr
}

everyOtherLetter()

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string} str - an input string
 * @returns {string} - return value string with all vowels removed
 *
 * example: disemvowel("aeiou") returns ""
 * example: disemvowel("Hello world!") returns "Hll wrld!"
 */
function disemvowel (str = '') {
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
    }
  }

  return newstr
}

disemvowel('PapE RAul')

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string} str - an input string
 * @returns {string} - return value string
 *
 * example: disemvowelLongWords("hi i am your friend") returns "hi i am your frnd"
 * example: disemvowelLongWords("amber is the color of your energy") returns "mbr is the clr of your nrgy"
 */
function disemvowelLongWords (str = '') {
  newstr = str.split(' ')

  unvowel = ''
  newword = ''
  for (let h = 0; h < newstr.length; h += 1) {
    if (newstr[h].length > 4) {
      word = newstr[h]

      for (let i = 0; i < word.length; i += 1) {
        if (
          word[i].toLowerCase() != 'a' &&
          word[i].toLowerCase() != 'e' &&
          word[i].toLowerCase() != 'i' &&
          word[i].toLowerCase() != 'o' &&
          word[i].toLowerCase() != 'u'
        ) {
          newword = newword + word[i]
        }
      }
      unvowel = unvowel + newword + ' '
      newword = ''
    } else {
      unvowel = unvowel + newstr[h] + ' '
    }
  }

  return unvowel.slice(0, -1)
}

disemvowelLongWords('Hello World!')
/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string} str - an input string
 * @returns {string} - the return value string, either one or two characters
 *
 * example: middleCharacter("hello") returns "l"
 * example: middleCharacter("ostentatious") returns "ta"
 */
function middleCharacter (str = '') {
  after = Math.floor(str.length /2)
  if ((str.length % 2) !== 0){
    return str[after]
  }else{
          
    return str = str[after-1] + str[after]
  }
}

middleCharacter('is')
/**
 * Takes in a string and reverses it.
 * Do not use .split()
 *
 * example: reverseString("hello") returns "olleh"
 * example: reverseString("sit on a potato pan otis") returns "sito nap otatop a no tis"
 *
 * @param {string} str - an input string
 * @returns {string} - the return value string, reversed str
 */
function reverseString (str = '') {
  newstr = ''
  for (let i = (str.length-1);i >= 0; i -= 1){
    newstr = newstr + str[i]
  }
  return newstr
}

reverseString('hello')

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string} str - an input string
 * @returns {string} - the return value string
 *
 * example: reverseSentenceWords("hello world") returns "olleh dlrow"
 * example: reverseSentenceWords("i am a racecar") returns "i ma a racecar"
 */

function reverseSentenceWords (str = '') {
  newstr  = str.split(' ')
  reversed = ''
  drow = ''
  newdrow = ''

  for (let h = 0; h < newstr.length; h += 1){
      drow = newstr[h]
      for(let i = (drow.length-1); i >= 0; i -= 1){
        newdrow = newdrow + drow[i]
      }
      reversed = reversed + newdrow + ' '
      newdrow = ''
  }
  return reversed.slice(0,-1)
}

reverseSentenceWords('hello world')

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
  reverseSentenceWords
}
