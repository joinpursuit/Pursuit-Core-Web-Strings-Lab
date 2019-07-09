// # String Exercises
//
// 1. `console.log` the first character of a string.
//
//
let str = 'Hello Stephanie'
let firstHalf = str.slice(0,5)
let secondHalf = str.slice(6, str.length)
console.log(firstHalf)

//
// 2. `console.log` the length of a string.
let name = 'Stephanie'
console.log(name.length)


// // 3. `console.log` the last character of any string.
let steph= 'Good morning Stephanie'
let  firstword = steph.slice(0,5)
let middleword = steph.slice(5,12)
let lastword = steph.slice(13,steph.length)
console.log(lastword)

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
//
// ```js
// 'jimmy'
// // => 'jimmY'

let nameB = 'estefanie'
let withoutLastChar = nameB.slice(0,nameB.length-1)
let lastCapitalized = nameB[nameB.length-1].toUpperCase()
console.log(withoutLastChar + lastCapitalized)


// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
//
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```
// practice:
// let x = 1000000
// let variableAmount =  ' $ ' + x
//
// if (x === 1000000); {
//   console.log(variableAmount + 'dollars' +' (pinky)');
// } if (x === 1); {
//   console.log(variableAmount) + 'dollar';
// } if (x === 0) {
// console.log('no' + variableAmount + 'dollar')
// } else if {
// console.log(variableAmount' + 'dollars');
// }
//
// answer:
let x = 1000000
let wordProblem = `${x} dollas \(pinky)`
console.log(wordProblem);


//
// 6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
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



// let verb = 'walking'
//
// if (verb.length < 3){
// console.log('unchanged:' + verb)
// }
// // 1 st case verbing already ends in 'ing'
// // then append 'ly' at the end
//
// if (verb.length >= 3) {
// console.log(verb + 'ing');
//
// // 2nd  case verb.length > 3
// // }if (verb.slice(verb.length-3, verb.length) === "ing") {
// console.log( verb + 'ly')
// } else if (verb.length < 3){
// console.log(verb)
// =====================================

let verb = 'runing'
// if (verb.length < 3){
// console.log('unchanged:' + verb)
// }
if( verb.endsWith('ing')) {
console.log(`${verb}ly`)
} else if (verb.length >= 3) {
  console.log(verb + 'ing')
  console.log(`${verb}ing`)
}else {
  console.log(verb)
}


// let withoutLastChar = verbing.slice(0, verbing.length-3)
// let lastWord= verbing.replace(verbing, "dancingly")
// console.log(lastWord)



//
// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.


let nameC = 'estefanie'
let withoutLastChar = nameC.slice(0,nameC.length-1)
console.log(withoutLastChar)

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
//   ```
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
// ___
//
// 4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`
//
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
