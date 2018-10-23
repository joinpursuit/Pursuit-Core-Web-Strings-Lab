# String Exercises

1. console.log the first character of a string.

```js

console.log(str[0])

```
2. console.log the length of a string.

```js

console.log(str.length)

```

3. console.log the last character of any string.

```js

console.log(str[str.length - 1])

```

4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

```js

let str = "miami"

let capLast = str.slice(0, str.length-1) + str[str.length-1].toUpperCase()

console.log(capLast)

```

5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

```js

let amount = 10

if(amount ===! 1000000){
  console.log(`${amount} dollars`)
}else{
  console.log(`${amount} dollars (pinky)`)
}
// =>  1000000 dollars (pinky)

```

6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
For example:

```js

let str = "daunt"


if(str.length < 3){
  console.log(str)
}else if(str.length >= 3 && str.slice(str.length - 3) === "ing"){
  console.log(`${str}ly`)
}else if(str.length >= 3){
  console.log(`${str}ing`)
}

```

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last

```js

let str = "atlanta"

let withoutLast = str.slice(0, str.length-1)

console.log(withoutLast)

```
