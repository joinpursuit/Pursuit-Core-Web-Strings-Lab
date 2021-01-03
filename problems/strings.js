/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
function firstChar(str) {
  return str.slice(0, 1);
}

/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

function stringLength(str) {
  return str.length
}

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

function lastLetter(str) {
  if(str === ""){
    return ""
  }else {
    return str[str.length - 1];
  }
}


/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

function capitalizeLastLetter(str) {
  if(str === ""){
    return ""
  }else {
    str = str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase();
    return str
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
    return `${number} dollars`
  }else{
    return `${number} dollars (pinky)`
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

function verbing(string) {
  if(string.length < 3){
    return string;
  }else if(string.length >= 3 && string.endsWith("ing")){
    return (`${string}ly`);
  }else{
    return (`${string}ing`);
  }
}

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord(string) {
  if(string.split(" ").length <= 1){
    return ""
  }else {
    return (string.substring(0, string.lastIndexOf(" ")))
  }
} 

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * 
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter(string) {
  let output = "";
  for (let i = 0; i < string.length; i+=2){
    output += string[i] 
  }
return output;
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel(string) {
  let output = "";
  let vowels = "aeiouAEIOU";
  for (i = 0; i < string.length; i +=1){
    if (!vowels.includes(string[i])){
      output += string[i]
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

 function disemvowelLongWords(string){
   let newSentence = string.split (" ");
   let arr= []
   for (i = 0; i < arr.length; i +=1){
     
     }
   }
 }

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
function middleCharacter(string) {
  let arr = string.split("");
  let mid = Math.floor(arr.length/2);
  if (arr.length% 2 !==0){
    return (arr[mid])
  } else if(arr.lengt% 2 ===0){
    return arr[mid -1] + arr[mid]
  }
}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

function reverseString(string) {
  let string2 = "";
  for (let i = string.length - 1; i >= 0; i -=1){
    string2+= string[i]
  }
  return string2
}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

function reverseSentenceWords() {}

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
