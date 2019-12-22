// # String Exercises
//
// 1. `console.log` the first character of a string.

let firstChar = "macbook air"
console.log(firstChar[0])
//
// 2. `console.log` the length of a string.
console.log(firstChar.length)

// 3. `console.log` the last character of any string.

console.log(firstChar[firstChar.length - 1])

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
//
// ```js
// 'jimmy'
// // => 'jimmY'
// ```
let myName = "voniel"
let lastLetter = myName[myName.length - 1]
//console.log(lastLetter)
upperLast = lastLetter.toUpperCase()
let split = myName.slice(myName.length - myName.length, myName.length - 1)
console.log(split + upperLast)

// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
//
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
let variableAmount = 1000000;

if (variableAmount === 1000000) {
    console.log(variableAmount + " dollars " + "(pinky)")
} else {
    console.log(variableAmount + " dollars")
}

// 6. Create a `verbing` code block. It should take a single string variable.
//If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
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
let verbing = "going";
if (verbing.endsWith("ing")) {
    console.log(`${verbing}ly`)
} else if (verbing.length >= 3) {
    console.log(`${verbing}ing`)
} else {
    console.log(verbing)
}



// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.

let string = "itsy bitsy spider";

let newString = string.slice(string.length - string.length, 10)
console.log(newString)

// ## Bonus Questions
//
// 1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is.
// print/log the result
//
//     Examples:
//
//   ```js
//   let name = 'taq'  // should log 'taq#'
//   let name2 ='john' // should log 'john'

let strName = "oliver";

if (strName.length % 2) {
    console.log(strName + "#")
} else {
    console.log(strName)
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
let sentence = "what do you say to the god of death ";
let name1 = "go"
let findVar = sentence.includes(name1)

if (name1.length < 3) {
    console.log("Invalid character amount, enter word with more than 3 characters")
} else if (findVar === true) {
    console.log(name1)
} else {
    console.log("That word can't be found")
}
// 3. Write a code block that prints/logs whether a string `x` starts with a vowel.
// <details>
//   <summary>
//     Extra
//   </summary>
//
//   Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity)
//
// </details>
let begLetter = "apple";
let gut = begLetter[0];
//console.log(gut)
switch (gut) {
    case 'a':
        console.log(begLetter);
        break;
    case 'e':
        console.log(begLetter);
        break;
    case 'A':
        console.log(begLetter);
        break;
    case 'E':
        console.log(begLetter);
        break;
}
if (gut === "i" || "o" || "u" || "I" || "O" || "U") {
    console.log(begLetter)
}


// 4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`
//
// Examples:
//
//   - For `str1` = 'help' and `str2` = 'me'. Your program should log `'hemelp'`
//
//    - For `str1` = 'hello' and `str2` = 'world'. Your program should log `'helworldlo'`
let str1 = "inside"
let str2 = "put"
let copy1 = str1.slice(0, str1.length / 2)
let copy2 = str1.slice(str1.length / 2, str1.length)
console.log(copy1 + str2 + copy2)
// 5. Write a code block that prints/logs whether a string `x` has at least one vowel in it.
//
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
//   - **Extra**: Make it [case insen sitive](https://en.wikipedia.org/wiki/Case_sensitivity). So that for `x` = 'TAQ' it should log
//   `'TAQ' has a vowel`
// </details>
let x = "psycho";
if (x.match(/[aeiouAEIOU]/)) {
    console.log(x + " has a vowel");
} else {
    console.log(x + " does not have a vowel");
}

// ### Practice Makes Perfect.
// Find at [CodingBat](https://codingbat.com/java/String-1) more problems/questions to keep practicing. You can pick which ones to do. You can ignore the fact that their solutions are supposed to be written in Java, I trust you that you can write a solution code block in JavaScript. Create a file `codingBatStrings.js` copy and paste the problem statement as a comment, underneath write your solution.
//
// > **Remember**: This are bonuses and extra points. You don't have to do them but if you do, you will just get better.
