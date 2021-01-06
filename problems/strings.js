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
  if (str.length === 0) {
    return ''
  }
  return str[0]
}

console.log(firstChar("banana")) //returns "b"
console.log(firstChar("pinapple")) //returns "p"
console.log(firstChar("")) //returns ""

/*
 * Returns the length of a string
 * @param {string} str - an input string
 * @returns {number} - length of str
 * 
 * example: stringLength("what") returns 4
 * example: stringLength("sixteen") returns 7
 */
function stringLength(str) {
  return (str.length)

}
console.log(stringLength("what"))
console.log(stringLength("sixteen"))

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
  if( str === ''){
    return ''
  }
  
  return str[str.length-1]
}

console.log(lastLetter("zappa")) //returns "a"
console.log(lastLetter("sit on a potato pan otis"))//returns "s"
console.log(lastLetter(""))//returns ""


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
  if(str === ''){
    return ''
  }
  return (str.slice(0,(str.length-1))) +  str[str.length-1].toUpperCase()
}
console.log(capitalizeLastLetter("jimmy")) //returns "jimmY"
console.log(capitalizeLastLetter("what is the meaning of life"))//returns "what is the meaning of lifE"
console.log(capitalizeLastLetter(""))

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
  if(num >= 1000000) {
    return `${num} dollars (pinky)`
  }
  return `${num} dollars`
}

console.log(drEvil(10))// returns "10 dollars"
console.log(drEvil(100000000)) // returns "100000000 dollars (pinky)"

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
    if(str.slice(-3) === 'ing'){
      return `${str}ly`
    }
  return `${str}ing`
  }
  return str 
}

console.log(verbing('box'))
console.log(verbing('swimming'))
console.log(verbing('go'))


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
  let words = str.split(' ')
  let newString = words.slice(0,[words.length-1]).join(' ')
  return newString

}
console.log(removeLastWord("Hello!"))
console.log(removeLastWord("I eat cake"))
console.log(removeLastWord("Hello word"))


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
  let string = ''
  for(let i =0; i < str.length; i+=2){
    string+= str[i]

  }
  return string
}
console.log(everyOtherLetter("Corey"))
console.log(everyOtherLetter("Skull candy"))

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string} str - an input string
 * @returns {string} - return value string with all vowels removed
 * 
 * example: disemvowel("aeiou") returns ""
 * example: disemvowel("Hello world!") returns "Hll wrld!"
 */
function disemvowel(str) {
  let string = ''
  let str1= str.toLowerCase()
  for(let i = 0; i < str1.length; i++) {
    if(str1[i] === 'a' || str1[i] === 'i' || str1[i] === 'o' || str1[i] ===  'e' || str1[i] ===  'u'){ 
      string = string + ''
    } else {
      string+=str[i]
    }
      
  }
  return string
}
console.log(disemvowel("aeiou")) //returns ""
console.log(disemvowel("Hello world!")) //returns "Hll wrld!"
console.log(disemvowel("COREY"))


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
  let word = str.split(" ");
  for (let i = 0; i < word.length; i++) {
    if (word[i].length >= 5) {
      word[i] = disemvowel(word[i]);
    }
  }
  return word.join(" ");
}

console.log(disemvowelLongWords("hi i am your friend"))
// console.log(disemvowelLongWords("amber is the color of your energy"))
// console.log(disemvowelLongWords("Hello World!"))//.toBe("Hll Wrld!");
// console.log(disemvowelLongWords("COREY"))//.toBe("CRY");
// console.log(disemvowelLongWords("Hi, I have awesome nice friends"))//.toBe "Hi, I have wsm nice frnds"
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
    if (str.length % 2 === 1) {
      return str[Math.floor(str.length / 2)];
    } else {
      return str[str.length / 2 - 1] + str[str.length / 2];
    }

}
console.log(middleCharacter("Corey"))//("r");
console.log(middleCharacter("cat"))//("a");
console.log(middleCharacter("Miss"))//("is");
console.log(middleCharacter("kitten"))//("tt");
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
  let revStr = "";
  for(let i = (str.length - 1); i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}
console.log(reverseString("hello")) //returns "olleh")
console.log(reverseString("sit on a potato pan otis")) //returns "sito nap otatop a no tis")
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
  let arr = str.split(" ");
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(arr[i].split("").reverse().join(""));
  }
  return output.join(" ");
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
