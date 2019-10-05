# String Exercises

1. `console.log` the first character of a string.

let name = "Cassidy"
console.log(name[0])

2. `console.log` the length of a string.

console.log(name.length)
7

3. `console.log` the last character of any string. 

console.log(name[name.length-1])

4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

```js
'jimmy'
// => 'jimmY'
```

let name = "nilber"
console.log(name.slice(0,name.length-1) + name[name.length-1].toUpperCase())


5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```

let amount = 1000000
let x = "dollars"
let p = "(pinky)"
//console.log(amount + " " + x)

if (amount === 1000000){
    console.log(`drEvil stole ${amount} ${x} and then waved his ${p}`)
}

6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. 
For example:

<!-- ```js
verbing('box')
// => 'boxing'
verbing('train')
// => 'training'
verbing('swimming')
// =>  'swimmingly'
verbing('go')
// =>  'go'
``` -->

let x = "push"
if(x.length < 3){
console.log(x)
} else if((x[x.length-3] + x[x.length-2] + x[x.length-1]) === "ing"){
  console.log(x + "ly")
} else {
  console.log(x + "ing")
}




7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.

n = "Today is Saturday"
let a = n.split(" ")
console.log(a)
let b = a.slice(0,[a.length-1])
console.log(b.join(" "))


## Bonus Questions

1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is.
print/log the result

    Examples:

  ```js
  let name = 'taq'  // should log 'taq#'
  let name2 ='john' // should log 'john'
  ```
___

let y = "lunch"
if(y.length%2 !== 0 ){
  console.log(`${y}#`)
} else {
  console.log(y)
}

2. Write a code block that prints/logs the 3rd to last characters of a string.
If the string is not at least 3 characters long then log an error message.
<details>
    <summary>
        Hint
    </summary>
    It should work for strings of any length. 
</details>

Examples, for variables: 
```js
let name1 = 'Taq' // Should log 'Taq'
let sentence = 'He is Taq'// Should log 'Taq'
```
let  name1 = "Cassidy"

let name1 = "Cassidy"

if (name1.length<3){
  console.log("This is an Error")
} else (name1.length<=3)
  console.log(name1.slice(2,[name1.length]))


___

3. Write a code block that prints/logs whether a string `x` starts with a vowel.
<details>
  <summary>
    Extra
  </summary>

  Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity)

</details>
___

let x = "Apple"
if (x[0]==="A" || x[0]==="E"||x[0]==="I" || x[0]==="O" || x[0]==="U" ){
  console.log(`${x} starts with a vowel`)
}


4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`

Examples:

  - For `str1` = 'help' and `str2` = 'me'. Your program should log `'hemelp'`

   - For `str1` = 'hello' and `str2` = 'world'. Your program should log `'helworldlo'`

let str1 = "help"
let str2 = "me"
console.log(`${str1.slice(0,(str1.length/2))}${str2}${str1.slice(str1.length/2)}`)

let split = Math.floor(str1.length/2)
console.log(`${str1.slice(0,split)}${str2}${str1.slice(split)}`)
___



5. Write a code block that prints/logs whether a string `x` has at least one vowel in it.

Examples:
  - For `x` = 'taq'. Your program should log `'taq' has a vowel'`
  - For `x` = 'dfghjkl'. Your program should log `'dfghjkl' does not have a vowel'`
  - For `x` = '' Your program should log `'' does not have a vowel'`

<details>
  <summary>
    Extra & Hint:
  </summary>
  
  - **Hint**: Abstain from using loops. Explore string methods.

  - **Extra**: Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity). So that for `x` = 'TAQ' it should log 
  `'TAQ' has a vowel`
</details>

let x = "nilber"
if (x.match(/[aeiouAEIOU]/)){
  console.log(`${x} has a vowel`)
} else {
  console.log(`${x} does not have a vowel`)
}

let z = "cassidy"
for (y=0; y<x.length; y++){
  if (z[y]=== "a" || z[y] === "e" || z[y] === "i" || z[y] === "o" || z[y] === "u"){
  console.log(`${z} has a vowel`)
 }else {
    console.log(`${z} does not have a vowel`)
  }
} console.log(`${z} has a vowel`)




___

### Practice Makes Perfect.
Find at [CodingBat](https://codingbat.com/java/String-1) more problems/questions to keep practicing. You can pick which ones to do. You can ignore the fact that their solutions are supposed to be written in Java, I trust you that you can write a solution code block in JavaScript. Create a file `codingBatStrings.js` copy and paste the problem statement as a comment, underneath write your solution.

> **Remember**: This are bonuses and extra points. You don't have to do them but if you do, you will just get better.

