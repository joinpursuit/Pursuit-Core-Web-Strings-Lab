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
  if (str === "") {
    return "";
  } else {
    return str[0];
  }
}
console.log(firstChar(""));

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
console.log(stringLength("1234"));

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
}
console.log(lastLetter("1234"));
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
  let strMod = str.slice(str.length - 1);
  let lastUpper = strMod.toUpperCase();
  let withOut = str.slice(0, str.length - 1);
  return withOut + lastUpper;
}
console.log(capitalizeLastLetter("jimmy"));

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
    return `${num} dollars \(pinky\)`;
  } else {
    return `${num} dollars`;
  }
}
console.log(drEvil(10000000));
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
  let lastThree = str.slice(-3, str.length);
  if (str.length >= 3 && lastThree === "ing") {
    return (str += "ly");
  }
  if (str.length >= 3) {
    return (str += "ing");
  } else if (str.length < 3) {
    return str;
  }
}
console.log(verbing("swimming"));

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
  let arr = str.split(" ");
  let remove = arr.slice(0, -1);
  if (arr.length <= 1) {
    return "";
  } else {
    return remove.join(" ");
  }
}
console.log(removeLastWord("I eat cake"));

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
  let empty = "";
  for (let i = 0; i <= str.length; i += 2) {
    empty += str[i];
  }
  return empty;
}
console.log(everyOtherLetter("skull candy"));

/**
 * Takes in a string and returns a new string that has all the vowels removed.
 * @param {string} str - an input string
 * @returns {string} - return value string with all vowels removed
 *
 * example: disemvowel("aeiou") returns ""
 * example: disemvowel("Hello world!") returns "Hll wrld!"
 */
function disemvowel(str) {
  let vowalArr = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let newArr = [];
  let arr = str.split("");
  for (let i = 0; i <= arr.length; i++) {
    if (!vowalArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr.join("");
}
console.log(disemvowel("Helooooooooooo"));

/**
 * Takes a string sentence and returns a new sentence.
 * Any word that has a length of 5 or more characters should be disemvoweled.
 * @param {string} str - an input string
 * @returns {string} - return value string
 *
 * example: disemvowelLongWords("hi i am your friend") returns "hi i am your frnd"
 * example: disemvowelLongWords("amber is the color of your energy") returns "mbr is the clr of your nrgy"
 */
function disemvowelLongWords(str) {
  let newArr = [];
  let arr = str.split(" ");
  let wordConvert = arr.map(function (word) {
    if (word.length >= 5) {
      word = word.replace(/[AaEeIiOoUu]/gi, "");
      newArr.push(word);
    } else {
      newArr.push(word);
    }
  });
  return newArr.join(" ");
}

console.log(disemvowelLongWords("amber is the color of your energy"));

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
  if (str.length % 2 === 0) {
    let index1 = str.length / 2 - 1;
    let index2 = str.length / 2;
    let element1 = str[index1];
    let element2 = str[index2];
    return element1 + element2;
  } else {
    let oddIndex = (str.length - 1) / 2;
    return str[oddIndex];
  }
}
console.log(middleCharacter("ostentatious"));

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
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString("hello world"));
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
  let newArr = [];
  let wordConvert = arr.map(function (word) {
    let convert = word.split("");
    let reverse = convert.reverse();
    let convert2 = reverse.join("");
    newArr.push(convert2);
  });
  return newArr.join(" ");
}
console.log(reverseSentenceWords("hello world"));
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
