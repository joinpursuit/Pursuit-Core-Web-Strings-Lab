/**
 * Returns the first character of a string passed in.
 * @param {string} str - an input string
 * @returns {string} - first char of str
 * 
 * example: firstChar("banana") returns "b"
 * example: firstChar("pinapple") returns "p"
 * example: firstChar("") returns ""
 */
const firstChar = (str) => {
	if (str === "") {
		return "";
	} else return str[0];
};


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


function lastLetter(str) {
	if (str === "") {
		return "";
	} else {
		return str[str.length - 1];
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


// function capitalizeLastLetter(str) {
const capitalizeLastLetter = (str) => {
	if (str === "") {
		return "";
	} else {
		return str.slice(0, str.length - 1) + str[str.length - 1].toUpperCase();
	}
};



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
// function drEvil(number) {}
const drEvil = (number) => {
	if (number >= 1000000) {
		return number + " dollars " + `(pinky)`;
	} else {
		return number + " dollars";
	}
};

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
 * @param {string} str - an input string
 * @returns {string} - the return value missing the last word
 * 
 * example: removeLastWord("Hello!") returns ""
 * example: removeLastWord("I eat cake") returns "I eat"
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
 * @param {string} str - an input string
 * @returns {string} - the return value containing even indexed characters
 * 
 * example: everyOtherLetter("Corey") returns "Cry"
 * example: everyOtherLetter("Skull candy") returns "Sulcny"
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
 * @param {string} str - an input string
 * @returns {string} - return value string with all vowels removed
 * string.replace(/searchValue/gi, newValue)
 * -- the g means global or gi for case-INsensetive would remove upper and lowers case occurances
 * 
 * example: disemvowel("aeiou") returns ""
 * example: disemvowel("Hello world!") returns "Hll wrld!"
 */
//function disemvowel() {}
const disemvowel = (string) => {
	return string.replace(/[aeiou]/gi, "");
};


/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string} str - an input string
 * @returns {string} - return value string
 * 
 * example: disemvowelLongWords("hi i am your friend") returns "hi i am your frnd"
 * example: disemvowelLongWords("amber is the color of your energy") returns "mbr is the clr of your nrgy"
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
 * @param {string} str - an input string
 * @returns {string} - the return value string, either one or two characters
 * 
 * example: middleCharacter("hello") returns "l"
 * example: middleCharacter("ostentatious") returns "ta"
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
 * Do not use .split()
 * 
 * example: reverseString("hello") returns "olleh"
 * example: reverseString("sit on a potato pan otis") returns "sito nap otatop a no tis"
 * 
 * @param {string} str - an input string
 * @returns {string} - the return value string, reversed str
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
 * @param {string} str - an input string
 * @returns {string} - the return value string
 * 
 * example: reverseSentenceWords("hello world") returns "olleh dlrow"
 * example: reverseSentenceWords("i am a racecar") returns "i ma a racecar"
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
