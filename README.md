# String Exercises

1. console.log the first character of a string.
//
let firstName = "trey"
console.log(firstName[0])

2. console.log the length of a string.
//
let firstName = "trey"
console.log (firstName.length)

3. console.log the last character of any string.
//
let firstName = "trey"
console.log (firstName.length -1)

4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
//
let name = "jimmy"
let upperName = name.toUpperCase()
let lastLetter = name.slice(4).toUpperCase()
let upperLastLetter = name.slice(0, -1)  + lastLetter
console.log(upperLastLetter)
```js
'jimmy'
// => 'jimmY'
```

5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
//
let dollars = 10
let amount = 1000000
if ( dollars === 10) {
  console.log (`${dollars} dollars`)
}
else(
  amount === 1000000){
    console.log (`${amount} dollars pinky`)
  }

```js
let amount = 10
// => 10 dollars
let amount = 1000000
// =>  1000000 dollars (pinky)
```

6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
//
let verbing = "jump"
let suffix1 = "ing"
let suffix2 = "ly"

if (verbing.length >= 3 && verbing.slice(-3) === "ing"){ console.log (verbing + `${suffix2}`)
}
else if (verbing.length >= 3){
  console.log (verbing + `${suffix1}`)
}
else (console.log (verbing))
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

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last //
let team = "Knicks"
let withoutLast = team.slice(0, -1)

console.log(withoutLast)
