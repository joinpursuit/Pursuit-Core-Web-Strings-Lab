/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
function firstChar(str) {
  if(str.length === 0){
    return str
  } else {
  return str.slice(0,1)
  }
}

/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

function stringLength(str) {
  let lengthOfString = str.length
  return lengthOfString
}

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

function lastLetter(str) {
  if(str.length === 0){
    return str
  }else {
  return str.slice(str.length-1)
  }
}

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

function capitalizeLastLetter(str) {
  if(str.length === 0){
    return str
  } else {
  let cap = str.slice(str.length -1)
  let upper = cap.toUpperCase()
  return str.slice(0,str.length - 1) + upper
  }

}

/**
 *  Create a drEvil function that will take a single number variable, and log the '<variableAmount> dollars',
and should add '(pinky)' at the end of the amount if it's 1 million or more. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```
* @param {number}
* @returns {string}
 */
function drEvil(number) {
  if(number < 1000000){
    return number + ' dollars'
  } else {
    return number + ' dollars (pinky)'
  }
}


/**
 * 
 * Create a `verbing` function.
 * It should take a single string variable. 
 * If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', 
 * in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 
 * @param {string}
 * @returns {string}
For example:

```js
verbing('box')
// => 'boxing'
verbing('train')
// => 'training'
verbing('swimming')
// =>  'swimmingly'
verbing('go')
// =>  'go'
```
 
 */

function verbing(str) {
  if(str[str.length - 3] === 'i' && str[str.length - 2] === 'n' && str[str.length - 1] === 'g'){
    return str + 'ly'
  }else if (str.length >= 3){
    return str + 'ing'
  } else {
    return str
  }
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord(string) {
  let stringToWords = string.split(' ')
  let removeEndWord = stringToWords.splice(0,stringToWords.length - 1)
  let str = removeEndWord.toString()
  let removeCommas = str.split(',').join(' ')
  
  return removeCommas

}

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter(string) {
  let newString = ''
  for(let index = 0; index < string.length; index += 2){
    if(index % 2 === 0){
    newString = newString + string[index]
    }
  }
  return newString
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel(string) {
  let vowels = ''
  let newString = ''
  for(let i = 0; i < string.length; i++)
  if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' ||string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U'){
    vowels = vowels + string[i] 
  } else {
    newString = newString + string[i]
  }
  return newString
}

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

 function disemvowelLongWords(string){
  let newString = string.split(' ')
  let returnString = ''
  for(let i = 0; i < newString.length; i++){
    if(newString[i].length >= 5){
      disemvowel(newString[i])
      returnString = returnString + disemvowel(newString[i]) + " "
  
    } else{
      returnString = returnString + newString[i] + " "
    }
  }
  return returnString

 }


/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
function middleCharacter(string) {
  let middle= Math.floor(string.length/2)
    if(string.length % 2 === 0){
      return string[middle-1] + string[middle]
    } else {
      return string[middle]
    }
}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

function reverseString(string) {
  let reverse = ''
  for(let i = string.length -1 ; i >= 0; i--){
    reverse = reverse + string[i]
  }
  return reverse
}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

function reverseSentenceWords(string) {
  // let element = string.split(' ')
  // let reverse = ''
  // for(let i = 0 ; i < element.length - 1; i++){
  //     for(let j = element.length - 1; j >= 0; i--) {
  //     reverse = reverse + element[j]
  //   }
  //  }
  
  // return reverse
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
