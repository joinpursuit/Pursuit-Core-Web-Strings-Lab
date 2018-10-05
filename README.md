# String Exercises

1. console.log the first character of a string.
let firstString = "Apple Sauces"
console.log (firstString[0]])

2. console.log the length of a string.
let firstString = "Apple Sauces"
console.log(firstString.length)

3. console.log the last character of any string.
let firstString = "Apple Sauces"
console.log (firstString[firstString.length - 1])

4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

let secondString = "Jacky Was HERe"
let capPart = secondString[secondString.length - 1 ].toUpperCase()
let firstPart = secondString = secondString.slice(0,secondString.length - 1)
console.log (firstPart + capPart)

```js
'jimmy'
// => 'jimmY'
```

5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```
let makeAmount = 1000000
makeAmount === 1000000 ? console.log(`${makeAmount} dollars PINKY`) : console.log(`${makeAmount} dollar`)


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

let addIng = "go"
if ( addIng.length > 2 && addIng.slice(-3) === "ing"){
console.log (addIng+"ly")}
else if ( addIng.length > 2) {
	console.log (addIng+"ing")
}else
{
console.log ("I need a 3 or more character word!")
}

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last

let withoutLast = "Bob The Builder"
console.log(withoutLast.slice(0,withoutLast.length -1 ))
