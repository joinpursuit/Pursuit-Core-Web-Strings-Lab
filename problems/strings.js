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
    return '';
  } 
    return str[0];
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
  return str.length;
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

function lastLetter(string) {
  if (string.length === 0) {
    return ''
  }
  return string[string.length -1]
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
  if(str.length === 0) {
    return ''
  }
    let newStr = str[str.length -1].toUpperCase();
  
    return  str.slice(0, str.length -1) + newStr
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
  } 
  return `${num} dollars`
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
  if(str.length < 3) {
    return str;
  } else if (str.slice(- 3) === 'ing'){
  return `${str}ly`
  } else {
    return `${str}ing`
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
  sentence = str.split(' ');
  if (sentence.length <= 1){
    return '';
  } else {
    sentence.pop()
    newStr = sentence.join(' ')
    return newStr
  }
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
  let string = str
  let array = []
  for (let i = 0; i < string.length; i++){
    if(i % 2 === 0){
      array.push(str[i]);
    }
  }
  return array.join('')
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
  let newArr = [];
  let arr = str.split('');
  let vowels = ["a","e","i","o","u","A","E","I","O","U"]

  for (let i = 0; i <= arr.length; i++) {
    if (vowels.includes(arr[i])) {
    } else {
      newArr.push(arr[i])
     }
  }
  return newArr.join('')  
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
   let arr = str.split(' ')

   for(let i = 0; i < arr.length; i++){
     if(arr[i].length >= 5){
        arr[i] = disemvowel(arr[i]);
     }
  }
  return arr.join(' ');
}

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
  let position;
  let length;

  if(str.length % 2 === 1) {
      position = str.length / 2;
      length = 1;
  } else {
      position = str.length / 2 - 1;
      length = 2;
  }

  return str.substring(position, position + length)
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
  let reverse = [];
  for(let i = str.length; i >= 0; i--){
    reverse.push(str[i]);
  }
  return reverse.join('')
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
  let newStr = str.split('').reverse().join('').split(" ").reverse().join(" ");
  
  return newStr;
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
