// 1. `console.log` the first character of a string.

let x = "This is my string assignment";
console.log(x[0]);

// 2. `console.log` the length of a string.

console.log(x.length);

// 3. `console.log` the last character of any string.

console.log(x[x.length -1]);

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
//
// ```js
// 'jimmy'
// // => 'jimmY'
// ```

// let name1 = "raisin";
// name2 = name1.slice(0,5) + name1[5].toUpperCase();
// console.log(name2);

// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
//
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```

for (let amount = 10; amount <= 1000000; amount *= 10){
          if (amount === 1000000){
        console.log(amount + " dollars (pinky)");
      } else {
        console.log(amount + " dollars");
      }
}

// 6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless
// it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
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
//
let verbing = "go";
console.log(verbing.length);

for (let vb = 0; vb < 1; vb ++){
    if (verbing.includes("ing")){
    console.log(verbing + "ly");
  }else if (verbing.length >= 3) {
    console.log(verbing + "ing");
  }else {
    console.log(verbing);
  }
}

// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.
//
let withoutLast = "The cat and the fiddle"
withoutLast2= withoutLast.split(" ").slice(0, -1);
console.log(withoutLast2);

// ## Bonus Questions

// 1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is.
// print/log the result
//
//     Examples:
//
//   ```js
//   let name = 'taq'  // should log 'taq#'
//   let name2 ='john' // should log 'john'
//   ```
// ___

let word = "game"
console.log(word.length);

if (word.length % 2 === 1){
  console.log(word + "#");
} else{
  console.log(word);
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
// ___

let words = "I am Ann";

if(words.length > 3){
  console.log(words.slice(0, -3));
}else {
  (words.length < 3)
    console.log("error");
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


let case1 = "Aello";

if (case1[0] === "a" || case1[0] === "e" || case1[0] === "i" || case1[0] === "o" || case1[0] === "u"){
  console.log("lc vowel");
} else if(case1[0] === "A" || case1[0] === "E" || case1[0] === "I" || case1[0] === "O" || case1[0] === "U"){
  console.log("uc vowel");
} else {
  console.log("consonant");
}

// 4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`
//
// Examples:
//
//   - For `str1` = 'help' and `str2` = 'me'. Your program should log `'hemelp'`
//
//    - For `str1` = 'hello' and `str2` = 'world'. Your program should log `'helworldlo'`

let mash = "learn"
let mash2 = "js"

console.log(mash.slice(0, 3) + mash2 + mash.slice(-2));
