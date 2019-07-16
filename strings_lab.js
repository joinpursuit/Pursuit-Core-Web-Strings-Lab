// 1. `console.log` the first character of a string.
let str = 'Lab';
console.log(str[0])

// 2. `console.log` the length of a string.
let ing = 'Secaucus'
console.log(ing.length)

// 3. `console.log` the last character of any string.
let anyString = 'anyString'
console.log(anyString[anyString.length - 1])

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

// ```js
// 'jimmy'
// // => 'jimmY'
// ```
let lowerCased = 'word'
let upperCasedLast = lowerCased.slice(0,(lowerCased.length - 1)) + lowerCased[lowerCased.length - 1].toUpperCase()
console.log(upperCasedLast)

// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```
function drEvil(amount) {
  if (amount === 1000000){
    console.log(amount + ' dollars' + ' (pinky)')
  } else {
    console.log(amount + ' dollars')
  }
}
drEvil(1000000)
drEvil(1000001)

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
function verbing(strings) {
  let last3 = strings.slice(-3)
  if (strings.length > 2 && last3 === 'ing') {
    console.log(strings + 'ly')
  } else if (strings.length > 2) {
    console.log(strings + 'ing')
  } else {
    console.log (strings)
  }
}
verbing('it')
verbing('cool')
verbing('chilling')

// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.
function withoutLast(word) {
  console.log(word.slice(0, (word.length - 1)))
}
withoutLast('word')
