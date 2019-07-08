//  1. `console.log` the first character of a string.
 let string1= 'garcia'
 console.log(string1[0])
//
//  2. `console.log` the length of a string.
console.log(string1.length)
//
//  3. `console.log` the last character of any string.
 console.log(string1[string1.length-1])

//  4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
 let str3 = "juan"
 console.log(str3.toUpperCase(str3[str3.length-1])) // capitalizes all characters.
console.log('------------------')
 let name= 'juan'
 let capitalized = name.slice(name.length) + name[name.length-1].toUpperCase()
 console.log(name.slice(0,3) + capitalized)


//  5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
//  your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
let amount = 5
if (amount < 1000000){
console.log(amount + ' dollars')
} else if (amount >= 1000000){
  console.log(amount + "(pinky)")
}

//   6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3,
// it should add 'ing' to its end, unless it already ends in 'ing',
// in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
//  For example:
//

let o = 'walk'
if (o.length >=3 && o.endsWith('ing')){
  console.log(o + 'ly')
} else if (o.length>=3){
  console.log(o + 'ing')
}

//  7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.
let statement = "I need coffee now"
let withoutLast1 = statement.split(" ", 3);
console.log(withoutLast1)

let statement2 =  "I hate you"
let withoutlast= statement2.replace('you' , ' ')
console.log(withoutlast)


 // ## Bonus Questions

 // 1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is.
 // print/log the result
let str2= 'joe'
if (str2.length %2===0){
  console.log (str2)
} else if (str2.length %2 ===1) {
  console.log (str2 + '#')
}


// 2. Write a code block that prints/logs the 3rd to last characters of a string.
// If the string is not at least 3 characters long then log an error message.

let str7= "steve"
if (str7.length >=3 ){
console.log(str7.slice(str7.length-3))
} else {
  console.log('error')
}
// 3. Write a code block that prints/logs whether a string `x` starts with a vowel.

let str6='Isabella'
if (str6[0] === 'a' || 'A'){
  console.log(str6 + ' starts with vowel')
} else if (str6[0] === 'e'  || 'E'){
  console.log(str6 + ' starts with vowel')
} else if (str6[0]=== 'i' || 'I'){
  console.log(str6 +' starts with vowel')
} else if (str6[0]==='o' || 'O'){
  console.log(str6 + ' starts with vowel')
} else if (str6[0]==='u' || 'U'){
  console.log(str6 + ' starts with vowel')
} else {
  console.log(str6 +' does not start with vowel')
}

// 4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`
let stringa = 'cookie'
let stringb = 'muffin'
let middleIndex= (stringa.slice(0, stringa.length/2)) + stringb + stringa.slice((Math.floor(stringa.length/2)))
console.log(middleIndex)


// 5. Write a code block that prints/logs whether a string `x` has at least one vowel in it.
// let str10 = "coffee"
// if (str10.includes('e'|| 'a' || 'i' || 'o' || 'u')){
//   console.log(str10.toUpperCase() +' has a vowel')
// } else {
//   console.log(str10.toUpperCase() + "does not have a vowel")
// }
