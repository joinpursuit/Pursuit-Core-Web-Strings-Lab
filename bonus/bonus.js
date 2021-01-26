/**
 * Takes a word and replaces all the vowels with an asterisk.
 * @param {string}
 * @returns {string}
 */
//function replaceVowels() {}
const replaceVowels = (string) => {
	let newStr = "";
	newStr += string.replace(/[aeiou]/gi, "*");
	return newStr;
};

/**
 * Takes in a string and adds "#" if the string has
 * an odd number of characters.
 * @param {string}
 * @returns {string}
 */
//function makeStringEvenLength() {}
const makeStringEvenLength = (string) => {
	if (string.length % 2 === 1) {
		return string + "#";
	} else {
		return string;
	}
};

/**
 * Takes in a string and returns the last three
 * letters of the string. If the string is less than
 * three characters put the code: throw Error("Input less than three characters")
 * @param {string}
 * @returns {string}
 */

//function lastThreeLetters() {}
const lastThreeLetters = (string) => {
	if (string.length >= 3) {
		return string.slice(-3);
	} else {
		throw "Input less than three characters";
	}
};

/**
 * Takes in a string and returns whether or not that string starts with a vowel.
 * @param {string}
 * @returns {boolean}
 */
//function doesStartWithVowel() {}
//string.indexOf(searchvalue, start) ==> default value of start is 0
//indexOf returns -1 if it cannot find the search value
// if it does find the search value it returns the index? ==> A Number, representing the position where the specified searchvalue occurs for the first time, or -1 if it never occurs

const doesStartWithVowel = (string) => {
	let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	return string.indexOf(vowels, 0) ? true : false;
}; // why is this returning the wrong Boolean?

/**
 * Takes in two strings and returns a new string
 * with the two strings separated by a space.
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
//function combineStrings() {}
const combineStrings = (str1, str2) => {
	return str1 + " " + str2;
};

/**
 * Write a function that takes in two strings, `str1` and `str2`,
 * return a new string with `str2` mashed into the middle of `str1`
 * Exp str1 = 'help' str2 = 'me' returns 'hemelp'.
 * Exp str1 = 'hello' str2 = 'world' returns 'heworldllo.'
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
//function mashUp() {}

const mashUp = (str1, str2) => {
	let firstHalf;
	let secondHalf;
	if (str1 % 2 === 0) {
		firstHalf = str1.slice(0, Math.floor(str1.length % 2));
		console.log(firstHalf);
		secondHalf = str1.slice(Math.floor(str1.length % 2));
	} else {
		firstHalf = str1.slice(0, Math.round(str1.length % 2));
		secondHalf = str1.slice(Math.floor(str1.length % 2));
	}
	return firstHalf + str2 + secondHalf;
};

/**
 * Takes in a string and returns whether or not is includes a vowel.
 * Don't use the || (OR) operator,  use the includes method and make it
 * case insensitive https://en.wikipedia.org/wiki/Case_sensitivity.
 * @param {string}
 * @returns {boolean}
 */
// function includesVowel() {}
const includesVowel = (str) => {
	// return str.includes(aeiou);
}

/**
 * Takes in a string and returns the number of vowels that it contains.
 * You may use loops for this.
 * @param {string}
 * @returns {number} number of vowels
 */

//function vowelCount() {}
const vowelCount = () => {};

module.exports = {
	replaceVowels,
	makeStringEvenLength,
	lastThreeLetters,
	doesStartWithVowel,
	combineStrings,
	mashUp,
	includesVowel,
	vowelCount,
};
