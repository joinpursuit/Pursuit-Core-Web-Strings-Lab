# String Exercises

// 1. console.log the first character of a string.

1.
let name = 'michell';
console.log(name[0])


// 2. console.log the length of a string.

2.
let name = 'aaron'
console.log(name.length)

// 3. console.log the last character of any string.

3.
let name = 'michell';
console.log(name.slice(-1))

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

<!-- ```js
'jimmy'
// => 'jimmY'
``` -->
4.
let name = 'michell';
let mirror = name.slice(0,6) + name[6].toUpperCase()
console.log(mirror)

<!-- 5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example: -->

<!-- ```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
``` -->

5.
let amount = 100000;
if(amount === 1000000){
  console.log(`this is ${amount} dollars (pinky)`)
}else{
  console.log(amount + ' dollars')
}



<!-- 6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
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
``` -->

6.
let verbing = 'trimming'
if(verbing.length >=3 && verbing.slice(-3) !== 'ing'){
  console.log(`${verbing}ing`)
}else if (verbing.slice(-3)  === 'ing'){
  console.log(`${verbing}ly`)
}else{
  console.log(verbing)
}

<!-- 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last -->

7.
let withOutLast = 'michell';
let copy = withOutLast.slice(0,6)
console.log(copy)
