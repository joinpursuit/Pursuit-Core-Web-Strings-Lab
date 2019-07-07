// console.log the first character of a string.
let char = 'Hello'
console.log('The last character of my string is : ' + char[0])

// console.log the length of a string.
console.log('The length of my string is ' + char.length)

// console.log the last character of any string.
console.log('The last character of my string is : ' + char[char.length - 1])

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
//
// ```js
// 'jimmy'
// // => 'jimmY'
// ```

let name = 'jimmy'
let copy = name.slice(0,4)
copy = copy + name[name.length - 1].toUpperCase()
console.log(name, copy)

// 5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
//
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```

let variableAmount = 10
  if (variableAmount === 1000000){
    console.log(variableAmount + ' dollars' + ' (pinky)')
  }else {
    console.log(variableAmount + ' dollars')
  }


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

let verb = 'swimming'
if ([verb.length - 1] === 'g' || verb.length - 1 === 'G'){
console.log(verb + 'ly')
}
else if(verb.length >= 3 ){
  console.log(verb + 'ing')
}
else if (verb.length < 3){
  console.log(verb)
}


// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last

let withoutLast = 'Goodbye'
let word = withoutLast.slice(0, withoutLast.length-1)

while(withoutLast.length !== 0){
  withoutLast.length -= 1
}
  console.log(word);
