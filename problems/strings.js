/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
function firstChar(str) {
  return str.slice(0, 1)
}


/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

function stringLength(str) {
  return str.length;
}

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

function lastLetter(str) {
  return str.slice( str.length -1, str.length);  
  
}
  /**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

function capitalizeLastLetter(str) {
  let lastLetter = str.slice( str.length -1, str.length)
 return str.slice(0, str.length -1) + lastLetter.toUpperCase();
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
  if( number < 1000000) {
  return `${number} dollars`;
  }else if (number >= 1000000)
  {
  return `${number} dollars (pinky)`;

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
  if ( string.length > 3 && string.slice(string.length - 3, string.length) === "ing") {
    return `${string}ly`;
  }else if (string.length >= 3) {
     return `${string}ing`
    }else if ( string.length < 3) {
      return `${string}`;
    }
  }
  


  

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

function removeLastWord(string) {
  let newWords= string.split(" ")
  console.log(newWords)
  let slice= newWords.slice(0, newWords.length-1).join(" ")
  return slice 
}
/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

function everyOtherLetter(string) {
  let newString =""
  for (let i =0 ; i < string.length; i++)
  if(i % 2 === 0){
    newString += string[i]
  }
  return newString
}

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
function disemvowel(string) {
  let array=string.split("")
  let newArray=[]
  for(let i= 0; i<array.length; i++){
    if(array[i] !== "a" && array[i] !== "e" && array[i] !=="i" && array[i] !== "o" && array[i] !=="u" 
    && array[i] !== "A" && array[i] !== "E" && array[i] !== "I" && array[i] !== "O" && array[i] !=="U" ){
      newArray.push(array[i])
    }
  }
  return newArray.join("")
}


/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

 function disemvowelLongWords(string){
   let array=string.split(" ")
   let newArray=[]
   for(let i=0; i<array.length; i++){
     let words= array[i]
     if(words.length >=5){
       newArray.push(disemvowel(words))
     }else {
       newArray.push(words)
     }
    }
    return newArray.join(" ")
 }

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
function middleCharacter(string) {
  let array =string.split("")
  let middle=Math.floor(array.length/2)
  if (array.length%2 !==0){
    return (array[middle])
  }else if( array.length%2 === 0){
    return array[middle-1] + array[middle]
  }
}

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

function reverseString(string) {
  let newString= ""
  for(let i=string.length-1; i>=0 ; i--){
    newString+= string[i]
  }
  return newString
}

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */

function reverseSentenceWords(string) {
  let array=string.split(" ")
  let newArray=[]
  for(let i= 0; i<array.length; i++){
    let words = array[i]
    newArray.push(reverseString(words))
  }
  return newArray.join(" ")
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
