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
  if(str.length === 0){
    return str
  }
  return str[0]
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
 * @param {string} - an input string
 * @returns {string} - last letter of the input string
 * 
 * example: lastLetter("zappa") returns "a"
 * example: lastLetter("sit on a potato pan otis") returns "s"
 * example: lastLetter("") returns ""
 */

function lastLetter(str) {
  if(str.length === 0){
    return str
  }
  return str[str.length - 1]
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
  let str2

  if(str.length === 0){
    return str
  }
  str2 = str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase()
  return str2
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
  if(num < 1000000){
    return `${num} dollars`
  }
  return `${num} dollars (pinky)`
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
  if(str.length >= 3){
    if(str.slice(str.length - 3) === "ing"){
      return str + "ly"
    }
    return str + "ing"
  }
  return str
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
  let str2
  let arr = []
  arr = str.split(' ')
  arr.pop()
  str2 = arr.join(" ")
  return str2
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
  let str2 = ""
  for(let i = 0; i < str.length; i += 2){
    str2 += str[i]
  }
  return str2
}


/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string} str - an input string
 * @returns {string} - return value string with all vowels removed
 * 
 * example: disemvowel("aeiou") returns ""
 * example: disemvowel("Hello world!") returns "Hll wrld!"
 */
function disemvowel(str) {
  let str2 = ""
  if(str.length===0){
    return ""
  }
  for(let i = 0; i < str.length; i++){
    if(str[i] !== "a" && str[i] !== "A" && str[i] !== "e" && str[i] !=="E"
    && str[i] !== "i" && str[i] !== "I" && str[i] !== "o" && str[i] !=="O"
    && str[i] !== "u" && str[i] !== "U"){
      str2 += str[i]
    }
  }
  return str2
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
 function disemvowelLongWords(str){
   let arr = []
   let str1
   let str2
   arr = str.split(" ")
   for(let i = 0; i < arr.length; i++){
     str1 = ""
     if(arr[i].length >= 5){
       str2 = arr[i]
       for(let j = 0; j < str2.length; j++){
         if(str2[j] !== "a" && str2[j] !== "A" && str2[j] !== "e" && str2[j] !=="E"
         && str2[j] !== "i" && str2[j] !== "I" && str2[j] !== "o" && str2[j] !=="O"
         && str2[j] !== "u" && str2[j] !== "U"){
           str1 += str2[j]
         }
       }
       arr[i] = str1
      }
    }
    str1 = arr.join(" ")
    return str1
 }


/**`
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string} str - an input string
 * @returns {string} - the return value string, either one or two characters
 * 
 * example: middleCharacter("hello") returns "l"
 * example: middleCharacter("ostentatious") returns "ta"
 */
function middleCharacter(str) {
  if(str.length % 2 === 1){
    return str[Math.floor(str.length / 2)]
  }
  return str[str.length / 2 - 1] + str[str.length / 2]
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
function reverseString(str) {
  let str2 = ""
  for(let i = str.length - 1; i >= 0; i--){
    str2 += str[i]
  }
  return str2
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

function reverseSentenceWords(str) {
  let arr = []
  let str1
  let str2
  arr = str.split(" ")
  for(let i = 0; i < arr.length; i++){
    str1 = ""
    str2 = arr[i]
    for(let j = str2.length - 1; j >= 0; j--){
      str1 += str2[j]
    }
    arr[i] = str1
  }
  str1 = arr.join(" ")
  return str1
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
