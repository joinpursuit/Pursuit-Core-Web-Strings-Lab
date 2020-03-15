//Problem One

let str = "Hello"
console.log(str[0])

//Problem Two

console.log(str.length)

//Problem Three

console.log(str[str.length-1])

//Problem Four

let string = "cassidy"
let copy = string.slice(6,7).toUpperCase()

console.log(string.slice(0,6) + copy)

//Problem Five

let amount = 10

if (amount === 1000000) {
    console.log(amount + " dollars (pinky)")
} else {
    console.log(amount + " dollars")
}

//Problem Six

let verb = "swimming"
let ing = "ing"

if (verb.length > 3 && verb.includes(ing)) {
    console.log(verb + "ly")
} else if (verb.length >= 3) {
    console.log(verb + "ing")
} else if (verb.length < 3) {
    console.log(verb)
}

//Problem Seven

let withoutLast = "Hello world"
let separate = withoutLast.split(" ")

separate.splice(0, separate.length-1).join(" ")