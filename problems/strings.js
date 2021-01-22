/**
 * Returns the first character of a string passed in.
 * @param {string} str - an input string
 * @returns {string} - first char of str
 * 
 * example: firstChar("banana") returns "b"
 * example: firstChar("pinapple") returns "p"
 * example: firstChar("") returns ""
 */

// One way of doing it:

// function firstChar(str) {
//   return str[0] || str
// }

function firstChar(str) {
  if (str.length === 0) {
    return ''
  }
  else {
    return str[0]
  }
}

// console.log(firstChar(""))
// console.log(firstChar("banana"))

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

// console.log(stringLength("Corey"))
// console.log(stringLength("corey"))
// console.log(stringLength(""))

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
  return str[str.length - 1] || str
}
// console.log(lastLetter(""))
// console.log(lastLetter("Corey"))
// console.log(lastLetter("cat"))

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
  let myStr = str

  if (myStr === "") {
    return ""
  }
  else {  
    let capitalize = myStr.slice(0, myStr.length - 1) + myStr[myStr.length - 1].toUpperCase()
    return capitalize
  }
}

// console.log(capitalizeLastLetter("Jimmy"))
// console.log(capitalizeLastLetter("cat"))
// console.log(capitalizeLastLetter(""))


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
  if (num < 1000000) {
    return num + " dollars"
  }
  else {
    return num + " dollars (pinky)"
  }
}

// console.log(drEvil(15))
// console.log(drEvil(1000001))

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
let newStr = str
let ing = "ing"
//let sliced = newStr.slice(newStr.length - 3)
if (newStr.length < 3) {
  return str
}
else if (newStr.slice(newStr.length - 3) === ing) {
  return newStr + "ly"
}
else {
  return newStr + "ing"
}
}

// console.log(verbing("swimming"))
// console.log(verbing("box"))
// console.log(verbing("am"))

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

  let newStr = str.split(" ")
  let subtracted = newStr.slice(0, newStr.length - 1)
  let string = subtracted.join(" ")
  return string
}

// console.log(removeLastWord("Hello"))
// console.log(removeLastWord("Hello world"))
// console.log(removeLastWord("I eat cake"))


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
let i = 0
let newStr = ""
while (i < str.length) {
  if (i % 2 === 0) {
    newStr += str[i] //I can keep assigning different constant strings to newStr
  }  
  i++
}
return newStr

}
//Still need to remove the commas in between words after the array is converted into a string
// console.log(everyOtherLetter("Corey"))
// console.log(everyOtherLetter("Skull candy"))



/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string} str - an input string
 * @returns {string} - return value string with all vowels removed
 * 
 * example: disemvowel("aeiou") returns ""
 * example: disemvowel("Hello world!") returns "Hll wrld!"
 */
function disemvowel(str) {
  let vowel = "aeiou".toUpperCase() + "aeiou"
  let newStr = str
  let chars
  for (let i = 0; i < vowel.length; i++) {
    chars = newStr.split(vowel[i])
    newStr = chars.join('') //at this moment, the newStr is "Crey"
  }
  return newStr
}

// console.log(disemvowel('Corey'))
// console.log(disemvowel("Hello World!"))
// console.log(disemvowel("Hi, I have awesome nice friends"))


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
// Myra's pseudocode
// create array of words
// loop through each word
// for each word:
// 1. Check if it’s 5 characters or longer
// If so, update words array with disemveled version
// otherwise, leave the word alone

  let words = str.split(" ")
  let newWords = ""
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      newWords = newWords + disemvowel(words[i]) + " "
    }
    else {
      newWords = newWords + words[i] + " "
    }

  } 
// The return now outputs a space character at the end. The following 3 lines removes it
  newWords = newWords.split(" ")
  newWords.pop()
  newWords = newWords.join(" ")
  return newWords
}

 console.log(disemvowelLongWords('COREY'))
 console.log(disemvowelLongWords("Hello World!"))
 console.log(disemvowelLongWords("Hi, I have awesome nice friends"))


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
  // takes in a string
  // we need the middle character
  // split the string into an array
  // divide the length of array by 2 (array.length / 2) = 2, or 3, or 2.5
  // if the length of array % 2 === 0 (even), return both middle characters
  // join these items into a new variable
  // return new variable with middle character

  let splitStr = str.split("")
  let divided = Math.floor(splitStr.length / 2)
  let dividedEven = Math.round((splitStr.length / 2) - 1)
  let output = []
  // console.log(divided, splitStr[divided])
  if (splitStr.length % 2 === 0) {
    return output = splitStr[dividedEven] + splitStr[divided]
  }
  else {
    return output = splitStr[divided]
  }
}
console.log(middleCharacter("Corey"))
console.log(middleCharacter("cat"))
console.log(middleCharacter("kitten"))
console.log(middleCharacter("miss"))



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
  // takes in a string
  // I can't use split(), so I won't be directly converting it into an array first
  // I can still transfer the elements of the string into an array
  // I need to reverse it, so I need to access the end of the string with str.length-1
  // I'll need to iterate through the string backwards with a loop, decrementing by 1
  // I can add every element in the string to a newStr variable as I loop through it
  // I'll try to do this by setting the reference of the newStr variable with bracket notation
  // afterwards, I can convert the array back into a string with join
function reverseString(str) {


  let newStr = ""
  let j = 0

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
    
    j++
  }

  return newStr
}

console.log(reverseString("Hello world"))
console.log(reverseString("cats are the best"))

console.log("")

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string} str - an input string
 * @returns {string} - the return value string
 * 
 * example: reverseSentenceWords("hello world") returns "olleh dlrow"
 * example: reverseSentenceWords("i am a racecar") returns "i ma a racecar"
 */

// will take in a string
// will use the reverseString() function to reverse the entire string and add it to newString
// will split newString into an array by separating at spaces with .split(" ")
// will iterate through the array backwards with array.length - 1, i--
// will add each word to newArray as it iterates backwards
// the newArray can now be joined into newString and returned
function reverseSentenceWords(str) {
  let newString = reverseString(str)
  let array = newString.split(" ")
  let newArray = []

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  newString = newArray.join(" ")
  return newString
}

console.log(reverseSentenceWords("cats are the best"))
console.log(reverseSentenceWords("Hello World"))



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
