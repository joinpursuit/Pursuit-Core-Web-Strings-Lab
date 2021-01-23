/**
 * Returns the first character of a string passed in.
 * @param {string} - str
 * @returns {string} - first char
 */
const firstChar = (str) => {
	if (str === "") {
		return "";
	} else return str[0];
};

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
	if (str === "") {
		return "";
	} else {
		return str[str.length - 1];
	}
}

/**
 * Takes a single string variable and returns a copy of the string with the
 * letter capitalized.
 * @param {string} - str 'jimmy'
 * @returns {string} - 'jimmY'
 */

// function capitalizeLastLetter(str) {
const capitalizeLastLetter = (str) => {
	if (str === "") {
		return "";
	} else {
		return str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase();
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
// function drEvil(number) {}
const drEvil = (number) => {
	if (number >= 1000000) {
		return number + " dollars " + `(pinky)`;
	} else {
		return number + " dollars";
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
const verbing = (string) => {
	if (string.length >= 3) {
		if (string.slice(string.length - 3) === "ing") {
			return string + "ly";
		} else {
			return string + "ing";
		}
	} else {
		return string;
	}
};

/**
 * Takes a single sentence and returns a copy of the string without the
 * last word.
 * @param {string}
 * @returns {string}
 */

//function removeLastWord() {} -- I DO NOT UNDERSTAND HOW THIS WORKS
// const removeLastWord = (string) => {
//   let lastIndex = string.lastIndexOf(" ")
//   string = string.substring(0, lastIndex)
//   return string
// }

/* .split(" ") splits the string at the spaces
 * .splice(0, -1) remove the last element or can use .pop()
 * .join(" ") rejoin the string with a space in between each word
 * newStr = str.split(" ").slice(0, -1).join(" ");
 */
const removeLastWord = (string) => {
	let newStr = "";
	newStr = string.split(" ");
	newStr.pop();
	return newStr.join(" ");
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
	let newString = "";
	for (let i = 0; i <= string.length; i += 1) {
		if (i % 2 === 0) {
			newString += string[i];
		}
	}
	return newString;
};

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string}
 * @returns {string}
 * string.replace(/searchValue/gi, newValue)
 * -- the g means global or gi for case-INsensetive would remove upper and lowers case occurances
 */
//function disemvowel() {}
const disemvowel = (string) => {
	return string.replace(/[aeiou]/gi, "");
};

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string}
 * @returns {string}
 */

//function disemvowelLongWords() {}
const disemvowelLongWords = (string) => {
	let splitArr = string.split(" ");
	let modified = "";
	let word;
	for (let i = 0; i < splitArr.length; i++) {
		word = splitArr[i];
		if (word.length >= 5) {
			if (i === splitArr.length - 1) {
				modified += word.replace(/[aeiou]/gi, "");
			} else {
				modified += word.replace(/[aeiou]/gi, "") + " ";
			}
		} else {
			if (i === splitArr.length - 1) {
				modified += word;
			} else {
				modified += word + " ";
			}
		}
	}
	return modified;
};

/**
 * Takes in a string and returns the middle char.
 * If there is no character in the middle return the middle two characters
 * @param {string}
 * @returns {string}
 */
//function middleCharacter() {}
const middleCharacter = (string) => {
	if (string.length % 2 === 1) {
		return string[Math.floor(string.length / 2)];
	} else {
		return (
			string[Math.floor(string.length / 2) - 1] +
			string[Math.floor(string.length / 2)]
		);
	}
};
/**
 * Takes in a string and reverses it.
 * Do not use split
 * @param {string}
 * @returns {string}
 */

//function reverseString() {}
const reverseString = (string) => {
	let reversed = "";
	for (let i = string.length - 1; i >= 0; i--) {
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

//function reverseSentenceWords() {}
const reverseSentenceWords = (string) => {
	let newStr = string.split(" ");
	let reversedString = "";
	for (let i = 0; i < newStr.length; i++) {
		let word = newStr[i];
		if (i === newStr.length - 1) {
			let reversedWord = "";
			for (let count = word.length - 1; count >= 0; count--) {
				reversedWord += word[count];
			}
			reversedString += reversedWord;
		} else {
			let reversedWord = "";
			for (let counter = word.length - 1; counter >= 0; counter--) {
				reversedWord += word[counter];
			}
			reversedString += reversedWord + " ";
		}
	}
	return reversedString;
};
console.log(reverseSentenceWords("Hi every body"));

//Carlo Echeverri to Everyone (7:40 PM)
// let newArr = [];
// let newSent = "";
// for (let i = 0; i < splitSent.length; i++) { //loop through the
//   let word = splitSent[i];
//   for (let j = word.length - 1; j > 0; j--) {
//     newArr.push(word[j]);
//   }
//   newArr.join(" ");
//   newSent += newArr;
// }
// return newSent;

//vanessa watson (she/her/elle) to Everyone (8:04 PM)
//Here’s Marsha’s problem using the relationship between strings & arrays:
/* const reverseSentenceWords = (str) => {
  let arr = str.split("");
  console.log(arr);
  let reverseArr = arr.reverse();
  console.log(reverseArr);
  let joinReverse = reverseArr.join("");
  console.log(joinReverse);
  let reverseSplit = joinReverse.split(" ");
  console.log(reverseSplit);
  let splitReverse = reverseSplit.reverse();
  console.log(splitReverse);
  let newStr = splitReverse.join(" ");
  console.log(newStr);
  return newStr;
};

reverseSentenceWords("cats are the best");
 */

//Carlo Echeverri
/* function disemvowelLongWords(string) {

  return string.split(" ").map(word => 
     word.length >= 5 ? disemvowel(word) : word
	).join(" “);} 
*/

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
