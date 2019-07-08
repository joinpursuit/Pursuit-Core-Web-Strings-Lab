// // 1. `console.log` the first character of a string.
let string = "Hello"
console.log(string[0]);
//
//
// // 2. `console.log` the length of a string.
 let string = "Hello"
console.log(string.length);

// // 3. `console.log` the last character of any string.
 let string = "Hello"
console.log(string[string.length - 1]);


// 4. Create a code block that takes a single string variable, and returns a
// copy of the string with the last letter capitalized. For example:
//
// ```js
// 'jimmy'
// // => 'jimmY'
// ```

let string = "hello"

let newString = string.slice(0,(string.length - 1)) + string[string.length - 1].toUpperCase();

 console.log(newString);



// 5. Create a drEvil code block that will take a single number variable, and
// log the '<variableAmount> dollars', your code block should add '(pinky)' at
// the end of the amount if it's 1 million. For example:
//
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```

let amount = 1000000
if(amount === 1000000){
  console.log(amount + " dollars (pinky)")
}
else{
  console.log(amount + " dollars")
}





// 6. Create a `verbing` code block. It should take a single string variable.
// If its length is at least 3, it should add 'ing' to its end, unless it
// already ends in 'ing', in which case it should add 'ly' instead. If the
// string length is less than 3, it should leave it unchanged.

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
//



let verb = "go";
let verbing = verb.slice(verb.length - 3, verb.length)

if (verbing === "ing") {
  console.log(verb + "ly");
} else if (verb.length > 3) {
  console.log(verb + "ing");
} else {
  console.log(verb);
}


// 7. Create a `withoutLast` code block that takes a single string variable,
// and returns a copy of the string without the last word.
//


let word = "welcome";
let withoutLast = word.slice(0, word.length - 1);

 console.log(withoutLast);



// ## Bonus Questions
//
// 1. Write a code block that adds a "#" to a string if the string has an odd
// number of characters, otherwise leave it as is.
// print/log the result
//
//     Examples:
//
//   ```js
//   let name = 'taq'  // should log 'taq#'
//   let name2 ='john' // should log 'john'
//   ```


let name = "john";

 if (name.length % 2 == 0){
  console.log(name);
}else{
  console.log(name + "#");
}


// ___
//
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

let string= "hello";

 if (string.length >= 3){
  console.log(string.slice(string.length - 3));
}else{
  console.log("This string is too short");
}




// ___
//
// 3. Write a code block that prints/logs whether a string `x` starts with a vowel.
// <details>
//   <summary>
//     Extra
//   </summary>
//
//   Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity)
//
// </details>
//

//
let x = "Alphabet";
let vowel = "AEIOUaeiou";
 if (vowel.includes(x[0])) {
  console.log("This word begins with a vowel");
}else {
  console.log("This word begins with a consonent");
}


// ___
//
// 4. Write a code block that given two strings, `str1` and `str2`, prints/logs
// a new string with `str2` mashed into the middle of `str1`
//
// Examples:
//
//   - For `str1` = 'help' and `str2` = 'me'. Your program should log `'hemelp'`
//
//    - For `str1` = 'hello' and `str2` = 'world'. Your program should log `'helworldlo'`
//


let str1 = "hello"
let str2 = "world"
let midstr1 = Math.ceil(str1.length/2);
console.log(str1.slice(0, midstr1) + str2 + str1.slice(midstr1, str1.length));




// ___
//
// 5. Write a code block that prints/logs whether a string `x` has at least one
// vowel in it.
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
