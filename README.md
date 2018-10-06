# String Exercises

1. console.log the first character of a string.
"Erick"[0]
2. console.log the length of a string.
"Erick".length
3. console.log the last character of any string.
"Erick"["Erick".length - 1]
4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized.

let name = "erick"
let upperName = name.slice(0, name.length - 1) + name[name.length - 1].toUpperCase()
console.log(upperName)



5. Create a drEvil code block that will take a single number varaible, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million.

let amount = 1000000
if (amount === 1) {
  console.log(amount + " dollar");
} else if (amount === 1000000) {
  console.log(amount + " (pinky)");
} else if (amount > 1) {
  console.log(amount + " dollars");
} else {
  console.log("Happy Spending");
}

6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.

let verb = "swim";
let statLy= verb + "ly"  ;
let state = verb + "ing" ;
if (verb.slice (-3) == "ing") {
  console.log(statLy);
} else if (verb.length <= 2) {
  console.log(verb);
} else if (verb.length >= 3){
console.log(state)
}

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last letter

let str = 'withoutLast';
console.log(str.slice(-1))
