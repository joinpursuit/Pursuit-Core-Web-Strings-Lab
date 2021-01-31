/**
 * Returns the first character of a string passed in.
 * @param {string} str - an input string
 * @returns {string} - first char of str
 * 
 * example: firstChar("banana") returns "b"
 * example: firstChar("pinapple") returns "p"
 * example: firstChar("") returns ""
 */
function firstChar(str) {
  return str[0] || str
}


/**
 * Returns the length of a string
 * @param {string} str - an input string
 * @returns {number} - length of str
 * 
 * example: stringLength("what") returns 4
 * example: stringLength("sixteen") returns 7
 */
function stringLength(str) {
  return str.length
}


/**
 * Returns the last character of any string
 * @param {string} str - an input string
 * @returns {string} - last letter of the input string
 * 
 * example: lastLetter("zappa") returns "a"
 * example: lastLetter("sit on a potato pan otis") returns "s"
 * example: lastLetter("") returns ""
 */

function lastLetter(str) {
  if (str.length === 0) {
    return ""
  } else {
    return str[str.length - 1]
  }
}

/**
 * Takes a string and returns a copy of the string with the last
 * letter capitalized.
 * @param {string} str - an input string
 * @returns {string} - the input string with the last letter capitalized
 * 
 * example: capitalizeLastLetter("jimmy") returns "jimmY"
 * example: capitalizeLastLetter("what is the meaning of life") returns "what is the meaning of lifE"
 */
function capitalizeLastLetter(str) {
  let newstr = str.slice([str.length - 1])
  let upper = newstr.toUpperCase()
  let without = str.slice(0, -1)
  return without + upper
}


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
function drEvil(num) {
  if (num >= 1000000) {
    return `${num} dollars (pinky)`
  } else {
    return `${num} dollars`
  }

}

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
function verbing(str) {
  if (str.endsWith("ing")) {
    return str + 'ly'
  } else if (str.length >= 3) {
    return str + 'ing'
  } else {
    return str
  }



}


/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string} str - an input string
 * @returns {string} - the return value missing the last word
 * 
 * example: removeLastWord("Hello!") returns ""
 * example: removeLastWord("I eat cake") returns "I eat"
 */
function removeLastWord(str) {
  let words = str.split(" ")
  let copy = words.slice(0 , words.length -1)
  let copy2 = copy.join(' ')
  return copy2
}


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
function everyOtherLetter(str) {
  let newString = ''
  for (let i = 0; i < str.length; i += 2) {
    newString += str[i]
  }
  return newString
}


/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string} str - an input string
 * @returns {string} - return value string with all vowels removed
 * 
 * example: disemvowel("aeiou") returns ""
 * example: disemvowel("Hello world!") returns "Hll wrld!"
 */
function disemvowel(string) {
  let emptyString = "" 
  
       for (let i = 0; i <= string.length -1; i++){
           if (string[i] !== "a" && string[i] !== "e" && string[i] !== "i" && string[i] !== "o" && string[i] !== "u" && string[i] !== "A" && string[i] !== "E" && string[i] !== "I" && string[i] !== "O" && string[i] !== "U"){
              emptyString += string[i]
           }
       } return emptyString
      
    }

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string} str - an input string
 * @returns {string} - return value string
 * 
 * example: disemvowelLongWords("hi i am your friend") returns "hi i am your frnd"
 * example: disemvowelLongWords("amber is the color of your energy") returns "mbr is the clr of your nrgy"
 */
function disemvowelLongWords(string){
  let splitUp = string.split(' ')
  let newString = ''

  for(i = 0; i < splitUp.length ; i++){
    if (splitUp[i].length >= 5){
      newString += disemvowel(splitUp[i]) + ' '
    } else {
      newString += splitUp[i] + ' '
    }
  } return newString.trim()
 

 }
// console.log(disemvowelLongWords("amber is the color of your energy"))

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string} str - an input string
 * @returns {string} - the return value string, either one or two characters
 * 
 * example: middleCharacter("hello") returns "l"
 * example: middleCharacter("ostentatious") returns "ta"
 */
function middleCharacter(str) { 
let midIndx = Math.floor(str.length/2)
if(str.length % 2 ===1){
  return str[midIndx]
}
else{
  return str[midIndx - 1] + str[midIndx]
}
}


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
function reverseString(string) {
  let newString = ""
    for (i = string.length -1 ; i >= 0; i--){
        newString += string[i]
    } return newString
}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string} str - an input string
 * @returns {string} - the return value string
 * 
 * example: reverseSentenceWords("hello world") returns "olleh dlrow"
 * example: reverseSentenceWords("i am a racecar") returns "i ma a racecar"
 */

function reverseSentenceWords(string) {
  let newString = ""
    let split = string.split(" ")

    for (let i = 0; i <= split.length -1; i++ ){
       newString += " " + reverseString(split[i])
    } return newString.trim()
}
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
