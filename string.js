// 1. `console.log` the first character of a string.

// let str = "Hello world"
// console.log(str[0]);
// console.log("hello world".slice(0, 1))

// 2. `console.log` the length of a string.

// console.log(str.length)

// 3. `console.log` the last character of any string.

// let lastChar = str[str.length - 1]
// console.log(lastChar)

//4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

// ```js
// 'jimmy'
// // => 'jimmY'
// ```

// let str = 'jimmY'
//   console.log(str.slice(0, str.length-1) + str[str.length - 1].toUpperCase())
  

// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```

// let amount = 1000000;
// let amount = 10;
// if (amount >= 1000000) {
//   console.log(`${amount} dollars (pinky)`)
// } else {
//   console.log(`${amount} dollars`)
// }

// 6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 
// For example:

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

// let verb = "go"
//  if (verb.length >= 3 && verb.slice(verb.length-3) === "ing") {
//   console.log (verb + "ly")
//   } else if (verb.length >=3) {
//   console.log(verb + "ing" )
//  } else { 
//   console.log(verb)
// }

//7. Create a `withoutLast` code block that takes a single string variable, 
//and returns a copy of the string without the last word.

// let str = "I love codding";
// let strSplit = str.split(" ")
//   strSplit.pop()
// console.log(strSplit.join(" "))


// ## Bonus Questions

// 1. Write a code block that adds a "#" to a string if the string has 
// an odd number of characters, otherwise leave it as is.
// print/log the result

//     Examples:

//   ```js
  // let name = 'taq'  // should log 'taq#'
   let name ='john' // should log 'john'
  
  
    if (name.length % 2 === 0) {
      console.log(name)
    } else {
      console.log(name +"#")
    }

//     2. Write a code block that prints/logs the 3rd to last characters of a string.
// If the string is not at least 3 characters long then log an error message.
// <details>
//     <summary>
//         Hint
//     </summary>
//     It should work for strings of any length. 
// </details>

// Examples, for variables: 
// ```js
// let name1 = 'Taq' // Should log 'Taq'
// let sentence = 'He is Taq'// Should log 'Taq'
// ```

// let str = "He is Taq";
let str = "I love coding I am crazy"
let str1 = str.split(" ")
if (str1.length >= 3) {
  console.log(str1.slice(2, str1.length).join(" "))
} else {
  console.log("error")
}
  





 