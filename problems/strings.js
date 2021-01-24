/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
// function firstChar() {}
const firstChar = str => {
  if(str === ''){
    return '';
  }else{
    return str[0];
  }
}

/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

// function stringLength() {}
const stringLength = str => {
  return str.length;
}

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

// function lastLetter() {}
const lastLetter = str => {
  if(str === ''){
    return '';
  }else{
    return str[str.length - 1];
  }
}

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

// function capitalizeLastLetter() {}
const capitalizeLastLetter = str => {
  if(str.length < 1){
    return '';
  }else{
    let capitalLetter = str[str.length - 1].toUpperCase();
    // console.log(capitalLetter);
    // array = [1,2,3,4,5]
            //  0 1 2 3 4
            // if < 5 spots
            // includes the first one
            // but does not include the last position
    return str.slice(0,str.length - 1) + capitalLetter;
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
// function drEvil() {}
const drEvil = num => {
  if(num >= 1000000){
    return `${num} dollars (pinky)`;
  }else{
    return `${num} dollars`;
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

// function verbing() {}
const verbing = str => {
  if(str.length < 3){
    return str;
  }else{
    lastThreeLetters = str[str.length - 3] + str[str.length - 2] + str[str.length - 1];
    if(lastThreeLetters === 'ing'){
      return `${str}ly`;
      // return str + 'ly'
    }else{
      return `${str}ing`;
    }
    
  }
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

// function removeLastWord() {}
const removeLastWord = str => {
  words = str.split(' ');
  if(words.length <= 1){
    return '';
  }else{
    words.pop();
    return words.join(' ');
  }
}

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

// function everyOtherLetter() {}
const everyOtherLetter = string => {
  let newArray = []
  for(let i = 0;i <= string.length;i+=2){
    newArray.push(string[i])
  }
  return newArray.join("");
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
const disemvowel = str => {
  let output = "";
  for(let i = 0; i < str.length; i+=1){
    let currChar = str[i];
    if(currChar !== "a" && currChar !== "e" && currChar !== "i" && currChar !== "o" && currChar !== "u" && currChar !== "A" && currChar !== "E" && currChar !== "I" && currChar !== "O" && currChar !== "U"){
      output += currChar;
    }
  }
  return output;
}

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

//  function disemvowelLongWords(){}
const disemvowelLongWords = str => {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length >= 5)
      words[i] = disemvowel(words[i]);
  }
  // console.log(words.join(' '));
  return (words.join(' '));
}

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
// function middleCharacter() {}
const middleCharacter = str => {
  if (str.length % 2 === 1) {
    return str[Math.floor(str.length / 2)]
  } else {
    return str[(str.length / 2) - 1] + str[str.length / 2]
  }
}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

// function reverseString() {}
const reverseString = str => {
  let strRev = '';
  for (let i = str.length - 1; i >= 0; i-- ){
    strRev += str[i];
  }
  return strRev;
}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

const reverseSentenceWords = str => {
  let strArr = str.split(' ')

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = reverseString(strArr[i]);

  }
  return strArr.join(' ');
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
