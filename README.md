# String Exercises

1. console.log the first character of a string.

let str = 'hello'
console.log(str[0])

2. console.log the length of a string.

let str = 'hello'
console.log(str.length)

3. console.log the last character of any string.

let str = 'hello'
console.log(str[str.length-1])

4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

```js
'jimmy'
// => 'jimmY'
```
let name = 'jennifer'
let capitalized = name.slice(0,name.length-1) + name[name.length-1].toUpperCase()
console.log(capitalized)


5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```

let num = 1000000
let variableAmount = num + " dollars"
if (num === 1000000) {
   console.log(num + ' pinky')
} else {
console.log(variableAmount)
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

let verbing = 'train'
if(verbing.length>=3 && verbing.slice(verbing.length - 3,verbing.length)!= 'ing'){
  console.log(verbing +'ing')
} else if (verbing.length>=4 && verbing.slice(verbing.length - 3, verbing.length)==='ing') {
  console.log(verbing+'ly')
} else if  (verbing.length === 2) {
  console.log(verbing)
}


7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last


let withLast = "canlast"

if(withLast.slice(withLast.length-4,withLast.length)==='last'){
  console.log(withLast.slice(0,withLast.length-4))
} else {
  console.log(withLast)
}
