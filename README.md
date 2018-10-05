# String Exercises

1. console.log the first character of a string.
console.log("string"[0])

2. console.log the length of a string.
console.log(string.length)
3. console.log the last character of any string.
console.log("string"["string".length - 1])
4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:

name.slice(0,(name.length - 1)) + name[name.length-1].toUpperCase()

5. Create a drEvil code block that will take a single number varable, and log the '<variablbeAmount> dollars',
your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:

let amount = 1000000
amount += " dollars"
if (amount === "1000000 dollars") {
  amount += " (pinky)"
  }
console.log(amount)

6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
For example:

let verbing = ""
if (verbing.length < 3) {
  console.log(verbing)
} else if ((verbing[verbing.length - 1]) === "g") {
  console.log(verbing += "ly")
} else {
  console.log(verbing += "ing")
}

7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the  last

let withoutlast = "wynter"
withoutlast.slice(0,[withoutlast.length-1])
