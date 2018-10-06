# String Exercises

1. console.log the first character of a string.

let str = "Babies"
str[0]

2. console.log the length of a string.

console.log(str.length)

3. console.log the last character of any string.

console.log(str[str.length - 1])

4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

```js
'jimmy'
// => 'jimmY'
```


let name = "carina"
console.log(name.length - 1)
let capitalized = name.slice(0,5) + name[5].toUpperCase();
console.log(capitalized)


5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```

let num = 10000

if(num === 1000000) {
  console.log(num + " dollars (pinky)")
} else {
  console.log(num + " dollars")
}

6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
For example:

```js
verbing('box')
// => 'boxing'
verbing('train')
// => 'training'
verbing('swimming')
// =>  'swimmingly'
verbing('go')
// =>  'go'
```
let word1 = "going"
let word2 = word1.slice(word1.length - 3) ;

if(word2 === "ing")  {
console.log(word1 + "ly" )}
else if (word1.length >= 3) {
  console.log(word1 + "ing")
} else {
  console.log(word1)
  }

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last

let shape = "Stars"
let withoutLast = shape.slice(0,shape.length - 1) ;
{
  console.log(withoutLast)
}
