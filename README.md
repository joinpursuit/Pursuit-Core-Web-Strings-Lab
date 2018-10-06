# String Exercises

1. console.log the first character of a string.
```js
let str= "spades"
console.log (str[0])
```
2. console.log the length of a string.
```js
  let str= "porcupine"
  console.log(str.length)
```
3. console.log the last character of any string.
```js
let str = "perpendicular"
str[str.length-1]
```
4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

```js
let str = "chinchilla"
str = str.slice(0,name.length-1) + str[str.length-1].toUpperCase()
```

5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars', and
your code block should add '(pinky)' at the end of the amount if it's 1 million.

```js
let drEvil = 1000000

if (drEvil === 1000000 ) {
  console.log(drEvil + " dollars pinky");
} else {
  console.log(drEvil + " dollars");
}
```

6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.

```js
let verbing = "cook"
if(verbing.length >3 && verbing.slice(-3) == "ing" ){
console.log(verbing + "ly")
} else if (verbing.length >= 3 && verbing.slice(-3) !== "ing"){
console.log(verbing + "ing")
} else {
  console.log (verbing)
}

```

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last

```js
let withoutLast = "without last"
if (withoutLast.slice(-4) == "last"){
console.log(withoutLast.slice(0,name.length-4))
} else {
  console.log(withoutLast)
}
```
