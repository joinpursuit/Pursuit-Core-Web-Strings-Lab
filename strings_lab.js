// # String Exercises

// 1. `console.log` the first character of a string.
console.log("#1 ---------------------\n");

let str = "This is the best string ever coded";
console.log(str[0]);
console.log(" ");

// 2. `console.log` the length of a string.
console.log("#2 ---------------------\n");

console.log(str.length);
console.log(" ");

// 3. `console.log` the last character of any string.
console.log("#3 ---------------------\n");

console.log(str[str.length - 1]);
console.log(" ");

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
console.log("#4 ---------------------\n");

// let name = "alejo";
// let upperCased = name.toUpperCase();
// console.log("upperCased: " + upperCased);
// let lowerCased = upperCased.toLowerCase();
// console.log("lowerCased: " + lowerCased);

let name = "doug";
console.log(name.slice(0, 3) + name[name.length - 1].toUpperCase());
console.log(" ");
// ```js
// 'jimmy'
// // => 'jimmY'
// ```
//
// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
console.log("#5 ---------------------\n")

let varAmount = 100;
if (varAmount === 1000000) {
  console.log(varAmount + " dollars! (pinky)");
} else {
  console.log(varAmount + " dollars");
}

console.log(" ");

// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```
//
// 6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
// For example:

console.log("#6 ---------------------\n")

function verbing(verbWord) {
    if (verbWord[verbWord.length - 3] === "i") {
        return verbWord + 'ly';
    } else if (verbWord.length >= 3) {
        return verbWord + "ing";
    } else {
        return verbWord;
    };
};

let verbWord = "box";
console.log(verbing(verbWord));

verbWord = "swimming";
console.log(verbing(verbWord));

verbWord = "go";
console.log(verbing(verbWord));

// This won't run, and I don't know why. I've tried everything, but it
// always ignores the second line of the function. In this case, if you
// reverse the returns for "ing" and "ly", "box" becomes "boxing", but
// "swimming" becomes "swinminging". The second return never triggers.

console.log(" ");

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
//
// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.

console.log("#7 ---------------------\n");

let y = "Always try to have the last word.";
let withoutLast = y.slice(0, y.lastIndexOf(" "));
console.log(withoutLast);

console.log(" ");

// ## Bonus Questions
//
// 1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is.
// print/log the result

console.log("#BONUS 1 ---------------------\n");

let evenOrOdd = "Does this sentence have an even or odd amount of characters";
if (evenOrOdd.length % 2 === 1) {
  console.log(evenOrOdd + " #");
} else {
  console.log(evenOrOdd);
}

console.log(" ")

//     Examples:
//
//   ```js
//   let name = 'taq'  // should log 'taq#'
//   let name2 ='john' // should log 'john'
//   ```
// ___
//
// 2. Write a code block that prints/logs the 3rd to last characters of a string.
// If the string is not at least 3 characters long then log an error message.

console.log("#BONUS 2 ---------------------\n");

let a = "Wadsworth";
if (a.length < 3) {
  console.log("This string is too short!");
} else {
  console.log(a.slice(a.length - 3));
}

console.log(" ");

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
// ___
//
// 3. Write a code block that prints/logs whether a string `x` starts with a vowel.
// <details>
//   <summary>
//     Extra
//   </summary>
//
console.log("#BONUS 3 ---------------------\n");

let x = "a wise man once said...";
if (x[0] === "a"
|| x[0] === "e"
|| x[0] === "i"
|| x[0] === "o"
|| x[0] === "u") {
  console.log("VOWEL " + x);
} else {
  console.log(x);
}

console.log(" ");

//   Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity)
//
// </details>
//
// ___
//
// 4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`
//

console.log("BONUS 4 ---------------------\n");

let str1 = "Douglas"
let str2 = "MacKrell"

console.log(str1.slice(0, str1.length - Math.floor(str1.length / 2)) + str2 + str1.slice(str1.length - Math.floor(str1.length / 2)));

console.log(" ");

// Examples:
//
//   - For `str1` = 'help' and `str2` = 'me'. Your program should log `'hemelp'`
//
//    - For `str1` = 'hello' and `str2` = 'world'. Your program should log `'helworldlo'`
//
// ___
//
// 5. Write a code block that prints/logs whether a string `x` has at least one vowel in it.
//

console.log("#BONUS 5 ---------------------\n");

x = "Sandwitch"
if (x[x.length] === "a"
|| x[x.length] === "e"
|| x[x.length] === "i"
|| x[x.length] === "o"
|| x[x.length] === "u") {
  console.log(x + " has a vowel");
} else if (x = "") {
  console.log(x + " does not have a vowels.")
} else {
  console.log(x + " does not have a vowel.")
}
console.log(x)

// I'm having a lot of problems with this one as well. I can't even get
// the system to simply log x anymore. There may be a quirk in the code
// above, that's causing problems - but I feel like this code should run.
// It's late and I need to rest. Any help on this would be appreciated!

// Examples:
//   - For `x` = 'taq'. Your program should log `'taq' has a vowel'`
//   - For `x` = 'dfghjkl'. Your program should log `'dfghjkl' does not have a vowel'`
//   - For `x` = '' Your program should log `'' does not have a vowel'`
//
// <details>
//   <summary>
//     Extra & Hint:
//   </summary>
//
//   - **Hint**: Abstain from using loops. Explore string methods.
//
//   - **Extra**: Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity). So that for `x` = 'TAQ' it should log
//   `'TAQ' has a vowel`
// </details>
//
// ___
//
// ### Practice Makes Perfect.
// Find at [CodingBat](https://codingbat.com/java/String-1) more problems/questions to keep practicing. You can pick which ones to do. You can ignore the fact that their solutions are supposed to be written in Java, I trust you that you can write a solution code block in JavaScript. Create a file `codingBatStrings.js` copy and paste the problem statement as a comment, underneath write your solution.
//
// > **Remember**: This are bonuses and extra points. You don't have to do them but if you do, you will just get better.
