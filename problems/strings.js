/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
// function firstChar() {}
const firstChar = (str) => {
  if (str === "") {
    return "";
  } else {
    return str[0];
  }
};

/**
 * Returns the length of a string
 * @param {string} - str
 * @returns {number} - length of string
 */

// function stringLength() {}
const stringLength = (str) => {
  return str.length;
};

/**
 * Returns the last character of any string
 * @param {string} - str
 * @returns {string} - last letter
 */

// function lastLetter() {}
const lastLetter = (str) => {
  if (str === "") {
    return "";
  } else {
    return str[str.length - 1];
  }
};

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

// function capitalizeLastLetter() {}
const capitalizeLastLetter = (str) => {
  if (str.length < 1) {
    return "";
  } else {
    let capitalLetter = str[str.length - 1].toUpperCase();
    // console.log(capitalLetter);
    // array = [1,2,3,4,5]
    //  0 1 2 3 4
    // if < 5 spots
    // includes the first one
    // but does not include the last position
    return str.slice(0, str.length - 1) + capitalLetter;
  }
};

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
const drEvil = (num) => {
  if (num >= 1000000) {
    return `${num} dollars (pinky)`;
  } else {
    return `${num} dollars`;
  }
};

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
const verbing = (str) => {
  if (str.length < 3) {
    return str;
  } else {
    lastThreeLetters =
      str[str.length - 3] + str[str.length - 2] + str[str.length - 1];
    if (lastThreeLetters === "ing") {
      return `${str}ly`;
      // return str + 'ly'
    } else {
      return `${str}ing`;
    }
  }
};

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

// function removeLastWord() {}
const removeLastWord = (str) => {
  words = str.split(" ");
  if (words.length <= 1) {
    return "";
  } else {
    words.pop();
    return words.join(" ");
  }
};

/**
 * Takes a string and returns a new string that has only the even
 * indexed characters.
 * Do NOT split the string into an array.
 * @param {string}
 * @returns {string}
 */

// function everyOtherLetter() {}
const everyOtherLetter = (string) => {
  let newArray = [];
  for (let i = 0; i <= string.length; i += 2) {
    newArray.push(string[i]);
  }
  return newArray.join("");
};

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 */
const disemvowel = (str) => {
  let output = "";
  for (let i = 0; i < str.length; i += 1) {
    let currChar = str[i];
    if (
      currChar !== "a" &&
      currChar !== "e" &&
      currChar !== "i" &&
      currChar !== "o" &&
      currChar !== "u" &&
      currChar !== "A" &&
      currChar !== "E" &&
      currChar !== "I" &&
      currChar !== "O" &&
      currChar !== "U"
    ) {
      output += currChar;
    }
  }
  return output;
};

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

// stringYouWishToSplitIntAnArray.slice(characterYouWishToSplit)
// Popular Splits -
// str.split(“”) - separates every character .
// str.split(“ “) - splits words

const disemvowelLongWords = (string) => {
  let newSentence = "";
  let noVowels = "";
  let newString = string.split(" ");
  for (let i = 0; i < newString.length; i++) {
    word = newString[i]; // [cat bat lap] new string is the word
    if (word.length >= 5) {
      //remove vowels
      for (let i = 0; i < word.length; i++) {
        //off by one error length - 1
        //cat
        letter = word[i]; //the letters in word
        if (
          letter === "a" ||
          letter === "e" ||
          letter === "i" ||
          letter === "o" ||
          letter === "u" ||
          letter === "A" ||
          letter === "E" ||
          letter === "I" ||
          letter === "O" ||
          letter === "U"
        ) {
          noVowels += "";
        } else {
          noVowels += letter;
        }
      }
    } else {
      noVowels += word;
    }

    if (newString.length - 1 === i) {
      newSentence += noVowels;
    } else {
      newSentence += noVowels + " ";
    }
    noVowels = "";
  }
  return newSentence;
};

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
//we find the middle char by dividing the string by 2 to find what is in the middle
//we need to know if the string is even or odd
//if it is even we return the middle two characters
//if odd return the middle character only

const middleCharacter = (string) => {
  if (string.length % 2 === 0) {
    //  string[Math.floor(string.length/2)]// this returns only the v character (even)
    //  string[Math.floor(string.length/2 - 1)]// gives second letter
    return (
      string[Math.floor(string.length / 2) - 1] + // 'v' // the[] formuala inside gives us the index of each letter it finds i. EVEN[Math.floor(Even.length is 4 / 2) - 1] this gives us the first index of the middle two characters.
      string[Math.floor(string.length / 2)] // 'e' then 'v' + 'e' if the word used was even
    );
  } else {
    return string[Math.floor(string.length / 2)];
  }
};

/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

const reverseString = (string) => {
  let reversed = ""; //container to store output
  for (let i = string.length - 1; i >= 0; i--) {
    //the order of the forloop is reversed here to iterate from the end of the word, and move up from each index and decrement. moves up the word from the end compares to see if the index is greater than zero till it reach index zero of the word
    reversed += string[i];
  }
  return reversed;
};

/**
 * Takes in a sentence string and reverses each word but not the
 * order of the words.
 * @param {string}
 * @returns {string}
 */
//takes in a sentence string
//reverses each word, so reverse the order the letters not the order of the whole words itself
//reverse the sentence and each letter in each word
//"cats are the best")).toBe("tseb eht era stac");

// const  reverseSentenceWords = string => {
// let newSentence = string.split(" ");
// let reversedSentence = "";
// for(let i = 0; i <= newSentence.length-1; i++){//here we are looping through each word because we split it above. we are doing this to reverse the letters in each word.loop through sentence and grab each word
//   let word = newSentence[i]//use [] to loop through the index of word(string have indices) looking at the index of each word
//   let reversedWord = ""
//   for(let letter = word.length - 1; letter >= 0; letter--) {// loop through word and reverse each letter in each word
//   reversedWord += word[letter]//we named i => letter, here we are adding in each letter backwards
//   }
//   reversedSentence += reversedWord + " "
//   }

// return reversedSentence
// }
//cats are the best
const reverseSentenceWords = (string) => {
  let newSentence = string.split(" ");
  let reversedSentence = "";
  for (let i = 0; i <= newSentence.length - 1; i++) {
    let reversedWord = "";
    let word = newSentence[i];
    if (newSentence.length - 1 === i) {
      //if this is the last word in sentence do not add space at the end
      for (let letter = word.length - 1; letter >= 0; letter--) {
        reversedWord += word[letter];
      }
      reversedSentence += reversedWord;
    } else {
      //else add space at the end of the word
      for (let letter = word.length - 1; letter >= 0; letter--) {
        reversedWord += word[letter];
      }
      reversedSentence += reversedWord + " ";
    }
  }
  return reversedSentence;
};

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
