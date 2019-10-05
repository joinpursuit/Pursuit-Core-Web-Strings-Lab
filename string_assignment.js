//Problem 1
const string = "the quick brown fox jumped over the lazy dog"
console.log(string[0])
//Problem 2
console.log(string.length)
//Problem 3
console.log(string[string.length-1])
//Problem 4
console.log(string.slice(0, string.length-1) + string.slice(string.length-1).toUpperCase())
//Problem 5
let amount = 100
const drEvil = `${amount} dollars`
if(amount >= 1000000){
    console.log(drEvil + " pinky")
} else {
    console.log(drEvil)
}
// Problem 6
const verb = "up"
if (verb.slice(verb.length-3) === "ing"){
    console.log (verb + "ly")
}else if (verb.length >= 3) {
console.log(verb + "ing")
}else {
    console.log (verb)
}

// Problem 7
const sentence = "Let's remove the last word in this sentence"
for (i=sentence.length-1; i >= 0; i--){
    if(sentence[i] === " ") {
        console.log(sentence.slice(0,i))
        break
    }
}

//Bonus 1
let string1 = "The cat"
if(string1.length%2 !== 0){
    console.log(string1 + "#")
} else console.log(string1)

//Bonus 2
let string2 = "heigt2"
if(string2.length < 3){
    console.log("error")
} else  console.log(string2.slice( string2.length - 3, string2.length))

//Bonus 3
let x = "ello"
let compare = x[0].toUpperCase()
if(compare === "A" || compare === "E" || compare === "I" || compare === "O" || compare === "U"){
    console.log("String starts with a vowel")
    } else console.log("Does not contain a vowel")

//Bonus 4
let str1 = "123456"
let str2 = "0"
let middle = Math.round(str1.length/2)
console.log(str1.slice(0, middle) + str2 + str1.slice(middle))