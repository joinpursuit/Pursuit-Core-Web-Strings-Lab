# String Exercises

1. console.log the first character of a string.
``` js
let myStr = "Luck"
console.log(myStr[0])
```
2. console.log the length of a string.
``` js
let myStr = "Duck"
console.log(myStr.length)
```
3. console.log the last character of any string.
``` js
let myStr = "Duck"
console.log(myStr[myStr.length-1])
```
4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

```js
'jimmy'
// => 'jimmY'
```
```js
let myStr = "jayz";
let lastLetterCap = myStr[myStr.length-1].toUpperCase();
let slicedStr = myStr.slice(0,(myStr.length-1));
let copyCap = slicedStr+lastLetterCap;
console.log(myStr, copyCap)
```

5. Create a drEvil code block that will take a single number variable, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```
```js
let amount = 20
if (amount<1000000) {
  console.log(amount+" dollars")
} else {
  console.log(amount+" dollars"+" (pinky)")
}
```
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
```js
function verbing(str) {
  if (str.length>=3 && str[str.length-1]==="g" && str[str.length-2]==="n" && str[str.length-3]==="i") {
    str += "ly";
  } else if (str.length>=3) {
    str += "ing"
  }
 return str;
}
console.log(verbing(str))
```
7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last

```js
function withoutLast(str) {
let slicedStr = str.slice(0,(str.length-1));
return slicedStr;
}
console.log(withoutLast("hey there"))
```
