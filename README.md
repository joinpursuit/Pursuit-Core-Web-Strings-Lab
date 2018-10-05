String Exercises

1. console.log the first character of a string.

let str = "first character";
console.log(str[0]);


2. console.log the length of a string.

let str = "stringLength";
console.log(str.length);

3. console.log the last character of any string.

let str = "last char"
console.log(str[str.length - 1])



4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:


let exam = "jimmy"

console.log(exam.slice(0, exam.length - 1) + exam[exam.length - 1].toUpperCase())


```js
'jimmy'
// => 'jimmY'
```

5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

let amount = 1000000

if (amount === 1000000){
  console.log(amount + " dollars" + " (pinky)")
} else if (amount === 1){
  console.log(amount + " dollar")
} else {
  console.log(amount + " dolllars")
}



```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```

6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
For example:

let ver = "box"
if (ver.slice(ver.length - 3) === "ing"){
  console.log(ver + "ly")
} else if (ver.length === 2){
  console.log(ver)
} else {
  console.log(ver + "ing")
}


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

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last

let lastChr = "tom"

console.log(lastChr.slice(0, lastChr.length -1))
