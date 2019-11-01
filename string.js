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

let verb = "go"
 if (verb.length >= 3 && verb.slice(verb.length-3) === "ing") {
  console.log (verb + "ly")
  } else if (verb.length >=3) {
  console.log(verb + "ing" )
 } else { 
  console.log(verb)
}

//7. Create a `withoutLast` code block that takes a single string variable, 
//and returns a copy of the string without the last word.

let str = "I love codding";
let strSplit = str.split(" ")
  strSplit.pop()
console.log(strSplit.join(" "))



 