// # String Exercises
//
// 1. `console.log` the first character of a string.

let string1 = "This is a string";
console.log(string1[0]);

// 2. `console.log` the length of a string.

let string2 = "To infinity and beyond";
console.log(string2.length);

// 3. `console.log` the last character of any string.

let string3 = "With great power comes great responsibility";
console.log(string3[string3.length - 1]);

// 4. Create a code block that takes a single string variable, and returns a
// copy of the string with the last letter capitalized. For example:
//
// ```js
// 'jimmy'
// // => 'jimmY'
// ```

let name = "hupaul";
let copy = name.slice(0, 5) + name.slice(name.length - 1).toUpperCase();
console.log(name, copy);

// 5. Create a drEvil code block that will take a single number variable, and
// log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1
// million. For example:
//
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```

let amount = 1000000
let drEvil = "(pinky)"
if (amount === 10) {
  console.log(amount, "dollars")
} else if (amount === 1000000) {
  console.log(amount, "dollars " + drEvil)
}

// 6. Create a `verbing` code block. It should take a single string variable.
// If its length is at least 3, it should add 'ing' to its end, unless
// it already ends in 'ing', in which case it should add 'ly' instead.
// If the string length is less than 3, it should leave it unchanged.
// For example:
//
// ```js
// verbing('box')
// // => 'boxing'
// verbing('train')
// // => 'training'
// verbing('swimming')
// // =>  'swimmingly'
// verbing('go')
// // =>  'go'
// ```

let singleStr = "box";
if (singleStr.length < 3) {
  console.log(singleStr);
} else if (singleStr.length >= 3 && singleStr.slice(singleStr.length - 3) === "ing") {
  console.log(singleStr + "ly");
} else if (singleStr.length >= 3) {
  console.log(singleStr + "ing");
}

let singleStr2 = "swimming";
if (singleStr2.length < 3) {
  console.log(singleStr2);
} else if (singleStr2.length >= 3 && singleStr2.slice(singleStr2.length - 3) === "ing") {
  console.log(singleStr2 + "ly");
} else if (singleStr2.length >= 3) {
  console.log(singleStr2 + "ing");
}

let singleStr3 = "go";
if (singleStr3.length < 3) {
  console.log(singleStr3);
} else if (singleStr3.length >= 3 && singleStr3.slice(singleStr3.length - 3) === "ing") {
  console.log(singleStr3 + "ly");
} else if (singleStr3.length >= 3) {
  console.log(singleStr3 + "ing");
}


// 7. Create a `withoutLast` code block that takes a single string variable,
// and returns a copy of the string without the last word.

let sentence = "You won't take me alive";
let withoutLast = sentence.slice(0, sentence.length - 5);
console.log(sentence + "\n" + withoutLast);

// ## Bonus Questions
//
// 1. Write a code block that adds a "#" to a string if the string has an odd
// number of characters, otherwise leave it as is. print/log the result
//
//     Examples:
//
//   ```js
//   let name = 'taq'  // should log 'taq#'
//   let name2 ='john' // should log 'john'
//   ```

let oddString = "phone";
if (oddString.length % 2 === 1) {
  console.log(oddString + "#");
} else {
  console.log(oddString);
}


// 2. Write a code block that prints/logs the 3rd to last characters of a string.
// If the string is not at least 3 characters long then log an error message.
// <details>
//     <summary>
//         Hint
//     </summary>
//     It should work for strings of any length.
// </details>
//
// Examples, for variables:
// ```js
// let name1 = 'Taq' // Should log 'Taq'
// let sentence = 'He is Taq'// Should log 'Taq'
// ```

let threat = "You need to back off before I eliminate you";
if (threat.length < 3) {
  console.log("#ERROR#");
} else if (threat.length >= 3) {
  console.log(threat.slice(threat.length - 3));
}

let threat2 = "Hi";
if (threat2.length < 3) {
  console.log("#ERROR#");
} else if (threat2.length >= 3) {
  console.log(threat2.slice(threat2.length - 3));
}

