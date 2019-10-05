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