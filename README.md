# String Exercises

1. console.log the first character of a string.

let str = "Jonelle"
console.log(str[0])

2. console.log the length of a string.

let str = "Irie"
console.log(str.length)

3. console.log the last character of any string.

let str = "Zyon"
console.log(str[3])

4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

let name = "Mommy"
let a = name.slice(0, name.length-1)
let b = name[name.length-1].toUpperCase()
console.log(a+b)

5. Create a drEvil code block that will take a single number variable, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

let variableAmount = 1000000

if (variableAmount === 1000000){
  console.log (variableAmount + ' dollars (pinky)')
}


6. Create a `word` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
For example:


let word = 'seemingly'

if (word.length >= 3){
 console.log (word + 'ing')
}else if (word.length <= 2)
  console.log (word){
<!-- }else (word[word.length -3]){
  console.log(word + 'ly') --> waaaaaaaaaahhh ;(
}

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last