//
// 3. Write a code block that prints/logs whether a string `x` starts with a
// vowel.
// <details>
//   <summary>
//     Extra
//   </summary>
//
//   Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity)
//
// </details>
//

let stringX = "all of you are fired!";
if (stringX[0] === "A") {
  console.log("This string starts with a vowel.");
} else if (stringX[0] === "E") {
  console.log("This string starts with a vowel.");
} else if (stringX[0] === "I") {
  console.log("This string starts with a vowel.");
} else if (stringX[0] === "O") {
  console.log("This string starts with a vowel.");
} else if (stringX[0] === "U") {
  console.log("This string starts with a vowel.");
} else if (stringX[0] === "a") {
  console.log("This string starts with a lowercase vowel.");
} else if (stringX[0] === "e") {
  console.log("This string starts with a lowercase vowel.");
} else if (stringX[0] === "i") {
  console.log("This string starts with a lowercase vowel.");
} else if (stringX[0] === "o") {
  console.log("This string starts with a lowercase vowel.");
} else if (stringX[0] === "u") {
  console.log("This string starts with a lowercase vowel.");
}

//
// 4. Write a code block that given two strings, `str1` and `str2`,
// prints/logs a new string with `str2` mashed into the middle of `str1`
//
// Examples:
//
//   - For `str1` = 'help' and `str2` = 'me'. Your program should log `'hemelp'`
//
//    - For `str1` = 'hello' and `str2` = 'world'. Your program should log
//    `'helworldlo'`
//

let str1 = "hello";
let str2 = "world";
console.log(str1.slice(0, 3) + str2 + str1.slice(3));

//
// 5. Write a code block that prints/logs whether a string `x` has at least one
// vowel in it.
//
// Examples:
//   - For `x` = 'taq'. Your program should log `'taq' has a vowel'`
//   - For `x` = 'dfghjkl'. Your program should log `'dfghjkl' does not have
//   a vowel'`
//   - For `x` = '' Your program should log `'' does not have a vowel'`
//
// <details>
//   <summary>
//     Extra & Hint:
//   </summary>
//
//   - **Hint**: Abstain from using loops. Explore string methods.
//
//   - **Extra**: Make it [case insensitive]
//   (https://en.wikipedia.org/wiki/Case_sensitivity). So that for
//   `x` = 'TAQ' it should log `'TAQ' has a vowel`
// </details>
//

let word = "Rhythm";
if (word[word.indexOf("a")] === "a") {
  console.log(word + " has a vowel")
} else if (word[word.indexOf("e")] === "e") {
  console.log(word + " has a vowel")
} else if (word[word.indexOf("i")] === "i") {
  console.log(word + " has a vowel")
} else if (word[word.indexOf("o")] === "o") {
  console.log(word + " has a vowel")
} else if (word[word.indexOf("u")] === "u") {
  console.log(word + " has a vowel")
} else if (word[word.indexOf("A")] === "A") {
  console.log(word + " has a vowel")
} else if (word[word.indexOf("E")] === "E") {
  console.log(word + " has a vowel")
} else if (word[word.indexOf("I")] === "I") {
  console.log(word + " has a vowel")
} else if (word[word.indexOf("O")] === "O") {
  console.log(word + " has a vowel")
} else if (word[word.indexOf("U")] === "U") {
  console.log(word + " has a vowel")
} else {
  console.log(word + " has no vowel")
}


//
// ### Practice Makes Perfect.
// Find at [CodingBat](https://codingbat.com/java/String-1) more problems/questions
// to keep practicing. You can pick which ones to do. You can ignore the fact
// that their solutions are supposed to be written in Java, I trust you that
// you can write a solution code block in JavaScript. Create a file
// `codingBatStrings.js` copy and paste the problem statement as a comment,
// underneath write your solution.
//
// > **Remember**: This are bonuses and extra points. You don't have to do
// them but if you do, you will just get better.
//
